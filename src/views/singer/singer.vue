<template>
    <div class="singer-list">
        <ul class ="singer-class-list" v-for="item in list" :key="item.classid" >
            <li>{{item.classname}}
                <i class="singer-list-arrow"></i>
            </li>
        </ul>
    </div>
</template>
<script>
import { getSingers } from '@/server/index.js';
export default {
    data(){
        return{
            list:[]
        }
    },
    async created(){
        let {data} = await getSingers();
        console.log(data)
        this.list = data.data;
    }
}
</script>

<style>
    #app .singer-list {
        margin-top: 110px;
        width: 100%;
    }
    #app .singer-list .singer-class-list {
        margin: 1rem .7143rem 1.0714rem .7143rem;
        background: #fbfbfb;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
    }
    #app .singer-class-list li {
        padding: .7143rem;
        display: block;
        font-size: 1rem;
        color: #333;
    }
    #app .singer-list .singer-list-arrow {
        width: .75143rem;
        height: 1rem;
        margin-top: .2rem;
        background: url(../../assets/img/jiantou.png) no-repeat  ;
        background-size: 100%;
        float: right;
        display: block;
    }
</style>
