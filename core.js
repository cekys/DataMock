const Overload = require('./overload')
const Mock = require('better-mock')

// 获取随机整数
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

// 仿真器核心,重载多个函数
function setup() {
    Overload.addMethod(this, 'set', function (template) {
        return Mock.mock(template)
    })
    Overload.addMethod(this, 'set', function (template, n) {
        if (!Array.isArray(template)) {
            let temp = []
            for (let i = 0; i < n; i++) {
                temp.push(template)
            }
            return Mock.mock(temp)
        }
    })
    Overload.addMethod(this, 'set', function (template, min, max) {
        if (!Array.isArray(template)) {
            let temp = []
            for (let i = 0; i < getRndInteger(min, max); i++) {
                temp.push(template)
            }
            return Mock.mock(temp)
        }
    })
}

module.exports = {
    setup,
    getRndInteger
}