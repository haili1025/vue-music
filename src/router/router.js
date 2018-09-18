import Nav from '@/components/nav'

import NewSong from '@/views/new-song/newSong'
import Rank from '@/views/rank/rank'
import SongList from '@/views/song-list/songList'
import Singer from '@/views/singer/singer'

export let routes=[
    {
    path: '/',
    title: '新歌',
    name: 'NewSong',
    components:{ 
        nav:Nav,
        default:NewSong
        }
    },
    {
    path: '/rank',
    title: '排行',
    name: 'Rank',
    components:{ //子组件
        nav:Nav,
        default:Rank
        }
    },
    {
    path: '/songlist',
    title: '歌单',
    name: 'SongList',
        components:{ //子组件
            nav:Nav,
            default:SongList
        }
    },
    {
        path: '/singer',
        title: '歌手',
        name: 'Singer',
        components:{ //子组件 多视图
          nav:Nav,
          default:Singer
        }
    }
]