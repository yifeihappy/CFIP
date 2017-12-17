function getByStudentNumber(studentNumber) {
	var student;
	$.ajax({
		type: "get",
		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
		async: false,
		success: function(data, state) {
			console.log(state);
			console.log(data);
			console.log(data.Student[0].studentname);
			student = data.Student[0];
			//return data;
		}
	});
	return student;
}

function getByTeacherNumber(teacherNumber) {
	var teacher;
	$.ajax({
		type: "get",
		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
		async: true,
		success: function(data, state) {
			console.log(state);
			console.log(data);
			teacher = data.Teacher[0];
		}
	});
	return teacher;
}

function getByAdminNumber(adminNumber) {
	var admin;
	$.ajax({
		type: "get",
		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
		async: true,
		success: function(data, state) {
			console.log(state);
			console.log(data);
			admin = data.Admin[0];
			return data;
		}
	});
	return admin;
}