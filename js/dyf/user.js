var userID = "";
$(document).ready(function() {
	var urlParam = window.location.href;
	var urlParamArray = urlParam.split("userID");
	if(urlParamArray.length != 1) {
		console.log(urlParamArray[1]);
		userID = urlParamArray[1].substr(1);
		console.log(userID)

	} else {
		console.log("User has not login in!")
	}
	if("" == userID) {
		console.log("userID==null");
		$("#userCenterLI").hide();
		$("#publishLI").hide();
		$("#signinLI").show();
		$("#signupLI").show();
	} else {
		console.log("userID=" + userID);
		$("#signinLI").hide();
		$("#signupLI").hide();
		$("#userCenterLI").show();
		$("#publishLI").show();
	}

});

//function getByStudentNumber(studentNumber) {
//	var student;
//	$.ajax({
//		type: "get",
//		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
//		async: false,
//		success: function(data, state) {
//			console.log(state);
//			console.log(data);
//			console.log(data.Student[0].studentname);
//			student = data.Student[0];
//			//return data;
//		}
//	});
//	return student;
//}
//
//function getByTeacherNumber(teacherNumber) {
//	var teacher;
//	$.ajax({
//		type: "get",
//		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
//		async: true,
//		success: function(data, state) {
//			console.log(state);
//			console.log(data);
//			teacher = data.Teacher[0];
//		}
//	});
//	return teacher;
//}
//
//function getByAdminNumber(adminNumber) {
//	var admin;
//	$.ajax({
//		type: "get",
//		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
//		async: true,
//		success: function(data, state) {
//			console.log(state);
//			console.log(data);
//			admin = data.Admin[0];
//			return data;
//		}
//	});
//	return admin;
//}