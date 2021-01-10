"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppyRecipeModule = void 0;
const common_1 = require("@nestjs/common");
const puppy_recipe_service_1 = require("./services/puppy-recipe.service");
let PuppyRecipeModule = class PuppyRecipeModule {
};
PuppyRecipeModule = __decorate([
    common_1.Module({
        providers: [puppy_recipe_service_1.PuppyRecipeService],
        exports: [puppy_recipe_service_1.PuppyRecipeService]
    })
], PuppyRecipeModule);
exports.PuppyRecipeModule = PuppyRecipeModule;
//# sourceMappingURL=puppy-recipe.module.js.map