<template>
    <div>
        <h1>OnlineFriends</h1>
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
                <tr v-for="(friend, index) in friends" :key="index" v-if="friend.online">
                <th scope="row">{{index + 1}}</th>
                <td>{{friend.name}}</td>
                <td>{{friend.online}}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name:'OnlineFriends',
    props:['friends'],
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>

</style>