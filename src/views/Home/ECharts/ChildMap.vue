<template>
  <div class="container">
    <div class="title">国内疫情</div>
    <!-- 中国地图 -->
    <div id="main" style="width: 400px;height:400px;"></div>
    <van-tabs v-model="active" animated>
      <van-tab title="现在确诊">
        现在确诊
      </van-tab>
      <van-tab title="累计确诊">
        累计确诊
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name:  '',
  components: {
    
  },
  // 定义属性
  data() {
    return {
      active:0
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    
    
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
     this.$myChart.chinaMap("main")
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
.container{
    padding: .2rem;
    font-size: .5rem;
    .title{
        border-left: 0.1rem solid blue;
        padding-left: 0.1rem;
        color: #666;
        font-size: .3rem;
        line-height: .3rem;    
        font-weight: bold;
        margin-bottom: 0.1rem;
        }
}
  
</style>