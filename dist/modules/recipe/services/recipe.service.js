"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const giphy_service_1 = require("../../giphy/services/giphy.service");
const puppy_recipe_service_1 = require("../../puppy-recipe/services/puppy-recipe.service");
let RecipeService = class RecipeService {
    constructor(giphyService, puppyRecipeService) {
        this.giphyService = giphyService;
        this.puppyRecipeService = puppyRecipeService;
        this.logger = new common_1.Logger('RecipeService');
    }
    async getRecipe(externalId, orderStatus) {
        return null;
    }
};
RecipeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [giphy_service_1.GiphyService,
        puppy_recipe_service_1.PuppyRecipeService])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map