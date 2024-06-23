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
exports.CreateUserInput = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var role_constant_1 = require("../../auth/constants/role.constant");
var CreateUserInput = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _roles_decorators;
    var _roles_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _isAccountDisabled_decorators;
    var _isAccountDisabled_initializers = [];
    return _a = /** @class */ (function () {
            function CreateUserInput() {
                this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.username = __runInitializers(this, _username_initializers, void 0);
                this.password = __runInitializers(this, _password_initializers, void 0);
                this.roles = __runInitializers(this, _roles_initializers, void 0);
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.isAccountDisabled = __runInitializers(this, _isAccountDisabled_initializers, void 0);
            }
            return CreateUserInput;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiPropertyOptional)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _username_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Length)(6, 100), (0, class_validator_1.IsAlphanumeric)()];
            _password_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Length)(6, 100)];
            _roles_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayNotEmpty)(), (0, class_validator_1.IsEnum)(role_constant_1.ROLE, { each: true })];
            _email_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsEmail)(), (0, class_validator_1.MaxLength)(100)];
            _isAccountDisabled_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsBoolean)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _roles_decorators, { kind: "field", name: "roles", static: false, private: false, access: { has: function (obj) { return "roles" in obj; }, get: function (obj) { return obj.roles; }, set: function (obj, value) { obj.roles = value; } }, metadata: _metadata }, _roles_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _isAccountDisabled_decorators, { kind: "field", name: "isAccountDisabled", static: false, private: false, access: { has: function (obj) { return "isAccountDisabled" in obj; }, get: function (obj) { return obj.isAccountDisabled; }, set: function (obj, value) { obj.isAccountDisabled = value; } }, metadata: _metadata }, _isAccountDisabled_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateUserInput = CreateUserInput;
