import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";

export const useTalkStore = defineStore("talk", {
    actions: {
        async getLoveTalk(){
            // 发请求，下面这行的写法是：连续解构赋值+重命名
            let {data:{message:title}} = await axios.get('https://dog.ceo/api/breed/husky/images/random')
            // 把请求回来的字符串，包装成一个对象
            let obj = {id:nanoid(),title}
            // 放到数组中
            this.talkList.unshift(obj)
        }
    },
    // 存储数据的地方
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem("talkList") as string) || []
        }
    }
})