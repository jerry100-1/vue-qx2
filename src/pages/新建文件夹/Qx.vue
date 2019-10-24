<template>
   <div>
      <div class="firstPart">
         <div class="wrapFirstPart">
               <div class="wrapFirstPart1-1" style="text-align:center">
                  <span class="wrapFirstPart11Text1">{{changeCashList.balanceCoin}}</span>
                  <span class="wrapFirstPart11Text2">我的金币</span>
               </div>
               <div class="wrapFirstPart1-M">
                     <div class="borderdiv">

                     </div>
               </div>
               <div class="wrapFirstPart1-2">
                  <span class="wrapFirstPart12Text1">{{changeCashList.todayCoin}}</span>
                  <span class="wrapFirstPart12Text2">今日金币</span>
               </div> 
               <div class="wrapFirstPart1-3">
                   <button class="rewardBtn" @click="testClick">
                     兑换金币 &gt;
                     </button> 
               </div> 
         </div>

         <div class="otherFirstPart">

               <div class="moneuyText">
                  ￥5
               </div>
              <!-- <div class="circleText1">
                 4
              </div>
              <div class="circleText2">
                 1
              </div> -->
              <div class="firstText">
                 已连续签到<span class="boldText">{{changeCashList.signCount}}</span>天
              </div> 
              <div class="secondText">

                 <!-- <span>{{changeCashList.signDescTwo}}</span> -->
                 <span v-html="changeCashList.signDescTwo"></span>
                 <!-- 再签到
                 <span class="boldText">4</span>天可获得
                 <span class="boldText">5</span>元现金红包 -->
              </div>
              <div class="circleText3" v-if="showFlag==true" @click="showCountDownDialog(second())">
                 <!-- 15:00 -->
                 <!-- {{countdown|formateTime}} -->
                 <!-- {{changeCashList.seconds}} -->
                 {{minute}}:{{second}}
                                    
                  <!-- 时:<input type="text" id="txt1" ref="txt1" style="width:20px;display:inline-block">
                  分:<input type="text" id="txt"  ref="txt"  style="width:20px;display:inline-block"/>
                  秒:<input type="text" id="txt2" ref="txt2"  style="width:20px;display:inline-block"/><br> -->

              </div>
              <div v-if="showFlag==false" class="showOrHideFlag" @click="getRedBagDialog">
                 <!-- <img src="@/assets/images/qximg/countdown.jpg" alt="" class="pickbao" style=""> -->
                 <span class="pickchai">拆</span>
              </div>
             <img src="@/assets/images/qximg/wweg.png" alt="">
         </div>














         <div class="bottomImgDiv1" >
                    <swiper auto height="80px" width="100%">
                        <swiper-item class="black" v-for="(item,index) in myTopBannerList" :direction="horizontal" :interval="2000"  :show-dots="true" :key="index">
                              <img :src="item.ImgUrl" alt="" style="width:100%;height:100%;" @click="tianzhuan(item)"> 
                        </swiper-item>
                    </swiper>

         </div>




         <!-- <div class="bottomImgDiv1"  style="width:100%;height:80px;background:#fff;padding-bottom:20px;border-radius:15px;">
               <div style="height:80px;">
                  <swiper auto height="80px" style="width:90%;border-radius:15px;">
                     <swiper-item class="black" v-for="(item,index) in myBottomBannerList" :direction="horizontal" :interval="2000"  :show-dots="true" :key="index" style="width:100%;">
                        <img :src="item.ImgUrl" alt=""  style="width:100%;height:100%;border-radius:10px;" > 
                     </swiper-item>
                  </swiper>

               </div>

         </div> 
 -->
















         <!-- <div class="bottomImgDiv1"> -->
             <!-- <img  src="@/assets/images/qximg/rec9.png" alt=""> -->
             <!-- <div class="circleText4">
                 2
              </div> -->
         <!-- </div>    -->
         <!-- <div class="bottomImgDiv">
              <img class="ele1" src="@/assets/images/qximg/rpic.png" alt="">
               <div class="ele2">
                    <div class="ele3">幸运大抽奖</div>
                    <div class="ele4">赚取更多奖励   上不封顶</div>
               </div>
               <button class="fetchBtn">领取</button>
             
             <div class="circleText4">
                 2
              </div>
         </div>    -->


      </div>


      <div class="secondpart">
          <div class="secondpartInner">

               <!-- 每日任务 -->
              <div class="secondpartTitle1">
                 <span class="colorLeft"></span>
                 <span class="TitleText">每日任务</span>
              </div>


              <!-- 模型1 -->

              <div class="modalLuckySamle modalLuckySamleQQ " v-for="(item,index) in myDailyList" @click="tianzhuan(item)">
                     <div class="modalLuckySamle1">
                        <img :src="item.MinImg" alt="">
                     </div>
                     <div class="modalLuckySamle2  modalLuckySamleTwo">
                        <div class="midTopText">
                           <span class="midTopTextText1">{{item.Name}}</span>
                              <img  class="midTopTextImg1" v-if="item.Tag==1" src="@/assets/images/qximg/hotimg.png" alt="">
                              <img  class="midTopTextImg1" v-if="item.Tag==2" src="@/assets/images/qximg/newimg.png" alt="">
                           </div>
                        <div class="midBotText">{{item.Notes}}</div>
                     </div>
                     <div class="modalLuckySamle3 modalLuckySamleThree">
                          <span class="rightNumText" @click="addReward">

                                 <img src="@/assets/images/qximg/jinQ.png" class="img2" style="position:relative;top:2px;left:2px;" alt="">
                                 <!-- <a :href="item.JumpUrl"><span class="text2" @click="goUrl" style="position:relative;top:2px;left:2px;">{{item.ButtonTxt}}</span></a> -->
                                <span class="text2"  style="position:relative;top:2px;left:2px;">{{item.ButtonTxt}}</span>
                                 <img src="@/assets/images/qximg/imgBtn.png" class="img1" alt="">
                          </span>
                     </div>
              </div>
            
                 <!-- 限时推荐 -->
              <div class="secondpartTitle1">
                 <span class="colorLeft"></span>
                 <span class="TitleText">限时推荐</span>
              </div>


              <!-- 模型2-->

             <div class="modalLuckySamle " v-for="(item,index) in myRecommendList" @click="tianzhuan(item)">
                     <div class="modalLuckySamle1">
                        <img :src="item.MinImg" alt="">
                     </div>
                     <div class="modalLuckySamle2">
                        <div class="midTopText">
                           <span class="midTopTextText1">{{item.Name}}</span>
                              <img  class="midTopTextImg1" v-if="item.Tag==1" src="@/assets/images/qximg/hotimg.png" alt="">
                              <img  class="midTopTextImg1" v-if="item.Tag==2" src="@/assets/images/qximg/newimg.png" alt="">
                           </div>
                        <div class="midBotText">{{item.Notes}}</div>
                     </div>
                     <div class="modalLuckySamle3">
                          <span class="rightNumText" @click="addReward">
                                 <img src="@/assets/images/qximg/jinQ.png" class="img2" style="position:relative;top:2px;left:2px;" alt="">
                                   <!-- <a :href="item.JumpUrl"><span class="text2"  @click="goUrl" style="position:relative;top:2px;left:2px;">{{item.ButtonTxt}}</span></a> -->
                               <span class="text2"  style="position:relative;top:2px;left:2px;">{{item.ButtonTxt}}</span>
                                 <img src="@/assets/images/qximg/imgBtn.png" class="img1" alt="">
                          </span>
                     </div>
              </div>
             
          </div>
      </div>




         <!-- 轮播图 -->
        <!-- <mt-swipe :auto="2000" style="width:100%;height:100px;background:#fff;">
            <mt-swipe-item v-for='(item,index) in myBottomBannerList' style="width:90%;height:150px;margin-left:5%;" :key="index">
               <a :href="item.JumpUrl">
                 <img :src="item.ImgUrl" alt="" style="width:100%;height:150px;">
               </a>
            </mt-swipe-item>
             
         </mt-swipe> -->


          <!-- <div class="demo">
              <div class="swiper-container">
                     <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for= "(item,index) in myBottomBannerList">
                                    <div class="box-c">
                                             <a :href="item.JumpUrl">
                                                <img :src="item.ImgUrl" alt="" style="width:100%;height:150px;">
                                             </a>
                                    </div>
                              </div>
                     </div>
             </div>
         </div>



 -->








