(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const AccountFactoryAbi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_implementation',
                type: 'address'
            },
            {
                internalType: 'bytes4',
                name: '_initializerSelector',
                type: 'bytes4'
            },
            {
                internalType: 'address',
                name: '_registry',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: '_proxyBytecodeHash',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: '_deployer',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_owner',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [],
        name: 'ALREADY_CREATED',
        type: 'error'
    },
    {
        inputs: [],
        name: 'DEPLOYMENT_FAILED',
        type: 'error'
    },
    {
        inputs: [],
        name: 'INVALID_INITIALIZER',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NOT_FROM_DEPLOYER',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'OwnableInvalidOwner',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'OwnableUnauthorizedAccount',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'accountAddress',
                type: 'address'
            }
        ],
        name: 'AGWAccountCreated',
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
            }
        ],
        name: 'AGWAccountDeployed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'deployer',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'bool',
                name: 'authorized',
                type: 'bool'
            }
        ],
        name: 'DeployerAuthorized',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'newImplementation',
                type: 'address'
            }
        ],
        name: 'ImplementationChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferStarted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'newRegistry',
                type: 'address'
            }
        ],
        name: 'RegistryChanged',
        type: 'event'
    },
    {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'accountToDeployer',
        outputs: [
            {
                internalType: 'address',
                name: 'deployer',
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
                name: 'accountAddress',
                type: 'address'
            }
        ],
        name: 'agwAccountCreated',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'deployer',
                type: 'address'
            }
        ],
        name: 'authorizedDeployers',
        outputs: [
            {
                internalType: 'bool',
                name: 'authorized',
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
                name: 'newImplementation',
                type: 'address'
            },
            {
                internalType: 'bytes4',
                name: 'newInitializerSelector',
                type: 'bytes4'
            }
        ],
        name: 'changeImplementation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newRegistry',
                type: 'address'
            }
        ],
        name: 'changeRegistry',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'initializer',
                type: 'bytes'
            }
        ],
        name: 'deployAccount',
        outputs: [
            {
                internalType: 'address',
                name: 'accountAddress',
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
                name: 'salt',
                type: 'bytes32'
            }
        ],
        name: 'getAddressForSalt',
        outputs: [
            {
                internalType: 'address',
                name: 'accountAddress',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: '_implementation',
                type: 'address'
            }
        ],
        name: 'getAddressForSaltAndImplementation',
        outputs: [
            {
                internalType: 'address',
                name: 'accountAddress',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'implementationAddress',
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
        name: 'initializerSelector',
        outputs: [
            {
                internalType: 'bytes4',
                name: '',
                type: 'bytes4'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
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
        name: 'pendingOwner',
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
        name: 'proxyBytecodeHash',
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
        name: 'registry',
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
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32'
            }
        ],
        name: 'saltToAccount',
        outputs: [
            {
                internalType: 'address',
                name: 'accountAddress',
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
                name: 'deployer',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: 'authorized',
                type: 'bool'
            }
        ],
        name: 'setDeployer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
const __TURBOPACK__default__export__ = AccountFactoryAbi;
 //# sourceMappingURL=AccountFactory.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWRegistryAbi.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AGWRegistryAbi": (()=>AGWRegistryAbi)
});
const AGWRegistryAbi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_owner',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [],
        name: 'NOT_FROM_FACTORY',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'OwnableInvalidOwner',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'OwnableUnauthorizedAccount',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'factory',
                type: 'address'
            }
        ],
        name: 'FactorySet',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'factory',
                type: 'address'
            }
        ],
        name: 'FactoryUnset',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferStarted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        name: 'isAGW',
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
                name: '',
                type: 'address'
            }
        ],
        name: 'isFactory',
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
        inputs: [],
        name: 'owner',
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
        name: 'pendingOwner',
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
                name: 'account',
                type: 'address'
            }
        ],
        name: 'register',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'accounts',
                type: 'address[]'
            }
        ],
        name: 'registerMultiple',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'factory_',
                type: 'address'
            }
        ],
        name: 'setFactory',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'unregister',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'accounts',
                type: 'address[]'
            }
        ],
        name: 'unregisterMultiple',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'factory_',
                type: 'address'
            }
        ],
        name: 'unsetFactory',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
]; //# sourceMappingURL=AGWRegistryAbi.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AGW_LINK_DELEGATION_RIGHTS": (()=>AGW_LINK_DELEGATION_RIGHTS),
    "AGW_REGISTRY_ADDRESS": (()=>AGW_REGISTRY_ADDRESS),
    "BASE_GAS_PER_PUBDATA_BYTE": (()=>BASE_GAS_PER_PUBDATA_BYTE),
    "BRIDGEHUB_ADDRESS": (()=>BRIDGEHUB_ADDRESS),
    "CANONICAL_DELEGATE_REGISTRY_ADDRESS": (()=>CANONICAL_DELEGATE_REGISTRY_ADDRESS),
    "CANONICAL_EXCLUSIVE_DELEGATE_RESOLVER_ADDRESS": (()=>CANONICAL_EXCLUSIVE_DELEGATE_RESOLVER_ADDRESS),
    "CONTRACT_DEPLOYER_ADDRESS": (()=>CONTRACT_DEPLOYER_ADDRESS),
    "EOA_VALIDATOR_ADDRESS": (()=>EOA_VALIDATOR_ADDRESS),
    "FEATURE_FLAG_REGISTRY_ADDRESS": (()=>FEATURE_FLAG_REGISTRY_ADDRESS),
    "INSUFFICIENT_BALANCE_SELECTOR": (()=>INSUFFICIENT_BALANCE_SELECTOR),
    "NON_EXPIRING_DELEGATION_RIGHTS": (()=>NON_EXPIRING_DELEGATION_RIGHTS),
    "SESSION_KEY_POLICY_REGISTRY_ADDRESS": (()=>SESSION_KEY_POLICY_REGISTRY_ADDRESS),
    "SESSION_KEY_VALIDATOR_ADDRESS": (()=>SESSION_KEY_VALIDATOR_ADDRESS),
    "SMART_ACCOUNT_FACTORY_ADDRESS": (()=>SMART_ACCOUNT_FACTORY_ADDRESS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/chains/definitions/abstract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstractTestnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/chains/definitions/abstractTestnet.js [app-client] (ecmascript)");
;
// AA smart contract deployment
const SMART_ACCOUNT_FACTORY_ADDRESS = '0x9B947df68D35281C972511B3E7BC875926f26C1A';
// AA wallet validator contract deployment
const EOA_VALIDATOR_ADDRESS = '0x74b9ae28EC45E3FA11533c7954752597C3De3e7A';
const SESSION_KEY_VALIDATOR_ADDRESS = '0x34ca1501FAE231cC2ebc995CE013Dbe882d7d081';
const CONTRACT_DEPLOYER_ADDRESS = '0x0000000000000000000000000000000000008006';
const AGW_REGISTRY_ADDRESS = '0xd5E3efDA6bB5aB545cc2358796E96D9033496Dda';
const INSUFFICIENT_BALANCE_SELECTOR = '0xe7931438';
const CANONICAL_DELEGATE_REGISTRY_ADDRESS = '0x0000000059A24EB229eED07Ac44229DB56C5d797';
const CANONICAL_EXCLUSIVE_DELEGATE_RESOLVER_ADDRESS = '0x0000000078CC4Cc1C14E27c0fa35ED6E5E58825D';
const AGW_LINK_DELEGATION_RIGHTS = '0xc10dcfe266c1f71ef476efbd3223555750dc271e4115626b';
const NON_EXPIRING_DELEGATION_RIGHTS = `${AGW_LINK_DELEGATION_RIGHTS}000000ffffffffff`;
const BASE_GAS_PER_PUBDATA_BYTE = 800n;
const BRIDGEHUB_ADDRESS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstractTestnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstractTestnet"].id]: '0x35A54c8C757806eB6820629bc82d90E056394C92',
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstract"].id]: '0x303a465b659cbb0ab36ee643ea362c509eeb5213'
};
const SESSION_KEY_POLICY_REGISTRY_ADDRESS = '0xfD20b9d7A406e2C4f5D6Df71ABE3Ee48B2EccC9F';
const FEATURE_FLAG_REGISTRY_ADDRESS = '0xb5023a9F3e948e3A4f9DBA97118EEE801fA4e265';
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/eip712.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidEip712TransactionError": (()=>InvalidEip712TransactionError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class InvalidEip712TransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
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
} //# sourceMappingURL=eip712.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/eip712.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertEip712Request": (()=>assertEip712Request),
    "isEIP712Transaction": (()=>isEIP712Transaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/eip712.js [app-client] (ecmascript)");
;
;
;
;
function isEIP712Transaction(transaction) {
    if (transaction.type === 'eip712') return true;
    if ('customSignature' in transaction && transaction.customSignature || 'paymaster' in transaction && transaction.paymaster || 'paymasterInput' in transaction && transaction.paymasterInput || 'gasPerPubdata' in transaction && typeof transaction.gasPerPubdata === 'bigint' || 'factoryDeps' in transaction && transaction.factoryDeps) return true;
    return false;
}
function assertEip712Request(args) {
    if (!isEIP712Transaction(args)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidEip712TransactionError"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(args);
} //# sourceMappingURL=eip712.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/types/call.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
 //# sourceMappingURL=call.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VALID_CHAINS": (()=>VALID_CHAINS),
    "convertBigIntToString": (()=>convertBigIntToString),
    "getInitializerCalldata": (()=>getInitializerCalldata),
    "getSmartAccountAddressFromInitialSigner": (()=>getSmartAccountAddressFromInitialSigner),
    "isAGWAccount": (()=>isAGWAccount),
    "isEip712TypedData": (()=>isEip712TypedData),
    "isSmartAccountDeployed": (()=>isSmartAccountDeployed),
    "transformEip712TypedData": (()=>transformEip712TypedData),
    "transformHexValues": (()=>transformHexValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/chains/definitions/abstract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstractTestnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/chains/definitions/abstractTestnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWRegistryAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWRegistryAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$types$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/types/call.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const VALID_CHAINS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstractTestnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstractTestnet"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstractTestnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstractTestnet"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstract"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstract"]
};
function convertBigIntToString(value) {
    if (typeof value === 'bigint') {
        return value.toString();
    } else if (Array.isArray(value)) {
        return value.map(convertBigIntToString);
    } else if (typeof value === 'object' && value !== null) {
        return Object.fromEntries(Object.entries(value).map(([key, val])=>[
                key,
                convertBigIntToString(val)
            ]));
    }
    return value;
}
async function getSmartAccountAddressFromInitialSigner(initialSigner, publicClient) {
    if (initialSigner === undefined) {
        throw new Error('Initial signer is required to get smart account address');
    }
    // Generate salt based off address
    const addressBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(initialSigner);
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(addressBytes);
    // Get the deployed account address
    const accountAddress = await publicClient.readContract({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_ACCOUNT_FACTORY_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        functionName: 'getAddressForSalt',
        args: [
            salt
        ]
    });
    return accountAddress;
}
async function isAGWAccount(publicClient, address) {
    return await publicClient.readContract({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGW_REGISTRY_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWRegistryAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGWRegistryAbi"],
        functionName: 'isAGW',
        args: [
            address
        ]
    });
}
async function isSmartAccountDeployed(publicClient, address) {
    const bytecode = await publicClient.getCode({
        address: address
    });
    return bytecode !== undefined;
}
function getInitializerCalldata(initialOwnerAddress, validatorAddress, initialCall) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: [
            {
                name: 'initialize',
                type: 'function',
                inputs: [
                    {
                        name: 'initialK1Owner',
                        type: 'address'
                    },
                    {
                        name: 'initialK1Validator',
                        type: 'address'
                    },
                    {
                        name: 'modules',
                        type: 'bytes[]'
                    },
                    {
                        name: 'initCall',
                        type: 'tuple',
                        components: [
                            {
                                name: 'target',
                                type: 'address'
                            },
                            {
                                name: 'allowFailure',
                                type: 'bool'
                            },
                            {
                                name: 'value',
                                type: 'uint256'
                            },
                            {
                                name: 'callData',
                                type: 'bytes'
                            }
                        ]
                    }
                ],
                outputs: [],
                stateMutability: 'nonpayable'
            }
        ],
        functionName: 'initialize',
        args: [
            initialOwnerAddress,
            validatorAddress,
            [],
            initialCall
        ]
    });
}
function transformHexValues(transaction, keys) {
    if (!transaction) return;
    for (const key of keys){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(transaction[key])) {
            transaction[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(transaction[key], 'bigint');
        }
    }
}
function isEip712TypedData(typedData) {
    return typedData.message && typedData.domain?.name === 'zkSync' && typedData.domain?.version === '2' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEIP712Transaction"])(typedData.message);
}
function transformEip712TypedData(typedData) {
    if (!isEip712TypedData(typedData)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Typed data is not an EIP712 transaction');
    }
    if (typedData.domain?.chainId === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Chain ID is required for EIP712 transaction');
    }
    return {
        chainId: Number(typedData.domain.chainId),
        account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(typedData.message['from']), {
            size: 20
        })),
        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(typedData.message['to']), {
            size: 20
        }),
        gas: BigInt(typedData.message['gasLimit']),
        gasPerPubdata: BigInt(typedData.message['gasPerPubdataByteLimit']),
        maxFeePerGas: BigInt(typedData.message['maxFeePerGas']),
        maxPriorityFeePerGas: BigInt(typedData.message['maxPriorityFeePerGas']),
        paymaster: typedData.message['paymaster'] != '0' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(BigInt(typedData.message['paymaster']), {
            size: 20
        }) : undefined,
        nonce: typedData.message['nonce'],
        value: BigInt(typedData.message['value']),
        data: typedData.message['data'] === '0x0' ? '0x' : typedData.message['data'],
        factoryDeps: typedData.message['factoryDeps'],
        paymasterInput: typedData.message['paymasterInput'] !== '0x' ? typedData.message['paymasterInput'] : undefined
    };
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const AGWAccountAbi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [],
        name: 'ADDRESS_ALREADY_EXISTS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ADDRESS_NOT_EXISTS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'BYTES_ALREADY_EXISTS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'BYTES_NOT_EXISTS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'CALL_FAILED',
        type: 'error'
    },
    {
        inputs: [],
        name: 'EMPTY_HOOK_ADDRESS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'EMPTY_MODULE_ADDRESS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'EMPTY_OWNERS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'EMPTY_VALIDATORS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'FEE_PAYMENT_FAILED',
        type: 'error'
    },
    {
        inputs: [],
        name: 'HOOK_ERC165_FAIL',
        type: 'error'
    },
    {
        inputs: [],
        name: 'INSUFFICIENT_FUNDS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'INVALID_ADDRESS',
        type: 'error'
    },
    {
        inputs: [],
        name: 'INVALID_BYTES',
        type: 'error'
    },
    {
        inputs: [],
        name: 'INVALID_KEY',
        type: 'error'
    },
    {
        inputs: [],
        name: 'INVALID_PUBKEY_LENGTH',
        type: 'error'
    },
    {
        inputs: [],
        name: 'INVALID_SALT',
        type: 'error'
    },
    {
        inputs: [],
        name: 'InvalidInitialization',
        type: 'error'
    },
    {
        inputs: [],
        name: 'MODULE_ERC165_FAIL',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'actualValue',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'expectedValue',
                type: 'uint256'
            }
        ],
        name: 'MsgValueMismatch',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NOT_FROM_BOOTLOADER',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NOT_FROM_DEPLOYER',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NOT_FROM_HOOK',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NOT_FROM_MODULE',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NOT_FROM_SELF',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NOT_FROM_SELF_OR_MODULE',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NotInitializing',
        type: 'error'
    },
    {
        inputs: [],
        name: 'RECUSIVE_MODULE_CALL',
        type: 'error'
    },
    {
        inputs: [],
        name: 'SAME_IMPLEMENTATION',
        type: 'error'
    },
    {
        inputs: [],
        name: 'UNAUTHORIZED_OUTSIDE_TRANSACTION',
        type: 'error'
    },
    {
        inputs: [],
        name: 'VALIDATION_HOOK_FAILED',
        type: 'error'
    },
    {
        inputs: [],
        name: 'VALIDATOR_ERC165_FAIL',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'hook',
                type: 'address'
            }
        ],
        name: 'AddHook',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'module',
                type: 'address'
            }
        ],
        name: 'AddModule',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'AddModuleValidator',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'FeePaid',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint64',
                name: 'version',
                type: 'uint64'
            }
        ],
        name: 'Initialized',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'addr',
                type: 'address'
            }
        ],
        name: 'K1AddOwner',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'K1AddValidator',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'addr',
                type: 'address'
            }
        ],
        name: 'K1RemoveOwner',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'K1RemoveValidator',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes',
                name: 'pubKey',
                type: 'bytes'
            }
        ],
        name: 'R1AddOwner',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'R1AddValidator',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes',
                name: 'pubKey',
                type: 'bytes'
            }
        ],
        name: 'R1RemoveOwner',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'R1RemoveValidator',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'hook',
                type: 'address'
            }
        ],
        name: 'RemoveHook',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'module',
                type: 'address'
            }
        ],
        name: 'RemoveModule',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'RemoveModuleValidator',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [],
        name: 'ResetOwners',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'oldImplementation',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newImplementation',
                type: 'address'
            }
        ],
        name: 'Upgraded',
        type: 'event'
    },
    {
        stateMutability: 'payable',
        type: 'fallback'
    },
    {
        inputs: [],
        name: 'VERSION',
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
                internalType: 'bytes',
                name: 'hookAndData',
                type: 'bytes'
            },
            {
                internalType: 'bool',
                name: 'isValidation',
                type: 'bool'
            }
        ],
        name: 'addHook',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'moduleAndData',
                type: 'bytes'
            }
        ],
        name: 'addModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address'
            },
            {
                internalType: 'bytes',
                name: 'initialAccountValidationKey',
                type: 'bytes'
            }
        ],
        name: 'addModuleValidator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'target',
                        type: 'address'
                    },
                    {
                        internalType: 'bool',
                        name: 'allowFailure',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct Call[]',
                name: '_calls',
                type: 'tuple[]'
            }
        ],
        name: 'batchCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'agwMessageTypeHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'target',
                        type: 'address'
                    },
                    {
                        internalType: 'bool',
                        name: 'allowFailure',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct Call[]',
                name: '_calls',
                type: 'tuple[]'
            }
        ],
        name: 'batchCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                internalType: 'bytes1',
                name: 'fields',
                type: 'bytes1'
            },
            {
                internalType: 'string',
                name: 'name',
                type: 'string'
            },
            {
                internalType: 'string',
                name: 'version',
                type: 'string'
            },
            {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: 'verifyingContract',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32'
            },
            {
                internalType: 'uint256[]',
                name: 'extensions',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'executeFromModule',
        outputs: [],
        stateMutability: 'nonpayable',
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
                name: '',
                type: 'bytes32'
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
                        internalType: 'bytes32[]',
                        name: 'factoryDeps',
                        type: 'bytes32[]'
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
                internalType: 'struct Transaction',
                name: 'transaction',
                type: 'tuple'
            }
        ],
        name: 'executeTransaction',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
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
                        internalType: 'bytes32[]',
                        name: 'factoryDeps',
                        type: 'bytes32[]'
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
                internalType: 'struct Transaction',
                name: 'transaction',
                type: 'tuple'
            }
        ],
        name: 'executeTransactionFromOutside',
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
                        name: 'signedHash',
                        type: 'bytes32'
                    }
                ],
                internalType: 'struct ERC1271Handler.AGWMessage',
                name: 'agwMessage',
                type: 'tuple'
            }
        ],
        name: 'getEip712Hash',
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
                name: 'hook',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: 'key',
                type: 'bytes32'
            }
        ],
        name: 'getHookData',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'implementationAddress',
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
                name: 'initialK1Owner',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'initialK1Validator',
                type: 'address'
            },
            {
                internalType: 'bytes[]',
                name: 'modules',
                type: 'bytes[]'
            },
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'target',
                        type: 'address'
                    },
                    {
                        internalType: 'bool',
                        name: 'allowFailure',
                        type: 'bool'
                    },
                    {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256'
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes'
                    }
                ],
                internalType: 'struct Call',
                name: 'initCall',
                type: 'tuple'
            }
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'addr',
                type: 'address'
            }
        ],
        name: 'isHook',
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
                name: 'addr',
                type: 'address'
            }
        ],
        name: 'isModule',
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
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'isModuleValidator',
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
                internalType: 'bytes32',
                name: 'signedHash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'signatureAndValidator',
                type: 'bytes'
            }
        ],
        name: 'isValidSignature',
        outputs: [
            {
                internalType: 'bytes4',
                name: 'magicValue',
                type: 'bytes4'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'addr',
                type: 'address'
            }
        ],
        name: 'k1AddOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'k1AddValidator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'addr',
                type: 'address'
            }
        ],
        name: 'k1IsOwner',
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
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'k1IsValidator',
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
        inputs: [],
        name: 'k1ListOwners',
        outputs: [
            {
                internalType: 'address[]',
                name: 'k1OwnerList',
                type: 'address[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'k1ListValidators',
        outputs: [
            {
                internalType: 'address[]',
                name: 'validatorList',
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
                name: 'addr',
                type: 'address'
            }
        ],
        name: 'k1RemoveOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'k1RemoveValidator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: 'isValidation',
                type: 'bool'
            }
        ],
        name: 'listHooks',
        outputs: [
            {
                internalType: 'address[]',
                name: 'hookList',
                type: 'address[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'listModuleValidators',
        outputs: [
            {
                internalType: 'address[]',
                name: 'validatorList',
                type: 'address[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'listModules',
        outputs: [
            {
                internalType: 'address[]',
                name: 'moduleList',
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
                name: '',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]'
            },
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]'
            },
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        name: 'onERC1155BatchReceived',
        outputs: [
            {
                internalType: 'bytes4',
                name: '',
                type: 'bytes4'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        name: 'onERC1155Received',
        outputs: [
            {
                internalType: 'bytes4',
                name: '',
                type: 'bytes4'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes'
            }
        ],
        name: 'onERC721Received',
        outputs: [
            {
                internalType: 'bytes4',
                name: '',
                type: 'bytes4'
            }
        ],
        stateMutability: 'pure',
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
                name: '',
                type: 'bytes32'
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
                        internalType: 'bytes32[]',
                        name: 'factoryDeps',
                        type: 'bytes32[]'
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
                internalType: 'struct Transaction',
                name: 'transaction',
                type: 'tuple'
            }
        ],
        name: 'payForTransaction',
        outputs: [],
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
                name: '',
                type: 'bytes32'
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
                        internalType: 'bytes32[]',
                        name: 'factoryDeps',
                        type: 'bytes32[]'
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
                internalType: 'struct Transaction',
                name: 'transaction',
                type: 'tuple'
            }
        ],
        name: 'prepareForPaymaster',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'pubKey',
                type: 'bytes'
            }
        ],
        name: 'r1AddOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'r1AddValidator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'pubKey',
                type: 'bytes'
            }
        ],
        name: 'r1IsOwner',
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
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'r1IsValidator',
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
        inputs: [],
        name: 'r1ListOwners',
        outputs: [
            {
                internalType: 'bytes[]',
                name: 'r1OwnerList',
                type: 'bytes[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'r1ListValidators',
        outputs: [
            {
                internalType: 'address[]',
                name: 'validatorList',
                type: 'address[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'pubKey',
                type: 'bytes'
            }
        ],
        name: 'r1RemoveOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'r1RemoveValidator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'hook',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: 'isValidation',
                type: 'bool'
            }
        ],
        name: 'removeHook',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'module',
                type: 'address'
            }
        ],
        name: 'removeModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'validator',
                type: 'address'
            }
        ],
        name: 'removeModuleValidator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'pubKey',
                type: 'bytes'
            }
        ],
        name: 'resetOwners',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'key',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'setHookData',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
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
                name: 'newImplementation',
                type: 'address'
            }
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
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
                name: 'suggestedSignedHash',
                type: 'bytes32'
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
                        internalType: 'bytes32[]',
                        name: 'factoryDeps',
                        type: 'bytes32[]'
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
                internalType: 'struct Transaction',
                name: 'transaction',
                type: 'tuple'
            }
        ],
        name: 'validateTransaction',
        outputs: [
            {
                internalType: 'bytes4',
                name: 'magic',
                type: 'bytes4'
            }
        ],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        stateMutability: 'payable',
        type: 'receive'
    }
];
const __TURBOPACK__default__export__ = AGWAccountAbi;
 //# sourceMappingURL=AGWAccount.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SessionKeyValidatorAbi": (()=>SessionKeyValidatorAbi)
});
const SessionKeyValidatorAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'Disabled',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'Inited',
        type: 'event'
    },
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
                indexed: true,
                internalType: 'bytes32',
                name: 'sessionHash',
                type: 'bytes32'
            },
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'signer',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'expiresAt',
                        type: 'uint256'
                    },
                    {
                        components: [
                            {
                                internalType: 'enum SessionLib.LimitType',
                                name: 'limitType',
                                type: 'uint8'
                            },
                            {
                                internalType: 'uint256',
                                name: 'limit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'period',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct SessionLib.UsageLimit',
                        name: 'feeLimit',
                        type: 'tuple'
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'bytes4',
                                name: 'selector',
                                type: 'bytes4'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxValuePerUse',
                                type: 'uint256'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.LimitType',
                                        name: 'limitType',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'limit',
                                        type: 'uint256'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'period',
                                        type: 'uint256'
                                    }
                                ],
                                internalType: 'struct SessionLib.UsageLimit',
                                name: 'valueLimit',
                                type: 'tuple'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.Condition',
                                        name: 'condition',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint64',
                                        name: 'index',
                                        type: 'uint64'
                                    },
                                    {
                                        internalType: 'bytes32',
                                        name: 'refValue',
                                        type: 'bytes32'
                                    },
                                    {
                                        components: [
                                            {
                                                internalType: 'enum SessionLib.LimitType',
                                                name: 'limitType',
                                                type: 'uint8'
                                            },
                                            {
                                                internalType: 'uint256',
                                                name: 'limit',
                                                type: 'uint256'
                                            },
                                            {
                                                internalType: 'uint256',
                                                name: 'period',
                                                type: 'uint256'
                                            }
                                        ],
                                        internalType: 'struct SessionLib.UsageLimit',
                                        name: 'limit',
                                        type: 'tuple'
                                    }
                                ],
                                internalType: 'struct SessionLib.Constraint[]',
                                name: 'constraints',
                                type: 'tuple[]'
                            }
                        ],
                        internalType: 'struct SessionLib.CallSpec[]',
                        name: 'callPolicies',
                        type: 'tuple[]'
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxValuePerUse',
                                type: 'uint256'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.LimitType',
                                        name: 'limitType',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'limit',
                                        type: 'uint256'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'period',
                                        type: 'uint256'
                                    }
                                ],
                                internalType: 'struct SessionLib.UsageLimit',
                                name: 'valueLimit',
                                type: 'tuple'
                            }
                        ],
                        internalType: 'struct SessionLib.TransferSpec[]',
                        name: 'transferPolicies',
                        type: 'tuple[]'
                    }
                ],
                indexed: false,
                internalType: 'struct SessionLib.SessionSpec',
                name: 'sessionSpec',
                type: 'tuple'
            }
        ],
        name: 'SessionCreated',
        type: 'event'
    },
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
                indexed: true,
                internalType: 'bytes32',
                name: 'sessionHash',
                type: 'bytes32'
            }
        ],
        name: 'SessionRevoked',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'sessionData',
                type: 'bytes'
            }
        ],
        name: 'addValidationKey',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
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
                        internalType: 'address',
                        name: 'signer',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'expiresAt',
                        type: 'uint256'
                    },
                    {
                        components: [
                            {
                                internalType: 'enum SessionLib.LimitType',
                                name: 'limitType',
                                type: 'uint8'
                            },
                            {
                                internalType: 'uint256',
                                name: 'limit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'period',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct SessionLib.UsageLimit',
                        name: 'feeLimit',
                        type: 'tuple'
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'bytes4',
                                name: 'selector',
                                type: 'bytes4'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxValuePerUse',
                                type: 'uint256'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.LimitType',
                                        name: 'limitType',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'limit',
                                        type: 'uint256'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'period',
                                        type: 'uint256'
                                    }
                                ],
                                internalType: 'struct SessionLib.UsageLimit',
                                name: 'valueLimit',
                                type: 'tuple'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.Condition',
                                        name: 'condition',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint64',
                                        name: 'index',
                                        type: 'uint64'
                                    },
                                    {
                                        internalType: 'bytes32',
                                        name: 'refValue',
                                        type: 'bytes32'
                                    },
                                    {
                                        components: [
                                            {
                                                internalType: 'enum SessionLib.LimitType',
                                                name: 'limitType',
                                                type: 'uint8'
                                            },
                                            {
                                                internalType: 'uint256',
                                                name: 'limit',
                                                type: 'uint256'
                                            },
                                            {
                                                internalType: 'uint256',
                                                name: 'period',
                                                type: 'uint256'
                                            }
                                        ],
                                        internalType: 'struct SessionLib.UsageLimit',
                                        name: 'limit',
                                        type: 'tuple'
                                    }
                                ],
                                internalType: 'struct SessionLib.Constraint[]',
                                name: 'constraints',
                                type: 'tuple[]'
                            }
                        ],
                        internalType: 'struct SessionLib.CallSpec[]',
                        name: 'callPolicies',
                        type: 'tuple[]'
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxValuePerUse',
                                type: 'uint256'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.LimitType',
                                        name: 'limitType',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'limit',
                                        type: 'uint256'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'period',
                                        type: 'uint256'
                                    }
                                ],
                                internalType: 'struct SessionLib.UsageLimit',
                                name: 'valueLimit',
                                type: 'tuple'
                            }
                        ],
                        internalType: 'struct SessionLib.TransferSpec[]',
                        name: 'transferPolicies',
                        type: 'tuple[]'
                    }
                ],
                internalType: 'struct SessionLib.SessionSpec',
                name: 'sessionSpec',
                type: 'tuple'
            }
        ],
        name: 'createSession',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'disable',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'enum OperationType',
                name: 'operationType',
                type: 'uint8'
            },
            {
                internalType: 'bytes32',
                name: 'signedHash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes'
            }
        ],
        name: 'handleValidation',
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
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'smartAccount',
                type: 'address'
            }
        ],
        name: 'isInited',
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
        inputs: [
            {
                internalType: 'bytes32',
                name: 'sessionHash',
                type: 'bytes32'
            }
        ],
        name: 'revokeKey',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32[]',
                name: 'sessionHashes',
                type: 'bytes32[]'
            }
        ],
        name: 'revokeKeys',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'signer',
                        type: 'address'
                    },
                    {
                        internalType: 'uint256',
                        name: 'expiresAt',
                        type: 'uint256'
                    },
                    {
                        components: [
                            {
                                internalType: 'enum SessionLib.LimitType',
                                name: 'limitType',
                                type: 'uint8'
                            },
                            {
                                internalType: 'uint256',
                                name: 'limit',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'period',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct SessionLib.UsageLimit',
                        name: 'feeLimit',
                        type: 'tuple'
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'bytes4',
                                name: 'selector',
                                type: 'bytes4'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxValuePerUse',
                                type: 'uint256'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.LimitType',
                                        name: 'limitType',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'limit',
                                        type: 'uint256'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'period',
                                        type: 'uint256'
                                    }
                                ],
                                internalType: 'struct SessionLib.UsageLimit',
                                name: 'valueLimit',
                                type: 'tuple'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.Condition',
                                        name: 'condition',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint64',
                                        name: 'index',
                                        type: 'uint64'
                                    },
                                    {
                                        internalType: 'bytes32',
                                        name: 'refValue',
                                        type: 'bytes32'
                                    },
                                    {
                                        components: [
                                            {
                                                internalType: 'enum SessionLib.LimitType',
                                                name: 'limitType',
                                                type: 'uint8'
                                            },
                                            {
                                                internalType: 'uint256',
                                                name: 'limit',
                                                type: 'uint256'
                                            },
                                            {
                                                internalType: 'uint256',
                                                name: 'period',
                                                type: 'uint256'
                                            }
                                        ],
                                        internalType: 'struct SessionLib.UsageLimit',
                                        name: 'limit',
                                        type: 'tuple'
                                    }
                                ],
                                internalType: 'struct SessionLib.Constraint[]',
                                name: 'constraints',
                                type: 'tuple[]'
                            }
                        ],
                        internalType: 'struct SessionLib.CallSpec[]',
                        name: 'callPolicies',
                        type: 'tuple[]'
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxValuePerUse',
                                type: 'uint256'
                            },
                            {
                                components: [
                                    {
                                        internalType: 'enum SessionLib.LimitType',
                                        name: 'limitType',
                                        type: 'uint8'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'limit',
                                        type: 'uint256'
                                    },
                                    {
                                        internalType: 'uint256',
                                        name: 'period',
                                        type: 'uint256'
                                    }
                                ],
                                internalType: 'struct SessionLib.UsageLimit',
                                name: 'valueLimit',
                                type: 'tuple'
                            }
                        ],
                        internalType: 'struct SessionLib.TransferSpec[]',
                        name: 'transferPolicies',
                        type: 'tuple[]'
                    }
                ],
                internalType: 'struct SessionLib.SessionSpec',
                name: 'spec',
                type: 'tuple'
            }
        ],
        name: 'sessionState',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'expiresAt',
                        type: 'uint256'
                    },
                    {
                        internalType: 'enum SessionLib.Status',
                        name: 'status',
                        type: 'uint8'
                    },
                    {
                        internalType: 'uint256',
                        name: 'feesRemaining',
                        type: 'uint256'
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'remaining',
                                type: 'uint256'
                            },
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'bytes4',
                                name: 'selector',
                                type: 'bytes4'
                            },
                            {
                                internalType: 'uint256',
                                name: 'index',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct SessionLib.LimitState[]',
                        name: 'transferValue',
                        type: 'tuple[]'
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'remaining',
                                type: 'uint256'
                            },
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'bytes4',
                                name: 'selector',
                                type: 'bytes4'
                            },
                            {
                                internalType: 'uint256',
                                name: 'index',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct SessionLib.LimitState[]',
                        name: 'callValue',
                        type: 'tuple[]'
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'remaining',
                                type: 'uint256'
                            },
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address'
                            },
                            {
                                internalType: 'bytes4',
                                name: 'selector',
                                type: 'bytes4'
                            },
                            {
                                internalType: 'uint256',
                                name: 'index',
                                type: 'uint256'
                            }
                        ],
                        internalType: 'struct SessionLib.LimitState[]',
                        name: 'callParams',
                        type: 'tuple[]'
                    }
                ],
                internalType: 'struct SessionLib.SessionState',
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
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: 'sessionHash',
                type: 'bytes32'
            }
        ],
        name: 'sessionStatus',
        outputs: [
            {
                internalType: 'enum SessionLib.Status',
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
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'signedHash',
                type: 'bytes32'
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
                        internalType: 'bytes32[]',
                        name: 'factoryDeps',
                        type: 'bytes32[]'
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
                internalType: 'struct Transaction',
                name: 'transaction',
                type: 'tuple'
            },
            {
                internalType: 'bytes',
                name: 'hookData',
                type: 'bytes'
            }
        ],
        name: 'validationHook',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'version',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'pure',
        type: 'function'
    }
]; //# sourceMappingURL=SessionKeyValidator.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConstraintCondition": (()=>ConstraintCondition),
    "LimitType": (()=>LimitType),
    "LimitUnlimited": (()=>LimitUnlimited),
    "LimitZero": (()=>LimitZero),
    "SessionStatus": (()=>SessionStatus),
    "encodeSession": (()=>encodeSession),
    "encodeSessionWithPeriodIds": (()=>encodeSessionWithPeriodIds),
    "getPeriodIdsForTransaction": (()=>getPeriodIdsForTransaction),
    "getSessionHash": (()=>getSessionHash),
    "getSessionSpec": (()=>getSessionSpec)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js [app-client] (ecmascript)");
