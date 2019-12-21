// pages/ConcreteActivity/ConcreteActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    evaluation:'',
    imgUrls: ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    project: {
      url: '../image/gym.jpg',
      name: '健身馆流汗',
      time: '2019.12.12',
      location: '南京大学体育馆',
      category:'篮球'
    },
    
    members: [{
      url: '../image/basketball.png',
      id: ''
    }, {
      url: '../image/basketball.png',
      id: ''
    }, {
      url: '../image/basketball.png',
      id: ''
    }, {
      url: '../image/basketball.png',
      id: ''
    }],
    comments:[{
      author:'王二狗',
      content:'太棒了，下次一定再来'
    },
      {
        author: '王二狗',
        content: '太棒了，下次一定再来'
      },
      {
        author: '王二狗',
        content: '太棒了，下次一定再来'
      }
    ]
    
  },
  findAllMembers: function (e) {
    var eid = this.data.eid
    wx.navigateTo({
      url: '../allMembers/allmembers?eid=' + eid,
    })
  },
  bindNameChange: function (e) {
    console.log('评论发生改变')
    console.log(e.detail.value)
    this.setData({
      evaluation: e.detail.value
    })
  },
  giveComment: function () {
    var that=this
    var pid = wx.getStorageSync('pid')
    var eid = this.data.eid
    var evaluation=this.data.evaluation
    wx.request({
      url: 'http://118.178.18.181:58015/activity/insertEvaluation/' + pid + '/' + eid +'/'+evaluation,
      method: 'GET',
      success: function (res) {
        var resFlag = res.data
        if (resFlag == 1) {
          console.log("评论成功")
          wx.navigateTo({
            url: '../ConcreteActivity/ConcreteActivity?eid=' + eid,
          })
        }
        else {
          console.log("评论失败")
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarTitle({
      title: '历史活动',
    })
    that.setData({
      eid: options.eid
    })
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