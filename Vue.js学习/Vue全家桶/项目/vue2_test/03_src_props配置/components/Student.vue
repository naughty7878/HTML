<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h1>{{ msg }}</h1>
        <h2>学生名称：{{name}} - {{ typeof name }}</h2>
        <h2>学生性别：{{sex}} - {{ typeof sex }}</h2>
        <h2>学生年龄：{{age + 1}} - {{ typeof age }}</h2>
        <h2>学生年龄2：{{myAge + 1}}</h2>
        <button @click="updateAge">修改年龄</button>
    </div>
</template>


<script>
    // 1. 第一种方式（只接收）：```props:['name'] ```

    // 2. 第二种方式（限制类型）：```props:{name:String}```

    // 3. 第三种方式（限制类型、限制必要性、指定默认值）：

    //     ```js
    //     props:{
    //     	name:{
    //     	type:String, //类型
    //     	required:true, //必要性
    //     	default:'老王' //默认值
    //     	}
    //     }
    //     ```

    // > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
export default {
    // 最好跟文件名一致
    name: "Student",
    // 方法一：简单接收
    // props: ['name', 'sex', 'age']

    // 方法二：接收的同时对数据进行类型限制
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number,
    // }

    // 方法三：接收的同时对数据进行类型限制
    props: {
        name: {
            type: String, // name的类型是字符串
            required: true, // name必须的
        },
        sex: {
            type: String, // sex的类型是字符串
            required: true, // sex必须的
        },
        age: {
            type: Number, // age的类型是数字
            default: 99, // age默认值
        },
    },
    data() {
        console.log("vc", this);
        return {
            msg: "我是一个学生",
            // name: "张三",
            // sex: '男',
            // age: 18,
            // props优先级高于
            myAge: this.age,
        };
    },

    methods: {
        updateAge() {
            this.myAge++;
        },
    },
};
</script>

