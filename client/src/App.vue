<template>
  <div id="app">
    <top></top>
      <div class="outer">
        <transition name="component-fade" mode="out-in">
          <router-view/>
            </transition>
          </div>
        <parallax :fixed="true">
      <img src="./bg.jpg">
    </parallax>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";

export default {
  name: 'app',
  components: {
    Parallax
  }
}
</script>

<style>
.outer {
  margin-top: 3%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow:
        inset 0px 11px 8px -10px #333,
        inset 0px -11px 8px -10px #333;
}
#app {
  font-family: 'sans-serif', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 20px;
}
.parallax-container {
  position: relative;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
