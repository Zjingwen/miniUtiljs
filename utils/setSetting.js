import hasCheckSession from './hasCheckSession.js';
import openSetting from './openSetting.js';
import getLogin from './getLogin.js';
import getSetting from './getSetting';
import showModal from './showModal.js';

import chooseAddress from './chooseAddress.js';
import getUserInfo from './getUserInfo.js';

const SETTING = {
    'scope.userInfo': getUserInfo,
    'scope.address': chooseAddress
}

export default (strName, reLogin) => {

    function authorizeError() {
        return showModal().then(res => {
            console.log(res);
        })
    }

    return hasCheckSession().then(res => {

        let errMsg = res.split(':')[1];

        if (errMsg == 'ok') {
            return getSetting();
        } else {
            return getLogin().then(res => {
                return reLogin(res);
            });
        }

    }).then(res => {

        if (res == undefined) {
            return getSetting().then(res => {
                return SETTING[strName]();
            });
        } else {
            return SETTING[strName]();
        }
    }).then(res => {

        let errMsg = res.errMsg.split(':')[1];

        if (errMsg == 'ok') {
            return res;
        } else {
            return new Promise((resolve,reject)=>{
                reject('setSetting:no')
            })
        }
    })
}