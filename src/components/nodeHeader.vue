<template>
    <div class="panel">
        <div class="panel">
            <slot>作者其他话题</slot>
        </div>
            <div class="list-group">
            <router-link class="list-group-item" tag="li" :to="{name:'topic',params:{id:content.id}}" v-for="(content,index) in authortopics" :key="index">{{content.title}}</router-link>
            </div>
   </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
