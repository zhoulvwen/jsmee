// function my_clock(el){
//     var today=new Date();
//     var h=today.getHours();
//     var m=today.getMinutes();
//     var s=today.getSeconds();
//     m=m>=10?m:('0'+m);
//     s=s>=10?s:('0'+s);
//     el.innerHTML = h+":"+m+":"+s;
//     setTimeout(function(){my_clock(el)}, 1000);
// }

//var clock_div = document.getElementById('clock_div');
//my_clock(clock_div);
chrome.storage.local.get("account", function(val){
  $('#account').val(val.account || '张金军');
});
chrome.storage.local.get("ac_password", function(val){
  $('#ac_password').val(val.ac_password || 'zhjj19740125');
});
chrome.storage.local.get("buy_money", function(val){
  $('#buy_money').val(val.buy_money || '10000');
});
chrome.storage.local.get("trans_password", function(val){
  $('#trans_password').val(val.trans_password || '234234');
});
// var account = localStorage.account || '张金军';
// var ac_password = localStorage.ac_password || 'zhjj19740125';
// var buy_money = localStorage.buy_money || '100000';
// var trans_password = localStorage.trans_password || '123456';
// $('#account').val(account);
// $('#ac_password').val(ac_password);
// $('#buy_money').val(buy_money);
// $('#trans_password').val(trans_password);

$('#save').on('click', function(){
	chrome.storage.local.set({"account":$('#account').val()});
	chrome.storage.local.set({"ac_password":$('#ac_password').val()});
	chrome.storage.local.set({"buy_money":$('#buy_money').val()});
	chrome.storage.local.set({"trans_password":$('#trans_password').val()});
    // localStorage.account = $('#account').val();
    // localStorage.ac_password = $('#ac_password').val();
    // localStorage.buy_money = $('#buy_money').val();
    // localStorage.trans_password = $('#trans_password').val();
    alert('保存成功。');
})

