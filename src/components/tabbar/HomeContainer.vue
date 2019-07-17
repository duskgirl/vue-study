<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.img">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格  -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: green;
    }
    &:nth-child(3) {
      background-color: blue;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  img {
    width:60px;
    height:60px;
  }
  .mui-media-body {
    font-size: 12px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
      margin: 0;
      padding: 11px 15px;
      vertical-align: top;
      border-right: none;
      border-bottom: none;
  }
</style>
  
<script>
export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    getLunbo() {
      this.$http.jsonp("http://127.0.0.1:4000/lunbo").then(function(res) {
        this.lunboList = res.body;
      });
    }
  }
};
</script>