//导入
import echarts from "echarts";
//导入中的js文件
import 'echarts/map/js/china'

const install = function (Vue, options) {
  //4.添加实例方法
  Vue.prototype.$myMethod = function (methidOptions) {};
  /***
   * 直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
   * object 要操作的对象
   * descriptors 属性描述
   * get  作为该属性的getter函数，如果没有getter则为undefined。函数返回值将被用作属性的值
   * set   作为属性的setter函数，如果没有setter则为undefined。函数将仅接收参数值给该属性的新值
   */

  //自定义组件
  Object.defineProperties(Vue.prototype, {
    $myChart: {
      get() {
        return {
          //1.折现图
          line(id) {
            var myChart = echarts.init(document.getElementById(id));

            // 指定图表的配置项和数据
            var option = {
              title: {
                text: "ECharts 入门示例",
              },
              tooltip: {},
              legend: {
                data: ["销量"],
              },
              xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
              },
              yAxis: {},
              series: [
                {
                  name: "销量",
                  type: "bar",
                  data: [5, 20, 36, 10, 10, 20],
                },
              ],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
          },
          //2.国内地图
          chinaMap(id,data){
            var myChart = echarts.init(document.getElementById(id));
            var option = {
                title: {  //标题样式
                    text: 'ECharts 中国地图',
                    x: "center",
                    textStyle: {
                        fontSize: 18,
                        color: "red"
                    },
                },
                tooltip: {  //这里设置提示框
                    trigger: 'item',  //数据项图形触发
                    backgroundColor: "red",  //提示框浮层的背景颜色。
                    //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
                    formatter: '地区：{b}<br/>模拟数据：{c}'
                },
                visualMap: {//视觉映射组件
                    top: 'center',
                    left: 'left',
                    min: 10,
                    max: 500000,
                    text: ['High', 'Low'],
                    realtime: false,  //拖拽时，是否实时更新
                    calculable: true,  //是否显示拖拽用的手柄
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                series: [
                    {
                        name: '模拟数据',
                        type: 'map',
                        mapType: 'china',
                        roam: false,//是否开启鼠标缩放和平移漫游
                        itemStyle: {//地图区域的多边形 图形样式
                            normal: {//是图形在默认状态下的样式
                                label: {
                                    show: true,//是否显示标签
                                    textStyle: {
                                        color: "black"
                                    }
                                }
                            },
                            zoom: 1.5,  //地图缩放比例,默认为1
                            emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                                label: { show: true }
                            }
                        },
                        top: "3%",//组件距离容器的距离
                        data: [
                            { name: '北京', value: 350000 },
                            { name: '天津', value: 120000 },
                            { name: '上海', value: 300000 },
                            { name: '重庆', value: 92000 },
                            { name: '河北', value: 25000 },
                            { name: '河南', value: 20000 },
                            { name: '云南', value: 500 },
                            { name: '辽宁', value: 3050 },
                            { name: '黑龙江', value: 80000 },
                            { name: '湖南', value: 2000 },
                            { name: '安徽', value: 24580 },
                            { name: '山东', value: 40629 },
                            { name: '新疆', value: 36981 },
                            { name: '江苏', value: 13569 },
                            { name: '浙江', value: 24956 },
                            { name: '江西', value: 15194 },
                            { name: '湖北', value: 41398 },
                            { name: '广西', value: 41150 },
                            { name: '甘肃', value: 17630 },
                            { name: '山西', value: 27370 },
                            { name: '内蒙古', value: 27370 },
                            { name: '陕西', value: 97208 },
                            { name: '吉林', value: 88290 },
                            { name: '福建', value: 19978 },
                            { name: '贵州', value: 94485 },
                            { name: '广东', value: 89426 },
                            { name: '青海', value: 35484 },
                            { name: '西藏', value: 97413 },
                            { name: '四川', value: 54161 },
                            { name: '宁夏', value: 56515 },
                            { name: '海南', value: 54871 },
                            { name: '台湾', value: 48544 },
                            { name: '香港', value: 49474 },
                            { name: '澳门', value: 34594 }
                        ]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

          }
        };
      },
      set() {},
    },
  });
};
export default install;
