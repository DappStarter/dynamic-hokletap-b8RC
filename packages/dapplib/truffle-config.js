require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note payment uniform hockey close blue thumb'; 
let testAccounts = [
"0xf24045d546b8c566565ade9d7f774c550c45df8ca1902b4c8b8c02b7c08dcaea",
"0xda2369ca3ab57f9574ff0c45a0f2270701d9f86bb2a885d0fe29f5d8a352a9ff",
"0xe3af83172901a67963d8d3ba78df84511db8a7ae28e23f2efd653bae98f59161",
"0x3e56cc5208e399e8e32b29bf91f65ef904f182f1e53b2d592df836583e6a6d23",
"0xcefc6c3880fa0fc6923293f210ec6c93e8e7d42e2760bcb5af7aeec99798335f",
"0x6eceb9032cd7caa4a28f23f48e1e97cfeec0f76bc5ebf7c9d00ff42f5a548c1a",
"0xbcbc781bf4574c285c049cabd2ee51d9ceb713a64abe7529b84b50936cfa824d",
"0x131e5c32bad75c64f7bf24fe45a7743f4bfc1c36a0b6115a62b83c485bfe3afe",
"0xa32e2247fd26a3bce28426bf20208fb5359140f182f812996b57a4e9b68ca14a",
"0xcbe137d12563c466fdb5c452e286d06de6f3dcd600aade46dffff3ece69c616b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

