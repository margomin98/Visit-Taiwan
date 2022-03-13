const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Visit-Taiwan/' 
    : '/',
    
module:{
  rules:[
    {
      test:/\.scss$/,
      use:['vue-style-loader','css-loader','sass-loader']
    }
  ]
}
}
