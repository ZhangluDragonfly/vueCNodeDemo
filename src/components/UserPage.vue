<template>
  <div id="userPage"> 
  	<el-row type="flex" class="row-bg" justify="center">
    <el-col :span="16">
      <div class="userSec">
        <div><img :src="userInfo.avatar_url"><span>{{userInfo.loginname}}</span></div>
        <div class="infoLine">{{userInfo.score}} 积分</div>
        <div class="infoLine">注册时间{{userInfo.create_at | formatTime}}</div>
        <div class="infoLine"><i class="fa fa-map-marker" aria-hidden="true"></i> 城市</div>
        <div class="infoLine"><i class="fa fa-home" aria-hidden="true"></i> https://itshomepage.com</div>
        <div class="infoLine"><i class="fa fa-github" aria-hidden="true"></i> https://github.com/{{userInfo.githubUsername}}</div>
      </div>
      <div class="recentlyCreate">
        <div class="topicSecTitle">最近创建的话题</div>
        <div class="hr"></div>
        <el-row v-for="item in userInfo.recent_topics" :key="item.id" class='listItem'>
          <el-col :xs="5" :sm="4" :md="3" :lg="2">
            <div><router-link :to='{name:"UserPage",params:{username:item.author.loginname}}'><img :src='item.author.avatar_url' :title='item.author.loginname' class='authorImg'></router-link></div>
          </el-col>
          <el-col :xs="12" :sm="14" :md="16" :lg="18">
            <div >
            <router-link :to='{name:"ArticlePage",params:{id:item.id}}' class='title'>{{item.title}}</router-link>
            </div>
          </el-col>
          <el-col :xs="7" :sm="6" :md="5" :lg="4" class="lastReplyTime">
            <div>{{item.last_reply_at | formatTime}}</div>
          </el-col>
        </el-row>
      </div>
      <div class="recentlyJoin">
        <div class="topicSecTitle">最近回复的话题</div>
        <div class="hr"></div>
        <el-row v-for="item in userInfo.recent_replies" :key="item.id" class='listItem'>
          <el-col :xs="5" :sm="4" :md="3" :lg="2">
            <div><router-link :to='{name:"UserPage",params:{username:item.author.loginname}}'><img :src='item.author.avatar_url' :title='item.author.loginname' class='authorImg'></router-link></div>
          </el-col>
          <el-col :xs="12" :sm="14" :md="16" :lg="18">
            <div >
            <router-link :to='{name:"ArticlePage",params:{id:item.id}}' class='title'>{{item.title}}</router-link>
            </div>
          </el-col>
          <el-col :xs="7" :sm="6" :md="5" :lg="4" class="lastReplyTime">
            <div>{{item.last_reply_at | formatTime}}</div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="6">
      <user-com :userInformation="userInfo" class="userCard"></user-com>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import userCom from './userCom.vue'
export default {
  name: 'UserPage',

  data () {
    return {
      userInfo:{}
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
        me.userInfo = response.data.data;
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
    }
  }
};
</script>

<style scoped>
.userSec, .recentlyCreate, .recentlyJoin{
  background-color: white;
  padding: 20px 20px 20px 20px;
  margin: 15px 0;
}

.userCard {
  margin: 15px 0 0 20px;
}

.infoLine {
  margin: 15px 0px 15px 20px;

}

.el-row.listItem {
    border-bottom: 1px solid #ccc;
    height: 40px;
    overflow: hidden;
}

.el-row.listItem .el-col{
    height: 40px;
    /*text-align: center;*/
    line-height: 40px;
    overflow: hidden;
}

.authorImg {
  height: 30px;
  width: 30px;
  margin: 5px auto;
}

.title {
  text-decoration: none;
  color: #333;
  font-size: 15px;
}

.topicSecTitle {
  padding-bottom:10px;
  font-size: 15px;
}

.lastReplyTime {
  font-size: 14px;
  color: #666;
}

 .hr {
  height: 0;
  width: 100%;
  border: 1px solid #eee;
  margin-bottom: 10px;
}

</style>
