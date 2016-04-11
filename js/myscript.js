$(function() {

if ($("#loginform").length > 0) {
  chrome.storage.local.get("account", function(val){
      $("#custid").val(val.account);
  });
  chrome.storage.local.get("ac_password", function(val){
    $("#password").val(val.ac_password);
  });
  $("#captcha").focus();
}


if ($("#myform").length > 0) {
  //var a;
  (function() {
    chrome.storage.local.get("buy_money", function(val){
      $(".transition").val(val.buy_money);
      // var a = val.buy_money;
  });
  }());
  //console.log(a);
  //$(".transition").val(a);
  $("input[name=xieyi]").attr("checked", true);
  setTimeout(function(){
    $("#dosubmit").click();
  }, 1);
}

if ($("#orderForm").length > 0) {
  
  chrome.storage.local.get("trans_password", function(val){
      $("#tradePWD").val(val.trans_password);
      //return true;
  });
  $("#balancepay").attr("checked", true);
  // $("#tradePWD").val('234234');
  
  setTimeout(function(){
    $("#nextbutton").click();
  }, 1);
}
});
