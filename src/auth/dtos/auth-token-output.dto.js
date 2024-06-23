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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRefreshTokenClaims = exports.UserAccessTokenClaims = exports.AuthTokenOutput = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var AuthTokenOutput = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _accessToken_decorators;
    var _accessToken_initializers = [];
    var _refreshToken_decorators;
    var _refreshToken_initializers = [];
    return _a = /** @class */ (function () {
            function AuthTokenOutput() {
                this.accessToken = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _accessToken_initializers, void 0));
                this.refreshToken = __runInitializers(this, _refreshToken_initializers, void 0);
            }
            return AuthTokenOutput;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _accessToken_decorators = [(0, class_transformer_1.Expose)(), (0, swagger_1.ApiProperty)()];
            _refreshToken_decorators = [(0, class_transformer_1.Expose)(), (0, swagger_1.ApiProperty)()];
            __esDecorate(null, null, _accessToken_decorators, { kind: "field", name: "accessToken", static: false, private: false, access: { has: function (obj) { return "accessToken" in obj; }, get: function (obj) { return obj.accessToken; }, set: function (obj, value) { obj.accessToken = value; } }, metadata: _metadata }, _accessToken_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _refreshToken_decorators, { kind: "field", name: "refreshToken", static: false, private: false, access: { has: function (obj) { return "refreshToken" in obj; }, get: function (obj) { return obj.refreshToken; }, set: function (obj, value) { obj.refreshToken = value; } }, metadata: _metadata }, _refreshToken_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AuthTokenOutput = AuthTokenOutput;
var UserAccessTokenClaims = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _roles_decorators;
    var _roles_initializers = [];
    return _a = /** @class */ (function () {
            function UserAccessTokenClaims() {
                this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
                this.username = __runInitializers(this, _username_initializers, void 0);
                this.roles = __runInitializers(this, _roles_initializers, void 0);
            }
            return UserAccessTokenClaims;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, class_transformer_1.Expose)()];
            _username_decorators = [(0, class_transformer_1.Expose)()];
            _roles_decorators = [(0, class_transformer_1.Expose)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _roles_decorators, { kind: "field", name: "roles", static: false, private: false, access: { has: function (obj) { return "roles" in obj; }, get: function (obj) { return obj.roles; }, set: function (obj, value) { obj.roles = value; } }, metadata: _metadata }, _roles_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UserAccessTokenClaims = UserAccessTokenClaims;
var UserRefreshTokenClaims = /** @class */ (function () {
    function UserRefreshTokenClaims() {
    }
    return UserRefreshTokenClaims;
}());
exports.UserRefreshTokenClaims = UserRefreshTokenClaims;
