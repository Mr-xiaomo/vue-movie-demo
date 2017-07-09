<template>
  <div id="app">
    <div class="title">
      <span>豆瓣</span>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{ name: 'inTheaters', params: {url:'in_theaters'} }">正在上映</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ name: 'comingSoon', params: {url:'coming_soon'} }">即将上映</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ name: 'topTwenty', params: {url:'top250'} }">Top250</router-link>
      </div>
    </div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
a {
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 5px;
}
.title {
  background-color: inherit;
}
.tab {
  display: flex;
  width: 100%;
  line-height: 23px;
  border-radius: 5px;
}
  .tab-item {
    text-align: left;
    flex:1;
    border-radius: 1px;
    background-color: #f5f3f3;
  }
</style>
