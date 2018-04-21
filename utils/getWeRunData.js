import openSetting from './openSetting';
export default ()=>{

    function getWeRunData(){
        return new Promise((resolve,reject)=>{
            wx.getWeRunData({
                success(res){
                    resolve(res);
                },
                fail(res){
                    resolve(res);
                }
            })
        })
    }

    return getWeRunData().then(res=>{
        if(res.errMsg.indexOf('fail')>-1){
            return openSetting().then(res=>{
                return getWeRunData();
            })
        }else{
            return res;
        }
    })
}