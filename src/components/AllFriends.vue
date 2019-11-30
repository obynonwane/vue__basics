<template>
    <div>
        <h1>Allfriends</h1>
        <div class="container">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Friend</th>
                <th scope="col">Status</th>
    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(friend, index) in friends" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td @click="unfollow(friend.name)">{{friend.name}}</td>
                <td>{{friend.online}}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name:'AllFriends',
    props:['friends'],
    data(){
        return{
            
        }
    },
    methods:{
        unfollow(name){
            this.$emit('delete', {name})
        }
    }
}
</script>
<style scoped>

</style>