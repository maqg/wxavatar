//festival.js

//获取应用实例
const app = getApp()

var questionList = [
  {
    "male": "和另一半相比，觉得自己更有吸引力？",
    "female": "和另一半相比，觉得自己更有吸引力？",
    "freind": "你是否觉得女士比男士更有吸引力？",
    "scores": [],
  },
  {
    "male": "和另一半相比，觉得自己更聪明？",
    "female": "和另一半相比，觉得自己更聪明？",
    "freind": "你是否觉得女士比男士更聪明？",
    "scores": [],
  },
  {
    "male": "和另一半相比，我的朋友更多？",
    "female": "和另一半相比，我的朋友更多？",
    "freind": "你是否觉得女士的朋友比男士的朋友更多？",
    "scores": [],
  },
  {
    "male": "你是否觉得自己足够强壮？",
    "female": "你觉得他的身体足够强壮吗？",
    "freind": "你感觉男士是否足够强壮？",
    "scores": [],
  },
  {
    "male": "你是否觉得自己足够光彩照人？",
    "female": "你觉得也足够光彩照人？",
    "freind": "你感觉女士足够光彩照人？",
    "scores": [],
  },
];

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
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
    })
  },
})
