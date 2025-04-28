module.exports = {

"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "gasPerPubdataDefault": (()=>gasPerPubdataDefault),
    "maxBytecodeSize": (()=>maxBytecodeSize),
    "requiredL1ToL2GasPerPubdataLimit": (()=>requiredL1ToL2GasPerPubdataLimit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
;
const gasPerPubdataDefault = 50000n;
const maxBytecodeSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint16"] * 32n;
const requiredL1ToL2GasPerPubdataLimit = 800n; //# sourceMappingURL=number.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/formatters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatters": (()=>formatters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/formatters/block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/formatters/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/formatters/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const formatters = {
    block: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineBlock"])({
        format (args) {
            const transactions = args.transactions?.map((transaction)=>{
                if (typeof transaction === 'string') return transaction;
                const formatted = formatters.transaction?.format(transaction);
                if (formatted.typeHex === '0x71') formatted.type = 'eip712';
                else if (formatted.typeHex === '0xff') formatted.type = 'priority';
                return formatted;
            });
            return {
                l1BatchNumber: args.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchNumber) : null,
                l1BatchTimestamp: args.l1BatchTimestamp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchTimestamp) : null,
                transactions
            };
        }
    }),
    transaction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransaction"])({
        format (args) {
            const transaction = {};
            if (args.type === '0x71') transaction.type = 'eip712';
            else if (args.type === '0xff') transaction.type = 'priority';
            return {
                ...transaction,
                l1BatchNumber: args.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchNumber) : null,
                l1BatchTxIndex: args.l1BatchTxIndex ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchTxIndex) : null
            };
        }
    }),
    transactionReceipt: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransactionReceipt"])({
        format (args) {
            return {
                l1BatchNumber: args.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchNumber) : null,
                l1BatchTxIndex: args.l1BatchTxIndex ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchTxIndex) : null,
                logs: args.logs.map((log)=>{
                    return {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLog"])(log),
                        l1BatchNumber: log.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(log.l1BatchNumber) : null,
                        transactionLogIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(log.transactionLogIndex),
                        logType: log.logType
                    };
                }),
                l2ToL1Logs: args.l2ToL1Logs.map((l2ToL1Log)=>{
                    return {
                        blockNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.blockHash),
                        blockHash: l2ToL1Log.blockHash,
                        l1BatchNumber: l2ToL1Log.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.l1BatchNumber) : null,
                        transactionIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.transactionIndex),
                        shardId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.shardId),
                        isService: l2ToL1Log.isService,
                        sender: l2ToL1Log.sender,
                        key: l2ToL1Log.key,
                        value: l2ToL1Log.value,
                        transactionHash: l2ToL1Log.transactionHash,
                        logIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.logIndex)
                    };
                })
            };
        }
    }),
    transactionRequest: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransactionRequest"])({
        exclude: [
            'customSignature',
            'factoryDeps',
            'gasPerPubdata',
            'paymaster',
            'paymasterInput'
        ],
        format (args) {
            if (args.gasPerPubdata || args.paymaster && args.paymasterInput || args.factoryDeps || args.customSignature) return {
                eip712Meta: {
                    ...args.gasPerPubdata ? {
                        gasPerPubdata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(args.gasPerPubdata)
                    } : {
                        gasPerPubdata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gasPerPubdataDefault"])
                    },
                    ...args.paymaster && args.paymasterInput ? {
                        paymasterParams: {
                            paymaster: args.paymaster,
                            paymasterInput: Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(args.paymasterInput))
                        }
                    } : {},
                    ...args.factoryDeps ? {
                        factoryDeps: args.factoryDeps.map((dep)=>Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(dep)))
                    } : {},
                    ...args.customSignature ? {
                        customSignature: Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(args.customSignature))
                    } : {}
                },
                type: '0x71'
            };
            return {};
        }
    })
}; //# sourceMappingURL=formatters.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/errors/transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidEip712TransactionError": (()=>InvalidEip712TransactionError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
;
class InvalidEip712TransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super([
            'Transaction is not an EIP712 transaction.',
            '',
            'Transaction must:',
            '  - include `type: "eip712"`',
            '  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`'
        ].join('\n'), {
            name: 'InvalidEip712TransactionError'
        });
    }
} //# sourceMappingURL=transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/isEip712Transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isEIP712Transaction": (()=>isEIP712Transaction)
});
function isEIP712Transaction(transaction) {
    if (transaction.type === 'eip712') return true;
    if ('customSignature' in transaction && transaction.customSignature || 'paymaster' in transaction && transaction.paymaster || 'paymasterInput' in transaction && transaction.paymasterInput || 'gasPerPubdata' in transaction && typeof transaction.gasPerPubdata === 'bigint' || 'factoryDeps' in transaction && transaction.factoryDeps) return true;
    return false;
} //# sourceMappingURL=isEip712Transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/assertEip712Transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertEip712Transaction": (()=>assertEip712Transaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$isEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/isEip712Transaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function assertEip712Transaction(transaction) {
    const { chainId, to, from, paymaster, paymasterInput } = transaction;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$isEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEIP712Transaction"])(transaction)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidEip712TransactionError"]();
    if (!chainId || chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (from && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(from)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: from
    });
    if (paymaster && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(paymaster)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: paymaster
    });
    if (paymaster && !paymasterInput) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`paymasterInput` must be provided when `paymaster` is defined');
    }
    if (!paymaster && paymasterInput) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`paymaster` must be provided when `paymasterInput` is defined');
    }
} //# sourceMappingURL=assertEip712Transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/serializers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "serializeTransaction": (()=>serializeTransaction),
    "serializers": (()=>serializers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$assertEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/assertEip712Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$isEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/isEip712Transaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function serializeTransaction(transaction, signature) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$isEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEIP712Transaction"])(transaction)) return serializeTransactionEIP712(transaction);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction, signature);
}
const serializers = {
    transaction: serializeTransaction
};
function serializeTransactionEIP712(transaction) {
    const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$assertEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEip712Transaction"])(transaction);
    const serializedTransaction = [
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(''),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(''),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        from ?? '0x',
        gasPerPubdata ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gasPerPubdata) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gasPerPubdataDefault"]),
        factoryDeps ?? [],
        customSignature ?? '0x',
        paymaster && paymasterInput ? [
            paymaster,
            paymasterInput
        ] : []
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x71',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
} //# sourceMappingURL=serializers.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/errors/bytecode.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BytecodeLengthExceedsMaxSizeError": (()=>BytecodeLengthExceedsMaxSizeError),
    "BytecodeLengthInWordsMustBeOddError": (()=>BytecodeLengthInWordsMustBeOddError),
    "BytecodeLengthMustBeDivisibleBy32Error": (()=>BytecodeLengthMustBeDivisibleBy32Error)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
