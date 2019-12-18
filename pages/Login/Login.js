// pages/Login/Login.js
Page({
  data: {
    name:'q',
    studentid:'q'
  },




  formSubmit: function (e) {
    /*
    wx.reLaunch({
      url: '../index/index'
    })
    */
    var that = this
    var formData = e.detail.value;//获取表单中的所有数据
    var name=this.data.name
    var studentid=this.data.studentid
    wx.request({
      
      url: 'http://118.178.18.181:58015/person/login',
      data: {
        name,studentid
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log("返回发送成功的数据:"+res.data)
        if(res.data.length>0)
        wx.reLaunch({
          url: '../index/index'
        })
      },
      fail: function (res) {
        wx.showModal({
          title: '提示',
          content: res.data,
        })
        
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  phoneInput:function(e){
    console.log('用户名输入')
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },
  passwordInput:function(e){
    console.log('密码输入')
    console.log(e.detail.value)
    this.setData({
      studentid: e.detail.value
    })
  },
  /**
   * 页面的初始数据
   */
  

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