"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const user_1 = __importDefault(require("./routes/user"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to your API" });
});
app.use("/api", user_1.default);
// Start the server
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        try {
            const connection = yield (0, typeorm_1.createConnection)(database_1.default);
            console.log('Connected to PostgreSQL database');
        }
        catch (error) {
            console.error('Error connecting to PostgreSQL:', error);
        }
    });
}
connect();
