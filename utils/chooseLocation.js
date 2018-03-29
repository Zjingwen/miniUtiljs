import openSetting from "./openSetting.js";

export default () => {
    
    function chooseLocation(){
        return new Promise((resolve,reject)=>{
            wx.chooseLocation({
                success(res){
                    resolve(res);
                },
                fail(res){
                    resolve(res);
                }
            })
        })
    }
    
    return chooseLocation().then(res=>{
        if(res.errMsg.indexOf('fail') > -1){
            return openSetting().then(res=>{
                return chooseLocation();
            });
        }else{
            return res;
        }
    });
};