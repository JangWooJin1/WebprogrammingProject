function 검색(){

	메뉴숨기기();

	var obj20=document.getElementById("메뉴바");
	obj20.style.display="none";

	var form=prompt("검색어를 입력하세요","");
	

	if(form == "선")
	{ var obj1=document.getElementsByName("선")[0];
			    obj1.style.display="inline-block";
	}
	
	else if(form == "리스트")
	{ var obj3=document.getElementsByName("리스트")[0];
			    obj3.style.display="inline-block";

		var obj4=document.getElementsByName("리스트")[1];
			    obj4.style.display="inline-block";

		var obj5=document.getElementsByName("리스트")[2];
			    obj5.style.display="inline-block";

		var obj6=document.getElementsByName("리스트")[3];
			    obj6.style.display="inline-block";

		var obj21=document.getElementsByName("리스트")[4];
			    obj21.style.display="inline-block";

	}

	else if(form == "제목")
	{
		var obj7=document.getElementsByName("제목")[0];
			    obj7.style.display="inline-block";
	}

	else if(form == "블럭화")
	{
		var obj8=document.getElementsByName("블럭화")[0];
			    obj8.style.display="inline-block";

		var obj9=document.getElementsByName("블럭화")[1];
			    obj9.style.display="inline-block";
		
		var obj10=document.getElementsByName("블럭화")[2];
			    obj10.style.display="inline-block";	


	}

	else if(form == "한줄띄우기")
	{
		var obj11=document.getElementsByName("한줄띄우기")[0];
			    obj11.style.display="inline-block";
	}

	else if(form == "인라인")
	{
		var obj12=document.getElementsByName("인라인")[0];
			    obj12.style.display="inline-block";

		var obj13=document.getElementsByName("인라인")[1];
			    obj13.style.display="inline-block";
	}

	else if(form == "표")
	{
		var obj14=document.getElementsByName("표")[0];
			    obj14.style.display="inline-block";

		var obj37=document.getElementsByName("표")[1];
			    obj37.style.display="inline-block";
	}

	else if(form == "비디오")
	{
		var obj15=document.getElementsByName("비디오")[0];
			    obj15.style.display="inline-block";
	}

	else if(form == "오디오")
	{
		var obj16=document.getElementsByName("오디오")[0];
			    obj16.style.display="inline-block";
	}

	else if(form == "시맨틱태그")
	{
		var obj17=document.getElementsByName("시맨틱태그")[0];
			    obj17.style.display="inline-block";
	}

	else if(form == "요약")
	{
		var obj18=document.getElementsByName("요약")[0];
			    obj18.style.display="inline-block";
	}

	else if(form == "입력")
	{
		var obj19=document.getElementsByName("입력")[0];
			    obj19.style.display="inline-block";
	}

	else if(form == "폰트")
	{
		var obj22=document.getElementsByName("폰트")[0];
			    obj22.style.display="inline-block";

		var obj23=document.getElementsByName("폰트")[1];
			    obj23.style.display="inline-block";
	}

	else if(form == "패딩")
	{
		var obj24=document.getElementsByName("패딩")[0];
			    obj24.style.display="inline-block";
	}

	else if(form == "테두리")
	{
		var obj25=document.getElementsByName("테두리")[0];
			    obj25.style.display="inline-block";

		var obj26=document.getElementsByName("테두리")[1];
			    obj26.style.display="inline-block";

		var obj27=document.getElementsByName("테두리")[2];
			    obj27.style.display="inline-block";

		var obj28=document.getElementsByName("테두리")[3];
			    obj28.style.display="inline-block";

		var obj29=document.getElementsByName("테두리")[4];
			    obj29.style.display="inline-block";

		var obj30=document.getElementsByName("테두리")[5];
			    obj30.style.display="inline-block";
	}

	else if(form == "마진")
	{
		var obj31=document.getElementsByName("마진")[0];
			    obj31.style.display="inline-block";
	}

	else if(form == "배경")
	{
		var obj32=document.getElementsByName("배경")[0];
			    obj32.style.display="inline-block";
	}

	else if(form == "위치")
	{
		var obj33=document.getElementsByName("위치")[0];
			    obj33.style.display="inline-block";

		var obj34=document.getElementsByName("위치")[1];
			    obj34.style.display="inline-block";

		var obj35=document.getElementsByName("위치")[2];
			    obj35.style.display="inline-block";
	}

	else if(form == "애니메이션")
	{
		var obj36=document.getElementsByName("애니메이션")[0];
			    obj36.style.display="inline-block";

		var obj38=document.getElementsByName("애니메이션")[1];
			    obj38.style.display="inline-block";
	}

	else
	{
		alert("검색하신 단어가 단어장에 존재하지 않습니다 다시 입력해보거나 밑의 단어장에서 찾아주세요");
	}

	var obj20=document.getElementById("메뉴바");
			obj20.style.display="inline-block";

}
function 폰트()
{
	메뉴숨기기();

	var obj22=document.getElementsByName("폰트")[0];
			    obj22.style.display="inline-block";

	var obj23=document.getElementsByName("폰트")[1];
			    obj23.style.display="inline-block";
}

