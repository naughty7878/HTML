import {reactive} from "vue"
import axios, {type AxiosError} from "axios"

// 约定：组合式函数名通常以 'use' 开头
export default function () {
    // 数据
    let dogList = reactive(['https://images.dog.ceo/breeds/husky/n02110185_11409.jpg'])

    // 方法
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/husky/images/random');
            console.log(result.data)
            dogList.push(result.data.message)
        } catch (error) {
            // 处理错误
            const err = <AxiosError>error
            console.log(err.message)
        }
    }

    // 向外部提供东西
    return {dogList, getDog}
}
