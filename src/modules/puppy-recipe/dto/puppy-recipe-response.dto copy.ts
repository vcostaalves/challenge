import { PuppyRecipeDTO } from "./puppy-recipe.dto";

export class PuppyRecipeResponseDTO  {
  
  title: string;

  version: string;

  href: string;
  
  results: PuppyRecipeDTO[];
}
