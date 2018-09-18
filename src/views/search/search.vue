<template>
  <div class="seek-quanbu" style="margin-top:46px;">
      <div class="seek-top">
        <div class="seek-goback" @click="goNewSong"></div>
        <p class="seek-title" >搜索</p>
        
      </div>
      <div class="seek-main">
        <div class="seek">
            <span>歌手/歌名/拼音</span>
        </div>
        <button class="seek-btn">搜索</button>
      </div>
    <div>
      <div class="seek-hd">最新热门</div>
      <div class="seek-list" v-for="item in list " :key="item.id">
          <div>{{item.keyword}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearcha } from '@/server/index.js'
export default {
    data(){
        return {
            list:[]
        }
    },
    methods:{
      goNewSong(){
        this.$router.push('/')
      }
      
    },
    async created(){

            let {data} = await getSearcha()
            console.log( data )
            this.list = data.data.info
            
        },
    
}

</script>

<style>

.seek-main{
    height: 34px;
    padding: 0px 10px 10px 10px;
    background: #fbfbfb;
  }
  .seek {
    width: 80%;
    height: 30px;
    display: inline-block;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    box-sizing: border-box;
    line-height: 26px;
  }
.seek-top{
    color: #333;
    background: #fff;
    overflow: hidden;
}
.seek-title{
  float: left;
  height: 36px;
  width: 260px;
  text-align: center;
  font-size:14px;
}
.seek-goback{
  margin-left: 4px;
    width: 20px;
    height: 20px;
    float: left;
    background:url(../../assets/img/goback.png) no-repeat ;
    background-size:100%;
}
.seek span {
  font-size: 14px;
  color: rgb(146, 143, 148);
}
.seek span:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(../../assets/img/sousuo.png) no-repeat;
  background-size: 100%;
  padding-left: 6px;
}
.seek-btn{
  border-radius: 5px;
    width: 17.25%;
    height: 28px;
    line-height: 26px;
    border: none;
    display: inline-block;
    color:rgb(99, 95, 95);
    font-size: 14px;
}
.seek-hd{
  height: 38px;
  line-height: 38px;
  padding-left: .8929rem;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  color: #2ca3f5;
}
.seek-list{
  margin-left: .7143rem;
    overflow: scroll;
}
.seek-list div{
  height: 3.5714rem;
    line-height: 3.5714rem;
    border-bottom: 1px solid #e5e5e5;
    display: block;
    color: #333;
    font-size: 1.1429rem;
    text-indent: .1786rem;
    position: relative;
}
.mint-header-button.is-right{

}
</style>

