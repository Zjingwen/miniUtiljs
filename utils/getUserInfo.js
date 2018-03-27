export default () => {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success(res) {
        resolve(res);
      },
      fail(res) {
        resolve(res);
      }
    });
  });
}