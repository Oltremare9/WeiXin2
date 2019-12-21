// pages/foot/foot.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    projects: [],
    imgUrls: ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true
  },
  toConcrete: function(e) {
    var eid = e.currentTarget.dataset.id
    console.log(eid);
    wx.navigateTo({
      url: '../ConcreteActivity/ConcreteActivity?eid=' + eid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '我的足迹',
    })
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var name = wx.getStorageSync('name')
    var that = this
    wx.request({
      url: 'http://118.178.18.181:58015/activity/findInfoByName/' + name,
      method: 'GET',
      success: function (res) {
        for (var index in res.data.list) {
          var s = "projects[" + index + "]"
          that.setData({
            [s]: res.data.list[index]
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})