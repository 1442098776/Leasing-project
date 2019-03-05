<template>
    <section id="index" :style="{height:h+'px'}" :class="[popup?'indexActive':'']">
        <headTitle />
        <section class="section">
            <img :src="data.img" class="img-responsive" alt="">
            <section class="add flex">
                <img src="../../static/img/add.png" title="" alt="">
            </section>
        </section>
        <section class="section1 flex text-center">
            <span v-for="(item,index) of solt" :class="[index==soltIndex?'active':'']" :key="index" @click="checkSolt(index)">{{item}}</span>
        </section>
        <section class="section2 flex text-center">
            <section v-for="(item,index) of data.solt1" :key="index" :class="index==soltIndex1?'active':''" @click="check(index)">
                <span>{{item}}</span>
                <span></span>
            </section>
        </section>
        <section class="section3">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
                <router-link to="" tag="li" v-for="item of data.count" :key="item.id" class="flex">
                    <section>
                        <img :src="item.img" title="" alt="" class="img-responsive">
                    </section>
                    <section>
                        <p>{{item.type}}</p>
                        <p>{{item.text}}</p>
                        <p>{{item.total}}</p>
                    </section>
                </router-link>
            </ul>
            <p :style="{display:loading?'block':'none'}" class="p">
                <mt-spinner :type="3" color="rgb(0, 0, 0)" class="text-center"></mt-spinner>
            </p>
        </section>
        <section class="popup" v-show="popup">
            <transition name="area">
                <section class="area flex" v-show="show1">
                    <section>
                        <section v-for="(item,index) of areaCheck" :key="index" :class="[areaIndex==index?'active':'']" @click="areaSelect(index)">{{item}}</section>
                    </section>
                    <section>
                        <section>
                            <section v-for="(item,index) of areaData" :key="index" @click="specific(index)" :class="[specificIndex==index?'active':'']">{{item}}</section>
                        </section>
                    </section>
                </section>
            </transition>
            <section class="rent">
                <section class="price">
                    <section v-for="(item,index) of price" :key="index" :class="[priceIndex==index?'active':'']">
                        <p v-if="item.min==null && item.max==null">不限</p>
                        <p v-else><span v-show="item.min==null">≤</span>{{item.min}}<span v-show="item.min!=null || item.max!=null">-</span>{{item.max}}&nbsp;HKD</p>
                    </section>
                </section>
                <section class="priceCheck">
                    <input type="number" placeholder="最低價格">
                    <span>-</span>
                    <input type="number" placeholder="最高價格">
                    <button type="submit" value="確定">確定</button>
                </section>
            </section>
        </section>
    </section>
