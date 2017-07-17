<template>
  <div id="articlePage"> 
  	<el-row type="flex" class="row-bg" justify="center">
    <el-col :span="12">
      <div class="articleSec">
        <h2>{{articleInfo.title}}</h2>
        <div class="sublineInfo">
          <ul>
            <li><span>发布于 </span><span>{{articleInfo.create_at | formatTime}}</span></li>
            <li><span>作者 </span><span>{{articleInfo.author.loginname}}</span></li>
            <li><span>{{articleInfo.visit_count}}</span><span>次浏览</span></li>
            <li><span>来自 </span><span>{{articleInfo.tab | formatTab}}</span></li>
          </ul>
        </div>
        <div class="hr"></div>
        <div v-html='articleInfo.content' id='content'></div>
      </div>
      <div class="replySec">
        <div v-for="reply in articleInfo.replies">
          <img :src="reply.author.avatar_url" :alt="reply.author.loginname" :title='reply.author.loginname'>
          <div>
            <span>{{reply.author.loginname}}</span>
            <span>{{reply.create_at  | formatTime}}</span>
            <span v-if='reply.ups.length > 0' class='thumbsClass'>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <span>{{reply.ups.length}}</span>
            </span>
          </div>
          <p v-html='reply.content'></p>
        </div>
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
        title: '',
        author: {
            loginname: 'temp',
        },
        visit_count: '',
        tab: '',
        content: '',
        create_at: '2017-04-130000',
        replies: '',
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
        // console.log(response.data.data.content);
        me.articleInfo = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  filters: {
    formatTime(value){
      var year, month, date, hour, minute;

      var a = value.split('T');
      var b = a[0].split('-');
      var c = a[1].split(':');

      year = +b[0];
      month = +b[1];
      date = +b[2];

      hour = +c[0];
      minute = +c[1];

      var now = new Date();

      if(year < now.getFullYear()){
        return (now.getFullYear()-year) + '年前' ;
      } else if(month < now.getMonth()+1) {
        return (now.getMonth()+1 - month) + '月前';
      } else if(date < now.getDate()) {
        return (now.getDate() - date) + '天前';
      } else if(hour < now.getHours()) {
        return (now.getHours() - hour) + '小时前';
      } else if (minute < now.getMinutes()) {
        return (now.getMinutes() - minute) + '分钟前';
      } else {
        return '刚刚';
      }
    },
    formatTab(value, istop, isgood) {
      if (istop) {
        return '置顶';
      } 
      if (isgood) {
        return '精华';
      }
      switch(value) {
        case 'share': return '分享'; break;
        case 'ask': return '问答'; break;
        default : return '其他';
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
@import url('../assets/markdown-github.css');

.articleSec {
  background-color: white;
  padding: 20px 20px 20px 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}
/* .sublineInfo {
  ul{
    margin-left: 0;
    padding-left: 0;
    margin-bottom: 10px;

    li{
      float: left;
      font-size: 10px;
      letter-spacing: 1px;
      color: #666;
      display: inline-block;
      margin-right: 20px;
    }
  }
}  */

.sublineInfo ul{
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 10px;
}

.sublineInfo li{
  font-size: 10px;
  letter-spacing: 1px;
  color: #666;
  display: inline-block;
  margin-right: 20px;
}

.articleSec .hr {
  height: 0;
  width: 100%;
  border: 1px solid #eee;
  margin-bottom: 10px;
}

</style>
