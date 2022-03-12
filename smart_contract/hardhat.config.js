// https://eth-ropsten.alchemyapi.io/v2/L_y4Y1CiFbSh2AEGI-UGLErM41SyR2xp

require ('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/L_y4Y1CiFbSh2AEGI-UGLErM41SyR2xp',
      accounts: [ '23361911b10c14b37402ded99e0c450e19fc192d9577f4ca06104c55f09afcab' ]
    }
  }
}