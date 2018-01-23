//festival.js

//获取应用实例
const app = getApp()

var questionList = [
  {
    "male": "",
    "female": "",
    "freind": "",
    "desc": "",
  }
];

Page({
  data: {
    motto: '不疯狂，无人生',
    userInfo: {},
    hasUserInfo: false,
    imageUrl: "",
    hatList: [],
    hatListLen: 0,
    currentHat: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatarTmpUrl: "",
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    this.setData({
      hatList: pictureList,
      hatListLen: pictureList.length,
    })
  },
})
