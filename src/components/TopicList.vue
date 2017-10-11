<template>
  <div class="listWrapper">
    <el-row v-for="item in tableData" :key="item.id" class='listItem'>
      <el-col :xs="5" :sm="3" :md="3" :lg="2">
        <div><router-link :to='{name:"UserPage",params:{username:item.author.loginname}}'><img :src='item.author.avatar_url' :title='item.author.loginname' class='authorImg'></router-link></div>
      </el-col>
      <el-col :xs="5" :sm="3" :md="3" :lg="2" class="replyVisitNumber">
        <div><span>{{item.reply_count}}</span><span>/</span><span>{{item.visit_count}}</span></div>
      </el-col>
      <el-col :xs="0" :sm="2" :md="1" :lg="2" >
        <div :class="{'tabIsTop': item.top, 'tabIsGood': item.good}" class="tab">{{item.tab | formatTab(item.top, item.good)}}</div>
      </el-col>
      <el-col :xs="9" :sm="11" :md="12" :lg="12">
        <div class="titleContainer">
        <router-link :to='{name:"ArticlePage",params:{id:item.id}}' class="title">{{item.title}}</router-link>
        </div>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="6" class="createTime">
        <div>{{item.create_at | formatTime}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import {formatTime,formatTab} from '~/helpers/filters'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TopicList',
  // data () {
  //   return {
  //     tableData: []
  //   }
  // },

  computed: mapGetters({
    tableData: 'allTopics'
  }),

  filters: {
    formatTime,
    formatTab
  },

  methods: {
    getTopicList () {
      var me = this;
      axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 1,
          limit: 30,
          mdrender: false
        }
      })
      .then(function (response) {
        //console.log(response.data.data);
        me.tableData = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },

  mounted () {
    this.$nextTick(() => {
      // this.getTopicList();
      this.$store.dispatch('getAllTopics', {
          page: 1,
          limit: 30,
          mdrender: false
        });
    });
  },
}
</script>

<style scoped>

.listWrapper {
  margin: 20px 10%;
  background-color: white;
}

.el-row.listItem {
    border-bottom: 1px solid #ccc;
    height: 60px;
    overflow: hidden;
}

.el-row.listItem .el-col{
    height: 60px;
    text-align: center;
    line-height: 60px;
    overflow: hidden;
}

.authorImg {
  height: 40px;
  width: 40px;
  margin: 10px auto;
}

.tab {
  background-color: #bbb;
  border-radius: 4px;
  height: 20px;
  width: 34px;
  margin: 20px auto;

  line-height: 20px;
  font-size: 14px;
  color: white;
}
.tabIsTop {
  background-color: #80bd01;
}

.tabIsGood {
  background-color: #80bd01;
}

.titleContainer {
  text-align: left;
}

.title {
  text-decoration: none;
  color: #333;
  font-size: 15px;
  text-align: left;
}

.replyVisitNumber {
  font-size: 12px;
}

.createTime {
  font-size: 14px;
}

</style>
