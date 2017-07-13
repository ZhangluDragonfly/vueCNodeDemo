<template>
  <div id="articlePage"> 
    <!-- <div v-html='articleInfo.content' id='content'></div> -->
  	<el-row type="flex" class="row-bg" justify="center">
    <el-col :span="12">
      <div class="articleSec">
        <h2>{{articleInfo.title}}</h2>
        <div v-html='articleInfo.content'></div>
        <div></div>
      </div>
    </el-col>
    <el-col :span="6"><div></div></el-col>
  </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticlePage',
  data () {
    return {
      articleInfo: {
        content: ''
      }
    }
  },
  beforeCreate() {
    console.log(this.$route);
    var me = this;
      axios.get('https://cnodejs.org/api/v1' + me.$route.fullPath, {
        params: {
          
        }
      })
      .then(function (response) {
        console.log(response.data.data.content);
        me.articleInfo = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {}
};
</script>

<style scoped>
@import url('../assets/markdown-github.css');

/* #content {
        margin: 2rem auto 2rem auto;
        padding: 2rem 1rem 2rem 1rem;
        border: 1px solid #ddd;
        line-height: 1.6;
        padding-bottom: 1rem;
        background: #EFF2F7;
    } */
</style>
