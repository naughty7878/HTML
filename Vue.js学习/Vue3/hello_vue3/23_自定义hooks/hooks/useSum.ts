import {ref} from "vue"

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