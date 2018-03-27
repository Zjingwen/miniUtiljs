export default ()=>{
  return new Promise((resolve,rejece)=>{
    wx.openSetting({
      success: (res) => {
        resolve(res);
      },
      fail(res){
        resolve(res);
      }
    });
  })
  
}