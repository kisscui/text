<template>
    <div class="panel panel-default">
       <div class="list-group">
            <p class="list-group-item disabled">作者</p>
       </div>
        <div class="media">
            <div class="media-left media-middle">
                <a href="#">
                <img width="30" class="media-object" :src="authorInfo.avatar_url" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h5 class="media-heading">{{authorInfo.loginname}}</h5>
            </div>
        </div>
        <span>积分{{authorInfo.score}}</span>
    </div>
</template>

<script>
export default {
    props:{
        authorInfo:Object
    }
}
</script>

<style>

</style>
