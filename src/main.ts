import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  config from 'config';
import { setupSwagger } from './api-docs.swagger';
import compression  from 'compression';
import  rateLimit from 'express-rate-limit';
import { WinstonModule } from 'nest-winston';
import { winstonOptions } from './app-logging';
import { Logger, NestApplicationOptions } from '@nestjs/common';


async function bootstrap() {
  const logger = (process.env.NODE_ENV === 'production') ? WinstonModule.createLogger(winstonOptions) : new Logger('Bootstrap Logger');
  const nestAppOptions : NestApplicationOptions = {
    logger :  logger
  }
  const app = await NestFactory.create(AppModule, nestAppOptions);  


  
  // app.useGlobalInterceptors(new TransformInterceptor(), new WrapInterceptor())


  // secure app by setting various HTTP headers.  
  

  // enable gzip compression.
  app.use(compression());



  // listen on port
  const serverConfig = config.get('server');
  const port = process.env.SERVER_PORT || serverConfig.port;

  /**
   * different deployment environments
   */
  if (process.env.NODE_ENV === 'development') {
    logger.log(`Application is running in "${process.env.NODE_ENV}" mode`);
    app.enableCors();

    // Api docs
    setupSwagger(app);
  } else {
    /**
     * TODO: implement
     */
    setupSwagger(app);
    logger.log(`Application is running in "${process.env.NODE_ENV}" mode`);
  }

  
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
