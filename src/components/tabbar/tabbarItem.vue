<template>
  <div class="tabbar-item" @click="itemClick" :class="{Active:isActive}">
      <slot name="item-icon-off" v-if="!isActive" ></slot>
      <slot name ="item-icon-on" v-else></slot>
      <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
    props:{
        path:String
    },
    computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            }
    },
    methods: {
        itemClick(){
            console.log(this.$route.path.indexOf('/home'))
            this.$router.replace(this.path)
        }
    },

}
</script>

<style>
.tabbar-item{
        flex: 1;
    height: 49px;
    text-align: center;
}
.tabbar-item img{
    width: 24px;
    height: 24px;
}
.Active{
    color: red;
}

</style>