//获取Message Trigger userID 对应的ID
function getMessageTrigger(uid) {
	var id = "";
	$.ajax({
		type: "get",
		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Messagetrigger/?Messagetrigger.userid=" + uid,
		async: false,
		success: function(data, state) {
			console.log("获取MessageTrigger:");
			console.log(data);
			id = data.Messagetrigger[0].id;
		},
		error: function(data, state) {
			console.log("获取MessageTrigger id 失败");
		}
	});
	return id;
}

//创建用户list,目前只写了Student的部分
function creatContactList() {
	studentURL = "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/";
	teacherURL = "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Teacher/";
	$.ajax({
		type: "get",
		url: studentURL,
		async: false,
		success: function(studentArrayObj, state) {
			console.log("查询Student" + state);
			console.log(studentArrayObj);
			studentArray = studentArrayObj.Student;
		},
		error: function(data, state) {
			console.log("查询Student失败" + state);
		}
	});

	$.ajax({
		type: "get",
		url: teacherURL,
		async: false,
		success: function(teacherArrayObj, state) {
			console.log("查询Teacher" + state);
			console.log(teacherArrayObj);
			teacherArray = teacherArrayObj.Teacher;
		},
		error: function(data, state) {
			console.log("查询Student失败" + state);
		}
	});

	for(var i = 0; i < studentArray.length; i++) {
		if(studentArray[i].id == "" + userID) {
			continue;
		}
		var studentA = $("<a href=''></a>").text(studentArray[i].studentname + "\n" + studentArray[i].id);
		var studentB = $("<div><div>").attr("id", "Li" + studentArray[i].id);
		studentB.text("0");
		var studentLi = $("<li></li>").attr("id", studentArray[i].id);
		studentLi.append(studentA, studentB);
		$("#contactsUl").append(studentLi);

		//点击用户列表
		$("#" + studentArray[i].id).click(function() {
			window.event.returnValue = false;
			console.log("创建会话：" + this.id);
			if(curYID != "") {
				console.log("隐藏会话："+curYID);
				msgPlaneMap["Tr" + curYID].hide(); //隐藏旧会话
			}

			curYID = this.id;
			curYIDMsgTriggerID = getMessageTrigger(curYID);
			$("#diaglogUser").text(curYID);
			//消息数量设置为0
			$("#Li" + this.id).text("0");
			//还未创建对话
			if(!(("Tr" + this.id) in msgPlaneMap)) {
				var divTree = $("<div></div>").attr("id", "Tr" + this.id);
				msgPlaneMap["Tr" + this.id] = divTree;
				$("#allMessagePlane").append(divTree);
			}

			msgPlaneMap["Tr" + this.id].show(); //展现当前会话
		});
	}
}

//创建自己消息的ITem
function createIMsgItem(userID, currentTime1, Icontent) {

	var spanI = $("<span class='glyphicon glyphicon-user i-glyphicon'></span>");
	var divIGlyphicon = $("<div class='col-sm-1 i-img'></div>");
	divIGlyphicon.append(spanI);

	var divIContent = $("<div class='col-sm-10'></div>").text("信息内容:" + Icontent);
	var divIRowContent = $("<div class='row'></div>");
	divIRowContent.append(divIContent);

	var divIT = $("<div class='col-sm-5'></div>").text("时间:" + currentTime1);
	var divIP = $("<div class='col-sm-5'></div>").text("来自:" + userID);
	var divIRowPT = $("<div class='row'></div>");
	divIRowPT.append(divIT, divIP);

	var divImsg = $("<div class='col-sm-8 col-sm-offset-3 i-msg'></div>");
	divImsg.append(divIRowPT, $("<hr></hr>"), divIRowContent);

	var divIRow = $("<div class='row'></div>");
	divIRow.append(divImsg, divIGlyphicon);

	return divIRow;

	//	var divITree = $("<div></div>").attr("id", userID);
	//	divITree.append(divIRow);
	//	
	//	$("#allMessagePlane").append(divITree);
}

