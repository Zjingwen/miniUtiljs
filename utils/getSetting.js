import getUserInfo from './getUserInfo.js';
import openSetting from './openSetting.js';

const SETTING = {
  'scope.userInfo': getUserInfo
}


export default (strName)=>{
    
  return new Promise((resolve,reject)=>{
    wx.getSetting({
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      }
    })
  }).then(res=>{
      return SETTING[strName]().then(res=>{
        if (res.errMsg.indexOf('fail')>-1){
          return openSetting().then(res=>{
            return SETTING[strName]()
          });
        }
        return res;
      });
  });
}