;
class BytecodeLengthExceedsMaxSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenLength, maxBytecodeSize }){
        super(`Bytecode cannot be longer than ${maxBytecodeSize} bytes. Given length: ${givenLength}`, {
            name: 'BytecodeLengthExceedsMaxSizeError'
        });
    }
}
class BytecodeLengthInWordsMustBeOddError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenLengthInWords }){
        super(`Bytecode length in 32-byte words must be odd. Given length in words: ${givenLengthInWords}`, {
            name: 'BytecodeLengthInWordsMustBeOddError'
        });
    }
}
class BytecodeLengthMustBeDivisibleBy32Error extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenLength }){
        super(`The bytecode length in bytes must be divisible by 32. Given length: ${givenLength}`, {
            name: 'BytecodeLengthMustBeDivisibleBy32Error'
        });
    }
} //# sourceMappingURL=bytecode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/hashBytecode.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hashBytecode": (()=>hashBytecode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/hash/sha256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/errors/bytecode.js [app-ssr] (ecmascript)");
;
;
;
;
;
function hashBytecode(bytecode) {
    const bytecodeBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(bytecode);
    if (bytecodeBytes.length % 32 !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytecodeLengthMustBeDivisibleBy32Error"]({
        givenLength: bytecodeBytes.length
    });
    if (bytecodeBytes.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxBytecodeSize"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytecodeLengthExceedsMaxSizeError"]({
        givenLength: bytecodeBytes.length,
        maxBytecodeSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxBytecodeSize"]
    });
    const hashStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"])(bytecodeBytes);
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(hashStr);
    // Note that the length of the bytecode
    // should be provided in 32-byte words.
    const bytecodeLengthInWords = bytecodeBytes.length / 32;
    if (bytecodeLengthInWords % 2 === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytecodeLengthInWordsMustBeOddError"]({
            givenLengthInWords: bytecodeLengthInWords
        });
    }
    const bytecodeLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(bytecodeLengthInWords);
    // The bytecode should always take the first 2 bytes of the bytecode hash,
    // so we pad it from the left in case the length is smaller than 2 bytes.
    const bytecodeLengthPadded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(bytecodeLength, {
        size: 2
    });
    const codeHashVersion = new Uint8Array([
        1,
        0
    ]);
    hash.set(codeHashVersion, 0);
    hash.set(bytecodeLengthPadded, 2);
    return hash;
} //# sourceMappingURL=hashBytecode.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/getEip712Domain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEip712Domain": (()=>getEip712Domain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$assertEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/assertEip712Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$hashBytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/hashBytecode.js [app-ssr] (ecmascript)");
;
;
;
;
const getEip712Domain = (transaction)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$assertEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEip712Transaction"])(transaction);
    const message = transactionToMessage(transaction);
    return {
        domain: {
            name: 'zkSync',
            version: '2',
            chainId: transaction.chainId
        },
        types: {
            Transaction: [
                {
                    name: 'txType',
                    type: 'uint256'
                },
                {
                    name: 'from',
                    type: 'uint256'
                },
                {
                    name: 'to',
                    type: 'uint256'
                },
                {
                    name: 'gasLimit',
                    type: 'uint256'
                },
                {
                    name: 'gasPerPubdataByteLimit',
                    type: 'uint256'
                },
                {
                    name: 'maxFeePerGas',
                    type: 'uint256'
                },
                {
                    name: 'maxPriorityFeePerGas',
                    type: 'uint256'
                },
                {
                    name: 'paymaster',
                    type: 'uint256'
                },
                {
                    name: 'nonce',
                    type: 'uint256'
                },
                {
                    name: 'value',
                    type: 'uint256'
                },
                {
                    name: 'data',
                    type: 'bytes'
                },
                {
                    name: 'factoryDeps',
                    type: 'bytes32[]'
                },
                {
                    name: 'paymasterInput',
                    type: 'bytes'
                }
            ]
        },
        primaryType: 'Transaction',
        message: message
    };
};
//////////////////////////////////////////////////////////////////////////////
// Utilities
function transactionToMessage(transaction) {
    const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
    return {
        txType: 113n,
        from: BigInt(from),
        to: to ? BigInt(to) : 0n,
        gasLimit: gas ?? 0n,
        gasPerPubdataByteLimit: gasPerPubdata ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gasPerPubdataDefault"],
        maxFeePerGas: maxFeePerGas ?? 0n,
        maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
        paymaster: paymaster ? BigInt(paymaster) : 0n,
        nonce: nonce ? BigInt(nonce) : 0n,
        value: value ?? 0n,
        data: data ? data : '0x0',
        factoryDeps: factoryDeps?.map((dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$hashBytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashBytecode"])(dep))) ?? [],
        paymasterInput: paymasterInput ? paymasterInput : '0x'
    };
} //# sourceMappingURL=getEip712Domain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/chainConfig.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "chainConfig": (()=>chainConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/serializers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$getEip712Domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/getEip712Domain.js [app-ssr] (ecmascript)");
;
;
;
const chainConfig = {
    formatters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"],
    serializers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializers"],
    custom: {
        getEip712Domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$getEip712Domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEip712Domain"]
    }
}; //# sourceMappingURL=chainConfig.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/abis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* [ContractDeployer](https://github.com/matter-labs/era-system-contracts/blob/main/contracts/ContractDeployer.sol) */ __turbopack_context__.s({
    "bridgehubAbi": (()=>bridgehubAbi),
    "contractDeployerAbi": (()=>contractDeployerAbi),
    "ethTokenAbi": (()=>ethTokenAbi),
    "l1SharedBridgeAbi": (()=>l1SharedBridgeAbi),
    "l2SharedBridgeAbi": (()=>l2SharedBridgeAbi),
    "paymasterAbi": (()=>paymasterAbi),
    "zksyncAbi": (()=>zksyncAbi)
});
const contractDeployerAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'accountAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'enum IContractDeployer.AccountNonceOrdering',
                name: 'nonceOrdering',
                type: 'uint8'
            }
        ],
        name: 'AccountNonceOrderingUpdated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'accountAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'enum IContractDeployer.AccountAbstractionVersion',
                name: 'aaVersion',
                type: 'uint8'
            }
        ],
        name: 'AccountVersionUpdated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'deployerAddress',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'bytecodeHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'contractAddress',
                type: 'address'
            }
        ],
        name: 'ContractDeployed',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_salt',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: '_bytecodeHash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: '_input',
                type: 'bytes'
            }
        ],
        name: 'create',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_salt',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: '_bytecodeHash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: '_input',
                type: 'bytes'
            }
        ],
        name: 'create2',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_salt',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: '_bytecodeHash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: '_input',
                type: 'bytes'
            },
            {
                internalType: 'enum IContractDeployer.AccountAbstractionVersion',
                name: '_aaVersion',
                type: 'uint8'
            }
        ],
        name: 'create2Account',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: '_bytecodeHash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: '_input',
                type: 'bytes'
            },
            {
                internalType: 'enum IContractDeployer.AccountAbstractionVersion',
                name: '_aaVersion',
                type: 'uint8'
            }
        ],
        name: 'createAccount',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_address',
                type: 'address'
            }
        ],
        name: 'extendedAccountVersion',
        outputs: [
            {
                internalType: 'enum IContractDeployer.AccountAbstractionVersion',
                name: '',
                type: 'uint8'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_keccak256BytecodeHash',
                type: 'bytes32'
            }
        ],
        name: 'forceDeployKeccak256',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'bytecodeHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'address',
                        name: 'newAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'bool',
                        name: 'callConstructor',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'input',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct ContractDeployer.ForceDeployment',
                name: '_deployment',
                type: 'tuple'
            },
            {
                internalType: 'address',
                name: '_sender',
                type: 'address'
            }
        ],
        name: 'forceDeployOnAddress',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'bytecodeHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'address',
                        name: 'newAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'bool',
                        name: 'callConstructor',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'input',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct ContractDeployer.ForceDeployment[]',
                name: '_deployments',
                type: 'tuple[]'
            }
        ],
        name: 'forceDeployOnAddresses',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_address',
                type: 'address'
            }
        ],
        name: 'getAccountInfo',
        outputs: [
            {
                components: [
                    {
                        internalType: 'enum IContractDeployer.AccountAbstractionVersion',
                        name: 'supportedAAVersion',
                        type: 'uint8'
                    },
                    {
                        internalType: 'enum IContractDeployer.AccountNonceOrdering',
                        name: 'nonceOrdering',
                        type: 'uint8'
                    }
                ],
                internalType: 'struct IContractDeployer.AccountInfo',
                name: 'info',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_sender',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_senderNonce',
                type: 'uint256'
            }
        ],
        name: 'getNewAddressCreate',
        outputs: [
            {
                internalType: 'address',
                name: 'newAddress',
                type: 'address'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_sender',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: '_bytecodeHash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: '_salt',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: '_input',
                type: 'bytes'
            }
        ],
        name: 'getNewAddressCreate2',
        outputs: [
            {
                internalType: 'address',
                name: 'newAddress',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'enum IContractDeployer.AccountAbstractionVersion',
                name: '_version',
                type: 'uint8'
            }
        ],
        name: 'updateAccountVersion',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'enum IContractDeployer.AccountNonceOrdering',
                name: '_nonceOrdering',
                type: 'uint8'
            }
        ],
        name: 'updateNonceOrdering',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