function 패딩()
{
	메뉴숨기기();

	var obj24=document.getElementsByName("패딩")[0];
			    obj24.style.display="inline-block";
}

function 테두리()
{
	메뉴숨기기();

		var obj25=document.getElementsByName("테두리")[0];
			    obj25.style.display="inline-block";

		var obj26=document.getElementsByName("테두리")[1];
			    obj26.style.display="inline-block";

		var obj27=document.getElementsByName("테두리")[2];
			    obj27.style.display="inline-block";

		var obj28=document.getElementsByName("테두리")[3];
			    obj28.style.display="inline-block";

		var obj29=document.getElementsByName("테두리")[4];
			    obj29.style.display="inline-block";

		var obj30=document.getElementsByName("테두리")[5];
			    obj30.style.display="inline-block";
}

function 마진()
{
	메뉴숨기기();
	var obj31=document.getElementsByName("마진")[0];
			    obj31.style.display="inline-block";
}

function 배경()
{
	메뉴숨기기();
	var obj32=document.getElementsByName("배경")[0];
			    obj32.style.display="inline-block";

}

function 위치()
{
	메뉴숨기기();
	var obj33=document.getElementsByName("위치")[0];
			    obj33.style.display="inline-block";

		var obj34=document.getElementsByName("위치")[1];
			    obj34.style.display="inline-block";

		var obj35=document.getElementsByName("위치")[2];
			    obj35.style.display="inline-block";
}

function 애니메이션()
{
	메뉴숨기기();
	var obj36=document.getElementsByName("애니메이션")[0];
			    obj36.style.display="inline-block";

	var obj38=document.getElementsByName("애니메이션")[1];
			    obj38.style.display="inline-block";
}

function 제목()
{
	메뉴숨기기();

	var obj7=document.getElementsByName("제목")[0];
			    obj7.style.display="inline-block";
}

function 블럭화()
{
	메뉴숨기기();
	var obj8=document.getElementsByName("블럭화")[0];
			    obj8.style.display="inline-block";

		var obj9=document.getElementsByName("블럭화")[1];
			    obj9.style.display="inline-block";
		
		var obj10=document.getElementsByName("블럭화")[2];
			    obj10.style.display="inline-block";	
}

function 선()
{
	메뉴숨기기();
	var obj1=document.getElementsByName("선")[0];
			    obj1.style.display="inline-block";
}

function 한줄띄우기()
{
	메뉴숨기기();
	var obj11=document.getElementsByName("한줄띄우기")[0];
			    obj11.style.display="inline-block";
}

function 인라인()
{
	메뉴숨기기();
	var obj12=document.getElementsByName("인라인")[0];
			    obj12.style.display="inline-block";

		var obj13=document.getElementsByName("인라인")[1];
			    obj13.style.display="inline-block";
}

function 리스트()
{
	메뉴숨기기();
	var obj3=document.getElementsByName("리스트")[0];
			    obj3.style.display="inline-block";

		var obj4=document.getElementsByName("리스트")[1];
			    obj4.style.display="inline-block";

		var obj5=document.getElementsByName("리스트")[2];
			    obj5.style.display="inline-block";

		var obj6=document.getElementsByName("리스트")[3];
			    obj6.style.display="inline-block";

		var obj21=document.getElementsByName("리스트")[4];
			    obj21.style.display="inline-block";

}

