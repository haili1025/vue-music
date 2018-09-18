import axios from 'axios'
import store from '@/store'
var baseUrl = '/prox';
let oneLeve = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
  transformRequest(data){
    //发送请求
    store.commit('updatedIsLoading',true)
    return data
  },
  transformResponse(data) {
    //请求回来
    store.commit('updatedIsLoading',false)
    if (!data) return;
    if (typeof data === 'string') data = JSON.parse(data);
    let o = {}
    if (data.list) {
      o.data = data.list;
      o.origin = 'singer'
    } else if (data.banner) {
      o.data = data.data;
      o.banner = data.banner
      o.origin = 'home'
    } else if (data.rank) {
      o.data = data.rank.list;
      o.origin = 'rank'
    } else if (data.plist) {
      o.data = data.plist.list.info;
      o.origin = 'plist'
    } else if (data.singers) {
      o.data = data.singers.list.info;
      o.origin = 'singers-list'
    } else if (data.songs) {
      o.data = data.songs.list;
      o.info = data.info;
      o.origin = 'singers-info'
    }
    
    return o;
  }
})


let request = (path) => {
  return oneLeve(path).catch((e) => {
    if (e) {
      alert('网络错误')
    }
  })
}

// 获取banner和新歌
export const getNewSongs = () => {
  return request('/?json=true')
}

// 获取排行数据
export const getRankList = () => {
  return request('/rank/list&json=true')
}

// 获取歌单数据
export const getPlist = () => {
  return request('/plist/index&json=true')
}

// 获取歌手分类数据
export const getSingers = () => {
  return request('/singer/class&json=true')
}


// 根据歌手分类id，获取歌手分类歌手

export const getSingerList = (params = { classid: '' }) => {
  return request(`/singer/list/${params.classid}?json=true`)
}

// 根据歌手id，获取歌手歌曲

export const getSingerInfo = (params = { singerid: '' }) => {
  return request(`/singer/info/${params.singerid}?json=true`)
}

//排行二级页面数据
export const getRankInfo = (val) => {
  return request(`rank/info/${val}/?json=true`)
}



  var baseurl = '/kugou';
  let twoLeve = axios.create({
  baseURL: baseurl,
  })
  
  let requestKugou = (path) => {
  return twoLeve(path).catch((e) => {
  if (e) {
  alert('请求Kugou网络错误')
  }
  })
  }
  //音乐搜索的接口
  export const getSearch = (value) => {
  return requestKugou(`/api/v3/search/song?format=jsonp&keyword=${value}`) 
  }
  //搜索页面的接口
  export const getSearcha = () => {
    return requestKugou(`/api/v3/search/hot?format=json&plat=0&count=30`) 
    }




export default {
  getNewSongs,
  getRankList,
  getPlist,
  getSingers,
  getSingerList,
  getSingerInfo,
  getSearch,
  getSearcha

}


/* 
  export let a = 10;
  export let b = 10;
  export let c = 10;

  exprort default {}

  用解构赋值拿到export暴漏出来的子
  import {a,b,c} from ''

  用来接收文件中暴露的  exprort default 对应的值
  import abc from ''



*/