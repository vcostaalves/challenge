import { Module} from '@nestjs/common';
import { PuppyRecipeService } from './services/puppy-recipe.service';


@Module({
    providers: [PuppyRecipeService],
    exports: [PuppyRecipeService]
})
export class PuppyRecipeModule {}
