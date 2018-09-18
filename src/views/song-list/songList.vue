<template>
    <div class="song-list-content" >
        <div class="song-content" v-for="item in list" :key="item.id">
            <div class="song-img">
                <img :src="item.imgurl.replace('{size}',240)"/>
            </div>
            <div class="song-right-list">
                <p class="song-first">{{item.specialname}}</p>
                <p class="song-next"></p>
                <a>{{item.playcount}}</a>
            </div>
            <div class="song-img-right">
                <span class="song-list-ico"></span>
            </div>  
       </div>
    </div>
</template>
<script>
import { getPlist } from '@/server/index.js'
export default {
    data(){
        return {
            list:[]
        }
    },
    async created(){
        let {data} = await getPlist();
        console.log(data)
        this.list = data.data
    }
}
</script>

<style>
    .song-list-content {
        margin-top: 96px;
        height: 100px;
    }
    .song-content{
        border-bottom: 1px solid #e5e5e5;
         padding-top: 10px;
        height: 100px;
        margin-left: 10px;
    }
    .song-list-content .song-img{
        float: left;    
    }
    .song-img img{
        height: 86px;
        width: 86px;
    }
    .song-list-content  .song-right-list{
        float: left ;
        width: 160px;
        margin-left: 15px;
    }
    .song-right-list .song-first{
        padding-top: 12px;
        display: block;
        word-wrap: break-word;
        font-size: 16px;
        line-height: 26px
    }
    .song-right-list .song-next{
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-top: 2px;
        background: url(../../assets/img/erji.png) no-repeat 0px 3px;
        background-size: 100%;  
        line-height: 10px;
    }
   .song-right-list a{
        font-size: 14px;
        color: #9b9b9b;
    }
    
    .song-img-right{
    width: 38px;
    height: 100%;
    text-align: center;
    display: block;
    float: right;

}
.song-list-ico{
    width: 15px;
    height:15px;
    margin-left: 8px;
    margin-top: 40px;
    display: block;
    background: url(../../assets/img/jiantou.png) no-repeat;
    background-size: 100%;
    }
   
</style>