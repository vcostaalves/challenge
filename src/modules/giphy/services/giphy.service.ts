
import { Injectable, Logger } from '@nestjs/common';
import { GiphyDTO } from '../dto/giphy.dto';


@Injectable()
export class GiphyService {
  private logger = new Logger('GiphyService');


  async getGiphy(recipe: string): Promise<string> {
  
    return null;
  }


}
