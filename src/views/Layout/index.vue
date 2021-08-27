<template>
    <div>
        <h6>Hello Template</h6>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MainLayout',
    mounted(){
        axios.get('/teste').then( res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>

<style lang="scss">
    
</style>