import {ref} from "vue"

// 约定：组合式函数名通常以 'use' 开头
export default function () {
    // 数据;
    let sum = ref(0)

    // 方法
    function changeSum() {
        sum.value += 1
    }

    // 向外部提供东西
    return {sum, changeSum}
}