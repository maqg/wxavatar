//index.js
//获取应用实例
const app = getApp()

var pictureList = [
  "/pages/images/1.png",
  "/pages/images/2.png",
  "/pages/images/3.png",
  "/pages/images/4.png"
];

Page({
  data: {
    motto: '不疯狂，无人生',
    userInfo: {},
    hasUserInfo: false,
    welcome: "欢迎使用北京地铁票价助手",
    imageUrl: "",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatarTmpUrl: "",
  },

  combineImage: function () {

    var avatarUrl = this.data.avatarTmpUrl;
    var ctx = wx.createCanvasContext("canvas");
    var _this = this;

    ctx.drawImage(avatarUrl, 0, 0, 150, 150)
    ctx.drawImage("/pages/images/right1.png", 100, -25, 65, 65)

    //ctx.drawImage(pictureList[0], 0, 0)
    //ctx.drawImage(pictureList[1], 0, 0)
    //ctx.drawImage(pictureList[2], 0, 0)
    //ctx.drawImage(pictureList[3], 0, 0)

    ctx.setTextAlign('center')
    ctx.setFontSize(15)

    ctx.draw()

    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      canvasId: 'canvas',
      success: function (res) {
        console.log(res.tempFilePath)
        _this.setData({
          imageUrl: res.tempFilePath,
        })
      },
    })
  },

  //事件处理函数
  combinePictures: function () {

    var avatarUrl = this.data.userInfo.avatarUrl
    var _this = this;

    wx.downloadFile({
      url: _this.data.userInfo.avatarUrl,
      success: function (res) {

        /*
        setTimeout(function() {
          wx.hideLoading();
          _this.combineImage()
        }, 2000)
        */

        wx.saveFile({
          tempFilePath: res.tempFilePath,
          //tempFilePath: "/pages/images/aaaa.png",
          success: function (res) {
            var savedFilePath = res.savedFilePath
            console.log("save file OK: " + savedFilePath)
            _this.setData({
              avatarTmpUrl: savedFilePath,
            })
            _this.combineImage()
          }
        })
      },
    })
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
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
