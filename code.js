$("body").prepend('<div id="loadCaptchaHere"></div><div id="displayThongBao"></div>');var key="AMINHAKEYTEM32NYTES1234567891234",iv="7061737323313233",studentIdNumber=prompt("Vui lòng nhập mssv của bạn",0);studentIdNumber=(studentIdNumber+"").trim();var year="74",semester="75",curriculumId="697";function win_Custom_Add(e,a){e=(e+"").trim();$.ajax({type:"POST",beforeSend:function(){},url:"../Modules/regonline/ajax/LoadCaptcha.aspx/CheckCapt",data:'{captValue: "'+e+'" }',contentType:"application/json; charset=utf-8",dataType:"json",async:!0,success:function(r){if(r.d+""=="1"){console.log("Win");var t=curriculumId.indexOf(",");t>=0&&(curriculumId=curriculumId.substring(0,t));var n=EncryptString(a+","+year+","+semester+","+studentIdNumber+","+curriculumId+","+e,key,iv);ProcessAddClass(n),LoadCaptcha()}else alert("MÃ XÁC NHẬN không chính xác. Vui lòng nhập lại!")},failure:function(e){var a=$.parseJSON(e.responseText);alert("Message: "+a.Message),alert("StackTrace: "+a.StackTrace),alert("ExceptionType: "+a.ExceptionType),"failed"},complete:function(e){var a=$.parseJSON(e.responseText);a.d+""=="0"&&LoadCaptcha()}})}
