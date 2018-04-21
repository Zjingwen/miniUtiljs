/**
 * errMsg	String	调用结果
 * userName	String	收货人姓名
 * postalCode	String	邮编
 * provinceName	String	国标收货地址第一级地址
 * cityName	String	国标收货地址第二级地址
 * cityName	String	国标收货地址第二级地址
 * detailInfo	String	详细收货地址信息
 * nationalCode	String	收货地址国家码
 * telNumber	String	收货人手机号码
 */
import openSetting from "./openSetting.js";

export default () => {
    function chooseAddress(){
        return new Promise((resolve,reject)=>{
            wx.chooseAddress({
                success(res){
                    resolve(res);
                },
                fail(res){
                    resolve(res);
                }
            })
        })
    }

    return chooseAddress().then(res=>{
        if(res.errMsg.indexOf('fail') >-1 ){
            return openSetting().then(res=>{
                return chooseAddress();
            })
        }else{
            return res;
        }
    })
}