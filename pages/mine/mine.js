// pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'未登录',
    times:0
  },
  goout:function(e){
    wx.navigateTo({
      url: '../login/login'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    var nickName = wx.getStorageSync('name')
    that.setData({
      name: nickName
    })
    wx.request({
      url: 'http://118.178.18.181:58015/activity/findInfoByName/' + nickName,
      method: 'GET',
      success: function (res) {
        that.setData({
          times: res.data.size
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})