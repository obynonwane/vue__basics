<template>
    <div>
        <h1>Blogs</h1>
        <div class="container">
            <input type="text" v-model="searchTerm">

            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Body</th>
                <th scope="col">Title</th>
    
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                <th scope="row">{{post.id}}</th>
                <td>{{post.body | snippet}}</td>
                <td>{{post.title}}</td>
                </tr>
            </tbody>
            </table>
            <span v-if="error">"Invalid Request"</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Blogs',
    data(){
        return{
            posts:[],
            error:'',
            searchTerm:''
        }
    },
    computed: {
        filteredPosts(){
            return this.post.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            console.log(response.data)
            this.posts = response.data
        }).catch(e =>{
            console.log(e)
            this.error = e
        })
        

        }
    }

</script>
<style scoped>

</style>