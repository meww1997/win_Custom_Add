/**
* Add class
* Year: 74, Semeter: 75
* K25: 697
* K26: ???
**/


$("body").prepend('<div id="loadCaptchaHere"></div><div id="displayThongBao"></div>');var studentIdNumber=prompt("Vui lòng nhập mssv của bạn",0);function win_Custom_Add(e,a){e=(e+"").trim();$.ajax({type:"POST",beforeSend:function(){},url:"../Modules/regonline/ajax/LoadCaptcha.aspx/CheckCapt",data:'{captValue: "'+e+'" }',contentType:"application/json; charset=utf-8",dataType:"json",async:!0,success:function(t){if(t.d+""=="1"){console.log("Win");var n=curriculumId.indexOf(",");n>=0&&(curriculumId=curriculumId.substring(0,n));var r=EncryptString(a+",74,75,"+studentIdNumber+",697,"+e,"AMINHAKEYTEM32NYTES1234567891234","7061737323313233");ProcessAddClass(r),LoadCaptcha()}else alert("MÃ XÁC NHẬN không chính xác. Vui lòng nhập lại!")},failure:function(e){var a=$.parseJSON(e.responseText);alert("Message: "+a.Message),alert("StackTrace: "+a.StackTrace),alert("ExceptionType: "+a.ExceptionType),"failed"},complete:function(e){var a=$.parseJSON(e.responseText);a.d+""=="0"&&LoadCaptcha()}})}studentIdNumber=(studentIdNumber+"").trim();


/* 
Note: Only K25 DTU (Các khóa khác muốn custom code vui lòng liên hệ với mình
Facebook cá nhân: facebook.com/windev.winstudio
Xem hướng dẫn chi tiết tại Youtube: 
*/
