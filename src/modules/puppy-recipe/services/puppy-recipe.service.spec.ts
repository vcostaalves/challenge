import { Test, TestingModule } from '@nestjs/testing';
import { PuppyRecipeService } from './puppy-recipe.service';


describe('FDMService', () => {
  let service: PuppyRecipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuppyRecipeService],
    }).compile();

    service = module.get<PuppyRecipeService>(PuppyRecipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
