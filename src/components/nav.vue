<template>
    
    <mt-navbar fixed v-model="selected">
        <mt-tab-item :id="item.path"  v-for="item in routes" :key="item.path" >
            <router-link tag="div" :to="{path:item.path}">{{item.title}}</router-link>
        </mt-tab-item> 
    </mt-navbar>
   
</template>
<script>
import {routes} from '@/router/router'
    export default {
        data(){
            return {
                selected:'/',
                routes
            }
        }
    }
</script>
<style>
#app .mint-tab-item-label{
    font-size: 1.1429rem;
}
#app .mint-navbar  {
    top:48px;
    height: 46px;
}
</style>