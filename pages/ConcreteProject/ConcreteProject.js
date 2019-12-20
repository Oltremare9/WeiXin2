// pages/ConcreteProject1/ConcreteProject1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eid: 0,
    imgUrls: ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    project: [],
    url:'../gym.jpg',
    mention: {
      info: "请大家自备换洗衣服、饮料等。适当锻炼、切勿盲目锻炼。安全第一！注意爱惜器材！",
      person: "李蕊"
    },
    members: [{
      url: '../image/pic_1.png',
      id: ''
    }, {
      url: '../image/pic_2.png',
      id: ''
    }, {
      url: '../image/pic_3.png',
      id: ''
    }, {
      url: '../image/pic_4.png',
      id: ''
    }, {
      url: '../image/add2.png'
    }]
  },

  findAllMembers:function(e){
    var eid=this.data.eid
    wx.navigateTo({
      url: '../allMembers/allmembers?eid='+eid,
    })
  },

  join: function() {
    var pid = wx.getStorageSync('pid')
    var eid = this.data.eid
    wx.request({
      url: 'http://118.178.18.181:58015/activity/insertActivity/' + pid + '/' + eid,
      method: 'GET',
      success: function(res) {
        var resFlag=res.data
        if(resFlag==1){
          console.log("加入成功")
        }
        else{
          console.log("已经加入")
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.setNavigationBarTitle({
      title: '活动详情',
    })
    that.setData({
      eid: options.eid
    })
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
    var eid = this.data.eid
    var that = this
    console.log(eid)
    wx.request({
      url: 'http://118.178.18.181:58015/activity/findInfoByEid/' + eid,
      method: "GET",
      success: function (res) {
        console.log(res.data)
        that.setData({
          project: res.data
        })
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