<!-- <swiper :list="baseList" loop auto  :index="demo01_index"   @on-index-change="demo06_onIndexChange"></swiper> -->
<div style="width:100%;height:100px;background:#fff;padding-bottom:20px;">
      <div style="width:90%;margin-left:5%;height:100px;">
         <swiper auto height="100px" style="width:100%;">
            <swiper-item class="black" v-for="(item,index) in myBottomBannerList" :direction="horizontal" :interval="2000"  :show-dots="true" :key="index" style="width:100%;">
               <img :src="item.ImgUrl" alt=""  style="width:100%;height:100%;border-radius:10px;" > 
            </swiper-item>
         </swiper>


      </div>

</div>










       <!-- <div class="swiper-container" style="height:120px;">
            <div class="swiper-wrapper">
               <div v-for='(el,index) in arrItem' class="swiper-slide" :key="index" style="width:100%">
                  <img class="img" :src="el.ImgUrl" style="width:100%;">
               </div>
            </div>
        
         <div class="swiper-pagination"></div>
      </div> -->

      <!-- <div class="thirdPart" style="height:120px;">
          <div class="thirdPartInner" v-if="myBottomBannerList.length>0">
              <img src="@/assets/images/qximg/wr.jpg" alt="">
          </div>
          <div v-else>
              <span>暂无分类广告!!!</span>
          </div>

      </div> -->




   </div>
