export default (str)=>{
  const LEFT = 'scope.';
  const settingName = LEFT+str
  
  return new Promise((resolve,reject)=>{
    wx.getSetting({
      success(res) {
        console.group('authSetting');
        console.log(res.authSetting);
        console.log(res.authSetting.hasOwnProperty(settingName));
        console.log(res.authSetting[settingName]);
        console.groupEnd();

        if (!res.authSetting.hasOwnProperty(settingName) && !res.authSetting[settingName]) {
          resolve(settingName);
        } else {
          resolve(res.errMsg);
        }
      },
      fail(res) {
        reject(res);
      }
    })
  }).then(res=>{
    console.log(res);
    return getUserInfo(res)
  }).then(res=>{
    return res;
  })

  function getUserInfo(autoName){
    return new Promise((resolve,reject)=>{
      wx.getUserInfo({
        success(res) {
          console.log(res)
          resolve(res);
        },
        fail(res) {
          resolve(res);
        }
      });
    });
  }

}