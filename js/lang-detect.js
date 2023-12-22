/*
 Detects the browser language
 */
var userLang = navigator.language || navigator.userLanguage || 'zh';
userLang = userLang.toLowerCase();
console.log(userLang);
if(userLang == "zh-cn" || userLang == "zh") {
    //console.log(userLang);
}
else {
    //console.log(userLang);
    // 如果url中有lang参数，就不再跳转
    var url = window.location.href;
    if(url.indexOf("?lang=") != -1) {
        //console.log("url中有lang参数");
    }
    else {
        //console.log("url中没有lang参数");
        redirect(userLang);
    }
}

/*
 redirects to the desired URLs
 Only the first two letters of the ISO country code are used
 */
function redirect(actuallang){
  var url ='/';
  switch(actuallang){
    case 'ja':
      url ='http://kakeibo.swalloworkstudio.com';
      break;
    case 'zh-tw':
      url ='http://tiantianjizhang-tw.swalloworkstudio.com';
      break;
    case 'zh-hk':
        url ='http://tiantianjizhang-tw.swalloworkstudio.com';
        break;
    case 'zh-cn':
            url ='http://tiantianjizhang.swalloworkstudio.com';
            break;     
    default:
      url='http://tiantianjizhang-tw.swalloworkstudio.com';
      break;
  }
  window.location.replace(url);
}