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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var supabase_js_1 = require("@supabase/supabase-js");
var dotenv_1 = __importDefault(require("dotenv"));
var ChessWagerEscrow_json_1 = __importDefault(require("../contracts/artifacts-zk/contracts/ChessWagerEscrow.sol/ChessWagerEscrow.json"));
dotenv_1.default.config();
var provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_URL);
var contractAddress = process.env.CONTRACT_ADDRESS;
var contractInterface = new ethers_1.ethers.Interface(ChessWagerEscrow_json_1.default.abi);
var supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
var eventNames = [
    "GameCreated",
    "GameJoined",
    "DisputeRaised",
    "GameFinished"
];
var lastBlock = 0;
function pollEvents() {
    return __awaiter(this, void 0, void 0, function () {
        var currentBlock, _i, eventNames_1, eventName, eventFragment, topic, logs, _a, logs_1, log, parsed, _b, gameId, player1, player2, wager, _c, gameId, player2, gameId, gameId, err_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 15, , 16]);
                    return [4 /*yield*/, provider.getBlockNumber()];
                case 1:
                    currentBlock = _d.sent();
                    if (lastBlock === 0) {
                        lastBlock = currentBlock - 10; // start from a few blocks back
                    }
                    _i = 0, eventNames_1 = eventNames;
                    _d.label = 2;
                case 2:
                    if (!(_i < eventNames_1.length)) return [3 /*break*/, 14];
                    eventName = eventNames_1[_i];
                    eventFragment = contractInterface.getEvent(eventName);
                    if (!eventFragment)
                        return [3 /*break*/, 13];
                    topic = ethers_1.ethers.id(eventFragment.format());
                    return [4 /*yield*/, provider.getLogs({
                            address: contractAddress,
                            fromBlock: lastBlock + 1,
                            toBlock: currentBlock,
                            topics: [topic]
                        })];
                case 3:
                    logs = _d.sent();
                    _a = 0, logs_1 = logs;
                    _d.label = 4;
                case 4:
                    if (!(_a < logs_1.length)) return [3 /*break*/, 13];
                    log = logs_1[_a];
                    parsed = contractInterface.parseLog(log);
                    if (!parsed)
                        return [3 /*break*/, 12];
                    if (!(eventName === "GameCreated")) return [3 /*break*/, 6];
                    _b = parsed.args, gameId = _b[0], player1 = _b[1], player2 = _b[2], wager = _b[3];
                    return [4 /*yield*/, supabase.from("games").upsert([
                            {
                                id: gameId.toString(),
                                white_player: player1,
                                black_player: player2,
                                wager: Number(ethers_1.ethers.formatEther(wager)),
                                status: "waiting"
                            }
                        ], { onConflict: "id" })];
                case 5:
                    _d.sent();
                    console.log("[backend] GameCreated indexed: ".concat(gameId));
                    return [3 /*break*/, 12];
                case 6:
                    if (!(eventName === "GameJoined")) return [3 /*break*/, 8];
                    _c = parsed.args, gameId = _c[0], player2 = _c[1];
                    return [4 /*yield*/, supabase.from("games").update({ black_player: player2, status: "active" }).eq("id", gameId.toString())];
                case 7:
                    _d.sent();
                    console.log("[backend] GameJoined indexed: ".concat(gameId));
                    return [3 /*break*/, 12];
                case 8:
                    if (!(eventName === "DisputeRaised")) return [3 /*break*/, 10];
                    gameId = parsed.args[0];
                    return [4 /*yield*/, supabase.from("games").update({ status: "dispute" }).eq("id", gameId.toString())];
                case 9:
                    _d.sent();
                    console.log("[backend] DisputeRaised indexed: ".concat(gameId));
                    return [3 /*break*/, 12];
                case 10:
                    if (!(eventName === "GameFinished")) return [3 /*break*/, 12];
                    gameId = parsed.args[0];
                    return [4 /*yield*/, supabase.from("games").update({ status: "finished" }).eq("id", gameId.toString())];
                case 11:
                    _d.sent();
                    console.log("[backend] GameFinished indexed: ".concat(gameId));
                    _d.label = 12;
                case 12:
                    _a++;
                    return [3 /*break*/, 4];
                case 13:
                    _i++;
                    return [3 /*break*/, 2];
                case 14:
                    lastBlock = currentBlock;
                    return [3 /*break*/, 16];
                case 15:
                    err_1 = _d.sent();
                    console.error("[backend] Polling error:", err_1);
                    return [3 /*break*/, 16];
                case 16: return [2 /*return*/];
            }
        });
    });
}
console.log("[backend] ChessWagerEscrow log polling indexer started.");
setInterval(pollEvents, 10000);
