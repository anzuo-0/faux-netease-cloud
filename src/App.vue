<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/sass/base';

html,
body {
  height: 100%;
}
#app {
  min-height: 100%;
  width: 100%;
  height: 100%;
  background-color: #f4f5f8;
}
</style>
