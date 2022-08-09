<template>
  <div>
    <div class="container">
        <div class="content"> 
            <div class="title">截止{{covNum.modifyTime | time}}全国数据统计 </div>
            <ui class="wrap">
                <li class="item">
                    <div class="number">
                        <span>较昨日</span>
                        {{covNum.currentConfirmedIncr | number }}
                        <div class="bold">{{covNum.currentConfirmedCount | division}}</div>
                        <strong>现存确诊</strong>
                    </div>
                </li>
                <li class="item">
                    <div class="number">
                        <span>较昨日</span>
                        {{covNum.suspectedIncr | number }}
                        <div class="bold">{{covNum.suspectedCount | division}}</div>
                        <strong>境外输入</strong>
                    </div>
                </li>
                <li class="item">
                    <div class="number">
                        <span>较昨日</span>
                        {{covNum.seriousIncr | number }}
                        <div  class="bold">{{covNum.seriousCount | division}}</div>
                        <strong>现存无症状</strong>
                    </div>
                </li>
                <li class="item">
                    <div class="number">
                        <span>较昨日</span>
                        {{covNum.confirmedIncr | number }}
                        <div class="bold">{{covNum.confirmedCount | division}}</div>
                        <strong>累计确诊</strong>
                    </div>
                </li>
                <li class="item">
                    <div class="number">
                        <span>较昨日</span>
                        {{covNum.deadIncr | number }}
                        <div class="bold">{{covNum.deadCount | division}}</div>
                        <strong>累计死亡</strong>
                    </div>
                </li>
                <li class="item">
                    <div class="number">
                        <span>较昨日</span>
                        {{covNum.curedIncr | number }}
                        <div class="bold">{{covNum.curedCount}}</div>
                        <strong>累计治愈</strong>
                    </div>
                </li>
            </ui>

        </div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
    props:{
        covNum:{
            type:Object,
            default:function(){
                return {}
            }
        },
    },
    //过滤器
    filters:{
        //时间
        time:function(time){
            return new Date().toLocaleString('chinese',{hour12:false})
        }, 
        //较昨日
        number:function(num){
            num = num>0?"+"+num:num;
            if(num==0){
                return '';
            }
            return num;
            
        },
        division:function(num){
            return num.toLocaleString();
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
    background-color: #f5f5f5;
    padding-top: .3rem;
    .content{
        background-color: #fff;
        padding: .3rem;
        color: #666;
        .title{
            font-size: .3rem;
        }
        .wrap{
            font-size: .3rem;
            display: flex;
            flex-wrap: wrap;
            margin-top: .3rem;
            box-shadow:  0 0 .1rem .1rem rgba(82,78,78,.2);
            border-radius: .1rem;
            padding-top: .2rem;
            list-style-type:none;//去掉圆点
            .item{
                position: relative;
                width: 33.33333%;
                text-align: center;
                margin-bottom: .3rem;
                span{
                    color: #444;
                }
                strong{
                    color: #222;
                }
                .bold{
                    font-size: .4rem;
                    font-weight: bold;
                }
                &::after{
                    position: absolute;
                    right: .05rem;
                    top: .1rem;
                    content:"";
                    display: block;
                    height: 1rem;
                    border-right: 1px solid #ddd;
                }
                &:nth-child(3n)::after{
                    content:"";
                    border-right: 0;
                }
                // &:nth-child(6)::after{
                //     content:"";
                //     border-right: 0;
                // }
            }
            li:nth-child(1){
                color: red;
            }
            li:nth-child(2){
                color: rgb(55, 163, 136);
            }
            li:nth-child(3){
                color: orange;

            }
            li:nth-child(4){
                color: purple;
            }
            li:nth-child(5){
                color: rgb(124, 124, 26);
            }
            li:nth-child(6){
                color: blue;
            }
            
        }
    }
  }
</style>