import { Module } from '@nestjs/common';
import { GiphyModule } from '../giphy/giphy.module';
import { PuppyRecipeModule } from '../puppy-recipe/puppy-recipe.module';
import { RecipeController } from './controllers/recipe.controller';
import { RecipeService } from './services/recipe.service';

@Module({
    imports: [
        GiphyModule,
        PuppyRecipeModule
    ],
    controllers: [RecipeController],
    providers: [RecipeService],
    exports: [RecipeService]
})
export class RecipeModule {}
