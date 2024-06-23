"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("../constants");
var base_api_exception_1 = require("../exceptions/base-api.exception");
var util_1 = require("../request-context/util");
var AllExceptionsFilter = function () {
    var _classDecorators = [(0, common_1.Catch)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AllExceptionsFilter = _classThis = /** @class */ (function () {
        /** set logger context */
        function AllExceptionsFilter_1(config, logger) {
            this.config = config;
            this.logger = logger;
            this.logger.setContext(AllExceptionsFilter.name);
        }
        AllExceptionsFilter_1.prototype.catch = function (exception, host) {
            var ctx = host.switchToHttp();
            var req = ctx.getRequest();
            var res = ctx.getResponse();
            var path = req.url;
            var timestamp = new Date().toISOString();
            var requestId = req.headers[constants_1.REQUEST_ID_TOKEN_HEADER];
            var requestContext = (0, util_1.createRequestContext)(req);
            var stack;
            var statusCode;
            var errorName;
            var message;
            var details;
            // TODO : Based on language value in header, return a localized message.
            var acceptedLanguage = 'ja';
            var localizedMessage;
            // TODO : Refactor the below cases into a switch case and tidy up error response creation.
            if (exception instanceof base_api_exception_1.BaseApiException) {
                statusCode = exception.getStatus();
                errorName = exception.constructor.name;
                message = exception.message;
                localizedMessage = exception.localizedMessage[acceptedLanguage];
                details = exception.details || exception.getResponse();
            }
            else if (exception instanceof common_1.HttpException) {
                statusCode = exception.getStatus();
                errorName = exception.constructor.name;
                message = exception.message;
                details = exception.getResponse();
            }
            else if (exception instanceof Error) {
                errorName = exception.constructor.name;
                message = exception.message;
                stack = exception.stack;
            }
            // Set to internal server error in case it did not match above categories.
            statusCode = statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            errorName = errorName || 'InternalException';
            message = message || 'Internal server error';
            // NOTE: For reference, please check https://cloud.google.com/apis/design/errors
            var error = {
                statusCode: statusCode,
                message: message,
                localizedMessage: localizedMessage,
                errorName: errorName,
                details: details,
                // Additional meta added by us.
                path: path,
                requestId: requestId,
                timestamp: timestamp,
            };
            this.logger.warn(requestContext, error.message, {
                error: error,
                stack: stack,
            });
            // Suppress original internal server error details in prod mode
            var isProMood = this.config.get('env') !== 'development';
            if (isProMood && statusCode === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
                error.message = 'Internal server error';
            }
            res.status(statusCode).json({ error: error });
        };
        return AllExceptionsFilter_1;
    }());
    __setFunctionName(_classThis, "AllExceptionsFilter");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AllExceptionsFilter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AllExceptionsFilter = _classThis;
}();
exports.AllExceptionsFilter = AllExceptionsFilter;
