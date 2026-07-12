import {customRef} from "vue";

export default function (initValue:string, delay) {
    let timer: number
    // 自定义ref
    const msg = customRef((track, trigger) => {
        // track 跟踪， trigger 触发
        return {
            // msg被读取时调用
            get() {
                console.log('get');
                track() // 要对msg持续关注，一旦变化就更新
                return initValue
            },
            // msg被修改时调用
            set(val: string) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    console.log('set', val)
                    initValue = val
                    trigger() // 通知vue数据变化了
                }, delay)
            }
        }
    })

    return {msg}
}


