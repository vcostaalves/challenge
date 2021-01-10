"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const nest_winston_1 = require("nest-winston");
const puppy_recipe_module_1 = require("./modules/puppy-recipe/puppy-recipe.module");
const app_logging_1 = require("./app-logging");
const giphy_module_1 = require("./modules/giphy/giphy.module");
const recipe_module_1 = require("./modules/recipe/recipe.module");
const terminus_1 = require("@nestjs/terminus");
const health_controller_1 = require("./health/health.controller");
const common_1 = require("@nestjs/common");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            puppy_recipe_module_1.PuppyRecipeModule,
            giphy_module_1.GiphyModule,
            recipe_module_1.RecipeModule,
            nest_winston_1.WinstonModule.forRoot(app_logging_1.winstonOptions),
            terminus_1.TerminusModule
        ],
        controllers: [health_controller_1.HealthController]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map