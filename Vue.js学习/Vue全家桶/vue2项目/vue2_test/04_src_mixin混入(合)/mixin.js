export const mix = {
    data() {
        return {

            name: '混入',
            x: 100,
            y: 200,
        }
    },
    mounted() {
        console.log('我是混合mix')
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
}


export const mix2 = {
    data() {
        return {

            a: 100,
            b: 200,
        }
    },
    mounted() {
        console.log('我是混合mix2')
    }
}
