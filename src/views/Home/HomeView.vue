<template>
  <div class="home">
    <!-- 1.图片 -->
    <div class="banner">
      <img src="@/assets/img/1.jpg" style="width:100%;"  alt="">
    </div>
    <!-- 2.病毒信息展示 -->
    <CovInfo :covInof='covinfo' :news='news' />
    <!-- 3.导航 -->
    <ul class="list">
      <li class="item">
        <router-link to="/area">
          <img src="@/assets/img/21.png" alt="">
          <div>风险地区 </div>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/hesuan">
          <img src="@/assets/img/22.png" alt="">
          <div>核酸检测 </div>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/prevention">
          <img src="@/assets/img/23.png" alt="">
          <div>防疫物资 </div>
        </router-link>
      </li>
      <li class="item">
        <router-link to="/travel">
          <img src="@/assets/img/24.png" alt="">
          <div>出行政策 </div>
        </router-link>
      </li>
    </ul>
    <!-- 全国数据统计 -->
    <CovNum :covNum='covNum' />
    <!-- ECharts展示 -->
    <!-- <ECharts/> -->

    <!-- 国内疫情 -->
    <ChildMap/>
  </div>
  
    
</template>

<script>
import {getCovInfo} from '@/api/index.js'
import CovInfo from './CovInfo/CovInfo.vue'
import CovNum from './CovNum/CovNum.vue'
import ChildMap from './ECharts/ChildMap.vue'
import ECharts from './ECharts/ECharts.vue'

export default {
  name: 'HomeView',
  components: {
    CovInfo,
    CovNum,
    ChildMap,
    ECharts
  },
  data() {
    return {
      covinfo:{},//病毒信息
      news:[],
      covNum:{},//全国数据统计
      
    };
  },
  created(){
    this.getCovData();
  },
  methods:{
    getCovData(){
      getCovInfo().then(res=>{
        console.log(res.newslist[0].desc);
        let data = res.newslist[0].desc;
        this.covinfo={
          //1.病毒信息
          // note1:data.confirmedCount,
          // note2:data.confirmedIncr,
          // note3:data.curedCount,
          // note4:data.curedIncr,
          // note5:data.currentConfirmedCount,
          // note6:data.currentConfirmedIncr,
          note1:"病毒：SARS-CoV-2,其导致基本命名COVID-19",
          note2:"传染源：新冠肺炎的患者。无症状感染者也可以称为传染源",
          note3:"传播途径：经呼吸道飞沫、接触传播是主要的传播途径。气溶胶传播和消化道传播途径尚待明确",
          note4:"易感人群：人群普遍易感。老年人及有基础疾病患者感染后病情较重",
          note5:data.currentConfirmedCount,
          note6:data.currentConfirmedIncr,
        }
        //2.疫情热点
        this.news=res.newslist[0].news;
        //3.全国数据统计
          this.covNum={
            modifyTime:data.modifyTime,
            currentConfirmedIncr:data.currentConfirmedIncr,
            currentConfirmedCount:data.currentConfirmedCount,
            suspectedIncr:data.suspectedIncr,
            suspectedCount:data.suspectedCount,
            seriousIncr:data.seriousIncr,
            seriousCount:data.seriousCount,
            confirmedIncr:data.confirmedIncr,
            confirmedCount:data.confirmedCount,
            deadIncr:data.deadIncr,
            deadCount:data.deadCount,
            curedIncr:data.curedIncr,
            curedCount:data.curedCount
          }
      })
    }
  }

}
</script>
<style lang="less" scoped>
  .list{
    display: flex;
    .item{
      flex: 1;
      text-align: center;
      font-size: .2rem;
      img{
        width:1rem;
      }
    }
  }
</style>