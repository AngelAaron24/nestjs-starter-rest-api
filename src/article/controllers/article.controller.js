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
exports.ArticleController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
var base_api_response_dto_1 = require("../../shared/dtos/base-api-response.dto");
var article_output_dto_1 = require("../dtos/article-output.dto");
var ArticleController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('articles'), (0, common_1.Controller)('articles')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createArticle_decorators;
    var _getArticles_decorators;
    var _getArticle_decorators;
    var _updateArticle_decorators;
    var _deleteArticle_decorators;
    var ArticleController = _classThis = /** @class */ (function () {
        function ArticleController_1(articleService, logger) {
            this.articleService = (__runInitializers(this, _instanceExtraInitializers), articleService);
            this.logger = logger;
            this.logger.setContext(ArticleController.name);
        }
        ArticleController_1.prototype.createArticle = function (ctx, input) {
            return __awaiter(this, void 0, void 0, function () {
                var article;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.articleService.createArticle(ctx, input)];
                        case 1:
                            article = _a.sent();
                            return [2 /*return*/, { data: article, meta: {} }];
                    }
                });
            });
        };
        ArticleController_1.prototype.getArticles = function (ctx, query) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, articles, count;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.getArticles.name, " was called"));
                            return [4 /*yield*/, this.articleService.getArticles(ctx, query.limit, query.offset)];
                        case 1:
                            _a = _b.sent(), articles = _a.articles, count = _a.count;
                            return [2 /*return*/, { data: articles, meta: { count: count } }];
                    }
                });
            });
        };
        ArticleController_1.prototype.getArticle = function (ctx, id) {
            return __awaiter(this, void 0, void 0, function () {
                var article;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log(ctx, "".concat(this.getArticle.name, " was called"));
                            return [4 /*yield*/, this.articleService.getArticleById(ctx, id)];
                        case 1:
                            article = _a.sent();
                            return [2 /*return*/, { data: article, meta: {} }];
                    }
                });
            });
        };
        ArticleController_1.prototype.updateArticle = function (ctx, articleId, input) {
            return __awaiter(this, void 0, void 0, function () {
                var article;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.articleService.updateArticle(ctx, articleId, input)];
                        case 1:
                            article = _a.sent();
                            return [2 /*return*/, { data: article, meta: {} }];
                    }
                });
            });
        };
        ArticleController_1.prototype.deleteArticle = function (ctx, id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.log(ctx, "".concat(this.deleteArticle.name, " was called"));
                    return [2 /*return*/, this.articleService.deleteArticle(ctx, id)];
                });
            });
        };
        return ArticleController_1;
    }());
    __setFunctionName(_classThis, "ArticleController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createArticle_decorators = [(0, common_1.Post)(), (0, swagger_1.ApiOperation)({
                summary: 'Create article API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.CREATED,
                type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(article_output_dto_1.ArticleOutput),
            }), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard)];
        _getArticles_decorators = [(0, common_1.Get)(), (0, swagger_1.ApiOperation)({
                summary: 'Get articles as a list API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.OK,
                type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)([article_output_dto_1.ArticleOutput]),
            }), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard)];
        _getArticle_decorators = [(0, common_1.Get)(':id'), (0, swagger_1.ApiOperation)({
                summary: 'Get article by id API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.OK,
                type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(article_output_dto_1.ArticleOutput),
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.NOT_FOUND,
                type: base_api_response_dto_1.BaseApiErrorResponse,
            }), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard)];
        _updateArticle_decorators = [(0, common_1.Patch)(':id'), (0, swagger_1.ApiOperation)({
                summary: 'Update article API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.OK,
                type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(article_output_dto_1.ArticleOutput),
            }), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard)];
        _deleteArticle_decorators = [(0, common_1.Delete)(':id'), (0, swagger_1.ApiOperation)({
                summary: 'Delete article by id API',
            }), (0, swagger_1.ApiResponse)({
                status: common_1.HttpStatus.NO_CONTENT,
            }), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard)];
        __esDecorate(_classThis, null, _createArticle_decorators, { kind: "method", name: "createArticle", static: false, private: false, access: { has: function (obj) { return "createArticle" in obj; }, get: function (obj) { return obj.createArticle; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getArticles_decorators, { kind: "method", name: "getArticles", static: false, private: false, access: { has: function (obj) { return "getArticles" in obj; }, get: function (obj) { return obj.getArticles; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getArticle_decorators, { kind: "method", name: "getArticle", static: false, private: false, access: { has: function (obj) { return "getArticle" in obj; }, get: function (obj) { return obj.getArticle; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateArticle_decorators, { kind: "method", name: "updateArticle", static: false, private: false, access: { has: function (obj) { return "updateArticle" in obj; }, get: function (obj) { return obj.updateArticle; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteArticle_decorators, { kind: "method", name: "deleteArticle", static: false, private: false, access: { has: function (obj) { return "deleteArticle" in obj; }, get: function (obj) { return obj.deleteArticle; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ArticleController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ArticleController = _classThis;
}();
exports.ArticleController = ArticleController;
