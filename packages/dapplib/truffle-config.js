require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict help frame tribe struggle rice sadness coach include immense army gate'; 
let testAccounts = [
"0x5aae0560439077ceb625b59d1b55f5f0a307e396d008a07f2fea05f6071e6463",
"0x6a14e1f85e7df59669865a201b67c7b4b3c342d4f04b15c046d6b258f1dffeaf",
"0x0a5eff6669e223779316469eee92d642867814d278525e8192011a863ff0aa32",
"0x87f16c7074769e51d513dd3af517a6ed1f72c7b72030ac8803decfd04efb6334",
"0xc8221b7b82ca844b7cab247e792d79f9cf20e34e7595c6c98bd918905324986a",
"0x66cff0826c857a87cca8a777f15e631cdb1210380241792f777d626865210573",
"0x28488172bd6b9c7ef4b7c2ba5a816387d30fd7ee63070348f17dc907a51f3ca5",
"0xb39caf889423798c05091b9a315b2402c58cb7ef439d4d384a70990fed3da12e",
"0x2a811edc11c11afaba8890e0f6f320bdaab6413194e82b907361c96dbe757582",
"0x1d91f5bfe78ae46b17ef6a1d920eaba51c54feedacb58cab9fb18aa22c8c2c04"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

