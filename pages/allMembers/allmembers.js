// pages/allMembers/allmembers.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    members: [],
    picUrls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var eid = options.eid
    wx.request({
      url: 'http://118.178.18.181:58015/activity/findInfoByEid/' + eid,
      method: "GET",
      success: function(res) {
        console.log(res.data)
        for (index in res.data) {
          var s = "members[" + index + "]"
          that.setData({
            [s]: res.data[index]
          })
        }
      }
    })
    console.log(that.data.members)
    // console.log(that.data.members)
    // var length = that.data.members.length
    // console.log(length)
    // var arr = [1, 2, 3, 4, 5]
    // var outUrls = []
    // while (outUrls.length < length) {
    //   var temp = (Math.random() * arr.length);
    //   temp = Math.floor(temp);
    //   outUrls.push("../image/pic_" + arr[temp]+".png")
    // }
    // console.log(outUrls)
    // that.setData({
    //   picUrls: outUrls
    // })
    // console.log(that.data.picUrls)
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