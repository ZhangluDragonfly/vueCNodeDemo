<template>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="4">
    <img src='../assets/cnodejs.svg' title='cnodejs.svg'>
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
  <el-menu-item index="1" class="navBtn">首页</el-menu-item>
</el-menu>
</template>

<script>

export default {
  name: 'navBar',
  data () {
    return {
      activeIndex: '1',
      input2: ''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleIconClick(ev) {
      console.log(ev);
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
