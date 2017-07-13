<template>
  <div class="listWrapper">
    <el-row v-for="item in tableData" :key="item.id" class='listItem'>
      <el-col :xs="5" :sm="3" :md="3" :lg="2">
        <div><img :src='item.author.avatar_url' :title='item.author.loginname' class='authorImg'></div>
      </el-col>
      <el-col :xs="5" :sm="3" :md="3" :lg="2" class="replyVisitNumber">
        <div><span>{{item.reply_count}}</span><span>/</span><span>{{item.visit_count}}</span></div>
      </el-col>
      <el-col :xs="0" :sm="2" :md="1" :lg="2" >
        <div :class="{'tabIsTop': item.top, 'tabIsGood': item.good}" class="tab">{{item.tab | formatTab(item.top, item.good)}}</div>
      </el-col>
      <el-col :xs="9" :sm="11" :md="12" :lg="12">
        <div>
        <router-link :to='{name:"ArticlePage",params:{id:item.id}}'>{{item.title}}</router-link>
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
export default {
  name: 'TopicList',
  data () {
    return {
      tableData: []
    }
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
        console.log(response.data.data);
        me.tableData = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    formatTime (row,column) {
      console.log(row,column);
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.getTopicList();
    });
  },
}
</script>

<style>

.listWrapper {
  margin: 20px 10%;
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

.replyVisitNumber {
  font-size: 12px;
}

.createTime {
  font-size: 14px;
}

</style>
