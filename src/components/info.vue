<template>
    <div class="info">
        <div>
           <mt-swipe>
               <img :src="info.imgurl.replace('{size}',240)" />
           </mt-swipe>
        </div>
        <mt-cell :hash="item.hash" :title="item.filename" icon="more" value="带 icon" v-for="item in list" :key="item.hacsh"></mt-cell>
        
    </div>
</template>
<script>
import { getRankInfo }  from '@/server/index.js'
import { getSongMp3 }  from '@/server/mp3.js'
export default {
    data(){
        return {
            list:[],
            info:''

        }
    },
   async created(){
       let {data} = await getRankInfo(this.$route.params.id);
       console.log(data)
       this.list= data.data
       this.info =data.info

    }
    //  async created() {
    //        let {data} = await getSongMp3();
    //         console.log(data)
    //         this. = data.data;
            
    //     },

}
</script>

<style>
#app .info{
    padding-top: 50px;
    /* position: relative; */
}
.info .mint-swipe{
    top: -30px;
    height: 200px;
    padding: 15px 0;
width: 100%;
    background-size: 100%;
}
.info .mint-swipe img{
    width: 100%;
    height: 100%;
}
</style>
