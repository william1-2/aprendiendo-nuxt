export default {
    modules: [
        'bootstrap-vue/nuxt'
        ['vue-currency-filter/nuxt', {
            symbol: '$',
            thousandsSeparator: ',',
            fractionCount: 2,
            fractionSeparator: '.',
            symbolPosition: 'front',
            symbolSpacing: true
          }],
    ]
   
}