export default ()=>{
  return new Promise((resolve,reject)=>{
    wx.login({
      timeout: 3000,
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      }
    });
  })
}