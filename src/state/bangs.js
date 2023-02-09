// 状态栏高度 单位px
const headerMargin = wx.getSystemInfoSync().statusBarHeight

// 屏幕高度 单位px
const mainHeight = wx.getSystemInfoSync().screenHeight

// header高度
const headerHeight = 90
// 刘海 + header高度
const conHeight = {
	headerHeight,
	headerMargin: headerMargin * 2
}

// wx.getSystemInfoSync().

export {
	headerHeight,
	conHeight,
	headerMargin
}