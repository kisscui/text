<template>
     <div class="row">
         <div class="col-xs-8">
            <detailheader 
            :title="topices.title"
            :author="authorInfo.loginname"
            :create_at="topices.create_at"
            :visit_count="topices.visit_count"
            :come="topices.tab"
            :content="topices.content"
            ></detailheader>
            <topic-comment :comments="topices.replies" :commentNum="topices.reply_count"></topic-comment>
         </div>
        <div class="col-xs-4">
            <topic-author :authorInfo="authorInfo"></topic-author>
            <topic-author-topics :authortopics="authorInfo.recent_replies"></topic-author-topics>
        </div>
     </div>
</template>
<script>
import topicAuthorTopics from "./topicAuthorTopics"
import detailheader from "./detailHeader"
import topicComment from "./topicComment"
import topicAuthor from "./topicAuthor"
import axios from "axios"
export default {
    data(){
        return {
            topices:{},
            authorInfo:{}
        }
    },
  components:{
      detailheader,
      topicComment,
      topicAuthor,
      topicAuthorTopics
  },
   watch: {
        '$route':{
            handler(to){

                const id=to.params.id
                axios.get('https://cnodejs.org/api/v1/topic/' +id).then(res => {
                    this.topices=res.data.data
                    console.log(this.topices)
                const loginname=res.data.data.author.loginname

                return axios.get("https://cnodejs.org/api/v1/user/"+loginname)
                }).then(res=>{
                    this.authorInfo=res.data.data
                    console.log(this.authorInfo)
                })
            },
            immediate: true
        }
    }
}    
</script>

<style>

</style>
