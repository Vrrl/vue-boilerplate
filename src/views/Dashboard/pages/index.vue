<template>
    <div>
        <h5>Hello World</h5>
        <hello-world></hello-world>
    </div>
</template>

<script>
import Layout from '../../Layout'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Dashboard',
    components: {
        HelloWorld
    },
    created(){
        this.$emit("update:layout", Layout)
    }
}
</script>

<style lang="">
    
</style>
