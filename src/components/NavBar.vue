<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="4">
        <router-link to='/'><img src='../assets/cnodejs.svg' title='cnodejs.svg'></router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <el-input
          placeholder="请输入关键词"
          icon="search"
          v-model="input2"
          :on-icon-click="handleIconClick">
        </el-input>
      </el-menu-item>
      <el-menu-item index="3" class="navBtn">关于</el-menu-item>
      <el-menu-item index="2" class="navBtn">登录</el-menu-item>
      <el-menu-item index="1" class="navBtn"><router-link to='/'>首页</router-link></el-menu-item>
    </el-menu>
    <el-dialog
      title="关于"
      v-model='dialogVisible'
      size="tiny">
      <span>使用Vue.js2实现的CNode部分功能的小项目</span>
      <br>
      <span><strong>作者：</strong>张璐</span>
      <br>
      <span><strong>源代码: </strong></span><a href='https://github.com/ZhangluDragonfly/vueCNodeDemo' target='_blank'>Github</a>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'navBar',
  data () {
    return {
      activeIndex: '1',
      input2: '',
      dialogVisible: false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key == 3){
        this.dialogVisible=true;
      }
    },
    handleIconClick(ev) {
      console.log(ev);
      var me = this;
      axios.post('https://cnodejs.org/api/v1/accesstoken', {
        params: {
          accesstoken: 'dec6c8e2-d356-4d27-a5f3-dba74bb67cb5'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>
.el-menu--horizontal .el-menu-item.navBtn{
  float: right;
}

.el-menu--horizontal .el-menu-item img {
  width: 10rem;
  height: 3.5rem;
  margin-left: 6rem;
}

.el-menu-item .el-input input{
  height: 30px;
}

</style>
