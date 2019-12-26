// pages/issue/issue.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectShow:false,
      number:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      type:['跑步','健身','篮球','足球','羽毛球','乒乓球','网球','游泳','爬山','逛街','看流星雨','其他'],
      long:['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h'],
      index1:0,
      index2:0,
      index3:0,
      date:'2019-12-13',
      time:'05:00',
      name:'',
      location:''     
  },

  bindNumChange:function(e){
    console.log('人数选择改变')
    console.log(e.detail.value)
    this.setData({
      index1:e.detail.value
    })
  },

  bindTypeChange: function (e) {
    console.log('活动类型选择改变')
    console.log(this.data.type[e.detail.value])
    this.setData({
      index2: this.data.type[e.detail.value]
    })
    
  },

  bindNameChange:function(e){
    console.log('活动名发生改变')
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },

  bindPlaceChange:function(e){
    console.log('活动地点发生改变')
    console.log(e.detail.value)
    this.setData({
      location: e.detail.value
    })
  },

  bindDateChange:function(e){
    console.log('日期发生改变')
    console.log(e.detail.value)
    this.setData({
      date:e.detail.value
    })
  },

  bindTimeChange: function (e) {
    console.log('时间发生改变')
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  bindLongChange: function (e) {
    console.log('时长发生改变')
    console.log(e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },

  // 向服务器提交表单数据
  formSubmit: function (e) {
    
    var that=this
    var organizer = wx.getStorageSync('name')
    var start_time=this.data.date
    var type = this.data.index2
    var size = this.data.index1
    var name=this.data.name
    var location=this.data.location
    var remark = this.data.time + ',活动时长' + this.data.index3+'小时'
    console.log(name, location, start_time, type, size, remark, organizer)
    wx.request({
      url: 'http://118.178.18.181:58015/event/insertEvent',
      data: {
        name, location,start_time,type,size,remark,organizer
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(res) {
        console.log("返回发送成功的数据:" + res.data) 
        wx.reLaunch({
          url: '../index/index'
        })
      },
      fail: function(res) {
        console.log('error')
      },
      complete: function(res) { 
        console.log('complete')
      },
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