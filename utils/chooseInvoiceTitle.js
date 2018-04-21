/**
 * type	String	抬头类型（0：单位，1：个人）
 * title	String	抬头名称
 * taxNumber	String	抬头税号
 * companyAddress	String	单位地址
 * telephone	String	手机号码
 * bankName	String	银行名称
 * bankAccount	String	银行账号
 * errMsg	String	接口调用结果
 */
import openSetting from './openSetting';
export default () => {
    function chooseInvoiceTitle(){
        return new Promise((resolve,reject)=>{
            wx.chooseInvoiceTitle({
                success(res){
                    resolve(res);
                },
                fail(res){
                    resolve(res);
                }
            })
        })
    }

    return chooseInvoiceTitle().then(res=>{
        if(res.errMsg.indexOf('fail')>-1){
            return openSetting().then(res=>{
                return chooseInvoiceTitle();
            })
        }else{
            return res;
        }
    })
}