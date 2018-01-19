//festival.js

//获取应用实例
const app = getApp()

var signList = [
  {
    "title": "承担",
    "desc": "君子立于世，当承天地之重也。",
  },
  {
    "title": "自由",
    "desc": "一个人需要控制的事情越少，心理上就越自由，当你企图控制一件事情的时候，你同时也就被这件事情控制",
  },
  {
    "title": "勇气",
    "desc": "外表沉静，内心勇敢，一往无前，克服万难。",
  },
  {
    "title": "成长",
    "desc": "前事不忘，后事之师；不用吃亏，也能成长。",
  },
  {
    "title": "转运",
    "desc": "天地开辟，阴阳转运；时至戊戌，大运将行",
  },
  {
    "title": "加油",
    "desc": "抬起头看看前方的路，那是自己的渴望吗？如果不是，到了该加油的时候。",
  },
  {
    "title": "改变",
    "desc": "世间万物，唯变不变，与其被动受困，不若主动求变。",
  },
  {
    "title": "开拓",
    "desc": "每一条未曾走过的路，每一件未曾经历的事，对自己而言都是开拓。",
  },
  {
    "title": "学习",
    "desc": "学习，利用一切时间学习，直到永远。",
  },
  {
    "title": "自信",
    "desc": "如何能一直保持自信呢？我从来没有考虑过这个问题。",
  },
  {
    "title": "运动",
    "desc": "如果无事可做，去运动；如果事情太多，去运动；否则，去运动。",
  },
  {
    "title": "智慧",
    "desc": "所有的智慧都是让人更好地生活，应该合理使用。",
  },
  {
    "title": "奋斗",
    "desc": "奋斗出来的不仅仅是幸福，还有一览众山小般对生活的理解。",
  },
  {
    "title": "初心",
    "desc": "看遍世间险恶，历尽沧桑诱惑，仍坚持初心未改。",
  },
  {
    "title": "幸福",
    "desc": "幸福都是奋斗出来的，这当然也包括你爸爸的奋斗。",
  },
  {
    "title": "行者",
    "desc": "人生是旅途，每个人都是行者。",
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