</template>

<script>
import Vue from 'vue'
import mixin from '@/mixins'
import { ExchangeApi } from '@/api'

import { DailyApi } from '@/api'

import { RecommendApi } from '@/api'

import { BottomBannerApi} from '@/api'

import { TopBannerApi} from '@/api'


import Util from '@/common/js/util'
import axios from 'axios';
import Common from "@/common/js/common"
import store from '@/vuex/index'

import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

export default {
   name:"Qx",
   data()
   {
       return{

         //   baseList:[
         //      {
         //       url: 'javascript:',
         //       img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
         //       title: '送你一朵fua'
         //       }, 
         //       {
         //          url: 'javascript:',
         //          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
         //          title: '送你一辆车'
         //       },
         //       {
         //          url: 'javascript:',
         //          img: 'https://static.vux.li/demo/5.jpg', // 404
         //          title: '送你一次旅行',
         //          fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
         //       }
         //    ],
         // baseList:[
         //      {
         //          url: 'javascript:',
         //          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
         //          title: '送你一朵fua'
         //       }, 
         //       {
         //          url: 'javascript:',
         //          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
         //          title: '送你一辆车'
         //       },
         //       {
         //          url: 'javascript:',
         //          img: 'https://static.vux.li/demo/5.jpg', // 404
         //          title: '送你一次旅行'
         //       }
         //    ],
           // demo01_list: this.baseList,
            baseList:[],
            demo01_index: 0,
            swiperItemIndex:1,
            showFlag:false,
            // c:0,
            // c1:60,
            // c2:0,
            // runing:0,
            // stop:0,
            minutes:30,
            seconds:0,
            // countdown:1800,
            changeCashList:{},
            demo06_index: 0,
            myseconds:"",
            moveMin:"",
            ele1:"",
            ele2:"",
            myDailyList:[],
            myRecommendList:[],
            myTopBannerList:[],
            myBottomBannerList:[],
            arrItem:[
            {
                  name:'swiperSlide5',
                  imgUrl:'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'
            },
            {
                  name:'swiperSlide1',
                  imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
            }
			]

       }
   },
   filters:{
      formateTime:function(val)
      {
        return Math.floor(val/60);
      }
   },
 created() {
    console.log("---------------------66666666666666created-----------------");
               let appType = this.$route.query.appType

               let auth = this.$route.query.auth

               let deviceid = this.$route.query.deviceid


               let channel = this.$route.query.channel

               let appid = this.$route.query.appid

               let appVersion = this.$route.query.appVersion

               let apiVersion = this.$route.query.apiVersion

               let appKey=this.$route.query.appKey

               // alert("appType---"+appType);
               // alert("auth---"+auth);
               // alert("deviceid---"+deviceid);
               // alert("channel---"+channel);
               // alert("appid---"+appid);
               // alert("appVersion---"+appVersion);
               // alert("apiVersion---"+apiVersion);
               console.log("获取的地址栏的appType是"+appType);
               console.log("获取的地址栏的auth是"+auth);
               console.log("获取的地址栏的deviceid是"+deviceid);
               console.log("获取的地址栏的channel是"+channel);
               console.log("获取的地址栏的appid是"+appid);
               console.log("获取的地址栏的appVersion是"+appVersion);
               console.log("获取的地址栏的apiVersion是"+apiVersion);
               window.localStorage.setItem("appType",appType);
               window.localStorage.setItem("auth",auth);
               window.localStorage.setItem("deviceid",deviceid);
               window.localStorage.setItem("channel",channel);
               window.localStorage.setItem("appid",appid);
               window.localStorage.setItem("appVersion",appVersion);
               window.localStorage.setItem("apiVersion",apiVersion);
               window.localStorage.setItem("appKey",appKey);

           // this.$vux.loading.show();
            console.log("-------------------------");
               ExchangeApi.getExchangeList({
               key:'exchangeList'
            
               }).then(data => {
            //this.$vux.loading.hide()
               if (data.Status === 200) {
                 console.log('请求发送成功了!!!', data)
               //this.complaintList = data.Result

                 this.changeCashList=data.Result
                 this.myseconds=this.changeCashList.seconds
               //this.myseconds=parseInt(360);
                //console.log("你好,获取的剩余的seconds数量是"+this.myseconds);
                  if(this.myseconds>0)
                  {
                     this.showFlag=true 
                  }

                   if(this.myseconds==0)
                  {
                     this.showFlag=false;
                  }


                //console.log("你好,获取的剩余的seconds数量转化为分钟四舍五入是"+Math.floor(this.myseconds/60));
                   this.ele1=Math.floor(this.myseconds/60);

                  //console.log("你好,----"+(this.myseconds-Math.floor(this.myseconds/60)*60));
                   this.ele2=(this.myseconds-Math.floor(this.myseconds/60)*60);
                   this.minutes=this.ele1;
                   this.seconds=this.ele2;

               // this.seconds= Math.floor(this.myseconds/60);  
               
               //  this.minutes=this.myseconds%60;
                //this.formatBit(this.myseconds);
               }
          }).catch(data=>{
              //console.log("这是请求没有成功的打印!!!");
          });



          DailyApi.getDailyTask({
              key:'dailyTask',
              type:1,
              apptype:"jibu"
            }).then(data => {
                 //console.log("这是请求每日金币接口成功90909的返回!!!",data);

               this.myDailyList=data.Result.list;

            }).catch(data=>{
                 // console.log("这是请求每日金币接口失败的返回909090!!!");
            });


            RecommendApi.getRecommendTask({
               key:'recommendTask',
               type:2,
               apptype:"jibu"
            }).then(data => {
                 // console.log("这是请求推荐金币接口成功的返回!!!",data);

                 this.myRecommendList=data.Result.list;

            }).catch(data=>{
                 // console.log("这是请求推荐金币接口失败的返回!!!");
            });


            BottomBannerApi.getBottomBannerList({
               cateTag:"TaskBottomBanner"
            }).then(data => {
                 console.log("这是请求底部广告接口成功的返回!!!",data);

                // this.myRecommendList=data.Result.list;
                this.myBottomBannerList=data.Result.list;

               //  JSON.parse(JSON.stringify(data).replace(/title/g, 'name')) 

               // JSON.parse(JSON.stringify(this.myBottomBannerList).replace(/MinImg/g, 'img'));
               // JSON.parse(JSON.stringify(this.myBottomBannerList).replace(/JumpUrl/g, 'url'));  
            
               // JSON.parse(JSON.stringify(this.myBottomBannerList).replace(/ShowEndTime/g, 'title')); 
               //this.baseList=this.myBottomBannerList;
            
                //console.log("当前的myBottomBannerList的长度是"+this.myBottomBannerList.length);
                //this.arrItem=this.myBottomBannerList;

            }).catch(data=>{
                  //console.log("这是请求底部广告接口失败的返回!!!");
            });



           

            TopBannerApi.getTopBannerList({
               cateTag:"TaskHeadBanner"
            }).then(data => {
                 // console.log("这是请求推荐金币接口成功的返回!!!",data);

              console.log("这是头部banner的广告信息-",data);
              this.myTopBannerList=data.Result.list;

                // this.myRecommendList=data.Result.list;

            }).catch(data=>{
                 // console.log("这是请求推荐金币接口失败的返回!!!");
            });


            // axios({
            //       url: 'http://yapidoc.tatoutiao.com/mock/32/v1.0.0/App/Adv/getInfoByCateTag',
            //       method: 'get',
            //       data: {
            //          appid: 70,
            //          channel: "default",
            //          time: 1571283870,
            //          deviceid: "1",
            //          hash:"55ef5a9ba071f90f0cdf30f599650eb1",
            //          key:"exchangeList"
            //       },
            //       headers: {
            //          'Content-Type': 'application/x-www-form-urlencoded',
            //          'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC91Yy5tZWl0ZS5jb21cL3YxXC9hdXRoXC9jYWxsYmFjayIsImlhdCI6MTU3MTE5MzY1MSwiZXhwIjoxNzIzNDczNjUxLCJuYmYiOjE1NzExOTM2NTEsImp0aSI6Ikc2WW1lVTRmekdhbk9KeEUiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.62hZD_IaMtULSbaHt-wIPnZrCCww6VBXJw18uIfpaX'
            //       }
            // })
            // .then(function (response) { 
            //    console.log("-----------------------------------这是请求成功的结果9090"); 
            //    console.log(response);
            // })
            // .catch(function (error) {
            //    console.log("-----------------------------------这是请求失败的结果9090"); 
            //    console.log(error);
            // });
              




               // Vue.prototype.appType=appType;
               // Vue.prototype.auth=auth;
               // Vue.prototype.deviceid=deviceid;
               // Vue.prototype.channel=channel;
               // Vue.prototype.appid=appid;
               // Vue.prototype.appVersion=appVersion;
               // Vue.prototype.apiVersion=apiVersion;
               // Vue.prototype.appKey=appKey;



  },
   // watch:{
   //      countdown(val){
   //        if(val==0){
   //           this.$router.push('/firstpage');
   //        }
   //      }
   // },

  
      mounted () {
         // new Swiper('.swiper-container', {
         //    loop: true, // 循环模式选项
         //    // 如果需要分页器
         //    pagination: {
         //       el: '.swiper-pagination',
         //    },
         //    autoplay:{
         //       delay:2000,
         //       disableOnInteraction:false
         //    },
         // })

         this.add();
      },
   
       methods:{
          showCountDownDialog:function(second)
          {
            window.jibu.showCountDownDialog(second);
          },
          tianzhuan:function(item)
          {
            window.jibu.jumpAppPage(item.JumpUrl);
          },
          demo06_onIndexChange (index) {
            this.demo06_index = index
          },
            demo01_onIndexChange (index) {
               this.demo01_index = index
            },

          goUrl:function(item)
          {
             //console.log("当前的jumpUrl是"+item.JumpUrl);
             //console.log("当前的方法被点击了--------------"+item.JumpUrl);
             window.location.href="http://www.baidu.com";

             // window.location.href=item.JumpUrl;
             // this.$router.push({
               //       to:item.JumpUrl
               // })
          },
          showRecommendDialog:function()
          {

          },
          showCountDownDialog:function()
          {
            window.jibu.showCountDownDialog(this.changeCashList.seconds);
          },
          refreshCoin:function()
          {
             window.location.reload();
          },
          testClick:function()
          {
             window.jibu.showChangeCashDialog();
          },
          //点击拆的时候,开始倒计时
          getRedBagDialog:function()
          {
            
             window.jibu.showGetRedBagDialog();
            // this.showFlag=true;
          },

         //   formatBit (val) {
         //       val = +val
         //       return val > 9 ? val : '0' + val
         //    },
         // 　　 // 秒转时分秒，求模很重要，数字的下舍入
         //    formatSeconds (time) {
         //       let min = Math.floor(time % 3600)
         //       let val = this.formatBit(Math.floor(time / 3600)) + ':' + this.formatBit(Math.floor(min / 60)) + ':' + this.formatBit(time % 60)
         //       return val
         //    },
         // 　　 // 定时器
         //    minReturn () {
         //       let time = 5
         //       let t = setInterval(() => {
         //       time--
         //       this.moveMin = this.formatSeconds(time)
         //       if (time <= 0) {
         //          clearInterval(t)
         //       }
         //       }, 1000)
         //    },

               num: function (n) {
               return n < 10 ? '0' + n : '' + n
               },
               add: function () {
               var _this = this
               var time = window.setInterval(function () {
                  if (_this.seconds === 0 && _this.minutes !== 0) {

                      this.showFlag=false;
                     _this.seconds = 59
                     _this.minutes -= 1
                  } else if (_this.minutes === 0 && _this.seconds === 0) {
                     _this.seconds = 0
                     window.clearInterval(time)
                  } else {
                     _this.seconds -= 1
                  }
               }, 1000)
               },
               addReward:function()
               {
                  //console.log("当前的元素被点击了");
               },
     },
      components: {
          Swiper,
          SwiperItem
      },

   watch: {
      second: {
        handler (newVal) {
          this.num(newVal)
        }
      },
      minute: {
        handler (newVal) {
          this.num(newVal)
        }
      }
    },
    computed: {
      second: function () {
        return this.num(this.seconds)
      },
      minute: function () {
        return this.num(this.minutes)
      }
    }


   
}
</script>

