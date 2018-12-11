<template>
  <router-link tag="li" class="list-group-item" :to="{name: 'topic', params: {id: topic.id}}">{{topic.title}}</router-link>

</template>

<script>
export default {
    props:{
        topic:Object
    }
}
</script>

<style>

</style>
