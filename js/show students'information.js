window.onload = function() {
	$.ajax({
		type: "get",
		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/"+ "1513502243526",
		async: true,
		success: function(data, state) {
			console.log(state);
			console.log(data);
			$("#studentname").text(data.Student[0].studentname);
			$("#studentnumber").text(data.Student[0].studentnumber);
		},
		error: function(data, state) {
			console.log(state);
			console.log(data);
		}
	});
}