<template>
  <div class="container">
    <!-- 病毒信息 -->
    <div class="info">
        <div class="title">
            病毒信息
        </div>
        <p>{{covInof.note1}}</p>
        <p>{{covInof.note2}}</p>
        <p>{{covInof.note3}}</p>
        <p>{{covInof.note4}}</p>
        <p>{{covInof.note5}}</p>
        <p>{{covInof.note6}}</p> 
    </div>

    <!--疫情热点  -->
    <div  class="hot">
        <div class="title">
            疫情热点
            <a class="more"  href="javascript:;">
            查看更多>
            </a>
        </div>
        <ul class="list">
            <li class="item" v-for="item in news" :key="item.id">
                <span>最新</span>
                {{item.title}}
            </li>
        </ul>
        
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
    props:{
        covInof:{
            type:Object,
            default:function(){
                return {}
            }
        },
        news:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
  name:  '',
  components: {
    
  },
  // 定义属性
  data() {
    return {
      
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
    padding: 0.25rem;
    font-size: 0.3rem;
        .title{
            border-left: 0.1rem solid blue;
            padding-left: 0.1rem;
            color: #666;
             
            font-weight: bold;
            margin-bottom: 0.1rem;
            }
            .more{
                float: right;
            }
        p{
            color: #666;
            // line-height: 0.45rem;
        }
        .hot{
            padding: 0.05rem;
            padding-bottom: .2rem;
            border-bottom: 1px solid #ddd;
            .list{
                .item{
                    line-height: 0.45rem;
                    color: #666;
                    span{
                        background-color: red;
                        padding: 0 0.04rem;
                        counter-reset: #fff;
                        border-radius: 0.07rem;
                    }
                }
            }
        }
  }
</style>