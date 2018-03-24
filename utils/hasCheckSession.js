export default ()=>{

  return new Promise((resolve,reject)=>{

    wx.checkSession({
      success(res) {
        resolve('checkSession:ok');
      },
      fail(res) {
        resolve('checkSession:no');
      }
    });

  })
};
