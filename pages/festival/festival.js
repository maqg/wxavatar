//festival.js

//获取应用实例
const app = getApp()

var signList = [
  {
    "title": "承担",
    "desc": "夫君子立于世，当承天地之重也",
  },
  {
    "title": "自由",
    "desc": "一个人需要控制的事情越少，心理上就越自由，当你企图控制一件事情的时候，你同时也就被这件事情控制",
  },
  {
    "title": "勇气",
    "desc": "外表沉静，内心勇敢，一往无前，克服万难",
  },
  {
    "title": "成长",
    "desc": "前事不忘，后事之师",
  },
  {
    "title": "转运",
    "desc": "",
  },
  {
    "title": "加油",
    "desc": "",
  },
  {
    "title": "改变",
    "desc": "",
  },
  {
    "title": "开拓",
    "desc": "",
  },
  {
    "title": "学习",
    "desc": "",
  },
  {
    "title": "健康",
    "desc": "",
  },
  {
    "title": "智慧",
    "desc": "",
  },
  {
    "title": "勤奋",
    "desc": "",
  },
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
