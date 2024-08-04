// const util = {
//     sum(a, b) {
//         return a + b;
//     }
// }

// 只有导出的才能，导入
// export {util}

//`export`不仅可以导出对象，一切JS变量都可以导出。比如：基本类型变量、函数、数组、对象。


// 直接导出
// export const util = {
//     sum(a, b) {
//         return a + b;
//     }
// }

// 导出未声明名称
export default {
    sum(a, b) {
        return a + b;
    }
}