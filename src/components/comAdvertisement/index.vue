<template>
  <view class="content">
    <!-- 用户点击组件后将打开广告页面，参见属性 open-page-path -->
    <ad-interactive 
			adpid="1000000001" 
			v-slot:default="{data, loading, error}" 
			@load="onadload" 
			@error="onaderror" 
			open-page-path="/pages/xxxxxxxxxx">
      <view v-if="loading">Loading</view>
      <view v-if="data">
        <!-- 可以自定义此图片，组件提供了默认素材，通过 uni-ad 后台配置 -->
        <image :src="data.imgUrl" style="width: 128px; height: 72px;"></image>
      </view>
      <view v-if="error">{{error.errMsg}}</view>
    </ad-interactive>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onadload(e) {
      console.log('广告数据加载成功', e);
    },
    onaderror(e) {
      // 广告加载失败
      console.log("onaderror", e.errCode, e.errMsg);
    }
  }
}
</script>