//创建对方消息的Item
function createYMsgItem(userID, currentTime1, Icontent) {

	//收到对方信息
	var currentTime = getFormatDate(); //获取当前时间
	var spanUserY = $("<span class='glyphicon glyphicon-user you-glyphicon'></span>");
	var divYouImg = $("<div class='col-sm-1 you-img'></div>");
	divYouImg.append(spanUserY);

	var divYMsgContent = $("<div class='col-sm-10'></div>").text("信息内容:" + Icontent);
	var divYouMsgRow2 = $("<div class='row'></div>");
	divYouMsgRow2.append(divYMsgContent);

	var divYPerson = $("<div class='col-sm-5'></div>").text("来自:" + userID);
	var divYTime = $("<div class='col-sm-5'></div>").text("时间:" + currentTime1);
	var divYouMsgRow1 = $("<div class='row'></div>");
	divYouMsgRow1.append(divYPerson, divYTime);

	var divYouMsg = $("<div class='col-sm-8 you-msg'></div>")
	divYouMsg.append(divYouMsgRow1, $("<hr></hr>"), divYouMsgRow2);

	var divYRow = $("<div class='row'></div>");
	divYRow.append(divYouImg, divYouMsg);

	return divYRow;

	//	var divYTree = $("<div></div>").attr("id", userID);
	//	divYTree.append(divIRow);
	//	
	//	$("#allMessagePlane").append(divITree);
}
//获取当前时间
function getFormatDate() {
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
	var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
	var hour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
	var minute = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
	//var second = nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
	return year + "-" + month + "-" + date + "T" + hour + ":" + minute;
}

//监听有无新的消息
function listenToMessageTrigger() {
	source.onmessage = function(event) {

		var eventJsonObj = JSON.parse(event.data);
		console.log("监听到消息：" + eventJsonObj.state+"T:"+getFormatDate());
		//有新的消息 
		if("1" == eventJsonObj.state) {
			$.ajax({
				type: "get",
				url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Message/?Message.touserid=" + userID,
				async: false,
				success: function(data, state) {
					if(typeof(data) != "{}") {
						//遍历所有消息
						for(var i = 0; i < data.Message.length; i++) {
							if(data.Message[i].state == "1") { //找出未读消息
								//还未创建对话
								if(!(("Tr" + data.Message[i].fromuserid) in msgPlaneMap)) {
									var divTree = $("<div style='display:none'></div>").attr("id", "Tr" + data.Message[i].fromuserid);
									msgPlaneMap["Tr" + data.Message[i].fromuserid] = divTree;
									$("#allMessagePlane").append(divTree);
								}
								var messageItem = createYMsgItem(data.Message[i].fromuserid, data.Message[i].msgtime, data.Message[i].msgcontent);
								msgPlaneMap["Tr" + data.Message[i].fromuserid].append(messageItem);
								if(msgPlaneMap["Tr" + data.Message[i].fromuserid].is(":hidden")){
									$("#Li" + data.Message[i].fromuserid).text("1");
								}

								//更改消息为已读
								/******发送信息******/
								var msgIObjReaded = {
									fromuserid: data.Message[i].fromuserid,
									touserid: data.Message[i].touserid,
									msgcontent: data.Message[i].msgcontent,
									state: "0",
									msgtime: data.Message[i].msgtime,
									type: "1"
								};
								var jsonStrmsgIObjReaded = JSON.stringify(msgIObjReaded);
								console.log(jsonStrmsgIObjReaded);
								$.ajax({
									type: "put",
									url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Message/" + data.Message[i].id,
									contentType: "application/json",
									data: jsonStrmsgIObjReaded,
									async: false,
									success: function(data, state) {
										console.log("已读设置 success");
									},
									error: function(data, state) {
										console.log("已读设置 fialier!");
									}
								});

//								//改变对方监听的数据
//								var msgTriggerObj = {
//									userid: parseInt(userID),
//									state: "0"
//								};
//								var msgJsonStrTr = JSON.stringify(msgTriggerObj);
//								console.log("改变触发器：" + msgJsonStrTr + ":" + 1);
//								$.ajax({
//									type: "put",
//									url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Messagetrigger/" + userIDMsgTriggerID,
//									contentType: "application/json",
//									data: msgJsonStrTr,
//									async: true,
//									success: function(data, state) {
//										console.log("trigger success");
//									},
//									error: function(data, state) {
//										console.log("trigger fialier!");
//									}
//								});

							}

						}
					}
				},
				error: function(data, state) {

				}
			});
		} else {
			console.log("trigger 没用新信息");
		}
		/**if end***/
	}
}