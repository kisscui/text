<template>
    <div class="container">
        <ul class="nav nav-pills">
            <router-link tag="li" :to="{name:'tab',params:{tab:'all'}}"  class="active"><a href="#">全部</a></router-link>
            <router-link tag="li" :to="{name:'tab',params:{tab:'good'}}"><a href="#">精华</a></router-link>
            <router-link tag="li" :to="{name:'tab',params:{tab:'share'}}"><a href="#">分享</a></router-link>
            <router-link tag="li" :to="{name:'tab',params:{tab:'ask'}}"><a href="#">问答</a></router-link>
            <router-link tag="li" :to="{name:'tab',params:{tab:'job'}}"><a href="#">招聘</a></router-link>
            <router-link tag="li" :to="{name:'tab',params:{tab:'dev'}}"><a href="#">测试</a></router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
 
<script>
export default {
   
}
</script>

<style>

</style>
