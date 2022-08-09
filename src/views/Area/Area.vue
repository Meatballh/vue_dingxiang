<template>
  <div class="area">
    <div class="bg">
      <div class="content">
        <div class="title">
            全国风险地区汇总
        </div>

        <template v-if="high.length>0">
          <div class="th">
          <img src="@/assets/img/sq.jpg" alt="">
          高风险区{{high.length}}个
        </div>
        <ul class="list">
          <li v-for="(item,index) in high" :key="index">{{item}}</li>
        </ul>
        </template>
        
        <template v-if="high.length>0">
          <div class="th">
            <img src="@/assets/img/sq.jpg" alt="">
            中风险区{{mid.length}}个
          </div>
          <ul class="list">
            <li v-for="(mi,index) in mid" :key="index">{{mi}}</li>
          </ul>
        </template>
        
      </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import {getCovInfo} from '@/api/index.js'

export default {
  name:  '',
  components: {
    
  },
  // 定义属性
  data() {
    return {
      high:[],//高风险
      mid:[]//中风险
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getRiskArea(){
        getCovInfo().then(res=>{
            this.high=(res.newslist[0].riskarea.high).splice(0,5),
            this.mid=(res.newslist[0].riskarea.mid).splice(0,5)
        })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getRiskArea();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="less" scoped>
  .area{
    .bg{
      height: 3.5rem;
      background: url('../../assets/img/img.jpg');
      background-size: cover;
      padding-top: 3rem;
      .content{
        font-size: .7rem;
        background-color: #fff;
        // margin: 0 .2rem;
        padding: .2rem;
        border-radius: .2rem;
        .title{
            border-left: 0.1rem solid blue;
            padding-left: 0.1rem;
            color: #666;
            font-weight: bold;
            margin-bottom: 0.1rem;
            font-size: .37rem;
            line-height: .3rem;
        }
        .th{
          margin-top: .3rem;
          font-size: .3rem;
          img{
            width: .5rem;
            vertical-align: top;
          }
        }
        .list{
          color: #333;
          background-color: #f7f7f7;
          border-radius: .1rem;
          line-height: .5rem;
          padding: .1rem;
          margin: .1rem;
          font-size: .267rem;
          
        }
      }
    }
  }
</style>