export default ()=>{

  return new Promise((resolve,reject)=>{

    wx.checkSession({
      success(res) {
        resolve(res.errMsg);
      },
      fail(res) {
        resolve(res.errMsg);
      }
    });

  });

};