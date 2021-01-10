import { WinstonModule } from 'nest-winston';
import { PuppyRecipeModule } from './modules/puppy-recipe/puppy-recipe.module';
import { winstonOptions } from './app-logging';
import { GiphyModule } from './modules/giphy/giphy.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    PuppyRecipeModule,
    GiphyModule,
    RecipeModule,
    WinstonModule.forRoot(winstonOptions),
    TerminusModule
  ],
  controllers: [HealthController]
})
export class AppModule {}
