<template>
  <div class="mt-0" id="app">
    <Navbar />
    <p>{{title}}</p>
    <AllFriends  :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends" />
    <Blogs />
  </div>
</template>

<script>
import Blogs from './components/Blogs'
import Navbar from './components/Navbar'
import AllFriends from './components/AllFriends'
import OnlineFriends from './components/OnlineFriends'


export default {
  name: 'app',
  data(){
    return {
      title:'My First App',
      friends: [
                {name: 'Marios', online: true},
                {name: 'Ifeanyi', online: false},
                {name: 'Samsom', online: true},
                {name: 'Musty', online: false}
            ]
    }
  },
  components: {
    Navbar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  methods:{
    deleteFriend(payload){
      console.log(payload)
      this.friends = this.friends.filter(friend => {
       return friend.name !== payload.name
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
