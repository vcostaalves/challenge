import { Injectable, Logger } from '@nestjs/common';
import { GiphyService } from '../../giphy/services/giphy.service';
import { PuppyRecipeDTO } from '../../puppy-recipe/dto/puppy-recipe.dto';
import { PuppyRecipeService } from '../../puppy-recipe/services/puppy-recipe.service';
import { RecipeResponseDTO } from '../dto/recipe-response.dto';
import { RecipeDTO } from '../dto/recipe.dto';

@Injectable()
export class RecipeService {

  private logger = new Logger('RecipeService');

  constructor(
    
    private readonly  giphyService: GiphyService,
    private readonly  puppyRecipeService: PuppyRecipeService
  ){ }

  async getRecipe(ingredients: string): Promise<RecipeResponseDTO> {
    let recipeResponse: RecipeResponseDTO;
    let recipeList: RecipeDTO[];
    if(ingredients.length==0){
      return null;
    }
    let ingredientList: string[];
    ingredientList= ingredients.split(",")


    let puppyRecipe= await this.puppyRecipeService.getPuppyRecipe(ingredientList);
    
    puppyRecipe.results.forEach(puppyRecipe => {
      this.generateRecipe(puppyRecipe);
    });

  return null
  }

  async generateRecipe(puppyRecipe: PuppyRecipeDTO) {
    let recipeItem: RecipeDTO;
    recipeItem.title=puppyRecipe.title;
    recipeItem.ingredients=this.getIngredients(puppyRecipe.ingredients);
    recipeItem.link=puppyRecipe.href;
    recipeItem.gif= await this.giphyService.getGiphy(puppyRecipe.title);
  }

  getIngredients(ingredientsPuppy: string): string[] {
    return ingredientsPuppy.split(",")
  }
  
}
