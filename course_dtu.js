//Check slot of class

var classCode=prompt("Nhập tên lớp bạn muốn check",0),courseid=$(location).attr("search").substr(34,4),check=setInterval(function(){$.ajax({url:"http://courses.duytan.edu.vn/Modules/academicprogram/CourseClassResult.aspx?courseid="+courseid+"&semesterid=75&timespan=75&t="+dd.getTime(),success:function(s){$("#ResultCourseClass").html(s)}}),$(".tb-calendar .lop:contains("+classCode+")").addClass("thisCheck"),$(".tb-calendar .thisCheck td:contains(Hết chỗ)").addClass("countCheck"),$(".lop.thisCheck").css("background-color","yellow"),0==$(".countCheck div").length?($(".thisCheck").css("background-color","red"),alert(`${classCode} Đã có chỗ mau đăng ký`),clearInterval(check)):console.log(`${classCode} hết chỗ`)},1e3);


/*
1. Truy cập http://courses.duytan.edu.vn/Sites/Home_ChuongTrinhDaoTao.aspx?p=home_coursesearch
2. Tìm môn bạn cần check -> bấm vào môn đó
3. F12 or Chuột phải -> inspect
4. Qua tab console dán đoạn code và nhập tên lớp (VD: POS 351 C)
(Nên coppy sẵn mã môn đó và dán bên đăng ký sẵn, khi hiện thông báo chỉ cần đăng ký bên trang đăng ký)
5. Đợi chờ khi có slot sẽ tự thông báo 

Note: vì request nhiều nên mỗi môn khi check xong nên tắt tab trình duyệt đó và mở tab mới.
*/
