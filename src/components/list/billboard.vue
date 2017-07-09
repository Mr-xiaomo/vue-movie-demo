<template>
  <div class="home">
    <h3>{{ title }}</h3>
    <div v-for="(item,index) in movies" class="movie-list">
      <div class="moviename">
        {{ item.title }}
      </div>
      <div class="movieinfo">
        <div class="movieimage">
          <img :src='item.images.small' class="image"></img>
        </div>
        <div class="moviedetail">
          <div class="othername">
            <span>原名: </span>
            <span>{{ item.original_title }}</span>
          </div>
          <div class="othername">
            <span>年份: </span>
            <span>{{ item.year }}</span>
          </div>
          <div class="othername">
            <span>导演: </span>
            <span>{{ item.directors[0].name }}</span>
          </div>
          <div class="actor">
            <span>主演: </span>
            <span v-for="(role,index) in item.casts" >{{role.name}}/ </span>
          </div>
          <div class="average">
            <span>评分: </span>
            <span>{{ item.rating.average }}分</span>
          </div>
          <div class="more">
            <span><a target="_blank" :href="item.alt">详情</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'billboard',
  data () {
    return {
      title: '',
      movies: []
    }
  },
  mounted () {
    axios.get(this.HOST + this.$route.params.url)
      .then(function (response) {
        this.title = response.data.title
        this.movies = response.data.subjects
      }.bind(this))
      .catch(function (response) {
        console.log('调用失败!')
      })
  }
}
</script>


<style scoped>
  a {
    text-decoration: none;
  }
  .home
    .movie-list{
      font-size: 16px;
      font-weight: normal;
      margin-bottom: 5px;
    }
      .moviename{
        font-weight: bold;
        margin: 5px 5px 5px 5px;
      }
      .movieinfo{
        display: inline-flex;
        font-size: 12px;
      }
        .movieimage{
          margin: 5px 5px 5px 5px;
        }
          .image{
            border-radius: 2px;

          }
        .moviedetail{
          margin: 5px 5px 5px 5px;
          line-height: 17px;
        }

</style>
