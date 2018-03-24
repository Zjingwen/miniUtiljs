import hasCheckSession from './hasCheckSession.js';

export default () => {

  function getLogin() {
    return new Promise((resolve, reject) => {
      
      wx.login({
        timeout: 3000,
        success(res) {
          if (res.code) {
            resolve(res);
          } else {
            resolve(res);
          }
        },
        fail(res) {
          reject(res);
        }
      })
    });

  };
  
  return hasCheckSession().then(res=>{
    if (res.split(':')[1] == 'ok'){
      return 'ok';
    }else{
      return getLogin().then(res => {
        return res;
      })
    }
  });
};