;
;
var LimitType;
(function(LimitType) {
    LimitType[LimitType["Unlimited"] = 0] = "Unlimited";
    LimitType[LimitType["Lifetime"] = 1] = "Lifetime";
    LimitType[LimitType["Allowance"] = 2] = "Allowance";
})(LimitType || (LimitType = {}));
const LimitUnlimited = {
    limitType: LimitType.Unlimited,
    limit: 0n,
    period: 0n
};
const LimitZero = {
    limitType: LimitType.Lifetime,
    limit: 0n,
    period: 0n
};
var ConstraintCondition;
(function(ConstraintCondition) {
    ConstraintCondition[ConstraintCondition["Unconstrained"] = 0] = "Unconstrained";
    ConstraintCondition[ConstraintCondition["Equal"] = 1] = "Equal";
    ConstraintCondition[ConstraintCondition["Greater"] = 2] = "Greater";
    ConstraintCondition[ConstraintCondition["Less"] = 3] = "Less";
    ConstraintCondition[ConstraintCondition["GreaterEqual"] = 4] = "GreaterEqual";
    ConstraintCondition[ConstraintCondition["LessEqual"] = 5] = "LessEqual";
    ConstraintCondition[ConstraintCondition["NotEqual"] = 6] = "NotEqual";
})(ConstraintCondition || (ConstraintCondition = {}));
var SessionStatus;
(function(SessionStatus) {
    SessionStatus[SessionStatus["NotInitialized"] = 0] = "NotInitialized";
    SessionStatus[SessionStatus["Active"] = 1] = "Active";
    SessionStatus[SessionStatus["Closed"] = 2] = "Closed";
    SessionStatus[SessionStatus["Expired"] = 3] = "Expired";
})(SessionStatus || (SessionStatus = {}));
function getSessionSpec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAbiItem"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionKeyValidatorAbi"],
        name: 'createSession'
    }).inputs[0];
}
function encodeSession(sessionConfig) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
        getSessionSpec()
    ], [
        sessionConfig
    ]);
}
function encodeSessionWithPeriodIds(sessionConfig, periods) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
        getSessionSpec(),
        {
            type: 'uint64[]'
        }
    ], [
        sessionConfig,
        periods
    ]);
}
const getPeriodIdsForTransaction = (args)=>{
    const timestamp = args.timestamp || BigInt(Math.floor(Date.now() / 1000));
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(args.target);
    const getId = (limit)=>{
        if (limit.limitType === LimitType.Allowance) {
            return timestamp / limit.period;
        }
        return 0n;
    };
    const findTransferPolicy = ()=>{
        return args.sessionConfig.transferPolicies.find((policy)=>policy.target.toLowerCase() === target.toLowerCase());
    };
    const findCallPolicy = ()=>{
        return args.sessionConfig.callPolicies.find((policy)=>policy.target.toLowerCase() === target.toLowerCase() && policy.selector == args.selector);
    };
    const isContractCall = !!args.selector && args.selector.length >= 10;
    const policy = isContractCall ? findCallPolicy() : findTransferPolicy();
    if (!policy) throw new Error('Transaction does not fit any policy');
    const periodIds = [
        getId(args.sessionConfig.feeLimit),
        getId(policy.valueLimit),
        ...isContractCall ? policy.constraints.map((constraint)=>getId(constraint.limit)) : []
    ];
    return periodIds;
};
function getSessionHash(sessionConfig) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(encodeSession(sessionConfig));
} //# sourceMappingURL=sessions.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/createSession.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSession": (()=>createSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/wallet/writeContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
async function createSession(client, publicClient, args) {
    const { session, ...rest } = args;
    const isDeployed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSmartAccountDeployed"])(publicClient, client.account.address);
    const hasModule = isDeployed ? await hasSessionModule(client) : false;
    let transactionHash = undefined;
    if (!hasModule) {
        const encodedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeSession"])(session);
        transactionHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"], 'writeContract')({
            address: client.account.address,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            functionName: 'addModule',
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatHex"])([
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"],
                    encodedSession
                ])
            ],
            ...rest
        });
    } else {
        transactionHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"], 'writeContract')({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"],
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionKeyValidatorAbi"],
            functionName: 'createSession',
            args: [
                session
            ],
            ...rest
        });
    }
    return {
        transactionHash,
        session
    };
}
async function hasSessionModule(client) {
    const validationHooks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        address: client.account.address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        functionName: 'listHooks',
        args: [
            true
        ]
    });
    const hasSessionModule = validationHooks.some((hook)=>hook === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"]);
    return hasSessionModule;
} //# sourceMappingURL=createSession.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/replaceBigInts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "replaceBigInts": (()=>replaceBigInts)
});
const replaceBigInts = (obj, replacer)=>{
    if (typeof obj === 'bigint') return replacer(obj);
    if (Array.isArray(obj)) return obj.map((x)=>replaceBigInts(x, replacer));
    if (obj && typeof obj === 'object') return Object.fromEntries(Object.entries(obj).map(([k, v])=>[
            k,
            replaceBigInts(v, replacer)
        ]));
    return obj;
}; //# sourceMappingURL=replaceBigInts.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendPrivyTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendPrivySignMessage": (()=>sendPrivySignMessage),
    "sendPrivySignTypedData": (()=>sendPrivySignTypedData),
    "sendPrivyTransaction": (()=>sendPrivyTransaction),
    "signPrivyTransaction": (()=>signPrivyTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$replaceBigInts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/replaceBigInts.js [app-client] (ecmascript)");
;
;
;
async function sendPrivyTransaction(client, parameters) {
    const result = await client.request({
        method: 'privy_sendSmartWalletTx',
        params: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$replaceBigInts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceBigInts"])(parameters, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])
        ]
    }, {
        retryCount: 0
    });
    return result;
}
async function sendPrivySignMessage(client, parameters) {
    const result = await client.request({
        method: 'privy_signSmartWalletMessage',
        params: [
            parameters.message
        ]
    }, {
        retryCount: 0
    });
    return result;
}
async function sendPrivySignTypedData(client, parameters) {
    const result = await client.request({
        method: 'privy_signSmartWalletTypedData',
        params: [
            client.account.address,
            parameters
        ]
    }, {
        retryCount: 0
    });
    return result;
}
async function signPrivyTransaction(client, parameters) {
    const { chain: _chain, account: _account, ...request } = parameters;
    const result = await client.request({
        method: 'privy_signSmartWalletTx',
        params: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$replaceBigInts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceBigInts"])(request, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])
        ]
    }, {
        retryCount: 0
    });
    return result;
} //# sourceMappingURL=sendPrivyTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountNotFoundError": (()=>AccountNotFoundError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class AccountNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath } = {}){
        super([
            'Could not find an Account to execute with this Action.',
            'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.'
        ].join('\n'), {
            docsPath,
            docsSlug: 'account',
            name: 'AccountNotFoundError'
        });
    }
} //# sourceMappingURL=account.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/insufficientBalance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InsufficientBalanceError": (()=>InsufficientBalanceError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class InsufficientBalanceError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super([
            'Insufficient balance for transaction.'
        ].join('\n'), {
            name: 'InsufficientBalanceError'
        });
    }
} //# sourceMappingURL=insufficientBalance.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/BridgeHubAbi.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BridgeHubAbi": (()=>BridgeHubAbi)
});
const BridgeHubAbi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        name: 'AddressTooLow',
        type: 'error'
    },
    {
        inputs: [],
        name: 'BridgeHubAlreadyRegistered',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ChainIdTooBig',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'expectedMsgValue',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'providedMsgValue',
                type: 'uint256'
            }
        ],
        name: 'MsgValueMismatch',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NotInitializedReentrancyGuard',
        type: 'error'
    },
    {
        inputs: [],
        name: 'Reentrancy',
        type: 'error'
    },
    {
        inputs: [],
        name: 'STMAlreadyRegistered',
        type: 'error'
    },
    {
        inputs: [],
        name: 'STMNotRegistered',
        type: 'error'
    },
    {
        inputs: [],
        name: 'SharedBridgeNotSet',
        type: 'error'
    },
    {
        inputs: [],
        name: 'SlotOccupied',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'token',
                type: 'address'
            }
        ],
        name: 'TokenAlreadyRegistered',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'token',
                type: 'address'
            }
        ],
        name: 'TokenNotRegistered',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'caller',
                type: 'address'
            }
        ],
        name: 'Unauthorized',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'expectedMagicValue',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'providedMagicValue',
                type: 'uint256'
            }
        ],
        name: 'WrongMagicValue',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ZeroChainId',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint8',
                name: 'version',
                type: 'uint8'
            }
        ],
        name: 'Initialized',
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferStarted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'Paused',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'Unpaused',
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
        name: 'acceptOwnership',
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
        inputs: [],
        name: 'admin',
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
                name: '',
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
                internalType: 'address',
                name: '_owner',
                type: 'address'
            }
        ],
        name: 'initialize',
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
        name: 'owner',
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
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'paused',
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
        inputs: [],
        name: 'pendingOwner',
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
        inputs: [],
        name: 'renounceOwnership',
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
                name: '_token',
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
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
]; //# sourceMappingURL=BridgeHubAbi.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/DelegateRegistry.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DelegateRegistryAbi": (()=>DelegateRegistryAbi)
});
const DelegateRegistryAbi = [
    {
        type: 'function',
        name: 'checkDelegateForAll',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'from',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        outputs: [
            {
                name: 'valid',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'checkDelegateForContract',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'from',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        outputs: [
            {
                name: 'valid',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'checkDelegateForERC1155',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'from',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        outputs: [
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'checkDelegateForERC20',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'from',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        outputs: [
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'checkDelegateForERC721',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'from',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        outputs: [
            {
                name: 'valid',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'delegateAll',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            },
            {
                name: 'enable',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        outputs: [
            {
                name: 'hash',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'delegateContract',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            },
            {
                name: 'enable',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        outputs: [
            {
                name: 'hash',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'delegateERC1155',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'hash',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'delegateERC20',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            },
            {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'hash',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'delegateERC721',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256'
            },
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            },
            {
                name: 'enable',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        outputs: [
            {
                name: 'hash',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'getDelegationsFromHashes',
        inputs: [
            {
                name: 'hashes',
                type: 'bytes32[]',
                internalType: 'bytes32[]'
            }
        ],
        outputs: [
            {
                name: 'delegations_',
                type: 'tuple[]',
                internalType: 'struct IDelegateRegistry.Delegation[]',
                components: [
                    {
                        name: 'type_',
                        type: 'uint8',
                        internalType: 'enum IDelegateRegistry.DelegationType'
                    },
                    {
                        name: 'to',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'from',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'rights',
                        type: 'bytes32',
                        internalType: 'bytes32'
                    },
                    {
                        name: 'contract_',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'tokenId',
                        type: 'uint256',
                        internalType: 'uint256'
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        internalType: 'uint256'
                    }
                ]
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'getIncomingDelegationHashes',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            }
        ],
        outputs: [
            {
                name: 'delegationHashes',
                type: 'bytes32[]',
                internalType: 'bytes32[]'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'getIncomingDelegations',
        inputs: [
            {
                name: 'to',
                type: 'address',
                internalType: 'address'
            }
        ],
        outputs: [
            {
                name: 'delegations_',
                type: 'tuple[]',
                internalType: 'struct IDelegateRegistry.Delegation[]',
                components: [
                    {
                        name: 'type_',
                        type: 'uint8',
                        internalType: 'enum IDelegateRegistry.DelegationType'
                    },
                    {
                        name: 'to',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'from',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'rights',
                        type: 'bytes32',
                        internalType: 'bytes32'
                    },
                    {
                        name: 'contract_',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'tokenId',
                        type: 'uint256',
                        internalType: 'uint256'
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        internalType: 'uint256'
                    }
                ]
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'getOutgoingDelegationHashes',
        inputs: [
            {
                name: 'from',
                type: 'address',
                internalType: 'address'
            }
        ],
        outputs: [
            {
                name: 'delegationHashes',
                type: 'bytes32[]',
                internalType: 'bytes32[]'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'getOutgoingDelegations',
        inputs: [
            {
                name: 'from',
                type: 'address',
                internalType: 'address'
            }
        ],
        outputs: [
            {
                name: 'delegations_',
                type: 'tuple[]',
                internalType: 'struct IDelegateRegistry.Delegation[]',
                components: [
                    {
                        name: 'type_',
                        type: 'uint8',
                        internalType: 'enum IDelegateRegistry.DelegationType'
                    },
                    {
                        name: 'to',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'from',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'rights',
                        type: 'bytes32',
                        internalType: 'bytes32'
                    },
                    {
                        name: 'contract_',
                        type: 'address',
                        internalType: 'address'
                    },
                    {
                        name: 'tokenId',
                        type: 'uint256',
                        internalType: 'uint256'
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        internalType: 'uint256'
                    }
                ]
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'multicall',
        inputs: [
            {
                name: 'data',
                type: 'bytes[]',
                internalType: 'bytes[]'
            }
        ],
        outputs: [
            {
                name: 'results',
                type: 'bytes[]',
                internalType: 'bytes[]'
            }
        ],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'readSlot',
        inputs: [
            {
                name: 'location',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        outputs: [
            {
                name: 'contents',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'readSlots',
        inputs: [
            {
                name: 'locations',
                type: 'bytes32[]',
                internalType: 'bytes32[]'
            }
        ],
        outputs: [
            {
                name: 'contents',
                type: 'bytes32[]',
                internalType: 'bytes32[]'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'supportsInterface',
        inputs: [
            {
                name: 'interfaceId',
                type: 'bytes4',
                internalType: 'bytes4'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'pure'
    },
    {
        type: 'function',
        name: 'sweep',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'event',
        name: 'DelegateAll',
        inputs: [
            {
                name: 'from',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'to',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                indexed: false,
                internalType: 'bytes32'
            },
            {
                name: 'enable',
                type: 'bool',
                indexed: false,
                internalType: 'bool'
            }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'DelegateContract',
        inputs: [
            {
                name: 'from',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'to',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                indexed: false,
                internalType: 'bytes32'
            },
            {
                name: 'enable',
                type: 'bool',
                indexed: false,
                internalType: 'bool'
            }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'DelegateERC1155',
        inputs: [
            {
                name: 'from',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'to',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256'
            },
            {
                name: 'rights',
                type: 'bytes32',
                indexed: false,
                internalType: 'bytes32'
            },
            {
                name: 'amount',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256'
            }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'DelegateERC20',
        inputs: [
            {
                name: 'from',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'to',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes32',
                indexed: false,
                internalType: 'bytes32'
            },
            {
                name: 'amount',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256'
            }
        ],
        anonymous: false
    },
    {
        type: 'event',
        name: 'DelegateERC721',
        inputs: [
            {
                name: 'from',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'to',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'contract_',
                type: 'address',
                indexed: true,
                internalType: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256'
            },
            {
                name: 'rights',
                type: 'bytes32',
                indexed: false,
                internalType: 'bytes32'
            },
            {
                name: 'enable',
                type: 'bool',
                indexed: false,
                internalType: 'bool'
            }
        ],
        anonymous: false
    },
    {
        type: 'error',
        name: 'MulticallFailed',
        inputs: []
    }
]; //# sourceMappingURL=DelegateRegistry.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ExclusiveDelegateResolver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExclusiveDelegateResolverAbi": (()=>ExclusiveDelegateResolverAbi)
});
const ExclusiveDelegateResolverAbi = [
    {
        type: 'function',
        name: 'DELEGATE_REGISTRY',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'address',
                internalType: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'GLOBAL_DELEGATION',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'bytes24',
                internalType: 'bytes24'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'decodeRightsExpiration',
        inputs: [
            {
                name: 'rights',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes24',
                internalType: 'bytes24'
            },
            {
                name: '',
                type: 'uint40',
                internalType: 'uint40'
            }
        ],
        stateMutability: 'pure'
    },
    {
        type: 'function',
        name: 'delegatedWalletsByRights',
        inputs: [
            {
                name: 'wallet',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes24',
                internalType: 'bytes24'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'address[]',
                internalType: 'address[]'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'exclusiveOwnerByRights',
        inputs: [
            {
                name: 'contractAddress',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256',
                internalType: 'uint256'
            },
            {
                name: 'rights',
                type: 'bytes24',
                internalType: 'bytes24'
            }
        ],
        outputs: [
            {
                name: 'owner',
                type: 'address',
                internalType: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'exclusiveWalletByRights',
        inputs: [
            {
                name: 'vault',
                type: 'address',
                internalType: 'address'
            },
            {
                name: 'rights',
                type: 'bytes24',
                internalType: 'bytes24'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'address',
                internalType: 'address'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'generateRightsWithExpiration',
        inputs: [
            {
                name: 'rightsIdentifier',
                type: 'bytes24',
                internalType: 'bytes24'
            },
            {
                name: 'expiration',
                type: 'uint40',
                internalType: 'uint40'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        stateMutability: 'pure'
    }
]; //# sourceMappingURL=ExclusiveDelegateResolver.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ZkSyncAbi.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ZkSyncAbi": (()=>ZkSyncAbi)
});
const ZkSyncAbi = [
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
]; //# sourceMappingURL=ZkSyncAbi.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessionClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSessionClient": (()=>createSessionClient),
    "toSessionClient": (()=>toSessionClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/toAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$walletActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/walletActions.js [app-client] (ecmascript)");
;
;
;
function toSessionClient({ client, signer, session, paymasterHandler }) {
    return createSessionClient({
        account: client.account,
        chain: client.chain,
        session,
        signer,
        transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(client.transport),
        paymasterHandler
    });
}
function createSessionClient({ account, signer, chain, transport, session, paymasterHandler }) {
    if (!transport) {
        transport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])();
    }
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
        transport,
        chain
    });
    const baseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
        account: typeof account === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAccount"])(account) : account,
        chain: chain,
        transport
    });
    const signerWalletClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
        account: signer,
        chain: chain,
        transport
    });
    const sessionClient = baseClient.extend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$walletActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionWalletActions"])(signerWalletClient, publicClient, session, paymasterHandler));
    return sessionClient;
} //# sourceMappingURL=sessionClient.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/sessions.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessionClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessionClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
;
;
;
;
 //# sourceMappingURL=sessions.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/sessions.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessionClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessionClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$exports$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/sessions.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/constants.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWRegistryAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWRegistryAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$BridgeHubAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/BridgeHubAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$DelegateRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/DelegateRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ExclusiveDelegateResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ExclusiveDelegateResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ZkSyncAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ZkSyncAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$exports$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/sessions.js [app-client] (ecmascript) <module evaluation>");
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
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/constants.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWRegistryAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWRegistryAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$BridgeHubAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/BridgeHubAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$DelegateRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/DelegateRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ExclusiveDelegateResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ExclusiveDelegateResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ZkSyncAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ZkSyncAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$exports$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/sessions.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$exports$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/constants.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript) <export default as AccountFactoryAbi>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountFactoryAbi": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/prepareTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MaxFeePerGasTooLowError": (()=>MaxFeePerGasTooLowError),
    "defaultParameters": (()=>defaultParameters),
    "prepareTransactionRequest": (()=>prepareTransactionRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/unit/formatGwei.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/estimateGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$estimateFee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/actions/estimateFee.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$exports$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/constants.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccountFactoryAbi$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript) <export default as AccountFactoryAbi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const defaultParameters = [
    'blobVersionedHashes',
    'chainId',
    'fees',
    'gas',
    'nonce',
    'type'
];
class MaxFeePerGasTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ maxPriorityFeePerGas }){
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas)} gwei).`, {
            name: 'MaxFeePerGasTooLowError'
        });
    }
}
async function prepareTransactionRequest(client, signerClient, publicClient, args) {
    const { chain, gas, nonce, parameters: parameterNames = defaultParameters } = args;
    const isDeployed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSmartAccountDeployed"])(publicClient, client.account.address);
    if (!isDeployed) {
        const initialCall = {
            target: args.to,
            allowFailure: false,
            value: args.value ?? 0,
            callData: args.data ?? '0x'
        };
        // Create calldata for initializing the proxy account
        const initializerCallData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializerCalldata"])(signerClient.account.address, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOA_VALIDATOR_ADDRESS"], initialCall);
        const addressBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(signerClient.account.address);
        const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(addressBytes);
        const deploymentCalldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccountFactoryAbi$3e$__["AccountFactoryAbi"],
            functionName: 'deployAccount',
            args: [
                salt,
                initializerCallData
            ]
        });
        // Override transaction fields
        args.to = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_ACCOUNT_FACTORY_ADDRESS"];
        args.data = deploymentCalldata;
    }
    const initiatorAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(isDeployed ? client.account : signerClient.account);
    const request = {
        ...args,
        from: initiatorAccount.address
    };
    let chainId;
    async function getChainId() {
        if (chainId) return chainId;
        if (chain) return chain.id;
        if (typeof args.chainId !== 'undefined') return args.chainId;
        const chainId_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    if (parameterNames.includes('chainId')) request.chainId = await getChainId();
    if (parameterNames.includes('nonce') && typeof nonce === 'undefined' && initiatorAccount) {
        request.nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(publicClient, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionCount"], 'getTransactionCount')({
            address: initiatorAccount.address,
            blockTag: 'pending'
        });
    }
    let gasFromFeeEstimation;
    if (parameterNames.includes('fees')) {
        if (typeof request.maxFeePerGas === 'undefined' || typeof request.maxPriorityFeePerGas === 'undefined') {
            let maxFeePerGas;
            let maxPriorityFeePerGas;
            // Skip fee estimation for contract deployments
            if (request.to === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_DEPLOYER_ADDRESS"]) {
                maxFeePerGas = 25000000n;
                maxPriorityFeePerGas = 0n;
            } else {
                const estimateFeeRequest = {
                    account: initiatorAccount,
                    to: request.to,
                    value: request.value,
                    data: request.data,
                    gas: request.gas,
                    nonce: request.nonce,
                    chainId: request.chainId,
                    authorizationList: []
                };
                const feeEstimation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$actions$2f$estimateFee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateFee"])(publicClient, estimateFeeRequest);
                maxFeePerGas = feeEstimation.maxFeePerGas;
                maxPriorityFeePerGas = feeEstimation.maxPriorityFeePerGas;
                gasFromFeeEstimation = feeEstimation.gasLimit;
            }
            if (typeof args.maxPriorityFeePerGas === 'undefined' && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas) throw new MaxFeePerGasTooLowError({
                maxPriorityFeePerGas
            });
            request.maxPriorityFeePerGas = maxPriorityFeePerGas;
            request.maxFeePerGas = maxFeePerGas;
            // set gas to gasFromFeeEstimation if gas is not already set
            if (typeof gas === 'undefined') {
                request.gas = gasFromFeeEstimation;
            }
        }
    }
    if (parameterNames.includes('gas') && typeof gas === 'undefined' && gasFromFeeEstimation === undefined // if gas was set by fee estimation, don't estimate again
    ) request.gas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGas"], 'estimateGas')({
        ...request,
        account: initiatorAccount ? {
            address: initiatorAccount.address,
            type: 'json-rpc'
        } : undefined
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(request);
    delete request.parameters;
    delete request.isInitialTransaction;
    return request;
} //# sourceMappingURL=prepareTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyPolicyRegistry.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SessionKeyPolicyRegistryAbi": (()=>SessionKeyPolicyRegistryAbi)
});
const SessionKeyPolicyRegistryAbi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [],
        name: 'AccessControlBadConfirmation',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: 'neededRole',
                type: 'bytes32'
            }
        ],
        name: 'AccessControlUnauthorizedAccount',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'target',
                type: 'address'
            }
        ],
        name: 'AddressEmptyCode',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'implementation',
                type: 'address'
            }
        ],
        name: 'ERC1967InvalidImplementation',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ERC1967NonPayable',
        type: 'error'
    },
    {
        inputs: [],
        name: 'FailedCall',
        type: 'error'
    },
    {
        inputs: [],
        name: 'InvalidInitialization',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NotInitializing',
        type: 'error'
    },
    {
        inputs: [],
        name: 'UUPSUnauthorizedCallContext',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'slot',
                type: 'bytes32'
            }
        ],
        name: 'UUPSUnsupportedProxiableUUID',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint64',
                name: 'version',
                type: 'uint64'
            }
        ],
        name: 'Initialized',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'enum PolicyType',
                name: 'policyType',
                type: 'uint8'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'target',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'data',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'enum Status',
                name: 'status',
                type: 'uint8'
            }
        ],
        name: 'PolicyStatusChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'previousAdminRole',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'newAdminRole',
                type: 'bytes32'
            }
        ],
        name: 'RoleAdminChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'RoleGranted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'RoleRevoked',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'implementation',
                type: 'address'
            }
        ],
        name: 'Upgraded',
        type: 'event'
    },
    {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
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
        name: 'MANAGER_ROLE',
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
        name: 'UPGRADE_INTERFACE_VERSION',
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
        inputs: [
            {
                internalType: 'address',
                name: 'token',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'target',
                type: 'address'
            }
        ],
        name: 'getApprovalTargetStatus',
        outputs: [
            {
                internalType: 'enum Status',
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
                internalType: 'address',
                name: 'target',
                type: 'address'
            },
            {
                internalType: 'bytes4',
                name: 'selector',
                type: 'bytes4'
            }
        ],
        name: 'getCallPolicyStatus',
        outputs: [
            {
                internalType: 'enum Status',
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
                name: 'role',
                type: 'bytes32'
            }
        ],
        name: 'getRoleAdmin',
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
                name: 'target',
                type: 'address'
            }
        ],
        name: 'getTransferPolicyStatus',
        outputs: [
            {
                internalType: 'enum Status',
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
                name: 'role',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'hasRole',
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
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'proxiableUUID',
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
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: 'callerConfirmation',
                type: 'address'
            }
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32'
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            }
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'token',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'target',
                type: 'address'
            },
            {
                internalType: 'enum Status',
                name: 'status',
                type: 'uint8'
            }
        ],
        name: 'setApprovalTargetStatus',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'target',
                type: 'address'
            },
            {
                internalType: 'bytes4',
                name: 'selector',
                type: 'bytes4'
            },
            {
                internalType: 'enum Status',
                name: 'status',
                type: 'uint8'
            }
        ],
        name: 'setCallPolicyStatus',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'target',
                type: 'address'
            },
            {
                internalType: 'enum Status',
                name: 'status',
                type: 'uint8'
            }
        ],
        name: 'setTransferPolicyStatus',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
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
                name: 'newImplementation',
                type: 'address'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    }
]; //# sourceMappingURL=SessionKeyPolicyRegistry.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript) <export default as AGWAccountAbi>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AGWAccountAbi": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessionValidator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SessionKeyPolicyStatus": (()=>SessionKeyPolicyStatus),
    "assertSessionKeyPolicies": (()=>assertSessionKeyPolicies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/chains/definitions/abstract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/decodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyPolicyRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyPolicyRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$exports$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/constants.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AGWAccountAbi$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript) <export default as AGWAccountAbi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const restrictedSelectors = new Set([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFunctionSelector"])('function setApprovalForAll(address, bool)'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFunctionSelector"])('function approve(address, uint256)'),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFunctionSelector"])('function transfer(address, uint256)')
]);
var SessionKeyPolicyStatus;
(function(SessionKeyPolicyStatus) {
    SessionKeyPolicyStatus[SessionKeyPolicyStatus["Unset"] = 0] = "Unset";
    SessionKeyPolicyStatus[SessionKeyPolicyStatus["Allowed"] = 1] = "Allowed";
    SessionKeyPolicyStatus[SessionKeyPolicyStatus["Denied"] = 2] = "Denied";
})(SessionKeyPolicyStatus || (SessionKeyPolicyStatus = {}));
async function assertSessionKeyPolicies(client, chainId, account, transaction) {
    // Only validate on Abstract mainnet
    if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$abstract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abstract"].id) {
        return;
    }
    const session = getSessionFromTransaction(account, transaction);
    if (!session) {
        // no session can be parsed from the transaction
        return;
    }
    const callPolicies = session.callPolicies;
    const transferPolicies = session.transferPolicies;
    const checks = [];
    for (const callPolicy of callPolicies){
        if (restrictedSelectors.has(callPolicy.selector)) {
            const destinationConstraints = callPolicy.constraints.filter((c)=>c.index === 0n && c.condition === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstraintCondition"].Equal);
            if (destinationConstraints.length === 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](`Unconstrained token approval/transfer destination in call policy. Selector: ${callPolicy.selector}; Target: ${callPolicy.target}`);
            }
            for (const constraint of destinationConstraints){
                const [target] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeAbiParameters"])([
                    {
                        type: 'address'
                    }
                ], constraint.refValue);
                checks.push({
                    target,
                    check: {
                        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_POLICY_REGISTRY_ADDRESS"],
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyPolicyRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionKeyPolicyRegistryAbi"],
                        functionName: 'getApprovalTargetStatus',
                        args: [
                            callPolicy.target,
                            target
                        ]
                    }
                });
            }
        } else {
            checks.push({
                target: callPolicy.target,
                check: {
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_POLICY_REGISTRY_ADDRESS"],
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyPolicyRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionKeyPolicyRegistryAbi"],
                    functionName: 'getCallPolicyStatus',
                    args: [
                        callPolicy.target,
                        callPolicy.selector
                    ]
                }
            });
        }
    }
    for (const transferPolicy of transferPolicies){
        checks.push({
            target: transferPolicy.target,
            check: {
                address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_POLICY_REGISTRY_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyPolicyRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionKeyPolicyRegistryAbi"],
                functionName: 'getTransferPolicyStatus',
                args: [
                    transferPolicy.target
                ]
            }
        });
    }
    const results = await client.multicall({
        contracts: checks.map((c)=>c.check),
        allowFailure: false
    });
    for(let i = 0; i < checks.length; i++){
        const result = results[i];
        const check = checks[i];
        if (Number(result) !== SessionKeyPolicyStatus.Allowed) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](`Session key policy violation. Target: ${check?.target}; Status: ${SessionKeyPolicyStatus[Number(result)]}`);
        }
    }
}
function getSessionFromTransaction(account, transaction) {
    if (transaction.to === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"] && transaction.data?.substring(0, 10) === '0x5a0694d2' // createSession(SessionLib.SessionSpec memory sessionSpec)
    ) {
        const sessionSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionKeyValidatorAbi"],
            data: transaction.data
        });
        if (sessionSpec.functionName === 'createSession') {
            return sessionSpec.args[0];
        }
    }
    if (transaction.to === account?.address && transaction.data?.substring(0, 10) === '0xd3bdf4b5' // addModule(bytes moduleAndData)
    ) {
        const moduleAndData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AGWAccountAbi$3e$__["AGWAccountAbi"],
            data: transaction.data
        });
        if (moduleAndData.functionName === 'addModule' && moduleAndData.args[0].toLowerCase().startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"].toLowerCase())) {
            // Remove '0x' prefix (2 chars) + validator address 20 bytes (40 chars)
            const sessionData = moduleAndData.args[0].substring(42);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeAbiParameters"])([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionSpec"])()
            ], `0x${sessionData}`)[0];
        }
    }
    return undefined;
} //# sourceMappingURL=sessionValidator.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signEip712TransactionInternal": (()=>signEip712TransactionInternal),
    "signTransaction": (()=>signTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3_zod@3.24.3/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessionValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessionValidator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendPrivyTransaction.js [app-client] (ecmascript)");
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
async function signTransaction(client, signerClient, publicClient, args, validator, validationHookData = {}, customPaymasterHandler = undefined, isPrivyCrossApp = false) {
    const chain = client.chain;
    if (isPrivyCrossApp) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signPrivyTransaction"])(client, args);
    }
    if (!chain?.serializers?.transaction) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('transaction serializer not found on chain.');
    const { transaction, customSignature } = await signEip712TransactionInternal(client, signerClient, publicClient, args, validator, validationHookData, customPaymasterHandler);
    return chain.serializers.transaction({
        ...transaction,
        customSignature,
        type: 'eip712'
    }, {
        r: '0x0',
        s: '0x0',
        v: 0n
    });
}
async function signEip712TransactionInternal(client, signerClient, publicClient, args, validator, validationHookData = {}, customPaymasterHandler = undefined) {
    const { account: account_ = client.account, chain = client.chain, ...transaction } = args;
    // TODO: open up typing to allow for eip712 transactions
    transaction.type = 'eip712';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformHexValues"])(transaction, [
        'value',
        'nonce',
        'maxFeePerGas',
        'maxPriorityFeePerGas',
        'gas',
        'chainId',
        'gasPerPubdata'
    ]);
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signTransaction'
    });
    const smartAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const useSignerAddress = transaction.from === signerClient.account.address;
    const fromAccount = useSignerAddress ? signerClient.account : smartAccount;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertEip712Request"])({
        account: fromAccount,
        chain,
        ...transaction
    });
    if (!chain || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VALID_CHAINS"][chain.id] === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Invalid chain specified');
    }
    if (!chain?.custom?.getEip712Domain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`getEip712Domain` not found on chain.');
    const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
    if (chain !== null) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
        currentChainId: chainId,
        chain: chain
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessionValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSessionKeyPolicies"])(publicClient, chainId, fromAccount, transaction);
    const transactionWithPaymaster = await getTransactionWithPaymasterData(chainId, fromAccount, transaction, customPaymasterHandler);
    if (transactionWithPaymaster.data === undefined) {
        // serializer turns undefined into 0x00 which causes issues sending
        // eth to contracts that don't have a fallback function
        transactionWithPaymaster.data = '0x';
    }
    const eip712Domain = chain?.custom.getEip712Domain({
        ...transactionWithPaymaster,
        type: 'eip712'
    });
    const rawSignature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTypedData"])(signerClient, {
        ...eip712Domain,
        account: signerClient.account
    });
    let signature;
    if (useSignerAddress) {
        signature = rawSignature;
    } else {
        const hookData = [];
        if (!useSignerAddress) {
            const validationHooks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
                address: client.account.address,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                functionName: 'listHooks',
                args: [
                    true
                ]
            });
            for (const hook of validationHooks){
                hookData.push(validationHookData[hook] ?? '0x');
            }
        }
        // Match the expect signature format of the AGW smart account
        signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbiParameters"])([
            'bytes',
            'address',
            'bytes[]'
        ]), [
            rawSignature,
            validator,
            hookData
        ]);
    }
    return {
        transaction: transactionWithPaymaster,
        customSignature: signature
    };
}
async function getTransactionWithPaymasterData(chainId, fromAccount, transaction, customPaymasterHandler = undefined) {
    if (customPaymasterHandler && !transaction.paymaster && !transaction.paymasterInput) {
        const paymasterResult = await customPaymasterHandler({
            chainId,
            from: fromAccount.address,
            data: transaction.data,
            gas: transaction.gas ?? 0n,
            gasPrice: transaction.gasPrice ?? 0n,
            gasPerPubdata: transaction.gasPerPubdata ?? 0n,
            maxFeePerGas: transaction.maxFeePerGas ?? 0n,
            maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ?? 0n,
            nonce: transaction.nonce ?? 0,
            to: transaction.to ?? '0x0',
            value: transaction.value ?? 0n
        });
        return {
            ...transaction,
            ...paymasterResult,
            from: fromAccount.address,
            chainId
        };
    }
    return {
        ...transaction,
        from: fromAccount.address,
        chainId
    };
} //# sourceMappingURL=signTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionInternal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendTransactionInternal": (()=>sendTransactionInternal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$insufficientBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/insufficientBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$prepareTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/prepareTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function sendTransactionInternal(client, signerClient, publicClient, parameters, validator, validationHookData = {}, customPaymasterHandler = undefined) {
    const { chain = client.chain } = parameters;
    if (!signerClient.account) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/sendTransaction'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(signerClient.account);
    try {
        // assertEip712Request(parameters)
        // Prepare the request for signing (assign appropriate fees, etc.)
        const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$prepareTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, signerClient, publicClient, {
            ...parameters,
            parameters: [
                'gas',
                'nonce',
                'fees'
            ]
        });
        let chainId;
        if (chain !== null) {
            chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(signerClient, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
                currentChainId: chainId,
                chain
            });
        }
        const serializedTransaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransaction"])(client, signerClient, publicClient, {
            ...request,
            chainId
        }, validator, validationHookData, customPaymasterHandler);
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendRawTransaction"], 'sendRawTransaction')({
            serializedTransaction
        });
    } catch (err) {
        if (err instanceof Error && err.message.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSUFFICIENT_BALANCE_SELECTOR"])) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$insufficientBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsufficientBalanceError"]();
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: chain
        });
    }
} //# sourceMappingURL=sendTransactionInternal.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendTransaction": (()=>sendTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendPrivyTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionInternal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionInternal.js [app-client] (ecmascript)");
;
;
;
;
;
async function sendTransaction(client, signerClient, publicClient, parameters, isPrivyCrossApp = false, customPaymasterHandler = undefined) {
    if (isPrivyCrossApp) {
        let paymasterData = {};
        // SendEip712TransactionParameters doesn't actually have paymaster or paymasterInput fields
        // defined, so we just have to cast to any here to access them
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const requestAsAny = parameters;
        if (customPaymasterHandler && !requestAsAny.paymaster && !requestAsAny.paymasterInput) {
            paymasterData = await customPaymasterHandler({
                ...parameters,
                from: client.account.address,
                chainId: parameters.chain?.id ?? client.chain.id
            });
        }
        const updatedParameters = {
            ...parameters,
            ...paymasterData
        };
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPrivyTransaction"])(client, updatedParameters);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionInternal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransactionInternal"])(client, signerClient, publicClient, parameters, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOA_VALIDATOR_ADDRESS"], {}, customPaymasterHandler);
} //# sourceMappingURL=sendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/deployContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deployContract": (()=>deployContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransaction.js [app-client] (ecmascript)");
;
;
;
;
function deployContract(walletClient, signerClient, publicClient, parameters, isPrivyCrossApp = false) {
    const { abi, args, bytecode, deploymentType, salt, ...request } = parameters;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
        abi,
        args,
        bytecode,
        deploymentType,
        salt
    });
    // Add the bytecode to the factoryDeps if it's not already there
    request.factoryDeps = request.factoryDeps || [];
    if (!request.factoryDeps.includes(bytecode)) request.factoryDeps.push(bytecode);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(walletClient, signerClient, publicClient, {
        ...request,
        data,
        to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACT_DEPLOYER_ADDRESS"]
    }, isPrivyCrossApp);
} //# sourceMappingURL=deployContract.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/getLinkedAccounts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLinkedAccounts": (()=>getLinkedAccounts),
    "isLinkedAccount": (()=>isLinkedAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ExclusiveDelegateResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ExclusiveDelegateResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
async function getLinkedAccounts(client, parameters) {
    const { agwAddress } = parameters;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(agwAddress, {
        strict: false
    })) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address: agwAddress
        });
    }
    const checksummedAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(agwAddress);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ExclusiveDelegateResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExclusiveDelegateResolverAbi"],
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANONICAL_EXCLUSIVE_DELEGATE_RESOLVER_ADDRESS"],
        functionName: 'delegatedWalletsByRights',
        args: [
            checksummedAddress,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGW_LINK_DELEGATION_RIGHTS"]
        ]
    });
    return {
        linkedAccounts: [
            ...result
        ]
    };
}
async function isLinkedAccount(client, parameters) {
    const { address } = parameters;
    if (!client.account) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
            docsPath: '/docs/contract/readContract'
        });
    }
    const clientAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(client.account);
    const { linkedAccounts } = await getLinkedAccounts(client, {
        agwAddress: clientAccount.address
    });
    return linkedAccounts.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checksumAddress"])(address));
} //# sourceMappingURL=getLinkedAccounts.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/getLinkedAgw.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLinkedAgw": (()=>getLinkedAgw),
    "isLinkedAccount": (()=>isLinkedAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ExclusiveDelegateResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ExclusiveDelegateResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
async function getLinkedAgw(client, parameters) {
    const { address = client.account?.address } = parameters;
    if (address === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('No address provided');
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(address, {
        strict: false
    })) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address
        });
    }
    const checksummedAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ExclusiveDelegateResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExclusiveDelegateResolverAbi"],
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANONICAL_EXCLUSIVE_DELEGATE_RESOLVER_ADDRESS"],
        functionName: 'exclusiveWalletByRights',
        args: [
            checksummedAddress,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGW_LINK_DELEGATION_RIGHTS"]
        ]
    });
    if (result === checksummedAddress) {
        return {
            agw: undefined
        };
    }
    return {
        agw: result
    };
}
async function isLinkedAccount(client, parameters) {
    const { address } = parameters;
    if (client.account === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
            docsPath: '/docs/contract/readContract'
        });
    }
    const clientAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(client.account);
    const { agw } = await getLinkedAgw(client, {
        address
    });
    return agw === clientAccount.address;
} //# sourceMappingURL=getLinkedAgw.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/getSessionStatus.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSessionStatus": (()=>getSessionStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
;
;
;
async function getSessionStatus(publicClient, address, sessionHashOrConfig) {
    const sessionHash = typeof sessionHashOrConfig === 'string' ? sessionHashOrConfig : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionHash"])(sessionHashOrConfig);
    return await publicClient.readContract({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionKeyValidatorAbi"],
        functionName: 'sessionStatus',
        args: [
            address,
            sessionHash
        ]
    });
} //# sourceMappingURL=getSessionStatus.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/linkToAgw.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "linkToAgw": (()=>linkToAgw)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3_zod@3.24.3/node_modules/abitype/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/wallet/writeContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$decorators$2f$publicL2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/zksync/decorators/publicL2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$BridgeHubAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/BridgeHubAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$DelegateRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/DelegateRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ZkSyncAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/ZkSyncAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
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
async function linkToAgw(client, parameters) {
    const { account: account_ = client.account, agwAddress, enabled, l2Chain } = parameters;
    if (!account_) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]();
    }
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VALID_CHAINS"][l2Chain.id]) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Unsupported L2 Chain');
    }
    const bridgehubAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRIDGEHUB_ADDRESS"][l2Chain.id];
    const l1PublicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
        chain: client.chain,
        transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])()
    });
    const l2PublicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
        chain: l2Chain,
        transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])()
    }).extend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$decorators$2f$publicL2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicActionsL2"])());
    const l2Value = 0n;
    const operatorTip = 0n;
    const l2Calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$DelegateRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DelegateRegistryAbi"],
        functionName: 'delegateAll',
        args: [
            agwAddress,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NON_EXPIRING_DELEGATION_RIGHTS"],
            enabled
        ]
    });
    const l2GasLimit = await l2PublicClient.estimateGasL1ToL2({
        chain: l2PublicClient.chain,
        account: account.address,
        to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANONICAL_DELEGATE_REGISTRY_ADDRESS"],
        data: l2Calldata,
        value: 0n
    });
    const baseFee = await l1PublicClient.getGasPrice();
    const maxPriorityFeePerGas = await l1PublicClient.estimateMaxPriorityFeePerGas();
    const maxFeePerGas = baseFee * 3n / 2n + maxPriorityFeePerGas;
    const gasPriceForEstimation = maxFeePerGas;
    const baseCost = await l1PublicClient.readContract({
        address: bridgehubAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$BridgeHubAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BridgeHubAbi"],
        functionName: 'l2TransactionBaseCost',
        args: [
            BigInt(l2PublicClient.chain.id),
            gasPriceForEstimation,
            l2GasLimit,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_GAS_PER_PUBDATA_BYTE"]
        ]
    });
    const l2Costs = baseCost + operatorTip + l2Value;
    const providedValue = l2Costs;
    if (baseCost > providedValue) {
        console.error('Base cost is greater than provided value');
    }
    const bridgeArgs = {
        chainId: BigInt(l2PublicClient.chain.id),
        mintValue: providedValue,
        l2Contract: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CANONICAL_DELEGATE_REGISTRY_ADDRESS"],
        l2Value,
        l2Calldata,
        l2GasLimit,
        l2GasPerPubdataByteLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_GAS_PER_PUBDATA_BYTE"],
        factoryDeps: [],
        refundRecipient: agwAddress
    };
    const l1TransactionHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"], 'writeContract')({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$BridgeHubAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BridgeHubAbi"],
        address: bridgehubAddress,
        chain: client.chain,
        account,
        functionName: 'requestL2TransactionDirect',
        value: providedValue,
        args: [
            bridgeArgs
        ],
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    return {
        l1TransactionHash,
        getL2TransactionHash: async ()=>getL2HashFromPriorityOp(l1PublicClient, l1TransactionHash)
    };
}
async function getL2HashFromPriorityOp(publicClient, l1TransactionHash) {
    const receipt = await publicClient.waitForTransactionReceipt({
        hash: l1TransactionHash
    });
    if (receipt.status !== 'success') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('L1 transaction failed');
    }
    let hash;
    for (const log of receipt.logs){
        try {
            const priorityQueueLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$ZkSyncAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZkSyncAbi"],
                data: log.data,
                topics: log.topics,
                strict: false
            });
            if (priorityQueueLog && priorityQueueLog.args.txHash !== null) hash = priorityQueueLog.args.txHash;
        } catch (_e) {
        // Usually gets here if one of the events is not in the abi which is ok
        }
    }
    if (!hash) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Error getting L2 hash from L1 transaction');
    }
    return hash;
} //# sourceMappingURL=linkToAgw.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/revokeSessions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "revokeSessions": (()=>revokeSessions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/wallet/writeContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/SessionKeyValidator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function revokeSessions(client, args) {
    const { session, ...rest } = args;
    const sessionHashes = typeof session === 'string' ? [
        session
    ] : Array.isArray(session) ? session.map(sessionHash) : [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionHash"])(session)
    ];
    const transactionHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"], 'writeContract')({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$SessionKeyValidator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionKeyValidatorAbi"],
        functionName: 'revokeKeys',
        args: [
            sessionHashes
        ],
        ...rest
    });
    return {
        transactionHash
    };
}
function sessionHash(session) {
    if (typeof session === 'string') {
        return session;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionHash"])(session);
} //# sourceMappingURL=revokeSessions.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionBatch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBatchTransactionObject": (()=>getBatchTransactionObject),
    "sendTransactionBatch": (()=>sendTransactionBatch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AGWAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$types$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/types/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendPrivyTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionInternal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionInternal.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function getBatchTransactionObject(address, parameters) {
    const { calls, paymaster, paymasterInput } = parameters;
    const batchCalls = calls.map((tx)=>{
        if (!tx.to) throw new Error('Transaction target (to) is required');
        return {
            target: tx.to,
            allowFailure: false,
            value: BigInt(tx.value ?? 0),
            callData: tx.data ?? '0x'
        };
    });
    const batchCallData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AGWAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        functionName: 'batchCall',
        args: [
            batchCalls
        ]
    });
    // Get cumulative value passed in
    const totalValue = batchCalls.reduce((sum, call)=>sum + BigInt(call.value), BigInt(0));
    const batchTransaction = {
        to: address,
        data: batchCallData,
        value: totalValue,
        paymaster: paymaster,
        paymasterInput: paymasterInput,
        type: 'eip712'
    };
    return batchTransaction;
}
async function sendTransactionBatch(client, signerClient, publicClient, parameters, isPrivyCrossApp = false, customPaymasterHandler = undefined) {
    const { calls, ...rest } = parameters;
    if (calls.length === 0) {
        throw new Error('No calls provided');
    }
    if (isPrivyCrossApp) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPrivyTransaction"])(client, parameters);
    }
    const batchTransaction = getBatchTransactionObject(client.account.address, parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionInternal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransactionInternal"])(client, signerClient, publicClient, {
        ...batchTransaction,
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOA_VALIDATOR_ADDRESS"], {}, customPaymasterHandler);
} //# sourceMappingURL=sendTransactionBatch.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionForSession.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendTransactionForSession": (()=>sendTransactionForSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionInternal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionInternal.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function sendTransactionForSession(client, signerClient, publicClient, parameters, session, customPaymasterHandler = undefined) {
    const isDeployed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSmartAccountDeployed"])(publicClient, client.account.address);
    if (!isDeployed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Smart account not deployed');
    }
    const selector = parameters.data ? `0x${parameters.data.slice(2, 10)}` : undefined;
    if (!parameters.to) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Transaction to field is not specified');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionInternal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransactionInternal"])(client, signerClient, publicClient, parameters, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"], {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeSessionWithPeriodIds"])(session, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPeriodIdsForTransaction"])({
            sessionConfig: session,
            target: parameters.to,
            selector,
            timestamp: BigInt(Math.floor(Date.now() / 1000))
        }))
    }, customPaymasterHandler);
} //# sourceMappingURL=sendTransactionForSession.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/getAgwTypedSignature.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAgwTypedSignature": (()=>getAgwTypedSignature)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.0.8_typescript@5.8.3_zod@3.24.3/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/signature/serializeErc6492Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/constants/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/getCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
;
async function getAgwTypedSignature(args) {
    const { client, signer, messageHash } = args;
    const chainId = client.chain.id;
    const account = client.account;
    const rawSignature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTypedData"])(signer, {
        domain: {
            name: 'AbstractGlobalWallet',
            version: '1.0.0',
            chainId: BigInt(chainId),
            verifyingContract: account.address
        },
        types: {
            EIP712Domain: [
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'version',
                    type: 'string'
                },
                {
                    name: 'chainId',
                    type: 'uint256'
                },
                {
                    name: 'verifyingContract',
                    type: 'address'
                }
            ],
            AGWMessage: [
                {
                    name: 'signedHash',
                    type: 'bytes32'
                }
            ]
        },
        message: {
            signedHash: messageHash
        },
        primaryType: 'AGWMessage'
    });
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$0$2e$8_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$3$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbiParameters"])([
        'bytes',
        'address'
    ]), [
        rawSignature,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOA_VALIDATOR_ADDRESS"]
    ]);
    const code = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCode"])(client, {
        address: account.address
    });
    // if the account is already deployed, we can use signature directly
    // otherwise, we provide an ERC-6492 compatible signature
    if (code !== undefined) {
        return signature;
    }
    // Generate the ERC-6492 compatible signature
    // https://eips.ethereum.org/EIPS/eip-6492
    // 1. Generate the salt for account deployment
    const addressBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(signer.account.address);
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(addressBytes);
    // 2. Generate the ERC-6492 compatible signature with deploy parameters
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeErc6492Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeErc6492Signature"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_ACCOUNT_FACTORY_ADDRESS"],
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            functionName: 'deployAccount',
            args: [
                salt,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializerCalldata"])(signer.account.address, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOA_VALIDATOR_ADDRESS"], {
                    target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                    allowFailure: false,
                    callData: '0x',
                    value: 0n
                })
            ]
        }),
        signature
    });
} //# sourceMappingURL=getAgwTypedSignature.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signMessage": (()=>signMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$getAgwTypedSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/getAgwTypedSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendPrivyTransaction.js [app-client] (ecmascript)");
;
;
;
async function signMessage(client, signerClient, parameters, isPrivyCrossApp = false) {
    if (isPrivyCrossApp) {
        // We handle {message: {raw}} here because the message is expected to be a string
        if (typeof parameters.message === 'object') {
            if (parameters.message.raw instanceof Uint8Array) {
                parameters.message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToString"])(parameters.message.raw);
            } else {
                parameters.message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(parameters.message.raw, 'string');
            }
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPrivySignMessage"])(client, parameters);
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$getAgwTypedSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgwTypedSignature"])({
        client,
        signer: signerClient,
        messageHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(parameters.message)
    });
} //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransactionForSession.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signTransactionForSession": (()=>signTransactionForSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function signTransactionForSession(client, signerClient, publicClient, parameters, session, customPaymasterHandler = undefined) {
    const isDeployed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSmartAccountDeployed"])(publicClient, client.account.address);
    if (!isDeployed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Smart account not deployed');
    }
    const selector = parameters.data ? `0x${parameters.data.slice(2, 10)}` : undefined;
    if (!parameters.to) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Transaction to field is not specified');
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransaction"])(client, signerClient, publicClient, parameters, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"], {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeSessionWithPeriodIds"])(session, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPeriodIdsForTransaction"])({
            sessionConfig: session,
            target: parameters.to,
            selector,
            timestamp: BigInt(Math.floor(Date.now() / 1000))
        }))
    }, customPaymasterHandler);
} //# sourceMappingURL=signTransactionForSession.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signTypedData": (()=>signTypedData),
    "signTypedDataForSession": (()=>signTypedDataForSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromRlp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$getAgwTypedSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/getAgwTypedSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendPrivyTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
async function signTypedData(client, signerClient, publicClient, parameters, isPrivyCrossApp = false) {
    // if the typed data is already a zkSync EIP712 transaction, don't try to transform it
    // to an AGW typed signature, just pass it through to the signer.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEip712TypedData"])(parameters)) {
        const transformedTypedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEip712TypedData"])(parameters);
        if (transformedTypedData.chainId !== client.chain.id) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Chain ID mismatch in AGW typed signature');
        }
        const signedTransaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransaction"])(client, signerClient, publicClient, {
            ...transformedTypedData,
            chain: client.chain
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOA_VALIDATOR_ADDRESS"], {}, undefined, isPrivyCrossApp);
        if (!signedTransaction.startsWith('0x71')) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Expected RLP encoded EIP-712 transaction as signature');
        }
        const rlpSignature = `0x${signedTransaction.slice(4)}`;
        const signatureParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromRlp"])(rlpSignature, 'hex');
        if (signatureParts.length < 15) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Expected RLP encoded EIP-712 transaction with at least 15 fields');
        }
        // This is somewhat not type safe as it assumes that the signature from signTransaction is an
        // RLP encoded 712 transaction and that the customSignature field is the 15th field in the transaction.
        // That being said, it's a safe assumption for the current use case.
        return signatureParts[14];
    } else if (isPrivyCrossApp) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendPrivyTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPrivySignTypedData"])(client, parameters);
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$getAgwTypedSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgwTypedSignature"])({
        client,
        signer: signerClient,
        messageHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashTypedData"])(parameters)
    });
}
async function signTypedDataForSession(client, signerClient, publicClient, parameters, session, paymasterHandler) {
    // if the typed data is already a zkSync EIP712 transaction, don't try to transform it
    // to an AGW typed signature, just pass it through to the signer.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEip712TypedData"])(parameters)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Session client can only sign EIP712 transactions as typed data');
    }
    const transactionRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEip712TypedData"])(parameters);
    if (!transactionRequest.to) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Transaction must have a to address');
    }
    // Match the expect signature format of the AGW smart account so the result can be
    // directly used in eth_sendRawTransaction as the customSignature field
    const validationHookData = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeSessionWithPeriodIds"])(session, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPeriodIdsForTransaction"])({
            sessionConfig: session,
            target: transactionRequest.to,
            selector: transactionRequest.data?.slice(0, 10) ?? '0x',
            timestamp: BigInt(Math.floor(Date.now() / 1000))
        }))
    };
    const { customSignature } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signEip712TransactionInternal"])(client, signerClient, publicClient, {
        chain: client.chain,
        ...transactionRequest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"], validationHookData, paymasterHandler);
    return customSignature;
} //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/writeContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "writeContract": (()=>writeContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
async function writeContract(client, signerClient, publicClient, parameters, isPrivyCrossApp = false) {
    const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/contract/writeContract'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(client, signerClient, publicClient, {
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            account,
            ...request
        }, isPrivyCrossApp);
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/writeContract',
            functionName,
            sender: account.address
        });
    }
} //# sourceMappingURL=writeContract.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/writeContractForSession.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "writeContractForSession": (()=>writeContractForSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionForSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionForSession.js [app-client] (ecmascript)");
;
;
;
;
;
async function writeContractForSession(client, signerClient, publicClient, parameters, session, customPaymasterHandler = undefined) {
    const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/contract/writeContract'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionForSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransactionForSession"])(client, signerClient, publicClient, {
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            account,
            ...request
        }, session, customPaymasterHandler);
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/writeContract',
            functionName,
            sender: account.address
        });
    }
} //# sourceMappingURL=writeContractForSession.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/walletActions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "globalWalletActions": (()=>globalWalletActions),
    "linkablePublicActions": (()=>linkablePublicActions),
    "linkableWalletActions": (()=>linkableWalletActions),
    "sessionWalletActions": (()=>sessionWalletActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/decorators/wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abstractClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abstractClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$createSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/createSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$deployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/deployContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getLinkedAccounts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/getLinkedAccounts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getLinkedAgw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/getLinkedAgw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getSessionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/getSessionStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$linkToAgw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/linkToAgw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$prepareTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/prepareTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$revokeSessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/revokeSessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionBatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionBatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionForSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/sendTransactionForSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransactionForSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTransactionForSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/signTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/writeContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$writeContractForSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/writeContractForSession.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessionClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/sessionClient.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
function sessionWalletActions(signerClient, publicClient, session, paymasterHandler) {
    return (client)=>({
            sendTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionForSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransactionForSession"])(client, signerClient, publicClient, args, session, paymasterHandler),
            writeContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$writeContractForSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContractForSession"])(client, signerClient, publicClient, args, session, paymasterHandler),
            signTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransactionForSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransactionForSession"])(client, signerClient, publicClient, args, session, paymasterHandler),
            signTypedData: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTypedDataForSession"])(client, signerClient, publicClient, args, session, paymasterHandler),
            getSessionStatus: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getSessionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionStatus"])(publicClient, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(client.account).address, session)
        });
}
function globalWalletActions(signerClient, publicClient, isPrivyCrossApp = false, customPaymasterHandler) {
    return (client)=>({
            getChainId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"])(client),
            getLinkedAccounts: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getLinkedAccounts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkedAccounts"])(client, {
                    agwAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(client.account).address
                }),
            isLinkedAccount: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getLinkedAgw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinkedAccount"])(client, args),
            createSession: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$createSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSession"])(client, publicClient, args),
            revokeSessions: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$revokeSessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revokeSessions"])(client, args),
            prepareAbstractTransactionRequest: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$prepareTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, signerClient, publicClient, args),
            sendTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(client, signerClient, publicClient, args, isPrivyCrossApp, customPaymasterHandler),
            sendTransactionBatch: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransactionBatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransactionBatch"])(client, signerClient, publicClient, args, isPrivyCrossApp, customPaymasterHandler),
            signMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signMessage"])(client, signerClient, args, isPrivyCrossApp),
            signTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransaction"])(client, signerClient, publicClient, args, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOA_VALIDATOR_ADDRESS"], {}, customPaymasterHandler, isPrivyCrossApp),
            signTypedData: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTypedData"])(client, signerClient, publicClient, args, isPrivyCrossApp),
            deployContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$deployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deployContract"])(client, signerClient, publicClient, args, isPrivyCrossApp),
            writeContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"])(Object.assign(client, {
                    sendTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(client, signerClient, publicClient, args, isPrivyCrossApp, customPaymasterHandler)
                }), signerClient, publicClient, args, isPrivyCrossApp),
            toSessionClient: (signer, session)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$sessionClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSessionClient"])({
                    client: client,
                    signer,
                    session: session,
                    paymasterHandler: customPaymasterHandler
                }),
            getSessionStatus: (sessionHashOrConfig)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getSessionStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionStatus"])(publicClient, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(client.account).address, sessionHashOrConfig)
        });
}
function linkableWalletActions() {
    return (client)=>({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletActions"])(client),
            linkToAgw: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$linkToAgw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkToAgw"])(client, args),
            getLinkedAgw: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getLinkedAgw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkedAgw"])(client, {})
        });
}
function linkablePublicActions() {
    return (client)=>({
            getLinkedAgw: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getLinkedAgw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkedAgw"])(client, args),
            getLinkedAccounts: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$getLinkedAccounts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkedAccounts"])(client, args)
        });
} //# sourceMappingURL=walletActions.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abstractClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAbstractClient": (()=>createAbstractClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/toAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$walletActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/walletActions.js [app-client] (ecmascript)");
;
;
;
;
;
async function createAbstractClient({ signer, chain, transport, address, isPrivyCrossApp = false, publicTransport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(), customPaymasterHandler }) {
    if (!transport) {
        throw new Error('Transport is required');
    }
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
        chain: chain,
        transport: publicTransport
    });
    const smartAccountAddress = address ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmartAccountAddressFromInitialSigner"])(signer.address, publicClient);
    const baseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
        account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAccount"])(smartAccountAddress),
        chain: chain,
        transport
    });
    // Create a signer wallet client to handle actual signing
    const signerWalletClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
        account: signer,
        chain: chain,
        transport
    });
    const abstractClient = baseClient.extend((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$walletActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalWalletActions"])(signerWalletClient, publicClient, isPrivyCrossApp, customPaymasterHandler));
    return abstractClient;
} //# sourceMappingURL=abstractClient.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/deployAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deployAccount": (()=>deployAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/constants/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abis/AccountFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
async function deployAccount(params) {
    const { initialSignerAddress, walletClient, publicClient, ...rest } = params;
    const initialSigner = initialSignerAddress ?? walletClient.account.address;
    const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmartAccountAddressFromInitialSigner"])(initialSigner, publicClient);
    let deploymentTransaction = undefined;
    const isDeployed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSmartAccountDeployed"])(publicClient, address);
    if (!isDeployed) {
        const initializerCallData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializerCalldata"])(initialSigner, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EOA_VALIDATOR_ADDRESS"], {
            allowFailure: false,
            callData: '0x',
            value: 0n,
            target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"]
        });
        const addressBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(initialSigner);
        const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(addressBytes);
        const deploymentCalldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abis$2f$AccountFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            functionName: 'deployAccount',
            args: [
                salt,
                initializerCallData
            ]
        });
        deploymentTransaction = await walletClient.sendTransaction({
            account: walletClient.account,
            to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SMART_ACCOUNT_FACTORY_ADDRESS"],
            data: deploymentCalldata,
            ...rest
        });
    }
    return {
        smartAccountAddress: address,
        deploymentTransaction
    };
} //# sourceMappingURL=deployAccount.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/eip5792.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "agwCapabilities": (()=>agwCapabilities)
});
const agwCapabilities = {
    '0xab5': {
        atomicBatch: {
            supported: true
        }
    },
    '0x2b74': {
        atomicBatch: {
            supported: true
        }
    }
}; //# sourceMappingURL=eip5792.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript) <export VALID_CHAINS as validChains>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validChains": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VALID_CHAINS"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/transformEIP1193Provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "transformEIP1193Provider": (()=>transformEIP1193Provider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.28.0_bufferutil@4.0._78861914e120a3fb8cb677cdc7e7e966/node_modules/viem/_esm/accounts/toAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abstractClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abstractClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$eip5792$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/eip5792.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__VALID_CHAINS__as__validChains$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript) <export VALID_CHAINS as validChains>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function getAgwAddressFromInitialSigner(chain, transport, signer) {
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
        chain,
        transport
    });
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmartAccountAddressFromInitialSigner"])(signer, publicClient);
}
async function getAgwSigner(provider, method = 'eth_accounts') {
    const accounts = await provider.request({
        method
    });
    return accounts?.[0];
}
async function getAgwClient(account, chain, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler) {
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
        account,
        transport
    });
    const signer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAccount"])({
        address: account,
        signMessage: wallet.signMessage,
        signTransaction: wallet.signTransaction,
        signTypedData: wallet.signTypedData
    });
    const abstractClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abstractClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAbstractClient"])({
        chain,
        signer,
        transport,
        isPrivyCrossApp,
        publicTransport: overrideTransport,
        customPaymasterHandler
    });
    return abstractClient;
}
function transformEIP1193Provider(options) {
    const { provider, chain, transport: overrideTransport, isPrivyCrossApp = false, customPaymasterHandler } = options;
    const transport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider);
    const handler = async (e)=>{
        const { method, params } = e;
        switch(method){
            case 'eth_requestAccounts':
                {
                    const signer = await getAgwSigner(provider, method);
                    if (!signer) {
                        return [];
                    }
                    const smartAccount = await getAgwAddressFromInitialSigner(chain, transport, signer);
                    return [
                        smartAccount,
                        signer
                    ];
                }
            case 'eth_accounts':
                {
                    const signer = await getAgwSigner(provider);
                    if (!signer) {
                        return [];
                    }
                    const smartAccount = await getAgwAddressFromInitialSigner(chain, transport, signer);
                    return [
                        smartAccount,
                        signer
                    ];
                }
            case 'eth_signTypedData_v4':
                {
                    const account = await getAgwSigner(provider);
                    if (!account) {
                        throw new Error('Account not found');
                    }
                    if (params[0] === account) {
                        return provider.request(e);
                    }
                    const abstractClient = await getAgwClient(account, chain, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler);
                    return abstractClient.signTypedData(JSON.parse(params[1]));
                }
            case 'personal_sign':
                {
                    const account = await getAgwSigner(provider);
                    if (!account) {
                        throw new Error('Account not found');
                    }
                    if (params[1] === account) {
                        return provider.request(e);
                    }
                    const abstractClient = await getAgwClient(account, chain, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler);
                    return await abstractClient.signMessage({
                        message: {
                            raw: params[0]
                        }
                    });
                }
            case 'eth_signTransaction':
            case 'eth_sendTransaction':
                {
                    const account = await getAgwSigner(provider);
                    if (!account) {
                        throw new Error('Account not found');
                    }
                    const transaction = params[0];
                    if (transaction.from === account) {
                        return await provider.request(e);
                    }
                    const abstractClient = await getAgwClient(account, chain, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler);
                    // Undo the automatic formatting applied by Wagmi's eth_signTransaction
                    // Formatter: https://github.com/wevm/viem/blob/main/src/zksync/formatters.ts#L114
                    if (transaction.eip712Meta && transaction.eip712Meta.paymasterParams) {
                        transaction.paymaster = transaction.eip712Meta.paymasterParams.paymaster;
                        transaction.paymasterInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(transaction.eip712Meta.paymasterParams.paymasterInput);
                    }
                    if (method === 'eth_signTransaction') {
                        return await abstractClient.signTransaction(transaction);
                    } else if (method === 'eth_sendTransaction') {
                        return await abstractClient.sendTransaction(transaction);
                    }
                    throw new Error('Should not have reached this point');
                }
            case 'wallet_sendCalls':
                {
                    const account = await getAgwSigner(provider);
                    if (!account) {
                        throw new Error('Account not found');
                    }
                    const sendCallsParams = params[0];
                    if (sendCallsParams.from === account) {
                        return await provider.request(e);
                    }
                    const abstractClient = await getAgwClient(account, chain, transport, isPrivyCrossApp, overrideTransport, customPaymasterHandler);
                    return await abstractClient.sendTransactionBatch({
                        calls: sendCallsParams.calls.map((call)=>({
                                to: call.to,
                                value: call.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.value) : undefined,
                                data: call.data,
                                chainId: call.chainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.chainId) : undefined
                            }))
                    });
                }
            case 'wallet_getCallsStatus':
                {
                    const receipt = await provider.request({
                        method: 'eth_getTransactionReceipt',
                        params
                    });
                    return {
                        status: receipt?.status === undefined ? 'PENDING' : 'CONFIRMED',
                        receipts: [
                            receipt
                        ]
                    };
                }
            case 'wallet_addEthereumChain':
            case 'wallet_switchEthereumChain':
                {
                    const request = params[0];
                    const chainIdHex = request.chainId;
                    if (!chainIdHex) {
                        throw new Error('Chain ID is required');
                    }
                    // chainId is hex most likely, convert to number
                    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(chainIdHex) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$28$2e$0_bufferutil$40$4$2e$0$2e$_78861914e120a3fb8cb677cdc7e7e966$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(chainIdHex) : chainIdHex;
                    const chain = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__VALID_CHAINS__as__validChains$3e$__["validChains"]).find((c)=>c.id === chainId);
                    if (!chain) {
                        throw new Error(`Chain ${chainId} not supported`);
                    }
                    return await provider.request(e);
                }
            case 'wallet_showCallsStatus':
                {
                    // not implemented
                    return undefined;
                }
            case 'wallet_getCapabilities':
                {
                    const account = await getAgwSigner(provider);
                    if (!account) {
                        throw new Error('Account not found');
                    }
                    if (params[0] === account) {
                        return await provider.request(e);
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$eip5792$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agwCapabilities"];
                }
            default:
                {
                    return await provider.request(e);
                }
        }
    };
    return {
        ...provider,
        on: provider.on,
        removeListener: provider.removeListener,
        request: handler
    };
} //# sourceMappingURL=transformEIP1193Provider.js.map
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abstractClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abstractClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$deployAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/deployAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$transformEIP1193Provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/transformEIP1193Provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$walletActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/walletActions.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$abstractClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/abstractClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$actions$2f$deployAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/actions/deployAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$transformEIP1193Provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/transformEIP1193Provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$walletActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/walletActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript) <export SESSION_KEY_VALIDATOR_ADDRESS as sessionKeyValidatorAddress>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sessionKeyValidatorAddress": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_KEY_VALIDATOR_ADDRESS"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$abstract$2d$foundation$2b$agw$2d$cl_1b692bf5c8e8473c95dd0003dae7c103$2f$node_modules$2f40$abstract$2d$foundation$2f$agw$2d$client$2f$dist$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@abstract-foundation+agw-cl_1b692bf5c8e8473c95dd0003dae7c103/node_modules/@abstract-foundation/agw-client/dist/esm/constants.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=5a90d_%40abstract-foundation_agw-client_dist_esm_5b5c9835._.js.map