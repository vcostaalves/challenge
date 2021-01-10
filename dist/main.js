"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = __importDefault(require("config"));
const api_docs_swagger_1 = require("./api-docs.swagger");
const compression_1 = __importDefault(require("compression"));
const nest_winston_1 = require("nest-winston");
const app_logging_1 = require("./app-logging");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = (process.env.NODE_ENV === 'production') ? nest_winston_1.WinstonModule.createLogger(app_logging_1.winstonOptions) : new common_1.Logger('Bootstrap Logger');
    const nestAppOptions = {
        logger: logger
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, nestAppOptions);
    // app.useGlobalInterceptors(new TransformInterceptor(), new WrapInterceptor())
    // secure app by setting various HTTP headers.  
    // enable gzip compression.
    app.use(compression_1.default());
    // listen on port
    const serverConfig = config_1.default.get('server');
    const port = process.env.SERVER_PORT || serverConfig.port;
    /**
     * different deployment environments
     */
    if (process.env.NODE_ENV === 'development') {
        logger.log(`Application is running in "${process.env.NODE_ENV}" mode`);
        app.enableCors();
        // Api docs
        api_docs_swagger_1.setupSwagger(app);
    }
    else {
        /**
         * TODO: implement
         */
        api_docs_swagger_1.setupSwagger(app);
        logger.log(`Application is running in "${process.env.NODE_ENV}" mode`);
    }
    await app.listen(port);
    logger.log(`Application listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map