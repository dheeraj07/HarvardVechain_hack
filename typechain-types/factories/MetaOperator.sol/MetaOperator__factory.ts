/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MetaOperator,
  MetaOperatorInterface,
} from "../../MetaOperator.sol/MetaOperator";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "certOwner",
        type: "address",
      },
    ],
    name: "balanceOfCertificateNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOfTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "certOwner",
        type: "address",
      },
    ],
    name: "certificatesAndScoresOfCertificateOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getCertificateScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTreeLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "levelUpTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "score",
        type: "uint256",
      },
    ],
    name: "mintCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mintTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "rewardTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "certNFTAddr",
        type: "address",
      },
    ],
    name: "setCertificateNFTAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
    ],
    name: "setTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "treeNFTAddr",
        type: "address",
      },
    ],
    name: "setTreeNFTAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "treeOwner",
        type: "address",
      },
    ],
    name: "tokensAndLevelsOfTreeOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferTokensFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506118a4806100616000396000f3fe608060405234801561001057600080fd5b506004361061010a5760003560e01c8063717f96d2116100a2578063a5015dd111610071578063a5015dd1146102db578063be4780c2146102f7578063bec3fa1714610313578063f38488ec1461032f578063fe19b68b1461034b5761010a565b8063717f96d21461023f5780637a38664e1461027057806381a4af15146102a15780638da5cb5b146102bd5761010a565b80633ee8eb6e116100de5780633ee8eb6e146101bb5780634747b0be146101eb5780634b3e5ec11461020757806352912042146102235761010a565b806283293e1461010f57806326a4e8d21461013f5780632bce3fbe1461015b5780632ff57da81461018b575b600080fd5b61012960048036038101906101249190611287565b610367565b60405161013691906112cd565b60405180910390f35b61015960048036038101906101549190611287565b61040c565b005b61017560048036038101906101709190611314565b6104df565b60405161018291906112cd565b60405180910390f35b6101a560048036038101906101a09190611287565b610584565b6040516101b291906112cd565b60405180910390f35b6101d560048036038101906101d09190611314565b610628565b6040516101e291906112cd565b60405180910390f35b61020560048036038101906102009190611287565b6106cd565b005b610221600480360381019061021c9190611287565b6107a1565b005b61023d60048036038101906102389190611341565b610875565b005b61025960048036038101906102549190611287565b6109ab565b604051610267929190611452565b60405180910390f35b61028a60048036038101906102859190611287565b610a58565b604051610298929190611452565b60405180910390f35b6102bb60048036038101906102b69190611489565b610b05565b005b6102c5610c26565b6040516102d291906114d8565b60405180910390f35b6102f560048036038101906102f09190611489565b610c4c565b005b610311600480360381019061030c9190611314565b610d6f565b005b61032d60048036038101906103289190611489565b610e8f565b005b61034960048036038101906103449190611489565b610fc2565b005b61036560048036038101906103609190611287565b6110f5565b005b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016103c491906114d8565b602060405180830381865afa1580156103e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104059190611508565b9050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461049c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610493906115b8565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632bce3fbe836040518263ffffffff1660e01b815260040161053c91906112cd565b602060405180830381865afa158015610559573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057d9190611508565b9050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016105e091906114d8565b602060405180830381865afa1580156105fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106219190611508565b9050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633ee8eb6e836040518263ffffffff1660e01b815260040161068591906112cd565b602060405180830381865afa1580156106a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c69190611508565b9050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461075d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610754906115b8565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610831576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610828906115b8565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610905576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fc906115b8565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8484846040518463ffffffff1660e01b8152600401610962939291906115d8565b6020604051808303816000875af1158015610981573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a59190611647565b50505050565b606080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a73c0b7846040518263ffffffff1660e01b8152600401610a0991906114d8565b600060405180830381865afa158015610a26573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610a4f91906117cd565b91509150915091565b606080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638462151c846040518263ffffffff1660e01b8152600401610ab691906114d8565b600060405180830381865afa158015610ad3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610afc91906117cd565b91509150915091565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c906115b8565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f001b42183836040518363ffffffff1660e01b8152600401610bf0929190611845565b600060405180830381600087803b158015610c0a57600080fd5b505af1158015610c1e573d6000803e3d6000fd5b505050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd3906115b8565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1983836040518363ffffffff1660e01b8152600401610d39929190611845565b600060405180830381600087803b158015610d5357600080fd5b505af1158015610d67573d6000803e3d6000fd5b505050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610dff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df6906115b8565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630ce90ec2826040518263ffffffff1660e01b8152600401610e5a91906112cd565b600060405180830381600087803b158015610e7457600080fd5b505af1158015610e88573d6000803e3d6000fd5b5050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f16906115b8565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610f7a929190611845565b6020604051808303816000875af1158015610f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbd9190611647565b505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611052576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611049906115b8565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b383836040518363ffffffff1660e01b81526004016110ad929190611845565b6020604051808303816000875af11580156110cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f09190611647565b505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117c906115b8565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636a627842826040518263ffffffff1660e01b81526004016111e091906114d8565b600060405180830381600087803b1580156111fa57600080fd5b505af115801561120e573d6000803e3d6000fd5b5050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061125482611229565b9050919050565b61126481611249565b811461126f57600080fd5b50565b6000813590506112818161125b565b92915050565b60006020828403121561129d5761129c61121f565b5b60006112ab84828501611272565b91505092915050565b6000819050919050565b6112c7816112b4565b82525050565b60006020820190506112e260008301846112be565b92915050565b6112f1816112b4565b81146112fc57600080fd5b50565b60008135905061130e816112e8565b92915050565b60006020828403121561132a5761132961121f565b5b6000611338848285016112ff565b91505092915050565b60008060006060848603121561135a5761135961121f565b5b600061136886828701611272565b935050602061137986828701611272565b925050604061138a868287016112ff565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6113c9816112b4565b82525050565b60006113db83836113c0565b60208301905092915050565b6000602082019050919050565b60006113ff82611394565b611409818561139f565b9350611414836113b0565b8060005b8381101561144557815161142c88826113cf565b9750611437836113e7565b925050600181019050611418565b5085935050505092915050565b6000604082019050818103600083015261146c81856113f4565b9050818103602083015261148081846113f4565b90509392505050565b600080604083850312156114a05761149f61121f565b5b60006114ae85828601611272565b92505060206114bf858286016112ff565b9150509250929050565b6114d281611249565b82525050565b60006020820190506114ed60008301846114c9565b92915050565b600081519050611502816112e8565b92915050565b60006020828403121561151e5761151d61121f565b5b600061152c848285016114f3565b91505092915050565b600082825260208201905092915050565b7f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f60008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b60006115a2602183611535565b91506115ad82611546565b604082019050919050565b600060208201905081810360008301526115d181611595565b9050919050565b60006060820190506115ed60008301866114c9565b6115fa60208301856114c9565b61160760408301846112be565b949350505050565b60008115159050919050565b6116248161160f565b811461162f57600080fd5b50565b6000815190506116418161161b565b92915050565b60006020828403121561165d5761165c61121f565b5b600061166b84828501611632565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6116c282611679565b810181811067ffffffffffffffff821117156116e1576116e061168a565b5b80604052505050565b60006116f4611215565b905061170082826116b9565b919050565b600067ffffffffffffffff8211156117205761171f61168a565b5b602082029050602081019050919050565b600080fd5b600061174961174484611705565b6116ea565b9050808382526020820190506020840283018581111561176c5761176b611731565b5b835b81811015611795578061178188826114f3565b84526020840193505060208101905061176e565b5050509392505050565b600082601f8301126117b4576117b3611674565b5b81516117c4848260208601611736565b91505092915050565b600080604083850312156117e4576117e361121f565b5b600083015167ffffffffffffffff81111561180257611801611224565b5b61180e8582860161179f565b925050602083015167ffffffffffffffff81111561182f5761182e611224565b5b61183b8582860161179f565b9150509250929050565b600060408201905061185a60008301856114c9565b61186760208301846112be565b939250505056fea2646970667358221220bd7611cfbeb94eabe3bdc1cb76dffdfd7361172db329a9d54f442c77d2a846e564736f6c63430008120033";

type MetaOperatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetaOperatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetaOperator__factory extends ContractFactory {
  constructor(...args: MetaOperatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MetaOperator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MetaOperator__factory {
    return super.connect(runner) as MetaOperator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaOperatorInterface {
    return new Interface(_abi) as MetaOperatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MetaOperator {
    return new Contract(address, _abi, runner) as unknown as MetaOperator;
  }
}
