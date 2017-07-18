<template>
  <div id="articlePage"> 
  	<el-row type="flex" class="row-bg" justify="center">
    <el-col :span="16">
      <div class="articleSec">
        <h2>{{articleInfo.title}}</h2>
        <div class="sublineInfo">
          <ul>
            <li><span>发布于 </span><span>{{articleInfo.create_at | formatTime}}</span></li>
            <li>
              <span>作者 </span>
              <router-link :to='{name:"UserPage",params:{username:articleInfo.author.loginname}}'><span class='linkAuthor'>{{articleInfo.author.loginname}}</span></router-link>
            </li>
            <li><span>{{articleInfo.visit_count}}</span><span>次浏览</span></li>
            <li><span>来自 </span><span>{{articleInfo.tab | formatTab}}</span></li>
          </ul>
        </div>
        <div class="hr"></div>
        <div v-html='articleInfo.content' id='content'></div>
      </div>
      <div class="replySec">
        <div class="replyCount">{{articleInfo.reply_count}}个回复</div>
        <div class="hr"></div>
        <div v-for="reply in articleInfo.replies">
          <img :src="reply.author.avatar_url" :alt="reply.author.loginname" :title='reply.author.loginname' class="replyImg">
          <div>
            <span class="replyName">{{reply.author.loginname}}</span>
            <span class="replyTime">{{reply.create_at  | formatTime}}</span>
            <span v-if="reply.author.loginname == articleInfo.author.loginname" class="isAuthor">作者</span>
            <span v-if='reply.ups.length > 0' class='upSpan'>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <span>{{reply.ups.length}}</span>
            </span>
          </div>
          <p v-html='reply.content' class="replyContent"></p>
          <div class="hr"></div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <user-com :userName="articleInfo.author.loginname"></user-com>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import userCom from './userCom.vue'
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
      },
      currentDate: new Date()
    }
  },
  components: {userCom},

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
      year = +b[0];
      month = +b[1];
      date = +b[2];

      var c;
      if(a[1]) {
        c = a[1].split(':');
        hour = +c[0];
        minute = +c[1];
      }
      
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

.articleSec, .replySec{
  background-color: white;
  padding: 20px 20px 20px 20px;
  margin: 15px 0;
}

.linkAuthor {
  text-decoration: none;
}

.authorSec {
  margin: 15px;
}

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

 .hr {
  height: 0;
  width: 100%;
  border: 1px solid #eee;
  margin-bottom: 10px;
}

.replySec {
  overflow: hidden;
}

.replySec .replyCount{
  padding-bottom:10px;
  font-size: 15px;
}

.replySec .replyImg {
  width: 30px;
  height: 30px;
  float: left;
}

.replySec .replyName{
  margin: 0 15px;
  font-size: 13px;
  font-weight: bold;
}

.replySec .replyTime {
  font-size: 11px;
}

.replySec .isAuthor{
  background-color: #80bd01;
  border-radius: 4px;
  padding: 2px;

  line-height: 20px;
  font-size: 12px;
  color: white;
}

.replySec .upSpan {
  float: right;
  color: #888;
  font-size: 15px;
}

.replySec .replyContent {
  margin: 15px 20px 30px 50px;
  font-size: 15px;
}



/* 作者卡片 */

 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    /*width: 100%;*/
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>
