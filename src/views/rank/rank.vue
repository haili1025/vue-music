<template>
    <div class="rank-top">
        <mt-cell :title="item.rankname" 
            v-for="item in list" 
            :key="item.rankid" 
            is-link
           :to="'/rank/info/'+item.rankid"      
            >
            <img slot="icon" :src="item.imgurl.replace('{size}',240)"   />
        </mt-cell>

    </div>
</template>
<script>
    import { getRankList } from '@/server/index.js';
    
    export default {
        data(){
            return {
                list:[]
            }
        },
        async created(){
            let { data } = await getRankList();
            console.log( data )
            this.list = data.data;
            }
        
        // methods:{
        //     goRankInfo(){
        //         console.log(22222222222222222)
        //         this.$router.push('/rank/info'); 
        //     }
        // }
    }    
</script>
<style>
    #app .rank-top .mint-cell{
            top: 100px;
            min-height: 96px;
    }
    #app .rank-top img{
        height: 76px;
        width: 76px;
    }
   
</style>