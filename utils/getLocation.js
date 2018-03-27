import openSetting from "./openSetting.js";

export default (type, altitude)=>{
  const data = {
    type: type || 'wgs84',
    altitude: altitude || 'false'
  }
  
  function getLocation(){
    return new Promise((reslove, reject) => {
      wx.getLocation({
        type: data.type,
        altitude: data.altitude,
        success(res) {
          reslove(res);
        },
        fail(res) {
          reslove(res);
        }
      });
    })
  }

  return getLocation().then(res=>{
    if(res.errMsg.indexOf('fail') > -1){
      return openSetting().then(res=>{
        return getLocation();
      });
    }else{
      return res;
    }
  });
}