<template>
    <div class="panel panel-default">
        <h3>{{title}}</h3>
        <span>发布于{{create_at}}</span>
        <span>作者{{author}}</span>
        <span>{{visit_count}}次浏览</span>
        <span>来自于{{come}}</span>
        <hr>
        <div  class="panel-body" v-html="content"></div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        create_at:String,
        author:String,
        visit_count:Number,
        come:String,
        content:String
    }
}
</script>

<style scoped>
    img{
        width:100%;
    }
</style>
