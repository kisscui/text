<template>
    <div class="panel default">
        <div class="media" v-for="(comment,index) in comments" :key="index">
            <div class="media-left">
                <a href="#">
                <img width="30" class="media-object" :src="comment.author.avatar_url" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading" v-html="comment.content"></h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        comments:Array,
        commnetNum:Number
    }
}
</script>

<style>

</style>
