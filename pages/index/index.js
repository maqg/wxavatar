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
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  combinePictures: function () {
    var cv = wx.createCanvasContext("canvas");
    var len = pictureList.length;

    cv.setFillStyle('red')
    cv.fillRect(10, 10, 1500, 750)
    cv.draw()

    function draw(n) {
      if (n < len) {
        var img = new Image;
        img.crossOrigin = 'Anonymous'; //解决跨域  
        img.src = data[n];
        console.log(data[n]);
        img.onload = function () {
          cv.drawImage(this, 0, 0, 640, 386);
          draw(n + 1);
        }
      } else {
        base64.push(cv.toDataURL("image/png"));
        document.getElementById("imgBox").innerHTML = '<image src="' + base64[0] + '">';
      }
    }
    //draw(0)

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
