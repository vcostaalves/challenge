import { Test, TestingModule } from '@nestjs/testing';
import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  let service: GiphyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiphyService],
    }).compile();

    service = module.get<GiphyService>(GiphyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
