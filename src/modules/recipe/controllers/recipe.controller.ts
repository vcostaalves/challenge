import { Controller, Get, Param, Query } from "@nestjs/common";
import { RecipeResponseDTO } from "../dto/recipe-response.dto";
import { RecipeService } from "../services/recipe.service";



@Controller('recipes')
export class RecipeController {

  constructor(private recipeService: RecipeService) {}
  
  @Get()
  getRecipes( @Query('i') ingredients: string): Promise<RecipeResponseDTO>{
    return this.recipeService.getRecipe(ingredients); 
  }   


}
