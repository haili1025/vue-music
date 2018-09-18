<template>
    <div >
        <div class="new-song-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in banner" :key="item.id">
                    <img :src="item.imgurl" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="new-song-list">
            <mt-cell v-for="item in list"  :key="item.hash" :title="item.filename" is-link></mt-cell>
        </div>
        <!-- <audio controls="controls" autoplay="autoplay" loop="loop"  preload="auto" >

        </audio> -->
    </div>
</template>
<script>
   import { getNewSongs } from '@/server/index.js'
//    import { getSongMp3 }  from '@/server/mp3.js'
   export default {
        name: 'NewSong',
        data(){
           return {
               banner:[],
               list:[],
               ply:[]
           }
        },
        async created() {
           let {data} = await getNewSongs();
            this.banner = data.banner;
            console.log(data)
            this.list = data.data;
            
        }
        // async created() {
        //    let {data} = await getSongMp3('');
        //     console.log(data)
        //     this.ply = data.data;
            
        // },
    
    }

    
</script>

<style>
    .new-song-swipe{
        padding-top: 100px;
    }
    .new-song-swipe .mint-swipe{
        height: 140px;
    }
    #app .mint-swipe-item img{
        width: 100%;
        margin: 0 auto;
        height: 8.5714rem;
        display: block;
    }
    #app .new-song-list{
       padding-top: 20px;
          
    }
    .new-song-list .mint-cell{
        min-height: 60px
    }
    
</style>