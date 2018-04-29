export default ()=>{

  return new Promise((resolve,reject)=>{
 
    wx.getSetting({
      success(res) {

        resolve(res);
      },
      fail(res) {
        
        resolve(res);
      }
    });

  });

}