<style>
  
  *{
     margin:0;
     padding:0;
  }
/* 
.modalLuckySamle2:nth-last-child(1) {
   border:none;
}
  */

   .vux-indicator.custom-bottom {
      bottom: 30px;
   }
   /* .swiper-container {
      width: 500px;
      height: 300px;
      margin: 20px auto;
   } */

   .swiper-demo-img img {
      width: 90%;
      margin-left:5%;
   }
  .moneuyText{
     color:#fff;
     font-weight:bold;
     position: absolute;
     font-size:16px;
     top:12px;
     left:20px;
  }
  .pickchai{
    width:42px;
    height:42px;
    position: absolute;
    right:10px;
    top:5px;
    background:#ffc308;
    border-radius:50%;
    font-size:20px;
    text-align:center;
    line-height:42px;
    color:#fff;
    font-weight:bold;
    border:3px solid #ff4900;
     box-shadow:2px 2px 2px rgba(0,0,0,0.26);
  }
  body{
     background: #fff;
  }
  .showOrHideFlag .pickbao{
      width:50px;
      height:50px;
      position:absolute;
      right:0px;
      top:0px;
  }
  .firstPart{
      width:100%;
      height:210px;
      background:#FFCA00;
      padding-top:45px;
      box-sizing:border-box;
      position: relative;
      border-bottom-left-radius:8px;
      border-bottom-right-radius:8px;
  }
  .wrapFirstPart11Text1,.wrapFirstPart11Text2{
     display:block;
     color:#fff;
  }
  .wrapFirstPart11Text1{
     font-size:29px;
  }
  .wrapFirstPart11Text2{
    font-size:13px;
    letter-spacing:1px;
  }
   .wrapFirstPart12Text1{
     font-size:29px;
     color:#fff;
     display:block;
  }
  .wrapFirstPart12Text2{
    font-size:13px;
    letter-spacing:1px;
    display:block;
    color:#fff;
  }
  .wrapFirstPart{
    margin-left:18px;
    margin-right:26px;
    height:54px;
    display:flex;
    flex-direction:row;
  }
  .wrapFirstPart1-1{
      flex:1;
      height:53px;
      text-align:left;
  }
  .wrapFirstPart1{
      flex:1;
      height:53px;
      text-align:center;
  }
  .wrapFirstPart1-2{
      flex:1;
      height:53px;
      text-align:center;
  }
  .wrapFirstPart1-3{
      flex:1;
      height:53px;
      display:flex;
      align-items:center;
      justify-content:flex-end;
  }
  .wrapFirstPart1-M{
     display:flex;
     align-items:center;
  }
  .rewardBtn{
     display:block;
     width:90px;
     height:28px;
     background:#fff;
     color:#FFCA00;;
     border-radius:16px;
     letter-spacing:1px;
  }
  .borderdiv{
     height:32px;
     width:1px;
     background:#fff;
     opacity:0.5;
  }
  .otherFirstPart{
      margin-top:13px;
      margin-left:14px;
      margin-right:14px;
      position: relative;
      background:#FFCA00;
      height:62px;
      /* border-left:1px dashed #FF8F08;
      border-top:1px solid #FF8F08;
      border-bottom:1px solid #FF8F08;
      border-right:1px dashed #FF8F08; */
  }
  .otherFirstPart img{
     width:100%;
     height:60px;
  }
  .circleText1,.circleText2,.circleText4{
     width:30px;
     height:30px;
     line-height:26px;
     background:#FF4301;
     font-size:18px;
     text-align:center;
     color:#fff;
     border-radius:50%;
     border:2px solid #fff;
     box-shadow:2px 2px 2px rgba(0,0,0,0.36);
  }
  .circleText4{
     width:32px;
     height:32px;
  }
