"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./lib/logger"));
const app = express_1.default();
const PORT = 3000;
const index_1 = __importDefault(require("./routes/index"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_1.default);
app.listen(PORT, () => {
    logger_1.default.debug(`Server is up and running @ http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map