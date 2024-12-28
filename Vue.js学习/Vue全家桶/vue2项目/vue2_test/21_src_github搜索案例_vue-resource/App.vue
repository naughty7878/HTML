<template>
    <div class="container">
        <Search />
        <List />
    </div>
</template> 

<script>
import Search from './component/Search.vue'
import List from './component/List.vue'
export default {
    name: "App",
    components: { Search, List },
    methods: {
    
    },
};
</script>

<style>


</style>