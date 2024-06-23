"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var bcrypt_1 = require("bcrypt");
var class_transformer_1 = require("class-transformer");
var user_output_dto_1 = require("../dtos/user-output.dto");
var user_entity_1 = require("../entities/user.entity");
var user_repository_1 = require("../repositories/user.repository");
var rxjs_1 = require("rxjs");
var UserService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UserService = _classThis = /** @class */ (function () {
        function UserService_1(client, repository, logger) {
            this.client = client;
            this.repository = repository;
            this.logger = logger;
            this.logger.setContext(UserService.name);
        }
        UserService_1.prototype.createUser = function (ctx, input) {
            return __awaiter(this, void 0, void 0, function () {
                var user, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.createUser.name, " was called"));
                            user = (0, class_transformer_1.plainToClass)(user_entity_1.User, input);
                            _a = user;
                            return [4 /*yield*/, (0, bcrypt_1.hash)(input.password, 10)];
                        case 1:
                            _a.password = _b.sent();
                            this.logger.log(ctx, "calling ".concat(user_repository_1.UserRepository.name, ".saveUser"));
                            return [4 /*yield*/, this.repository.save(user)];
                        case 2:
                            _b.sent();
                            return [2 /*return*/, (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
                                    excludeExtraneousValues: true,
                                })];
                    }
                });
            });
        };
        UserService_1.prototype.validateUsernamePassword = function (ctx, username, pass) {
            return __awaiter(this, void 0, void 0, function () {
                var user, match;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.validateUsernamePassword.name, " was called"));
                            this.logger.log(ctx, "calling ".concat(user_repository_1.UserRepository.name, ".findOne"));
                            return [4 /*yield*/, this.repository.findOne({ where: { username: username } })];
                        case 1:
                            user = _a.sent();
                            if (!user)
                                throw new common_1.UnauthorizedException();
                            return [4 /*yield*/, (0, bcrypt_1.compare)(pass, user.password)];
                        case 2:
                            match = _a.sent();
                            if (!match)
                                throw new common_1.UnauthorizedException();
                            return [2 /*return*/, (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
                                    excludeExtraneousValues: true,
                                })];
                    }
                });
            });
        };
        UserService_1.prototype.getUsers = function (ctx, limit, offset) {
            return __awaiter(this, void 0, void 0, function () {
                var cacheKey, cachedData, _a, users, count, usersOutput, result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.getUsers.name, " was called"));
                            cacheKey = "users_".concat(limit, "_").concat(offset);
                            return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.client.send({ cmd: 'get' }, cacheKey))];
                        case 1:
                            cachedData = _b.sent();
                            if (cachedData) {
                                this.logger.log(ctx, "Cache hit for ".concat(cacheKey));
                                return [2 /*return*/, JSON.parse(cachedData)];
                            }
                            this.logger.log(ctx, "Cache miss for ".concat(cacheKey));
                            this.logger.log(ctx, "calling ".concat(user_repository_1.UserRepository.name, ".findAndCount"));
                            return [4 /*yield*/, this.repository.findAndCount({
                                    where: {},
                                    take: limit,
                                    skip: offset,
                                })];
                        case 2:
                            _a = _b.sent(), users = _a[0], count = _a[1];
                            usersOutput = (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, users, {
                                excludeExtraneousValues: true,
                            });
                            result = { users: usersOutput, count: count };
                            return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(this.client.send({ cmd: 'set' }, { key: cacheKey, value: JSON.stringify(result), expiration: 3600 }))];
                        case 3:
                            _b.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        UserService_1.prototype.findById = function (ctx, id) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.findById.name, " was called"));
                            this.logger.log(ctx, "calling ".concat(user_repository_1.UserRepository.name, ".findOne"));
                            return [4 /*yield*/, this.repository.findOne({ where: { id: id } })];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
                                    excludeExtraneousValues: true,
                                })];
                    }
                });
            });
        };
        UserService_1.prototype.getUserById = function (ctx, id) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.getUserById.name, " was called"));
                            this.logger.log(ctx, "calling ".concat(user_repository_1.UserRepository.name, ".getById"));
                            return [4 /*yield*/, this.repository.getById(id)];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
                                    excludeExtraneousValues: true,
                                })];
                    }
                });
            });
        };
        UserService_1.prototype.findByUsername = function (ctx, username) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.findByUsername.name, " was called"));
                            this.logger.log(ctx, "calling ".concat(user_repository_1.UserRepository.name, ".findOne"));
                            return [4 /*yield*/, this.repository.findOne({ where: { username: username } })];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, user, {
                                    excludeExtraneousValues: true,
                                })];
                    }
                });
            });
        };
        UserService_1.prototype.updateUser = function (ctx, userId, input) {
            return __awaiter(this, void 0, void 0, function () {
                var user, _a, updatedUser;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.updateUser.name, " was called"));
                            this.logger.log(ctx, "calling ".concat(user_repository_1.UserRepository.name, ".getById"));
                            return [4 /*yield*/, this.repository.getById(userId)];
                        case 1:
                            user = _b.sent();
                            if (!input.password) return [3 /*break*/, 3];
                            _a = input;
                            return [4 /*yield*/, (0, bcrypt_1.hash)(input.password, 10)];
                        case 2:
                            _a.password = _b.sent();
                            _b.label = 3;
                        case 3:
                            updatedUser = __assign(__assign({}, user), (0, class_transformer_1.plainToClass)(user_entity_1.User, input));
                            this.logger.log(ctx, "calling ".concat(user_repository_1.UserRepository.name, ".save"));
                            return [4 /*yield*/, this.repository.save(updatedUser)];
                        case 4:
                            _b.sent();
                            return [2 /*return*/, (0, class_transformer_1.plainToClass)(user_output_dto_1.UserOutput, updatedUser, {
                                    excludeExtraneousValues: true,
                                })];
                    }
                });
            });
        };
        return UserService_1;
    }());
    __setFunctionName(_classThis, "UserService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserService = _classThis;
}();
exports.UserService = UserService;
