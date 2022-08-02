 function 메뉴숨기기() {

    var obj1=document.getElementById("숨김01");

    var obj2=document.getElementById("숨김02");

    var obj3=document.getElementById("숨김03");

    obj1.style.visibility="hidden";

    obj2.style.visibility="hidden";

    obj3.style.visibility="hidden";

  }

  function 메뉴보이기(val) {

    메뉴숨기기();

    var obj=document.getElementById(val);

    obj.style.visibility="visible";

  }