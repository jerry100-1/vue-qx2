// config = {
//   hosts : process.env.NODE_ENV,
//   appid :  this.appid,
//   channel : this.channel,
//   deviceid : this.deviceid,
//   appkey : this.appkey,
//   version : this.apiversion,
//   appversion : this.appversion,
//   Wx_appid : process.env.WXAPPID
// };


config = {
  hosts : process.env.NODE_ENV,
  appid :  window.localStorage.getItem("appid"),
  channel : window.localStorage.getItem("channel"),
  deviceid : window.localStorage.getItem("deviceid"),
  appkey : window.localStorage.getItem("appKey"),
  version : window.localStorage.getItem("apiVersion"),
  appType : window.localStorage.getItem("appType"),
  appversion : window.localStorage.getItem("appVersion"),
  Wx_appid : process.env.WXAPPID
};


module.exports = config
