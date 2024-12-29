<template>
    <div class="container">
        <Count />
    </div>
</template> 

<script>
import Count from "./component/Count.vue";
export default {
    name: "App",
    components: { Count },
    methods: {},
};
</script>

<style>
button {
    margin-left: 10px;
}
</style>