const paymasterAbi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_token',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_minAllowance',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '_innerInput',
                type: 'bytes'
            }
        ],
        name: 'approvalBased',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'input',
                type: 'bytes'
            }
        ],
        name: 'general',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
const l2SharedBridgeAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'l1Sender',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'l2Receiver',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'l2Token',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'FinalizeDeposit',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'l2Sender',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'l1Receiver',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'l2Token',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'WithdrawalInitiated',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_l1Sender',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_l2Receiver',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_l1Token',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes'
            }
        ],
        name: 'finalizeDeposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'l1Bridge',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'l1SharedBridge',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_l2Token',
                type: 'address'
            }
        ],
        name: 'l1TokenAddress',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_l1Token',
                type: 'address'
            }
        ],
        name: 'l2TokenAddress',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_l1Receiver',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_l2Token',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            }
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
const l1SharedBridgeAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'l1Token',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'BridgehubDepositBaseTokenInitiated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'txDataHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'l2DepositTxHash',
                type: 'bytes32'
            }
        ],
        name: 'BridgehubDepositFinalized',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'txDataHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'l1Token',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'BridgehubDepositInitiated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'l1Token',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'ClaimedFailedDepositSharedBridge',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'l2DepositTxHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'l1Token',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'LegacyDepositInitiated',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'l1Token',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'WithdrawalFinalizedSharedBridge',
        type: 'event'
    },
    {
        inputs: [],
        name: 'BRIDGE_HUB',
        outputs: [
            {
                internalType: 'contract IBridgehub',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'L1_WETH_TOKEN',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'bytes32',
                name: '_txDataHash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes32',
                name: '_txHash',
                type: 'bytes32'
            }
        ],
        name: 'bridgehubConfirmL2Transaction',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '_prevMsgSender',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_l2Value',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes'
            }
        ],
        name: 'bridgehubDeposit',
        outputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'magicValue',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'address',
                        name: 'l2Contract',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'l2Calldata',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes[]',
                        name: 'factoryDeps',
                        type: 'bytes[]'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'txDataHash',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct L2TransactionRequestTwoBridgesInner',
                name: 'request',
                type: 'tuple'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '_prevMsgSender',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_l1Token',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            }
        ],
        name: 'bridgehubDepositBaseToken',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '_depositSender',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_l1Token',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            },
            {
                internalType: 'bytes32',
                name: '_l2TxHash',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            },
            {
                internalType: 'uint16',
                name: '_l2TxNumberInBatch',
                type: 'uint16'
            },
            {
                internalType: 'bytes32[]',
                name: '_merkleProof',
                type: 'bytes32[]'
            }
        ],
        name: 'claimFailedDeposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_depositSender',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_l1Token',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            },
            {
                internalType: 'bytes32',
                name: '_l2TxHash',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            },
            {
                internalType: 'uint16',
                name: '_l2TxNumberInBatch',
                type: 'uint16'
            },
            {
                internalType: 'bytes32[]',
                name: '_merkleProof',
                type: 'bytes32[]'
            }
        ],
        name: 'claimFailedDepositLegacyErc20Bridge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'bytes32',
                name: '_l2TxHash',
                type: 'bytes32'
            }
        ],
        name: 'depositHappened',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_msgSender',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_l2Receiver',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_l1Token',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2TxGasLimit',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2TxGasPerPubdataByte',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '_refundRecipient',
                type: 'address'
            }
        ],
        name: 'depositLegacyErc20Bridge',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'txHash',
                type: 'bytes32'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            },
            {
                internalType: 'uint16',
                name: '_l2TxNumberInBatch',
                type: 'uint16'
            },
            {
                internalType: 'bytes',
                name: '_message',
                type: 'bytes'
            },
            {
                internalType: 'bytes32[]',
                name: '_merkleProof',
                type: 'bytes32[]'
            }
        ],
        name: 'finalizeWithdrawal',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            },
            {
                internalType: 'uint16',
                name: '_l2TxNumberInBatch',
                type: 'uint16'
            },
            {
                internalType: 'bytes',
                name: '_message',
                type: 'bytes'
            },
            {
                internalType: 'bytes32[]',
                name: '_merkleProof',
                type: 'bytes32[]'
            }
        ],
        name: 'finalizeWithdrawalLegacyErc20Bridge',
        outputs: [
            {
                internalType: 'address',
                name: 'l1Receiver',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'l1Token',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            }
        ],
        name: 'isWithdrawalFinalized',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            }
        ],
        name: 'l2BridgeAddress',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'legacyBridge',
        outputs: [
            {
                internalType: 'contract IL1ERC20Bridge',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            }
        ],
        name: 'receiveEth',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_eraLegacyBridgeLastDepositBatch',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_eraLegacyBridgeLastDepositTxNumber',
                type: 'uint256'
            }
        ],
        name: 'setEraLegacyBridgeLastDepositTime',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_eraPostDiamondUpgradeFirstBatch',
                type: 'uint256'
            }
        ],
        name: 'setEraPostDiamondUpgradeFirstBatch',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_eraPostLegacyBridgeUpgradeFirstBatch',
                type: 'uint256'
            }
        ],
        name: 'setEraPostLegacyBridgeUpgradeFirstBatch',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
const ethTokenAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Mint',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_l2Sender',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_l1Receiver',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            }
        ],
        name: 'Withdrawal',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: '_l2Sender',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: '_l1Receiver',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: '_additionalData',
                type: 'bytes'
            }
        ],
        name: 'WithdrawalWithMessage',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'decimals',
        outputs: [
            {
                internalType: 'uint8',
                name: '',
                type: 'uint8'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_account',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            }
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            }
        ],
        name: 'transferFromTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_l1Receiver',
                type: 'address'
            }
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_l1Receiver',
                type: 'address'
            },
            {
                internalType: 'bytes',
                name: '_additionalData',
                type: 'bytes'
            }
        ],
        name: 'withdrawWithMessage',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    }
];
const bridgehubAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'oldAdmin',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newAdmin',
                type: 'address'
            }
        ],
        name: 'NewAdmin',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'stateTransitionManager',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'chainGovernance',
                type: 'address'
            }
        ],
        name: 'NewChain',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'oldPendingAdmin',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newPendingAdmin',
                type: 'address'
            }
        ],
        name: 'NewPendingAdmin',
        type: 'event'
    },
    {
        inputs: [],
        name: 'acceptAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_stateTransitionManager',
                type: 'address'
            }
        ],
        name: 'addStateTransitionManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_token',
                type: 'address'
            }
        ],
        name: 'addToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            }
        ],
        name: 'baseToken',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '_stateTransitionManager',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_baseToken',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_salt',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '_admin',
                type: 'address'
            },
            {
                internalType: 'bytes',
                name: '_initData',
                type: 'bytes'
            }
        ],
        name: 'createNewChain',
        outputs: [
            {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            }
        ],
        name: 'getHyperchain',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_gasPrice',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2GasLimit',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2GasPerPubdataByteLimit',
                type: 'uint256'
            }
        ],
        name: 'l2TransactionBaseCost',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'bytes32',
                name: '_l2TxHash',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            },
            {
                internalType: 'uint16',
                name: '_l2TxNumberInBatch',
                type: 'uint16'
            },
            {
                internalType: 'bytes32[]',
                name: '_merkleProof',
                type: 'bytes32[]'
            },
            {
                internalType: 'enum TxStatus',
                name: '_status',
                type: 'uint8'
            }
        ],
        name: 'proveL1ToL2TransactionStatus',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_batchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_index',
                type: 'uint256'
            },
            {
                components: [
                    {
                        internalType: 'uint8',
                        name: 'l2ShardId',
                        type: 'uint8'
                    },
                    {
                        internalType: 'bool',
                        name: 'isService',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint16',
                        name: 'txNumberInBatch',
                        type: 'uint16'
                    },
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'key',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'value',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct L2Log',
                name: '_log',
                type: 'tuple'
            },
            {
                internalType: 'bytes32[]',
                name: '_proof',
                type: 'bytes32[]'
            }
        ],
        name: 'proveL2LogInclusion',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_batchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_index',
                type: 'uint256'
            },
            {
                components: [
                    {
                        internalType: 'uint16',
                        name: 'txNumberInBatch',
                        type: 'uint16'
                    },
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct L2Message',
                name: '_message',
                type: 'tuple'
            },
            {
                internalType: 'bytes32[]',
                name: '_proof',
                type: 'bytes32[]'
            }
        ],
        name: 'proveL2MessageInclusion',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_stateTransitionManager',
                type: 'address'
            }
        ],
        name: 'removeStateTransitionManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'chainId',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'mintValue',
                        type: 'uint256'
                    },
                    {
                        internalType: 'address',
                        name: 'l2Contract',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2Value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'l2Calldata',
                        type: 'bytes'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2GasLimit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2GasPerPubdataByteLimit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes[]',
                        name: 'factoryDeps',
                        type: 'bytes[]'
                    },
                    {
                        internalType: 'address',
                        name: 'refundRecipient',
                        type: 'address'
                    }
                ],
                internalType: 'struct L2TransactionRequestDirect',
                name: '_request',
                type: 'tuple'
            }
        ],
        name: 'requestL2TransactionDirect',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'canonicalTxHash',
                type: 'bytes32'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'chainId',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'mintValue',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2Value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2GasLimit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2GasPerPubdataByteLimit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'address',
                        name: 'refundRecipient',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'secondBridgeAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'secondBridgeValue',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'secondBridgeCalldata',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct L2TransactionRequestTwoBridgesOuter',
                name: '_request',
                type: 'tuple'
            }
        ],
        name: 'requestL2TransactionTwoBridges',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'canonicalTxHash',
                type: 'bytes32'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newPendingAdmin',
                type: 'address'
            }
        ],
        name: 'setPendingAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_sharedBridge',
                type: 'address'
            }
        ],
        name: 'setSharedBridge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'sharedBridge',
        outputs: [
            {
                internalType: 'contract IL1SharedBridge',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            }
        ],
        name: 'stateTransitionManager',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_stateTransitionManager',
                type: 'address'
            }
        ],
        name: 'stateTransitionManagerIsRegistered',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_baseToken',
                type: 'address'
            }
        ],
        name: 'tokenIsRegistered',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
const zksyncAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'batchNumber',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'batchHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'commitment',
                type: 'bytes32'
            }
        ],
        name: 'BlockCommit',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'batchNumber',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'batchHash',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'commitment',
                type: 'bytes32'
            }
        ],
        name: 'BlockExecution',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalBatchesCommitted',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalBatchesVerified',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalBatchesExecuted',
                type: 'uint256'
            }
        ],
        name: 'BlocksRevert',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'previousLastVerifiedBatch',
                type: 'uint256'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'currentLastVerifiedBatch',
                type: 'uint256'
            }
        ],
        name: 'BlocksVerification',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'facet',
                                type: 'address'
                            },
                            {
                                internalType: 'enum Diamond.Action',
                                name: 'action',
                                type: 'uint8'
                            },
                            {
                                internalType: 'bool',
                                name: 'isFreezable',
                                type: 'bool'
                            },
                            {
                                internalType: 'bytes4[]',
                                name: 'selectors',
                                type: 'bytes4[]'
                            }
                        ],
                        internalType: 'struct Diamond.FacetCut[]',
                        name: 'facetCuts',
                        type: 'tuple[]'
                    },
                    {
                        internalType: 'address',
                        name: 'initAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCalldata',
                        type: 'bytes'
                    }
                ],
                indexed: false,
                internalType: 'struct Diamond.DiamondCutData',
                name: 'diamondCut',
                type: 'tuple'
            }
        ],
        name: 'ExecuteUpgrade',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'Freeze',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: 'isPorterAvailable',
                type: 'bool'
            }
        ],
        name: 'IsPorterAvailableStatusUpdate',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'oldAdmin',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newAdmin',
                type: 'address'
            }
        ],
        name: 'NewAdmin',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint128',
                name: 'oldNominator',
                type: 'uint128'
            },
            {
                indexed: false,
                internalType: 'uint128',
                name: 'oldDenominator',
                type: 'uint128'
            },
            {
                indexed: false,
                internalType: 'uint128',
                name: 'newNominator',
                type: 'uint128'
            },
            {
                indexed: false,
                internalType: 'uint128',
                name: 'newDenominator',
                type: 'uint128'
            }
        ],
        name: 'NewBaseTokenMultiplier',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: 'enum PubdataPricingMode',
                        name: 'pubdataPricingMode',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint32',
                        name: 'batchOverheadL1Gas',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'maxPubdataPerBatch',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'maxL2GasPerBatch',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'priorityTxMaxPubdata',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'minimalL2GasPrice',
                        type: 'uint64'
                    }
                ],
                indexed: false,
                internalType: 'struct FeeParams',
                name: 'oldFeeParams',
                type: 'tuple'
            },
            {
                components: [
                    {
                        internalType: 'enum PubdataPricingMode',
                        name: 'pubdataPricingMode',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint32',
                        name: 'batchOverheadL1Gas',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'maxPubdataPerBatch',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'maxL2GasPerBatch',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'priorityTxMaxPubdata',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'minimalL2GasPrice',
                        type: 'uint64'
                    }
                ],
                indexed: false,
                internalType: 'struct FeeParams',
                name: 'newFeeParams',
                type: 'tuple'
            }
        ],
        name: 'NewFeeParams',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'oldPendingAdmin',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newPendingAdmin',
                type: 'address'
            }
        ],
        name: 'NewPendingAdmin',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'txId',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'txHash',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'uint64',
                name: 'expirationTimestamp',
                type: 'uint64'
            },
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'txType',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'from',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'to',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'gasLimit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'gasPerPubdataByteLimit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxFeePerGas',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'paymaster',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256[4]',
                        name: 'reserved',
                        type: 'uint256[4]'
                    },
                    {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'signature',
                        type: 'bytes'
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'factoryDeps',
                        type: 'uint256[]'
                    },
                    {
                        internalType: 'bytes',
                        name: 'paymasterInput',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'reservedDynamic',
                        type: 'bytes'
                    }
                ],
                indexed: false,
                internalType: 'struct L2CanonicalTransaction',
                name: 'transaction',
                type: 'tuple'
            },
            {
                indexed: false,
                internalType: 'bytes[]',
                name: 'factoryDeps',
                type: 'bytes[]'
            }
        ],
        name: 'NewPriorityRequest',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'oldPriorityTxMaxGasLimit',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'newPriorityTxMaxGasLimit',
                type: 'uint256'
            }
        ],
        name: 'NewPriorityTxMaxGasLimit',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'oldTransactionFilterer',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'newTransactionFilterer',
                type: 'address'
            }
        ],
        name: 'NewTransactionFilterer',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'facet',
                                type: 'address'
                            },
                            {
                                internalType: 'enum Diamond.Action',
                                name: 'action',
                                type: 'uint8'
                            },
                            {
                                internalType: 'bool',
                                name: 'isFreezable',
                                type: 'bool'
                            },
                            {
                                internalType: 'bytes4[]',
                                name: 'selectors',
                                type: 'bytes4[]'
                            }
                        ],
                        internalType: 'struct Diamond.FacetCut[]',
                        name: 'facetCuts',
                        type: 'tuple[]'
                    },
                    {
                        internalType: 'address',
                        name: 'initAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCalldata',
                        type: 'bytes'
                    }
                ],
                indexed: false,
                internalType: 'struct Diamond.DiamondCutData',
                name: 'diamondCut',
                type: 'tuple'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'proposalId',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'proposalSalt',
                type: 'bytes32'
            }
        ],
        name: 'ProposeTransparentUpgrade',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'Unfreeze',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'validatorAddress',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'isActive',
                type: 'bool'
            }
        ],
        name: 'ValidatorStatusUpdate',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'enum PubdataPricingMode',
                name: 'validiumMode',
                type: 'uint8'
            }
        ],
        name: 'ValidiumModeStatusUpdate',
        type: 'event'
    },
    {
        inputs: [],
        name: 'acceptAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'baseTokenGasPriceMultiplierDenominator',
        outputs: [
            {
                internalType: 'uint128',
                name: '',
                type: 'uint128'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'baseTokenGasPriceMultiplierNominator',
        outputs: [
            {
                internalType: 'uint128',
                name: '',
                type: 'uint128'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'address',
                        name: 'contractL2',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'mintValue',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2Value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'l2Calldata',
                        type: 'bytes'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2GasLimit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'uint256',
                        name: 'l2GasPerPubdataByteLimit',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes[]',
                        name: 'factoryDeps',
                        type: 'bytes[]'
                    },
                    {
                        internalType: 'address',
                        name: 'refundRecipient',
                        type: 'address'
                    }
                ],
                internalType: 'struct BridgehubL2TransactionRequest',
                name: '_request',
                type: 'tuple'
            }
        ],
        name: 'bridgehubRequestL2Transaction',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'canonicalTxHash',
                type: 'bytes32'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'enum PubdataPricingMode',
                        name: 'pubdataPricingMode',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint32',
                        name: 'batchOverheadL1Gas',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'maxPubdataPerBatch',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'maxL2GasPerBatch',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint32',
                        name: 'priorityTxMaxPubdata',
                        type: 'uint32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'minimalL2GasPrice',
                        type: 'uint64'
                    }
                ],
                internalType: 'struct FeeParams',
                name: '_newFeeParams',
                type: 'tuple'
            }
        ],
        name: 'changeFeeParams',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'batchHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'l2LogsTreeRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct IExecutor.StoredBatchInfo',
                name: '_lastCommittedBatchData',
                type: 'tuple'
            },
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint64',
                        name: 'timestamp',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'newStateRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'bootloaderHeapInitialContentsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'eventsQueueStateHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes',
                        name: 'systemLogs',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'pubdataCommitments',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct IExecutor.CommitBatchInfo[]',
                name: '_newBatchesData',
                type: 'tuple[]'
            }
        ],
        name: 'commitBatches',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'batchHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'l2LogsTreeRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct IExecutor.StoredBatchInfo',
                name: '_lastCommittedBatchData',
                type: 'tuple'
            },
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint64',
                        name: 'timestamp',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'newStateRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'bootloaderHeapInitialContentsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'eventsQueueStateHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes',
                        name: 'systemLogs',
                        type: 'bytes'
                    },
                    {
                        internalType: 'bytes',
                        name: 'pubdataCommitments',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct IExecutor.CommitBatchInfo[]',
                name: '_newBatchesData',
                type: 'tuple[]'
            }
        ],
        name: 'commitBatchesSharedBridge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'batchHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'l2LogsTreeRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct IExecutor.StoredBatchInfo[]',
                name: '_batchesData',
                type: 'tuple[]'
            }
        ],
        name: 'executeBatches',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'batchHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'l2LogsTreeRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct IExecutor.StoredBatchInfo[]',
                name: '_batchesData',
                type: 'tuple[]'
            }
        ],
        name: 'executeBatchesSharedBridge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'facet',
                                type: 'address'
                            },
                            {
                                internalType: 'enum Diamond.Action',
                                name: 'action',
                                type: 'uint8'
                            },
                            {
                                internalType: 'bool',
                                name: 'isFreezable',
                                type: 'bool'
                            },
                            {
                                internalType: 'bytes4[]',
                                name: 'selectors',
                                type: 'bytes4[]'
                            }
                        ],
                        internalType: 'struct Diamond.FacetCut[]',
                        name: 'facetCuts',
                        type: 'tuple[]'
                    },
                    {
                        internalType: 'address',
                        name: 'initAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCalldata',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct Diamond.DiamondCutData',
                name: '_diamondCut',
                type: 'tuple'
            }
        ],
        name: 'executeUpgrade',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: '_selector',
                type: 'bytes4'
            }
        ],
        name: 'facetAddress',
        outputs: [
            {
                internalType: 'address',
                name: 'facet',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'facetAddresses',
        outputs: [
            {
                internalType: 'address[]',
                name: 'facets',
                type: 'address[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_facet',
                type: 'address'
            }
        ],
        name: 'facetFunctionSelectors',
        outputs: [
            {
                internalType: 'bytes4[]',
                name: '',
                type: 'bytes4[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'facets',
        outputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'addr',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes4[]',
                        name: 'selectors',
                        type: 'bytes4[]'
                    }
                ],
                internalType: 'struct IGetters.Facet[]',
                name: '',
                type: 'tuple[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            },
            {
                internalType: 'uint16',
                name: '_l2TxNumberInBatch',
                type: 'uint16'
            },
            {
                internalType: 'bytes',
                name: '_message',
                type: 'bytes'
            },
            {
                internalType: 'bytes32[]',
                name: '_merkleProof',
                type: 'bytes32[]'
            }
        ],
        name: 'finalizeEthWithdrawal',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'freezeDiamond',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getAdmin',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getBaseToken',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getBaseTokenBridge',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getBridgehub',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getFirstUnprocessedPriorityTx',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getL2BootloaderBytecodeHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getL2DefaultAccountBytecodeHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getL2SystemContractsUpgradeBatchNumber',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getL2SystemContractsUpgradeTxHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getName',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPendingAdmin',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPriorityQueueSize',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPriorityTxMaxGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getProtocolVersion',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPubdataPricingMode',
        outputs: [
            {
                internalType: 'enum PubdataPricingMode',
                name: '',
                type: 'uint8'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getSemverProtocolVersion',
        outputs: [
            {
                internalType: 'uint32',
                name: '',
                type: 'uint32'
            },
            {
                internalType: 'uint32',
                name: '',
                type: 'uint32'
            },
            {
                internalType: 'uint32',
                name: '',
                type: 'uint32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getStateTransitionManager',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getTotalBatchesCommitted',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getTotalBatchesExecuted',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getTotalBatchesVerified',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getTotalPriorityTxs',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getVerifier',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getVerifierParams',
        outputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'recursionNodeLevelVkHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'recursionLeafLevelVkHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'recursionCircuitsSetVksHash',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct VerifierParams',
                name: '',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'isDiamondStorageFrozen',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            }
        ],
        name: 'isEthWithdrawalFinalized',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_facet',
                type: 'address'
            }
        ],
        name: 'isFacetFreezable',
        outputs: [
            {
                internalType: 'bool',
                name: 'isFreezable',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: '_selector',
                type: 'bytes4'
            }
        ],
        name: 'isFunctionFreezable',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_address',
                type: 'address'
            }
        ],
        name: 'isValidator',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_batchNumber',
                type: 'uint256'
            }
        ],
        name: 'l2LogsRootHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'merkleRoot',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_gasPrice',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2GasLimit',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2GasPerPubdataByteLimit',
                type: 'uint256'
            }
        ],
        name: 'l2TransactionBaseCost',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'priorityQueueFrontOperation',
        outputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'canonicalTxHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'expirationTimestamp',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint192',
                        name: 'layer2Tip',
                        type: 'uint192'
                    }
                ],
                internalType: 'struct PriorityOperation',
                name: '',
                type: 'tuple'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'batchHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'l2LogsTreeRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct IExecutor.StoredBatchInfo',
                name: '_prevBatch',
                type: 'tuple'
            },
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'batchHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'l2LogsTreeRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct IExecutor.StoredBatchInfo[]',
                name: '_committedBatches',
                type: 'tuple[]'
            },
            {
                components: [
                    {
                        internalType: 'uint256[]',
                        name: 'recursiveAggregationInput',
                        type: 'uint256[]'
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'serializedProof',
                        type: 'uint256[]'
                    }
                ],
                internalType: 'struct IExecutor.ProofInput',
                name: '_proof',
                type: 'tuple'
            }
        ],
        name: 'proveBatches',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'batchHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'l2LogsTreeRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct IExecutor.StoredBatchInfo',
                name: '_prevBatch',
                type: 'tuple'
            },
            {
                components: [
                    {
                        internalType: 'uint64',
                        name: 'batchNumber',
                        type: 'uint64'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'batchHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint64',
                        name: 'indexRepeatedStorageChanges',
                        type: 'uint64'
                    },
                    {
                        internalType: 'uint256',
                        name: 'numberOfLayer1Txs',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'priorityOperationsHash',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'l2LogsTreeRoot',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'uint256',
                        name: 'timestamp',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'commitment',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct IExecutor.StoredBatchInfo[]',
                name: '_committedBatches',
                type: 'tuple[]'
            },
            {
                components: [
                    {
                        internalType: 'uint256[]',
                        name: 'recursiveAggregationInput',
                        type: 'uint256[]'
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'serializedProof',
                        type: 'uint256[]'
                    }
                ],
                internalType: 'struct IExecutor.ProofInput',
                name: '_proof',
                type: 'tuple'
            }
        ],
        name: 'proveBatchesSharedBridge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_l2TxHash',
                type: 'bytes32'
            },
            {
                internalType: 'uint256',
                name: '_l2BatchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2MessageIndex',
                type: 'uint256'
            },
            {
                internalType: 'uint16',
                name: '_l2TxNumberInBatch',
                type: 'uint16'
            },
            {
                internalType: 'bytes32[]',
                name: '_merkleProof',
                type: 'bytes32[]'
            },
            {
                internalType: 'enum TxStatus',
                name: '_status',
                type: 'uint8'
            }
        ],
        name: 'proveL1ToL2TransactionStatus',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_batchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_index',
                type: 'uint256'
            },
            {
                components: [
                    {
                        internalType: 'uint8',
                        name: 'l2ShardId',
                        type: 'uint8'
                    },
                    {
                        internalType: 'bool',
                        name: 'isService',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint16',
                        name: 'txNumberInBatch',
                        type: 'uint16'
                    },
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'key',
                        type: 'bytes32'
                    },
                    {
                        internalType: 'bytes32',
                        name: 'value',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct L2Log',
                name: '_log',
                type: 'tuple'
            },
            {
                internalType: 'bytes32[]',
                name: '_proof',
                type: 'bytes32[]'
            }
        ],
        name: 'proveL2LogInclusion',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_batchNumber',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_index',
                type: 'uint256'
            },
            {
                components: [
                    {
                        internalType: 'uint16',
                        name: 'txNumberInBatch',
                        type: 'uint16'
                    },
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'data',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct L2Message',
                name: '_message',
                type: 'tuple'
            },
            {
                internalType: 'bytes32[]',
                name: '_proof',
                type: 'bytes32[]'
            }
        ],
        name: 'proveL2MessageInclusion',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_contractL2',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '_l2Value',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '_calldata',
                type: 'bytes'
            },
            {
                internalType: 'uint256',
                name: '_l2GasLimit',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_l2GasPerPubdataByteLimit',
                type: 'uint256'
            },
            {
                internalType: 'bytes[]',
                name: '_factoryDeps',
                type: 'bytes[]'
            },
            {
                internalType: 'address',
                name: '_refundRecipient',
                type: 'address'
            }
        ],
        name: 'requestL2Transaction',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'canonicalTxHash',
                type: 'bytes32'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_newLastBatch',
                type: 'uint256'
            }
        ],
        name: 'revertBatches',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_chainId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_newLastBatch',
                type: 'uint256'
            }
        ],
        name: 'revertBatchesSharedBridge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newPendingAdmin',
                type: 'address'
            }
        ],
        name: 'setPendingAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: '_zkPorterIsAvailable',
                type: 'bool'
            }
        ],
        name: 'setPorterAvailability',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_newPriorityTxMaxGasLimit',
                type: 'uint256'
            }
        ],
        name: 'setPriorityTxMaxGasLimit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'enum PubdataPricingMode',
                name: '_pricingMode',
                type: 'uint8'
            }
        ],
        name: 'setPubdataPricingMode',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint128',
                name: '_nominator',
                type: 'uint128'
            },
            {
                internalType: 'uint128',
                name: '_denominator',
                type: 'uint128'
            }
        ],
        name: 'setTokenMultiplier',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_transactionFilterer',
                type: 'address'
            }
        ],
        name: 'setTransactionFilterer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_validator',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: '_active',
                type: 'bool'
            }
        ],
        name: 'setValidator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_batchNumber',
                type: 'uint256'
            }
        ],
        name: 'storedBatchHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'transferEthToSharedBridge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'unfreezeDiamond',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_protocolVersion',
                type: 'uint256'
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'facet',
                                type: 'address'
                            },
                            {
                                internalType: 'enum Diamond.Action',
                                name: 'action',
                                type: 'uint8'
                            },
                            {
                                internalType: 'bool',
                                name: 'isFreezable',
                                type: 'bool'
                            },
                            {
                                internalType: 'bytes4[]',
                                name: 'selectors',
                                type: 'bytes4[]'
                            }
                        ],
                        internalType: 'struct Diamond.FacetCut[]',
                        name: 'facetCuts',
                        type: 'tuple[]'
                    },
                    {
                        internalType: 'address',
                        name: 'initAddress',
                        type: 'address'
                    },
                    {
                        internalType: 'bytes',
                        name: 'initCalldata',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct Diamond.DiamondCutData',
                name: '_cutData',
                type: 'tuple'
            }
        ],
        name: 'upgradeChainFromVersion',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
]; //# sourceMappingURL=abis.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/contract.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "accountAbstractionVersion1": (()=>accountAbstractionVersion1)
});
const accountAbstractionVersion1 = 1; //# sourceMappingURL=contract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "encodeDeployData": (()=>encodeDeployData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/constants/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/abis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$hashBytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/hashBytecode.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const docsPath = '/docs/contract/encodeDeployData';
function encodeDeployData(parameters) {
    const { abi, args, bytecode, deploymentType, salt } = parameters;
    if (!args || args.length === 0) {
        const { functionName, argsContractDeployer } = getDeploymentDetails(deploymentType, salt ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroHash"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$hashBytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashBytecode"])(bytecode)), '0x');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contractDeployerAbi"],
            functionName,
            args: argsContractDeployer
        });
    }
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorNotFoundError"]({
        docsPath
    });
    if (!('inputs' in description)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorParamsNotFoundError"]({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorParamsNotFoundError"]({
        docsPath
    });
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])(description.inputs, args);
    const { functionName, argsContractDeployer } = getDeploymentDetails(deploymentType, salt ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroHash"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$hashBytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashBytecode"])(bytecode)), data);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contractDeployerAbi"],
        functionName,
        args: argsContractDeployer
    });
}
function getDeploymentDetails(deploymentType, salt, bytecodeHash, data) {
    const contractDeploymentArgs = [
        salt,
        bytecodeHash,
        data
    ];
    const deploymentOptions = {
        create: {
            functionName: 'create',
            argsContractDeployer: contractDeploymentArgs
        },
        create2: {
            functionName: 'create2',
            argsContractDeployer: contractDeploymentArgs
        },
        createAccount: {
            functionName: 'createAccount',
            argsContractDeployer: [
                ...contractDeploymentArgs,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accountAbstractionVersion1"]
            ]
        },
        create2Account: {
            functionName: 'create2Account',
            argsContractDeployer: [
                ...contractDeploymentArgs,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accountAbstractionVersion1"]
            ]
        }
    };
    const deploymentKey = deploymentType || 'create';
    return deploymentOptions[deploymentKey];
} //# sourceMappingURL=encodeDeployData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/estimateFee.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateFee": (()=>estimateFee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
;
;
async function estimateFee(client, parameters) {
    const { account: account_, ...request } = parameters;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : client.account;
    const formatters = client.chain?.formatters;
    const formatted = formatters?.transactionRequest?.format({
        ...request,
        from: account?.address
    });
    const result = await client.request({
        method: 'zks_estimateFee',
        params: [
            formatted
        ]
    });
    return {
        gasLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(result.gas_limit),
        gasPerPubdataLimit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(result.gas_per_pubdata_limit),
        maxPriorityFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(result.max_priority_fee_per_gas),
        maxFeePerGas: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(result.max_fee_per_gas)
    };
} //# sourceMappingURL=estimateFee.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/estimateGasL1ToL2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "estimateGasL1ToL2": (()=>estimateGasL1ToL2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
;
async function estimateGasL1ToL2(client, parameters) {
    const { account: account_, ...request } = parameters;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : client.account;
    const formatters = client.chain?.formatters;
    const formatted = formatters?.transactionRequest?.format({
        ...request,
        from: account?.address
    });
    const result = await client.request({
        method: 'zks_estimateGasL1ToL2',
        params: [
            formatted
        ]
    });
    return result;
} //# sourceMappingURL=estimateGasL1ToL2.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getAllBalances.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllBalances": (()=>getAllBalances)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
;
;
async function getAllBalances(client, parameters) {
    const { account: account_ } = parameters;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : client.account;
    const balances = await client.request({
        method: 'zks_getAllAccountBalances',
        params: [
            account.address
        ]
    });
    const convertedBalances = {};
    for(const token in balances)convertedBalances[token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(balances[token]);
    return convertedBalances;
} //# sourceMappingURL=getAllBalances.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getBaseTokenL1Address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBaseTokenL1Address": (()=>getBaseTokenL1Address)
});
async function getBaseTokenL1Address(client) {
    const result = await client.request({
        method: 'zks_getBaseTokenL1Address'
    });
    return result;
} //# sourceMappingURL=getBaseTokenL1Address.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getBlockDetails.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBlockDetails": (()=>getBlockDetails)
});
async function getBlockDetails(client, parameters) {
    const result = await client.request({
        method: 'zks_getBlockDetails',
        params: [
            parameters.number
        ]
    });
    return result;
} //# sourceMappingURL=getBlockDetails.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getBridgehubContractAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBridgehubContractAddress": (()=>getBridgehubContractAddress)
});
async function getBridgehubContractAddress(client) {
    const result = await client.request({
        method: 'zks_getBridgehubContract'
    });
    return result;
} //# sourceMappingURL=getBridgehubContractAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getDefaultBridgeAddresses.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDefaultBridgeAddresses": (()=>getDefaultBridgeAddresses)
});
async function getDefaultBridgeAddresses(client) {
    const addresses = await client.request({
        method: 'zks_getBridgeContracts'
    });
    return {
        erc20L1: addresses.l1Erc20DefaultBridge,
        sharedL1: addresses.l1SharedDefaultBridge,
        sharedL2: addresses.l2SharedDefaultBridge
    };
} //# sourceMappingURL=getDefaultBridgeAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1BatchBlockRange.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getL1BatchBlockRange": (()=>getL1BatchBlockRange)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
;
async function getL1BatchBlockRange(client, parameters) {
    const [number_1, number_2] = await client.request({
        method: 'zks_getL1BatchBlockRange',
        params: [
            parameters.l1BatchNumber
        ]
    });
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(number_1),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(number_2)
    ];
} //# sourceMappingURL=getL1BatchBlockRange.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1BatchDetails.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getL1BatchDetails": (()=>getL1BatchDetails)
});
async function getL1BatchDetails(client, parameters) {
    const result = await client.request({
        method: 'zks_getL1BatchDetails',
        params: [
            parameters.number
        ]
    });
    return result;
} //# sourceMappingURL=getL1BatchDetails.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1BatchNumber.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getL1BatchNumber": (()=>getL1BatchNumber)
});
async function getL1BatchNumber(client) {
    const result = await client.request({
        method: 'zks_L1BatchNumber'
    });
    return result;
} //# sourceMappingURL=getL1BatchNumber.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1ChainId.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getL1ChainId": (()=>getL1ChainId)
});
async function getL1ChainId(client) {
    const result = await client.request({
        method: 'zks_L1ChainId'
    });
    return result;
} //# sourceMappingURL=getL1ChainId.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addressModulo": (()=>addressModulo),
    "contract2FactoryAddress": (()=>contract2FactoryAddress),
    "contractDeployerAddress": (()=>contractDeployerAddress),
    "ethAddressInContracts": (()=>ethAddressInContracts),
    "l1MessengerAddress": (()=>l1MessengerAddress),
    "l1ToL2AliasOffset": (()=>l1ToL2AliasOffset),
    "l2BaseTokenAddress": (()=>l2BaseTokenAddress),
    "legacyEthAddress": (()=>legacyEthAddress)
});
const contractDeployerAddress = '0x0000000000000000000000000000000000008006';
const contract2FactoryAddress = '0x0000000000000000000000000000000000010000';
const legacyEthAddress = '0x0000000000000000000000000000000000000000';
const ethAddressInContracts = '0x0000000000000000000000000000000000000001';
const l2BaseTokenAddress = '0x000000000000000000000000000000000000800a';
const l1MessengerAddress = '0x0000000000000000000000000000000000008008';
const l1ToL2AliasOffset = '0x1111000000000000000000000000000000001111';
const addressModulo = 2n ** 160n; //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1TokenAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getL1TokenAddress": (()=>getL1TokenAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/abis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getDefaultBridgeAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getDefaultBridgeAddresses.js [app-ssr] (ecmascript)");
;
;
;
;
;
async function getL1TokenAddress(client, parameters) {
    const { token } = parameters;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(token, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["legacyEthAddress"])) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["legacyEthAddress"];
    const bridgeAddress = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getDefaultBridgeAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultBridgeAddresses"])(client)).sharedL2;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(client, {
        address: bridgeAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l2SharedBridgeAbi"],
        functionName: 'l1TokenAddress',
        args: [
            token
        ]
    });
} //# sourceMappingURL=getL1TokenAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL2TokenAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getL2TokenAddress": (()=>getL2TokenAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/abis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/constants/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getBaseTokenL1Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getBaseTokenL1Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getDefaultBridgeAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getDefaultBridgeAddresses.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
async function getL2TokenAddress(client, parameters) {
    let { token, bridgeAddress } = parameters;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(token, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["legacyEthAddress"])) token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ethAddressInContracts"];
    const baseToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getBaseTokenL1Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseTokenL1Address"])(client);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(token, baseToken)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l2BaseTokenAddress"];
    bridgeAddress ??= (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getDefaultBridgeAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultBridgeAddresses"])(client)).sharedL2;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(client, {
        address: bridgeAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l2SharedBridgeAbi"],
        functionName: 'l2TokenAddress',
        args: [
            token
        ]
    });
} //# sourceMappingURL=getL2TokenAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getLogProof.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLogProof": (()=>getLogProof)
});
async function getLogProof(client, parameters) {
    const result = await client.request({
        method: 'zks_getL2ToL1LogProof',
        params: [
            parameters.txHash,
            parameters.index
        ]
    });
    return result;
} //# sourceMappingURL=getLogProof.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getMainContractAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMainContractAddress": (()=>getMainContractAddress)
});
async function getMainContractAddress(client) {
    const address = await client.request({
        method: 'zks_getMainContract'
    });
    return address;
} //# sourceMappingURL=getMainContractAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/camelCaseKeys.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "camelCaseKeys": (()=>camelCaseKeys)
});
function camelCaseKeys(response) {
    if (!response) return response;
    if (typeof response !== 'object') return response;
    if (Array.isArray(response)) return response.map(camelCaseKeys);
    return Object.fromEntries(Object.entries(response).map(([key, value])=>[
            key.replace(/_([a-z])/g, (_, letter)=>letter.toUpperCase()),
            camelCaseKeys(value)
        ]));
} //# sourceMappingURL=camelCaseKeys.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getRawBlockTransactions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRawBlockTransactions": (()=>getRawBlockTransactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$camelCaseKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/camelCaseKeys.js [app-ssr] (ecmascript)");
;
async function getRawBlockTransactions(client, parameters) {
    const result = await client.request({
        method: 'zks_getRawBlockTransactions',
        params: [
            parameters.number
        ]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$camelCaseKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["camelCaseKeys"])(result);
} //# sourceMappingURL=getRawBlockTransactions.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getTestnetPaymasterAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTestnetPaymasterAddress": (()=>getTestnetPaymasterAddress)
});
async function getTestnetPaymasterAddress(client) {
    const result = await client.request({
        method: 'zks_getTestnetPaymaster'
    });
    return result;
} //# sourceMappingURL=getTestnetPaymasterAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getTransactionDetails.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTransactionDetails": (()=>getTransactionDetails)
});
async function getTransactionDetails(client, parameters) {
    const result = await client.request({
        method: 'zks_getTransactionDetails',
        params: [
            parameters.txHash
        ]
    });
    return result;
} //# sourceMappingURL=getTransactionDetails.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/decorators/publicL2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "publicActionsL2": (()=>publicActionsL2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$estimateFee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/estimateFee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$estimateGasL1ToL2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/estimateGasL1ToL2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getAllBalances$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getAllBalances.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getBaseTokenL1Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getBaseTokenL1Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getBlockDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getBlockDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getBridgehubContractAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getBridgehubContractAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getDefaultBridgeAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getDefaultBridgeAddresses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1BatchBlockRange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1BatchBlockRange.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1BatchDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1BatchDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1BatchNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1BatchNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1ChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1ChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1TokenAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL1TokenAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL2TokenAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getL2TokenAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getLogProof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getLogProof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getMainContractAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getMainContractAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getRawBlockTransactions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getRawBlockTransactions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getTestnetPaymasterAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getTestnetPaymasterAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getTransactionDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/getTransactionDetails.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function publicActionsL2() {
    return (client)=>{
        return {
            estimateGasL1ToL2: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$estimateGasL1ToL2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateGasL1ToL2"])(client, args),
            getDefaultBridgeAddresses: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getDefaultBridgeAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultBridgeAddresses"])(client),
            getTestnetPaymasterAddress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getTestnetPaymasterAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTestnetPaymasterAddress"])(client),
            getL1ChainId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1ChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getL1ChainId"])(client),
            getMainContractAddress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getMainContractAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMainContractAddress"])(client),
            getAllBalances: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getAllBalances$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllBalances"])(client, args),
            getRawBlockTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getRawBlockTransactions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRawBlockTransactions"])(client, args),
            getBlockDetails: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getBlockDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockDetails"])(client, args),
            getL1BatchDetails: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1BatchDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getL1BatchDetails"])(client, args),
            getL1BatchBlockRange: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1BatchBlockRange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getL1BatchBlockRange"])(client, args),
            getL1BatchNumber: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1BatchNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getL1BatchNumber"])(client),
            getLogProof: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getLogProof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLogProof"])(client, args),
            getTransactionDetails: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getTransactionDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionDetails"])(client, args),
            estimateFee: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$estimateFee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateFee"])(client, args),
            getBridgehubContractAddress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getBridgehubContractAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBridgehubContractAddress"])(client),
            getBaseTokenL1Address: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getBaseTokenL1Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseTokenL1Address"])(client),
            getL2TokenAddress: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL2TokenAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getL2TokenAddress"])(client, args),
            getL1TokenAddress: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$getL1TokenAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getL1TokenAddress"])(client, args)
        };
    };
} //# sourceMappingURL=publicL2.js.map
}}),

};

//# sourceMappingURL=ab19e_viem__esm_zksync_ca999a7f._.js.map