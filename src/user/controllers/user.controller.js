"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var role_constant_1 = require("../../auth/constants/role.constant");
var role_decorator_1 = require("../../auth/decorators/role.decorator");
var jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
var roles_guard_1 = require("../../auth/guards/roles.guard");
var base_api_response_dto_1 = require("../../shared/dtos/base-api-response.dto");
var user_output_dto_1 = require("../dtos/user-output.dto");
var UserController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('users'), (0, common_1.Controller)('users')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getMyProfile_decorators;
    var _getUsers_decorators;
    var _getUser_decorators;
    var _updateUser_decorators;
    var UserController = _classThis = /** @class */ (function () {
        function UserController_1(userService, logger) {
            this.userService = (__runInitializers(this, _instanceExtraInitializers), userService);
            this.logger = logger;
            this.logger.setContext(UserController.name);
        }
        UserController_1.prototype.getMyProfile = function (ctx) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.getMyProfile.name, " was called"));
                            return [4 /*yield*/, this.userService.findById(ctx, ctx.user.id)];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, { data: user, meta: {} }];
                    }
                });
            });
        };
        UserController_1.prototype.getUsers = function (ctx, query) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, users, count;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.getUsers.name, " was called"));
                            return [4 /*yield*/, this.userService.getUsers(ctx, query.limit, query.offset)];
                        case 1:
                            _a = _b.sent(), users = _a.users, count = _a.count;
                            return [2 /*return*/, { data: users, meta: { count: count } }];
                    }
                });
            });
        };
        // TODO: ADD RoleGuard
        // NOTE : This can be made a admin only endpoint. For normal users they can use GET /me
        UserController_1.prototype.getUser = function (ctx, id) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.getUser.name, " was called"));
                            return [4 /*yield*/, this.userService.getUserById(ctx, id)];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, { data: user, meta: {} }];
                    }
                });
            });
        };
        // TODO: ADD RoleGuard
        // NOTE : This can be made a admin only endpoint. For normal users they can use PATCH /me
        UserController_1.prototype.updateUser = function (ctx, userId, input) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.updateUser.name, " was called"));
                            return [4 /*yield*/, this.userService.updateUser(ctx, userId, input)];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, { data: user, meta: {} }];
                    }
                });
            });
        };
        return UserController_1;
    }());
    __setFunctionName(_classThis, "UserController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getMyProfile_decorators = [(0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor), (0, common_1.Get)('me'), (0, swagger_1.ApiOperation)({
                summary: 'Get user me API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.OK,
                type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(user_output_dto_1.UserOutput),
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.UNAUTHORIZED,
                type: base_api_response_dto_1.BaseApiErrorResponse,
            })];
        _getUsers_decorators = [(0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor), (0, common_1.Get)(), (0, swagger_1.ApiOperation)({
                summary: 'Get users as a list API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.OK,
                type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)([user_output_dto_1.UserOutput]),
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.UNAUTHORIZED,
                type: base_api_response_dto_1.BaseApiErrorResponse,
            }), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard), (0, role_decorator_1.Roles)(role_constant_1.ROLE.ADMIN, role_constant_1.ROLE.USER)];
        _getUser_decorators = [(0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor), (0, common_1.Get)(':id'), (0, swagger_1.ApiOperation)({
                summary: 'Get user by id API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.OK,
                type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(user_output_dto_1.UserOutput),
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.NOT_FOUND,
                type: base_api_response_dto_1.BaseApiErrorResponse,
            })];
        _updateUser_decorators = [(0, common_1.Patch)(':id'), (0, swagger_1.ApiOperation)({
                summary: 'Update user API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.OK,
                type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(user_output_dto_1.UserOutput),
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.NOT_FOUND,
                type: base_api_response_dto_1.BaseApiErrorResponse,
            }), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor)];
        __esDecorate(_classThis, null, _getMyProfile_decorators, { kind: "method", name: "getMyProfile", static: false, private: false, access: { has: function (obj) { return "getMyProfile" in obj; }, get: function (obj) { return obj.getMyProfile; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUsers_decorators, { kind: "method", name: "getUsers", static: false, private: false, access: { has: function (obj) { return "getUsers" in obj; }, get: function (obj) { return obj.getUsers; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUser_decorators, { kind: "method", name: "getUser", static: false, private: false, access: { has: function (obj) { return "getUser" in obj; }, get: function (obj) { return obj.getUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateUser_decorators, { kind: "method", name: "updateUser", static: false, private: false, access: { has: function (obj) { return "updateUser" in obj; }, get: function (obj) { return obj.updateUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserController = _classThis;
}();
exports.UserController = UserController;
