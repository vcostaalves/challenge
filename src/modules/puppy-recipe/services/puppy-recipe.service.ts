import { Injectable, Logger } from "@nestjs/common";
import { PuppyRecipeResponseDTO } from "../dto/puppy-recipe-response.dto copy";
import { PuppyRecipeDTO } from "../dto/puppy-recipe.dto";

@Injectable()
export class PuppyRecipeService {

  private logger = new Logger('PuppyRecipeService');

  constructor(
    
  ){ }
  
  async getPuppyRecipe(ingredientList: string[]): Promise<PuppyRecipeResponseDTO> {
    return null;

  }
  
}
