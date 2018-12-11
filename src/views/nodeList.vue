<template>
    <ul class="list-group">
        <node-item :topics="topics" v-for="(topic,index) in topics" :key="index" :topic="topic"></node-item>
    </ul>
</template>

<script>
import nodeItem from "../components/nodeItem"
import axios from "axios"
export default {
    data(){
        return {
            topics:[]
        }
    },
   components:{
       nodeItem,
   },
   watch:{
       "$route":{
           handler(to){
               const tab=to.params.tab
               axios.get("https://cnodejs.org/api/v1/topics",{
                   params:{
                      limit:10,
                      tab
                   }
               }).then(res=>{
                   this.topics=res.data.data
                   console.log(this.topics)
               })

           }
       }
   }
}
</script>
