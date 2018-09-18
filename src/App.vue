<template>
  <div id="app">
    <mt-header fixed style="padding-bottom:10px;height: 48px;">
      <router-link  to="/" slot="left" >
        <img src="http://m.kugou.com/v3/static/images/index/logo.png" style="height:30px;" />
      </router-link>
      <mt-button @click="goSeach" icon="search" slot="right" ></mt-button>
    </mt-header>
    <router-view name="nav"  />
    <div class="app-load">
      <mt-spinner type="fading-circle" v-show="$store.state.isLoading" ></mt-spinner>
      <router-view/>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    goSeach(){
      this.$router.push('/search')
    }
    
  }
  // created(){
  //   console.log('app')
  //   axios('/proxy/rank/list?json=true').then(({data}) => {
  //     console.log(data)
  //   })
  // }
}
</script>

<style>
#app .app-load{
  top:100px;
  left: 135px;
}
#app .mint-header-button {
  margin-top: 10px;
  text-align: '';
}

</style>
