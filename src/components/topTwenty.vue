<template>
  <div>
    <billboard></billboard>
  </div>
</template>

<script>
import billboard from './list/billboard'
export default {
  name: 'topTwenty',
  components: {
    billboard
  },
  data () {
    return {
    }
  }
}
</script>


<style scoped>
  a {
    text-decoration: none;
  }
</style>