function 표()
{
	메뉴숨기기();
	var obj14=document.getElementsByName("표")[0];
			    obj14.style.display="inline-block";
	var obj37=document.getElementsByName("표")[1];
			    obj37.style.display="inline-block";
}

function 비디오()
{
	메뉴숨기기();
	var obj15=document.getElementsByName("비디오")[0];
			    obj15.style.display="inline-block";
}

function 오디오()
{
	메뉴숨기기();
	var obj16=document.getElementsByName("오디오")[0];
			    obj16.style.display="inline-block";
}

function 시맨틱태그()
{
	메뉴숨기기();
	var obj17=document.getElementsByName("시맨틱태그")[0];
			    obj17.style.display="inline-block";	
}

function 요약()
{
	메뉴숨기기();
	var obj18=document.getElementsByName("요약")[0];
			    obj18.style.display="inline-block";
}

function 입력()
{
	메뉴숨기기();
	var obj19=document.getElementsByName("입력")[0];
			    obj19.style.display="inline-block";
}



function 메뉴숨기기() 
{
	var obj1=document.getElementsByName("선")[0];
	var obj3=document.getElementsByName("리스트")[0];
	var obj4=document.getElementsByName("리스트")[1];
	var obj5=document.getElementsByName("리스트")[2];
	var obj6=document.getElementsByName("리스트")[3];
	var obj7=document.getElementsByName("제목")[0];
	var obj8=document.getElementsByName("블럭화")[0];
	var obj9=document.getElementsByName("블럭화")[1];
	var obj10=document.getElementsByName("블럭화")[2];
	var obj11=document.getElementsByName("한줄띄우기")[0];
	var obj12=document.getElementsByName("인라인")[0];
	var obj13=document.getElementsByName("인라인")[1];
	var obj14=document.getElementsByName("표")[0];		
	var obj15=document.getElementsByName("비디오")[0];
	var obj16=document.getElementsByName("오디오")[0];
	var obj17=document.getElementsByName("시맨틱태그")[0];
	var obj18=document.getElementsByName("요약")[0];
	var obj19=document.getElementsByName("입력")[0];
	var obj21=document.getElementsByName("리스트")[4];
	var obj22=document.getElementsByName("폰트")[0];
			    

		var obj23=document.getElementsByName("폰트")[1];
			    
		
		var obj24=document.getElementsByName("패딩")[0];
			    

		var obj25=document.getElementsByName("테두리")[0];
			    

		var obj26=document.getElementsByName("테두리")[1];
			    

		var obj27=document.getElementsByName("테두리")[2];
			    

		var obj28=document.getElementsByName("테두리")[3];
			    

		var obj29=document.getElementsByName("테두리")[4];
			    

		var obj30=document.getElementsByName("테두리")[5];
			    
		var obj31=document.getElementsByName("마진")[0];
			    

		var obj32=document.getElementsByName("배경")[0];
			    

		var obj33=document.getElementsByName("위치")[0];
			    

		var obj34=document.getElementsByName("위치")[1];
			    

		var obj35=document.getElementsByName("위치")[2];
			    

		var obj36=document.getElementsByName("애니메이션")[0];

		var obj37=document.getElementsByName("표")[1];

		var obj38=document.getElementsByName("애니메이션")[1];
			    obj38.style.display="inline-block";
			  
			    
			
	obj1.style.display="none";
	obj3.style.display="none";
	obj4.style.display="none";	
	obj5.style.display="none";
	obj6.style.display="none";
	obj7.style.display="none";
	obj8.style.display="none";
	obj9.style.display="none";
	obj10.style.display="none";
	obj11.style.display="none";
	obj12.style.display="none";
	obj13.style.display="none";
	obj14.style.display="none";
	obj15.style.display="none";
	obj16.style.display="none";
	obj17.style.display="none";
	obj18.style.display="none";
	obj19.style.display="none";
	obj21.style.display="none";
	obj22.style.display="none";
	obj23.style.display="none";
	obj24.style.display="none";
	obj25.style.display="none";
	obj26.style.display="none";
	obj27.style.display="none";
	obj28.style.display="none";
	obj29.style.display="none";
	obj30.style.display="none";
	obj31.style.display="none";
	obj32.style.display="none";
	obj33.style.display="none";
	obj34.style.display="none";
	obj35.style.display="none";
	obj36.style.display="none";
	obj37.style.display="none";
	obj38.style.display="none";
}
