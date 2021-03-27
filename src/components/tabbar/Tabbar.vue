<template>
  <div class="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tabbar{
    display: flex;

    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background-color: #f3f3f3;
}
</style>