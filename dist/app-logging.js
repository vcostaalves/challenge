"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonOptions = void 0;
const winston = __importStar(require("winston"));
const nest_winston_1 = require("nest-winston");
exports.winstonOptions = {
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike()),
        }),
        new winston.transports.File({
            format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike()),
            filename: 'app.log'
        })
    ]
};
//# sourceMappingURL=app-logging.js.map