</template>
<script>
import headTitle from "../components/title";
export default {
  name: "index",
  data() {
    return {
      h: window.innerHeight,
      //   h1:window.innerHeight-65-193-75-30,
      solt: ["整租", "合租"],
      soltIndex: 0, //整/合
      soltIndex1: null, //区/租金等
      loading: false, //加载
      popup: false, //选择出现
      areaIndex: 0,
      specificIndex: null, //具体区域index
      priceIndex: null,
      show1: false, //选择区域出现
      show2: false, //选择租金出现
      show3: false, //选择居室出现
      show4: false, //选择其它出现
      selected1: "", //选择了区域
      selected2: "", //选择了租金
      selected3: "", //选择了居室
      selected4: "", //选择了其它
      data: {
        img:
          "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551665767&di=a651c66dcc5b4114619b51f540920ba1&src=http://pic23.photophoto.cn/20120526/0040039465573056_b.jpg",
        solt1: ["區域", "租金", "居室", "其它"],
        count: [
          {
            id: 1,
            img:
              "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551665767&di=a651c66dcc5b4114619b51f540920ba1&src=http://pic23.photophoto.cn/20120526/0040039465573056_b.jpg",
            type: "整租·2室1廳2衛",
            text: "銅鑼灣地鐵站附近大套入銅鑼灣地鐵站附近大套入",
            total: "8000/月"
          },
          {
            id: 2,
            img:
              "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551665767&di=a651c66dcc5b4114619b51f540920ba1&src=http://pic23.photophoto.cn/20120526/0040039465573056_b.jpg",
            type: "整租·2室1廳2衛",
            text: "銅鑼灣地鐵站附近大套入銅鑼灣地鐵站附近大套入",
            total: "8000/月"
          },
          {
            id: 3,
            img:
              "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551665767&di=a651c66dcc5b4114619b51f540920ba1&src=http://pic23.photophoto.cn/20120526/0040039465573056_b.jpg",
            type: "整租·2室1廳2衛",
            text: "銅鑼灣地鐵站附近大套入銅鑼灣地鐵站附近大套入",
            total: "8000/月"
          },
          {
            id: 4,
            img:
              "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551665767&di=a651c66dcc5b4114619b51f540920ba1&src=http://pic23.photophoto.cn/20120526/0040039465573056_b.jpg",
            type: "整租·2室1廳2衛",
            text: "銅鑼灣地鐵站附近大套入銅鑼灣地鐵站附近大套入",
            total: "8000/月"
          }
        ]
      },
      areaCheck: ["區域", "地鐵"],
      areaData: [
        "不限",
        "中西區",
        "東區",
        "灣仔區",
        "南區",
        "油尖旺區",
        "中西區",
        "東區",
        "灣仔區",
        "南區",
        "油尖旺區",
        "中西區",
        "東區",
        "灣仔區",
        "南區",
        "油尖旺區",
        "中西區",
        "東區",
        "灣仔區",
        "南區",
        "油尖旺區"
      ],
      price: [
          {min:null,max:null},
          {min:null,max:5000},
          {min:5000,max:8000},
          {min:8000,max:12000},
          {min:12000,max:15000},
          {min:15000,max:20000},
          {min:20000,max:null}
      ]
    };
  },
  created() {},
  methods: {
    //整/合租选择
    checkSolt(index) {
      // console.log(index)
      this.soltIndex = index;
    },
    //区域、租金等选择
    check(index) {
      // console.log(index)
      this.soltIndex1 = index;
      this.popup = true;
      switch (index) {
        case 0:
          this.show1 = true;
          this.show2 = this.show3 = this.show4 = false;
          break;
        case 1:
          this.show2 = true;
          this.show1 = this.show3 = this.show4 = false;
          break;
        case 2:
          this.show3 = true;
          this.show1 = this.show2 = this.show4 = false;
          break;
        case 3:
          this.show4 = true;
          this.show1 = this.show2 = this.show3 = false;
          break;
      }
    },
    //区域选择
    areaSelect(index) {
      this.areaIndex = index;
    },
    //具体区域
    specific(index) {
      this.specificIndex = index;
      this.soltIndex1 = null;
      setTimeout(() => {
        this.popup = false;
      }, 500);
    },
    //加载
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        // let last = this.list[this.list.length - 1],
        //   length = this.list.goods.length;
        // for (let i = 1; i <= 10; i++) {
        //   this.list.goods.push({
        //     id: length + i,
        //     goods_id: length + i,
        //     img:
        //       "https://www.chanel.com/images/f_auto,q_auto,c_scale,w_4096/c_crop,h_3015,w_2040,x_1028,y_148/q_auto,f_auto,fl_lossy,dpr_auto/w_248/cruise-2018-19-48-8810745790494.jpg",
        //     name: "夹克",
        //     price: "3100",
        //     sales: 100
        //   });
        // }
        this.loading = false;
      }, 2000);
    }
  },
  components: {
    headTitle
  }
};
</script>
<style lang="scss" scoped>
#index {
  &.indexActive {
    overflow: hidden;
  }
  .section {
    position: relative;
    height: 193px;
    & > img {
      width: 100%;
      height: 100%;
    }
    .add {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      -webkit-transform: translate(-50%, 50%);
      -moz-transform: translate(-50%, 50%);
      -o-transform: translate(-50%, 50%);
      -ms-transform: translate(-50%, 50%);
      width: 88px;
      height: 88px;
      line-height: 88px;
      background: #84c7fd;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      align-items: center;
      justify-content: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  .section1 {
    height: 75px;
    padding: 20px 0 0;
    span {
      padding-bottom: 14px;
      font-size: 2.6rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(25, 25, 25, 1);
      line-height: 37px;
      flex: 1;
      border-bottom: 4px solid #d8d8d8;
    }
    .active {
      border-bottom: 4px solid #84c7fd;
      transition: all 1s ease;
      -webkit-transition: all 1s ease;
    }
  }
  .section2 {
    border-bottom: 1px solid #d8d8d8;
    height: 30px;
    line-height: 30px;
    .active {
      transition: all 1s ease;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -ms-transition: all 1s ease;
      -o-transition: all 1s ease;
      span {
        color: #84c7fd;
        &:last-child {
          width: 0;
          height: 0;
          border-width: 0 6px 6px;
          border-style: solid;
          border-color: transparent transparent #84c7fd; /*透明 透明  灰*/
        }
      }
    }
    & > section {
      flex: 1;
      align-items: center;
      position: relative;
      span {
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 100, 1);
        &:last-child {
          width: 0;
          height: 0;
          border-width: 6px 6px 0;
          border-style: solid;
          border-color: #666664 transparent transparent; /*灰 透明 透明 */
          position: absolute;
          top: 50%;
          left: 68%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          -o-transform: translateY(-50%);
        }
      }
    }
  }
  .section3 {
    ul {
      padding: 23px 24px 0px;
      li {
        padding-bottom: 27px;
        & > section {
          &:first-of-type {
            width: 30%;
            img {
              border-radius: 8px;
              -webkit-border-radius: 8px;
              -moz-border-radius: 8px;
              -ms-border-radius: 8px;
              -o-border-radius: 8px;
            }
          }
          &:last-child {
            width: 70%;
            padding-left: 14px;
            p {
              font-size: 1.8rem;
              &:first-of-type {
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(102, 102, 100, 1);
              }
              &:nth-of-type(2) {
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(25, 25, 25, 1);
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
              &:last-of-type {
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(249, 148, 61, 1);
              }
            }
          }
        }
      }
    }
    & > .p {
      width: 30px;
      margin: 0 auto;
    }
  }
  .v-enter,
  .v-leave-to {
    height: 0;
  }
  .v-enter-active,
  .v-leave-to-active {
    transition: all 1s ease;
  }
  .popup {
    position: fixed;
    top: 363px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.4);
    .active {
      background: #84c7fd;
      color: #fff;
    }
    .area {
      height: 100%;
      font-size: 1.4rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #666664;

      & > section {
        flex: 1;
        &:first-child {
          background: #fff;
          & > section {
            padding-left: 20%;
            height: 32px;
            line-height: 32px;
          }
        }
        &:last-child {
          background: #f7f7f7;
          height: 100%;
          overflow: auto;
          section {
            & > section {
              padding-left: 20%;
              height: 32px;
              line-height: 32px;
            }
          }
        }
      }
    }
    .rent {
      height: 100%;
      background: #fff;
      .price {
        text-align: center;
        font-size: 1.4rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #666664;
        border-bottom: 1px solid #d8d8d8;
        & > section {
          height: 32px;
          line-height: 32px;
        }
      }
      .priceCheck {
        padding-top: 23px;
        width: 280px;
        margin:0 auto;
        input {
          border: 0;
          background: #f7f7f7;
          padding: 6px 15px;
          width: 86px;
          height: 32px;
          line-height: 32px;
        }
        button {
          width: 74px;
          height: 32px;
          background: rgba(65, 134, 251, 1);
          border-radius: 4px;
          border:0;
          color: #fff;
          margin-left: 14px;
        }
      }
    }
  }
}
</style>

