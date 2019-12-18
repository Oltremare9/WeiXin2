// pages/foot/foot.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    projects: 
    [{ url: '', name: '一起流汗', tag: '健身 社交 室内', location: '南京大学体育馆', time: '2019.12.12' ,state:
    '已完成'},
        {
          url: '', name: '一起流汗', tag: '健身 社交 室内', location: '南京大学体育馆', time: '2019.12.12', state:
            '已完成'},
        {
          url: '', name: '一起流汗', tag: '健身 社交 室内', location: '南京大学体育馆', time: '2019.12.12', state:
            '已完成'}],
    imgUrls: ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true
  },
  toConcrete: function (e) {
    var id = e.target.id
    console.log(id);
    wx.navigateTo({
      url: '../ConcreteActivity/ConcreteActivity?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://118.178.18.181:58015/activity/findInfo',
      method: 'POST',
      headerL: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        for (var index in res.data) {
          var s = "projects[" + index + "]"
          that.setData({
            [s]: res.data[index]
          })
        }
      }
    })
    wx.setNavigationBarTitle({
      title: '我的足迹',
    })
    console.log(options)
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