.circleText1{
     position: absolute;
     left:-9px;
     bottom:2px;
}
.circleText2{
     position: absolute;
     right:-8px;
     bottom:-5px;
     z-index:3;
}
.circleText4{
     position: absolute;
     right:-8px;
     bottom:-5px;

}
.circleText3{
   width:48px;
   height:48px;
   color:#fff;
   color:red;
   transform:rotate3d(90deg);
   border-left:2px solid #FF8F08;
   border-bottom:2px solid #FF8F08;
   border-top:2px solid #fff;
   border-right:2px solid #fff;
   line-height:44px;
   text-align:center;
   background: #FFE06B;
   border-radius:50%;
   position: absolute;
   right:7px;
   top:7px;
}
.firstText{
  font-size:13px;
  color:#fff;
  position: absolute;
  left:80px;
  top:10px;
  display:block;
}
.secondText{
  font-size:13px;
  color:#fff;
  display:block;
  position: absolute;
  left:80px;
  top:34px;
}
.bottomImgDiv1{
  background:#fff;
  width:92%;
  margin-left:4%;
  margin-right:4%;
  /* border:1px dashed rgba(0,0,0,0.66); */
  height:80px;
  position: absolute;
  top:188px;
  box-shadow:
    0 3px 12px #FFF3CE,
    0 3px 3px #FFF3CE,
    0 0 3px #FFF3CE;  
}
.bottomImgDiv1 img{
   width:100%;
   height:72px;
}
.boldText{
   font-weight:bold;
   letter-spacing:1px;
   font-size:120%;
   display:inline-block;
}
.secondpart{
   width:100%;
   height:auto;
   background:#fff;
}
.secondpartInner{
   margin-left:14px;
   margin-right:14px;
   box-sizing:border-box;
   height:auto;
   /* background:yellow; */
   margin-top:76px;
}
.secondpartTitle1{
   width:100%;
   height:24px;
   margin-top:15px;
   margin-left:10px;
}
.colorLeft{
   width:4px;
   border-radius:3px;
   height:18px;
   background: #ff5219;
   display:inline-block;
   vertical-align: middle;
   position: relative;
   top:1px;
}
.TitleText{
   display:inline-block;
   vertical-align: middle;
   font-size:17px;
   font-weight:bold;
   margin-left:3px;
}
.modalLuckySamle{
   width:100%;
   height:82px;
   /* background:green; */
   display:flex;
   flex-direction: row;
}
.modalLuckySamle1{
   flex:1;
   height:82px;
   /* background:pink; */
   display:flex;
   align-items:center;
   justify-content: center;
}
.modalLuckySamle2{
   flex:4;
   height:82px;
   /* background:blue; */
   display:flex;
   flex-direction:column;
   justify-content:center;
   padding-left:10px;
   box-sizing:border-box;
   border-bottom:1px solid rgba(0,0,0,0.06);
}
.modalLuckySamle3{
   flex:3;
   height:82px;
   display:flex;
   align-items:center;
   justify-content:flex-end;
   /* background:lightcoral; */
    border-bottom:1px solid rgba(0,0,0,0.06);
}
.modalLuckySamle1 img{
   width:36px;
   height:36px;
}
.midTopText{
   font-size:17px;
   font-weight:bold;
   margin-bottom:2px;
}
.midBotText{
   font-size:12px;
   margin-top:2px;
   color:rgba(0,0,0,0.52);
}
.midTopText img{
   width:33px;
   height:16px;
}
.midTopTextText1  .midTopTextImg1{
   display:inline-block;
   vertical-align:middle;
}
.midTopTextText1{
  font-size:18px;
}

