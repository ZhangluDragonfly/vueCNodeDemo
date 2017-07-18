<template>
  <div class="authorSec">
    <el-card :body-style="{ padding: '10px' }">
      <router-link :to='{name:"UserPage",params:{username:userInfo.loginname}}'>
        <div>
          <img :src="userInfo.avatar_url" class="image">
          <div style="padding: 14px;" >
            <span class="linkUserName">{{userInfo.loginname}}</span>
          </div>
        </div>
      </router-link>
      <div class="clearfix scoreGithub">
        <span>{{userInfo.score}} 积分</span>
        <br>
        <span>“这里应该是用户座右铭签名什么的。。。（API里没给）”</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserCom',
  props: ['userName','userInformation'],
  data () {
    return {
      userInfo: {}
    }
  },

  watch: {
    userName (val) {
      console.log(val);
      var me = this;
      axios.get('https://cnodejs.org/api/v1/user/' + val, {
        params: {
          
        }
      })
      .then(function (response) {
        console.log(response.data.data);
        me.userInfo = response.data.data;
        
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    userInformation(val) {
      this.userInfo = val;
    }
  }
};
</script>

<style scoped>
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 60px;
    height: 60px;
    display: block;
    float: left;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
      clear: both
  }

  .scoreGithub {
    padding: 20px 10px;
    line-height: 25px;
    font-size: 15px;
  }
  
  .linkUserName {
    text-decoration: none;
    color: #888;
  }

</style>
