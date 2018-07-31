var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "kangaroo rate arctic vendor cliff rate tonight release goddess despair south light";

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/c18327ec75324ec68d6b1edfd8f26edc")
      },
      network_id: 4
    }
  }
};
