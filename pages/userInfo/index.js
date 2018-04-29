// pages/userInfo/index.js
import util from "../../utils/util.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSetting();
  },
  /*
   * 获取用户信息
   */
  getSetting: function () {

    function reLogin(res){
      return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
          resolve();
        },2000);
      })
    }
    
    function setData(res){
      this.setData({
        'userInfo': res
      })
    }

    util.setSetting('scope.userInfo',reLogin)
    .then(res => {
      //用户允许授权
      console.log(res);
      setData.call(this,res);

    }).catch(res=>{
      //不允许授权
      util.openSetting().then(res=>{

        if(res.authSetting['scope.userInfo']){
          util.setSetting('scope.userInfo').then(res=>{
            setData.call(this,res);
          })

          return ''
        };
        console.log(res);
      });
    });
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