(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/core/supabaseClient.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$49$2e$_c1a93ae5b310d8072d541f8e040b1b2d$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.49._c1a93ae5b310d8072d541f8e040b1b2d/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ospgpgpahqgalaufcomo.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcGdwZ3BhaHFnYWxhdWZjb21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NzYzMzIsImV4cCI6MjA2MTE1MjMzMn0.houQzJX0k4S9MbnPODy13rK8oIXq-QwuuRxD9lOjE9s");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$49$2e$_c1a93ae5b310d8072d541f8e040b1b2d$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Clock.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Clock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Clock({ initialSeconds, isRunning, onTimeout, keyProp }) {
    _s();
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSeconds);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clock.useEffect": ()=>{
            setSeconds(initialSeconds);
        }
    }["Clock.useEffect"], [
        initialSeconds,
        keyProp
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clock.useEffect": ()=>{
            if (!isRunning) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                return;
            }
            intervalRef.current = setInterval({
                "Clock.useEffect": ()=>{
                    setSeconds({
                        "Clock.useEffect": (prev)=>{
                            if (prev <= 1) {
                                onTimeout();
                                if (intervalRef.current) clearInterval(intervalRef.current);
                                return 0;
                            }
                            return prev - 1;
                        }
                    }["Clock.useEffect"]);
                }
            }["Clock.useEffect"], 1000);
            return ({
                "Clock.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["Clock.useEffect"];
        }
    }["Clock.useEffect"], [
        isRunning,
        onTimeout
    ]);
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const isLow = seconds < 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-mono text-lg",
        style: {
            color: isLow ? 'var(--danger, red)' : undefined,
            fontWeight: isLow ? 'bold' : undefined
        },
        "aria-live": "polite",
        children: [
            min,
            ":",
            sec.toString().padStart(2, "0")
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Clock.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Clock, "1v6pwnuU8K9JaOr3AnNTrcfHjtw=");
_c = Clock;
var _c;
__turbopack_context__.k.register(_c, "Clock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/StreamerOverlay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StreamerOverlay),
    "formatTime": (()=>formatTime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$chessboard$40$4$2e$7$2e$3_$40$typ_3c2bd4edd7bc90950f5535b8a40240c5$2f$node_modules$2f$react$2d$chessboard$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-chessboard@4.7.3_@typ_3c2bd4edd7bc90950f5535b8a40240c5/node_modules/react-chessboard/dist/index.esm.js [app-client] (ecmascript)");
;
;
function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}
function StreamerOverlay({ fen, whiteName, blackName, whiteTime, blackTime, status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black bg-opacity-60 rounded-lg p-4 flex flex-col items-center w-fit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between w-full mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold",
                        children: [
                            whiteName,
                            " (",
                            formatTime(whiteTime),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/StreamerOverlay.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold",
                        children: [
                            blackName,
                            " (",
                            formatTime(blackTime),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/StreamerOverlay.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/StreamerOverlay.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$chessboard$40$4$2e$7$2e$3_$40$typ_3c2bd4edd7bc90950f5535b8a40240c5$2f$node_modules$2f$react$2d$chessboard$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chessboard"], {
                position: fen,
                boardWidth: 400,
                arePiecesDraggable: false,
                boardOrientation: "white"
            }, void 0, false, {
                fileName: "[project]/src/app/components/StreamerOverlay.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            status !== 'active' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-lg text-red-400",
                children: [
                    "Game Over: ",
                    status
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/StreamerOverlay.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/StreamerOverlay.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = StreamerOverlay;
var _c;
__turbopack_context__.k.register(_c, "StreamerOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/chessboard/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChessGameBoard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$re_a32501d5ed8d9e3962e1bfed818f6f0b$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$react$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-re_a32501d5ed8d9e3962e1bfed818f6f0b/node_modules/@abstract-foundation/agw-react/dist/esm/exports/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$re_a32501d5ed8d9e3962e1bfed818f6f0b$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$react$2f$dist$2f$esm$2f$hooks$2f$useGlobalWalletSignerAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-re_a32501d5ed8d9e3962e1bfed818f6f0b/node_modules/@abstract-foundation/agw-react/dist/esm/hooks/useGlobalWalletSignerAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$2$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/chess.js@1.2.0/node_modules/chess.js/dist/esm/chess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$chessboard$40$4$2e$7$2e$3_$40$typ_3c2bd4edd7bc90950f5535b8a40240c5$2f$node_modules$2f$react$2d$chessboard$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-chessboard@4.7.3_@typ_3c2bd4edd7bc90950f5535b8a40240c5/node_modules/react-chessboard/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/core/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Clock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Clock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$StreamerOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/StreamerOverlay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function getGameIdFromUrl() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const params = new URLSearchParams(window.location.search);
    return params.get("gameId");
}
function isOverlayMode() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const params = new URLSearchParams(window.location.search);
    return params.get("overlay") === "1";
}
function ChessGameBoard() {
    _s();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [opponentReady, setOpponentReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assignedColor, setAssignedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get wallet address for display (must be called at the top level)
    const { address, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$re_a32501d5ed8d9e3962e1bfed818f6f0b$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$react$2f$dist$2f$esm$2f$hooks$2f$useGlobalWalletSignerAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalWalletSignerAccount"])();
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$2$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"]());
    const [gameId, setGameId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [whiteTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5 * 60);
    const [blackTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5 * 60);
    const [activeColor, setActiveColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('w');
    const [gameStatus, setGameStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('active');
    const [blackPlayer, setBlackPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [redirecting, setRedirecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastCaptured, setLastCaptured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [captureAnim, setCaptureAnim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChessGameBoard.useEffect": ()=>{
            const id = getGameIdFromUrl();
            setGameId(id);
            if (!id) {
                return;
            }
            // Fetch moves and reconstruct game
            async function fetchGame() {
                const { data: moves, error: movesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("moves").select("move").eq("game_id", id).order("move_number", {
                    ascending: true
                });
                if (movesError) {
                    return;
                }
                const chess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$2$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"]();
                console.log('[DEBUG] Replaying moves:', moves);
                for (const m of moves || []){
                    const beforeFen = chess.fen();
                    const moveResult = chess.move(m.move);
                    console.log(`[DEBUG] Move: ${m.move}, FEN before: ${beforeFen}, FEN after: ${chess.fen()}, Move result:`, moveResult);
                }
                setGame(chess);
                console.log('[DEBUG] Final FEN after replay:', chess.fen());
            }
            async function fetchPlayers() {
                const { data: games, error: gameError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("games").select("black_player,status,white_player,white_player_id,black_player_id,ready_white,ready_black").eq("id", id).single();
                if (!gameError && games) {
                    setBlackPlayer(games.black_player || null);
                    setGameStatus(games.status);
                    // Ready state logic
                    console.log('[DEBUG] fetchPlayers:', games);
                    if (address && games.white_player === address) {
                        setReady(!!games.ready_white);
                        setOpponentReady(!!games.ready_black);
                    } else if (address && games.black_player === address) {
                        setReady(!!games.ready_black);
                        setOpponentReady(!!games.ready_white);
                    }
                }
            }
            fetchGame();
            fetchPlayers();
            // Real-time subscription
            const sub = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('public:moves').on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'moves',
                filter: `game_id=eq.${id}`
            }, {
                "ChessGameBoard.useEffect.sub": (payload)=>{
                    if (payload.new && payload.new.move) {
                        setGame({
                            "ChessGameBoard.useEffect.sub": (prev)=>{
                                const chess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$2$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"](prev.fen());
                                chess.move(payload.new.move);
                                setActiveColor(chess.turn());
                                return chess;
                            }
                        }["ChessGameBoard.useEffect.sub"]);
                    }
                }
            }["ChessGameBoard.useEffect.sub"]).subscribe();
            // Listen for game status changes and player joins
            const subGame = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('public:games').on('postgres_changes', {
                event: 'UPDATE',
                schema: 'public',
                table: 'games',
                filter: `id=eq.${id}`
            }, {
                "ChessGameBoard.useEffect.subGame": (payload)=>{
                    if (payload.new && payload.new.status) {
                        setGameStatus(payload.new.status);
                    }
                    if (payload.new && payload.new.black_player) {
                        setBlackPlayer(payload.new.black_player);
                    }
                    // Ready state update
                    if (address && payload.new.white_player === address) {
                        setReady(!!payload.new.ready_white);
                        setOpponentReady(!!payload.new.ready_black);
                    } else if (address && payload.new.black_player === address) {
                        setReady(!!payload.new.ready_black);
                        setOpponentReady(!!payload.new.ready_white);
                    }
                }
            }["ChessGameBoard.useEffect.subGame"]).subscribe();
            return ({
                "ChessGameBoard.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(sub);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(subGame);
                }
            })["ChessGameBoard.useEffect"];
        }
    }["ChessGameBoard.useEffect"], [
        address
    ]);
    // Ready logic and color assignment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChessGameBoard.useEffect": ()=>{
            if (gameStatus === 'waiting' && blackPlayer && opponentReady && ready && !assignedColor && gameId) {
                // Only one player should assign colors
                const assignColors = {
                    "ChessGameBoard.useEffect.assignColors": async ()=>{
                        const isWhite = Math.random() < 0.5;
                        const myColor = isWhite ? 'w' : 'b';
                        // Fetch both player addresses (assume white_player/black_player filled)
                        const { data: gameData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('games').select('white_player,black_player,white_player_id,black_player_id').eq('id', gameId).single();
                        if (!gameData) return;
                        console.log('[DEBUG] assignColors - gameData:', gameData, 'address:', address, 'myColor:', myColor);
                        // Check if both players are being set to white
                        if (address === gameData.white_player && myColor === 'w') {
                            console.warn('[DEBUG] Attempting to set both players to white:', {
                                address,
                                gameData
                            });
                        }
                        const update = {
                            white_player: myColor === 'w' ? address : gameData.black_player,
                            black_player: myColor === 'b' ? address : gameData.white_player,
                            white_player_id: myColor === 'w' ? gameData.white_player_id : gameData.black_player_id,
                            black_player_id: myColor === 'b' ? gameData.white_player_id : gameData.black_player_id,
                            status: 'ready',
                            assigned: true
                        };
                        console.log('[DEBUG] assignColors - update:', update);
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('games').update(update).eq('id', gameId);
                        setAssignedColor(myColor);
                    }
                }["ChessGameBoard.useEffect.assignColors"];
                assignColors();
            }
        }
    }["ChessGameBoard.useEffect"], [
        gameStatus,
        blackPlayer,
        opponentReady,
        ready,
        assignedColor,
        address,
        gameId
    ]);
    // Countdown effect for game start when both ready and assigned
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChessGameBoard.useEffect": ()=>{
            if (gameStatus === 'ready' && assignedColor) {
                setCountdown(5); // 5 second countdown
                const interval = setInterval({
                    "ChessGameBoard.useEffect.interval": ()=>{
                        setCountdown({
                            "ChessGameBoard.useEffect.interval": (prev)=>{
                                if (prev === null) return null;
                                if (prev <= 1) {
                                    clearInterval(interval);
                                    setGameStatus('active');
                                    return null;
                                }
                                return prev - 1;
                            }
                        }["ChessGameBoard.useEffect.interval"]);
                    }
                }["ChessGameBoard.useEffect.interval"], 1000);
                return ({
                    "ChessGameBoard.useEffect": ()=>clearInterval(interval)
                })["ChessGameBoard.useEffect"];
            }
        }
    }["ChessGameBoard.useEffect"], [
        gameStatus,
        assignedColor
    ]);
    async function makeAMove(move) {
        if (gameStatus !== 'active') return;
        const gameCopy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$2$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"](game.fen());
        console.log('[DEBUG] makeAMove - FEN before move:', game.fen(), 'Move:', move);
        const result = gameCopy.move(move);
        console.log('[DEBUG] makeAMove - FEN after move:', gameCopy.fen(), 'Move result:', result);
        // Detect capture
        if (result && result.captured) {
            setLastCaptured({
                piece: result.captured,
                color: result.color === 'w' ? 'b' : 'w'
            });
            setCaptureAnim(true);
            setTimeout(()=>setCaptureAnim(false), 2000);
        }
        setGame(gameCopy);
        if (result && gameId) {
            // Insert move into Supabase
            const moveCount = gameCopy.history().length;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("moves").insert([
                {
                    game_id: gameId,
                    move_number: moveCount,
                    move: result.san
                }
            ]);
            // Switch active color and clock
            setActiveColor(gameCopy.turn());
            // BOT LOGIC: if black_player is BOT and it's now black's turn, make bot move
            if (blackPlayer === 'BOT' && gameCopy.turn() === 'b' && gameStatus === 'active') {
                setTimeout(async ()=>{
                    const botGame = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$2$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"](gameCopy.fen());
                    const legalMoves = botGame.moves();
                    if (legalMoves.length) {
                        // Pick a random move
                        const botMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
                        botGame.move(botMove);
                        // Insert bot move into Supabase
                        const botMoveCount = botGame.history().length;
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("moves").insert([
                            {
                                game_id: gameId,
                                move_number: botMoveCount,
                                move: botMove
                            }
                        ]);
                        setGame(botGame);
                        setActiveColor(botGame.turn());
                    }
                }, 650); // Delay for realism
            }
        }
        return result;
    }
    function onDrop(sourceSquare, targetSquare) {
        if (gameStatus !== 'active' || countdown) return false;
        const chess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$chess$2e$js$40$1$2e$2$2e$0$2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chess"](game.fen());
        const move = chess.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q"
        });
        if (!move) return false; // illegal move
        makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q"
        });
        return true;
    }
    // Handle timeout
    async function handleTimeout() {
        setGameStatus('timeout');
        if (gameId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('games').update({
                status: 'timeout'
            }).eq('id', gameId);
        }
    }
    if (isOverlayMode()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-screen bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$StreamerOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fen: game.fen(),
                whiteName: "White",
                blackName: "Black",
                whiteTime: whiteTime,
                blackTime: blackTime,
                status: gameStatus
            }, void 0, false, {
                fileName: "[project]/src/app/chessboard/page.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/chessboard/page.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            justifyContent: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: '2.5em 2em',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--accent)',
                    boxShadow: '0 0 24px #4f8cff33',
                    width: 560,
                    maxWidth: '98vw'
                },
                children: [
                    lastCaptured && captureAnim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 24,
                            left: 0,
                            right: 0,
                            margin: '0 auto',
                            width: 80,
                            height: 80,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                            fontSize: 64,
                            opacity: captureAnim ? 1 : 0,
                            transition: 'opacity 0.5s',
                            pointerEvents: 'none',
                            color: lastCaptured.color === 'w' ? '#fff' : '#222',
                            textShadow: '0 2px 8px #000'
                        },
                        children: (()=>{
                            const pieceMap = {
                                p: lastCaptured.color === 'w' ? '♙' : '♟',
                                n: lastCaptured.color === 'w' ? '♘' : '♞',
                                b: lastCaptured.color === 'w' ? '♗' : '♝',
                                r: lastCaptured.color === 'w' ? '♖' : '♜',
                                q: lastCaptured.color === 'w' ? '♕' : '♛',
                                k: lastCaptured.color === 'w' ? '♔' : '♚'
                            };
                            return pieceMap[lastCaptured.piece] || '?';
                        })()
                    }, void 0, false, {
                        fileName: "[project]/src/app/chessboard/page.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this),
                    gameId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1em',
                            color: 'var(--accent-2)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.1em'
                        },
                        children: [
                            "Game ID: ",
                            gameId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chessboard/page.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this),
                    gameStatus === 'waiting' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '1em',
                                    color: 'var(--accent)',
                                    fontWeight: 600,
                                    textAlign: 'center'
                                },
                                children: [
                                    "Waiting for an opponent to join...",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/chessboard/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 49
                                    }, this),
                                    "Share this link: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'var(--font-mono)'
                                        },
                                        children: ("TURBOPACK compile-time truthy", 1) ? window.location.href : ("TURBOPACK unreachable", undefined)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chessboard/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chessboard/page.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    marginBottom: 24,
                                    width: '100%',
                                    background: '#ff4d4f',
                                    color: '#fff',
                                    fontWeight: 700,
                                    padding: '0.75em',
                                    borderRadius: 8,
                                    border: 'none',
                                    fontSize: '1.1em',
                                    cursor: redirecting ? 'not-allowed' : 'pointer',
                                    opacity: redirecting ? 0.7 : 1
                                },
                                disabled: redirecting,
                                onClick: async ()=>{
                                    if (!gameId) return;
                                    setRedirecting(true);
                                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('games').delete().eq('id', gameId);
                                    window.location.href = '/lobby';
                                },
                                children: "Leave Lobby"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chessboard/page.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 24,
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            background: ready ? '#4caf50' : '#1976d2',
                                            color: '#fff',
                                            fontWeight: 700,
                                            padding: '0.75em',
                                            borderRadius: 8,
                                            border: 'none',
                                            fontSize: '1.1em',
                                            cursor: ready ? 'not-allowed' : 'pointer',
                                            opacity: ready ? 0.7 : 1,
                                            marginRight: 16
                                        },
                                        disabled: ready,
                                        onClick: async ()=>{
                                            if (!gameId) return;
                                            // Set ready flag for this user
                                            const readyField = address === blackPlayer ? 'ready_black' : 'ready_white';
                                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('games').update({
                                                [readyField]: true
                                            }).eq('id', gameId);
                                            setReady(true);
                                        },
                                        children: ready ? 'Ready!' : 'I am Ready'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chessboard/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            marginLeft: 8,
                                            color: opponentReady ? '#4caf50' : '#aaa',
                                            fontWeight: 600
                                        },
                                        children: opponentReady ? 'Opponent Ready' : 'Waiting for Opponent'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chessboard/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chessboard/page.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    gameStatus === 'ready' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1em',
                            color: 'var(--accent)',
                            fontWeight: 600,
                            textAlign: 'center'
                        },
                        children: "Both players are ready! Assigning colors and starting soon..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/chessboard/page.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    countdown && countdown > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1em',
                            color: 'var(--accent)',
                            fontWeight: 600,
                            textAlign: 'center'
                        },
                        children: [
                            "Opponent joined! Game starting in ",
                            countdown,
                            " second",
                            countdown !== 1 ? 's' : '',
                            "..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chessboard/page.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    status === "connected" && address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'var(--accent-2)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.1em',
                            marginBottom: '1em'
                        },
                        children: [
                            "Your Address: ",
                            address.slice(0, 6),
                            "...",
                            address.slice(-4)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chessboard/page.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chessboard/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 24,
                    gap: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 700,
                                    color: 'var(--accent)'
                                },
                                children: "White"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chessboard/page.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Clock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialSeconds: whiteTime,
                                isRunning: activeColor === 'w' && gameStatus === 'active',
                                onTimeout: handleTimeout,
                                keyProp: `white-${gameId}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/chessboard/page.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chessboard/page.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 700,
                                    color: 'var(--accent)'
                                },
                                children: "Black"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chessboard/page.tsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Clock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                initialSeconds: blackTime,
                                isRunning: activeColor === 'b' && gameStatus === 'active',
                                onTimeout: handleTimeout,
                                keyProp: `black-${gameId}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/chessboard/page.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chessboard/page.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chessboard/page.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 24
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$chessboard$40$4$2e$7$2e$3_$40$typ_3c2bd4edd7bc90950f5535b8a40240c5$2f$node_modules$2f$react$2d$chessboard$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chessboard"], {
                    position: game.fen(),
                    onPieceDrop: onDrop,
                    boardWidth: 480,
                    arePiecesDraggable: gameStatus === 'active' && !countdown && !!blackPlayer,
                    customBoardStyle: {
                        borderRadius: 12,
                        boxShadow: '0 0 24px #4f8cff33'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/chessboard/page.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/chessboard/page.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    marginBottom: 24,
                    width: '100%',
                    background: 'var(--accent)',
                    color: '#fff',
                    fontWeight: 700,
                    padding: '0.75em',
                    borderRadius: 8,
                    border: 'none',
                    fontSize: '1.1em',
                    cursor: gameStatus === 'active' ? 'pointer' : 'not-allowed',
                    opacity: gameStatus === 'active' ? 1 : 0.5
                },
                disabled: gameStatus !== 'active',
                onClick: async ()=>{
                    if (gameStatus !== 'active' || !gameId) return;
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$core$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('games').update({
                        status: 'forfeited'
                    }).eq('id', gameId);
                    setGameStatus('forfeited');
                },
                children: "Forfeit"
            }, void 0, false, {
                fileName: "[project]/src/app/chessboard/page.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'var(--foreground)',
                    fontWeight: 600,
                    textAlign: 'center'
                },
                children: gameStatus === 'active' ? (activeColor === 'w' ? 'White' : 'Black') + " to move" : `Game status: ${gameStatus}`
            }, void 0, false, {
                fileName: "[project]/src/app/chessboard/page.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/chessboard/page.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
_s(ChessGameBoard, "fLtDSJ7ECMkcYZ1DZr1kLvG03go=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$re_a32501d5ed8d9e3962e1bfed818f6f0b$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$react$2f$dist$2f$esm$2f$hooks$2f$useGlobalWalletSignerAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalWalletSignerAccount"]
    ];
});
_c = ChessGameBoard;
var _c;
__turbopack_context__.k.register(_c, "ChessGameBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_861c7b07._.js.map