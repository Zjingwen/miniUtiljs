export default () => {
    return new Promise((resolve, reject) => {
        wx.showModal({
            title: '123123',//String	是	提示的标题
            content: '123123',//String	是	提示的内容
            showCancel: true,//Boolean	否	是否显示取消按钮，默认为 true
            cancelText: '取消',//String	否	取消按钮的文字，默认为"取消"，最多 4 个字符
            cancelColor: '#000000',//HexColor	否	取消按钮的文字颜色，默认为"#000000"
            confirmText: '确定',//String	否	确定按钮的文字，默认为"确定"，最多 4 个字符
            confirmColor: '#3CC51F',//HexColor	否	确定按钮的文字颜色，默认为"#3CC51F"
            success(res) {
                resolve(res);
            },
            fail(res) {
                resolve(res);
            },
            complete() {

            }
        })
    })
}