.rightNumText{
   width:90px;
   height:36px;
   display:block;
   /* background: #FF471F; */
   display:flex;
   flex-direction:row;
   align-items:center;
   position: relative;
} 
.rightNumText .img1{
   width:98px;
   height:44px;
   position: absolute;
   right:0px;
   top:0px;
}
.rightNumText .img2{
  width:20px;
  height:20px;
  position: relative;
  z-index:10;
  margin-left:4px;
   display:inline-block;
   vertical-align:middle;
}
.text2{
   position: relative;
   color:#fff;
   z-index:10;
   display:inline-block;
   vertical-align:middle;
   white-space: nowrap;
   overflow:hidden;
   margin-left:6px;
}
.thirdPart{
  width:100%;
  height:120px;
  background:#fff;
}
.thirdPartInner{
   margin-left:14px;
   margin-right:14px;
   height:120px;
   background:#fff;
   /* padding-bottom:20px; */
}
.thirdPartInner img{
   width:100%;
   height:90px;
   /* border:1px dashed #FF8F08; */
}
.bottomImgDiv{
   display:flex;flex-direction:row;align-items:center;
}
.bottomImgDiv img{
   width:84px;
   height:78px;
}
.ele2{
   margin-left:20px;
}
.ele3{
  font-size:18px;
  margin-bottom:5px;
  font-weight:bold;
}
.ele4{
  font-size:13px;
  margin-top:5px;
  color:rgba(0,0,0,0.36);
}
.fetchBtn{
   width:68px;
   height:36px;
   /* background: #FF8A06; */
   background:linear-gradient(to right, #FF471F, #ffc308);
   margin-left:20px;
   color:#fff;
   font-size:15px;
   letter-spacing:2px;
   border-radius:20px;
   /* box-shadow:2px 3px 2px rgba(0,0,0,0.36); */
   box-shadow: 2px 3px 2px #ffe3c5;
}
</style>