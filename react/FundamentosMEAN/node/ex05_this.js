console.log('====================================')
console.log(global === this)
console.log(module === this)
console.log(module.exports === this)
console.log('====================================')

this.digaoi = function () {
    console.log('Oi!!!')
}