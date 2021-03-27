<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item v-for="(item,index) in tab" :path="item.src">
        <img slot="item-icon-off"   :src="item.path" alt="">
        <img slot="item-icon-on"  :src="item.active" alt="">
        <div slot="item-text">{{item.name}}</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from './components/tabbar/Tabbar'
import  tabbarItem  from './components/tabbar/tabbarItem'

export default {
  name: 'App',
  methods: {
        getsrc(index){
          
          console.log(this.tab[0].aaa)
          this.tab[index].aaa = !this.tab[index].aaa
        }
  },
  data() {
    return {
      tab:[
        {
          src:'/home',
          name:'首页',
          path:require('./assets/img/zhuye.svg'),
          active:require('./assets/img/zhuye_active.svg'),
        },
        {
          src:'/fenlei',
          name:'分类',
          path:require('./assets/img/fenlei.svg'),
          active:require('./assets/img/fenlei_active.svg'),
        },
        {
          src:'/shopcar',
          name:'购物车',
          path:require('./assets/img/shop-cart.svg'),
          active:require('./assets/img/shop-cart_active.svg'),
        },
        {
          src:'/profile',
          name:'我的',
          path:require('./assets/img/profile.svg'),
          active:require('./assets/img/profile_active.svg'),
        }
      ],

    }
  },
  components: {
    tabbar,
    tabbarItem,
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
</style>
