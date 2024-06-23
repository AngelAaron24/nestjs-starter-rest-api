"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApiErrorResponse = exports.BaseApiErrorObject = exports.SwaggerBaseApiResponse = exports.BaseApiResponse = void 0;
var swagger_1 = require("@nestjs/swagger");
var BaseApiResponse = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _meta_decorators;
    var _meta_initializers = [];
    return _a = /** @class */ (function () {
            function BaseApiResponse() {
                this.data = (__runInitializers(this, _instanceExtraInitializers), void 0); // Swagger Decorator is added in the extended class below, since that will override this one.
                this.meta = __runInitializers(this, _meta_initializers, void 0);
            }
            return BaseApiResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _meta_decorators = [(0, swagger_1.ApiProperty)({ type: Object })];
            __esDecorate(null, null, _meta_decorators, { kind: "field", name: "meta", static: false, private: false, access: { has: function (obj) { return "meta" in obj; }, get: function (obj) { return obj.meta; }, set: function (obj, value) { obj.meta = value; } }, metadata: _metadata }, _meta_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BaseApiResponse = BaseApiResponse;
function SwaggerBaseApiResponse(type) {
    var ExtendedBaseApiResponse = function () {
        var _a;
        var _classSuper = BaseApiResponse;
        var _instanceExtraInitializers = [];
        var _data_decorators;
        var _data_initializers = [];
        return _a = /** @class */ (function (_super) {
                __extends(ExtendedBaseApiResponse, _super);
                function ExtendedBaseApiResponse() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.data = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _data_initializers, void 0));
                    return _this;
                }
                return ExtendedBaseApiResponse;
            }(_classSuper)),
            (function () {
                var _b;
                var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
                _data_decorators = [(0, swagger_1.ApiProperty)({ type: type })];
                __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _instanceExtraInitializers);
                if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            })(),
            _a;
    }();
    // NOTE : Overwrite the returned class name, otherwise whichever type calls this function in the last,
    // will overwrite all previous definitions. i.e., Swagger will have all response types as the same one.
    var isAnArray = Array.isArray(type) ? ' [ ] ' : '';
    Object.defineProperty(ExtendedBaseApiResponse, 'name', {
        value: "SwaggerBaseApiResponseFor ".concat(type, " ").concat(isAnArray),
    });
    return ExtendedBaseApiResponse;
}
exports.SwaggerBaseApiResponse = SwaggerBaseApiResponse;
var BaseApiErrorObject = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _statusCode_decorators;
    var _statusCode_initializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _localizedMessage_decorators;
    var _localizedMessage_initializers = [];
    var _errorName_decorators;
    var _errorName_initializers = [];
    var _details_decorators;
    var _details_initializers = [];
    var _path_decorators;
    var _path_initializers = [];
    var _requestId_decorators;
    var _requestId_initializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    return _a = /** @class */ (function () {
            function BaseApiErrorObject() {
                this.statusCode = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _statusCode_initializers, void 0));
                this.message = __runInitializers(this, _message_initializers, void 0);
                this.localizedMessage = __runInitializers(this, _localizedMessage_initializers, void 0);
                this.errorName = __runInitializers(this, _errorName_initializers, void 0);
                this.details = __runInitializers(this, _details_initializers, void 0);
                this.path = __runInitializers(this, _path_initializers, void 0);
                this.requestId = __runInitializers(this, _requestId_initializers, void 0);
                this.timestamp = __runInitializers(this, _timestamp_initializers, void 0);
            }
            return BaseApiErrorObject;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _statusCode_decorators = [(0, swagger_1.ApiProperty)({ type: Number })];
            _message_decorators = [(0, swagger_1.ApiProperty)({ type: String })];
            _localizedMessage_decorators = [(0, swagger_1.ApiPropertyOptional)({ type: String })];
            _errorName_decorators = [(0, swagger_1.ApiProperty)({ type: String })];
            _details_decorators = [(0, swagger_1.ApiProperty)({ type: Object })];
            _path_decorators = [(0, swagger_1.ApiProperty)({ type: String })];
            _requestId_decorators = [(0, swagger_1.ApiProperty)({ type: String })];
            _timestamp_decorators = [(0, swagger_1.ApiProperty)({ type: String })];
            __esDecorate(null, null, _statusCode_decorators, { kind: "field", name: "statusCode", static: false, private: false, access: { has: function (obj) { return "statusCode" in obj; }, get: function (obj) { return obj.statusCode; }, set: function (obj, value) { obj.statusCode = value; } }, metadata: _metadata }, _statusCode_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _localizedMessage_decorators, { kind: "field", name: "localizedMessage", static: false, private: false, access: { has: function (obj) { return "localizedMessage" in obj; }, get: function (obj) { return obj.localizedMessage; }, set: function (obj, value) { obj.localizedMessage = value; } }, metadata: _metadata }, _localizedMessage_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _errorName_decorators, { kind: "field", name: "errorName", static: false, private: false, access: { has: function (obj) { return "errorName" in obj; }, get: function (obj) { return obj.errorName; }, set: function (obj, value) { obj.errorName = value; } }, metadata: _metadata }, _errorName_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _details_decorators, { kind: "field", name: "details", static: false, private: false, access: { has: function (obj) { return "details" in obj; }, get: function (obj) { return obj.details; }, set: function (obj, value) { obj.details = value; } }, metadata: _metadata }, _details_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _path_decorators, { kind: "field", name: "path", static: false, private: false, access: { has: function (obj) { return "path" in obj; }, get: function (obj) { return obj.path; }, set: function (obj, value) { obj.path = value; } }, metadata: _metadata }, _path_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _requestId_decorators, { kind: "field", name: "requestId", static: false, private: false, access: { has: function (obj) { return "requestId" in obj; }, get: function (obj) { return obj.requestId; }, set: function (obj, value) { obj.requestId = value; } }, metadata: _metadata }, _requestId_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BaseApiErrorObject = BaseApiErrorObject;
var BaseApiErrorResponse = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _error_decorators;
    var _error_initializers = [];
    return _a = /** @class */ (function () {
            function BaseApiErrorResponse() {
                this.error = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _error_initializers, void 0));
            }
            return BaseApiErrorResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _error_decorators = [(0, swagger_1.ApiProperty)({ type: BaseApiErrorObject })];
            __esDecorate(null, null, _error_decorators, { kind: "field", name: "error", static: false, private: false, access: { has: function (obj) { return "error" in obj; }, get: function (obj) { return obj.error; }, set: function (obj, value) { obj.error = value; } }, metadata: _metadata }, _error_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BaseApiErrorResponse = BaseApiErrorResponse;
