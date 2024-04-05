function refreshTheAd(){
    var a = document.getElementById("reloadPart2");
    var parent = a.parentElement; //we can get the container of the part2 by using"parentElement", make sure everything will be placed properly in the container.
    var newContent = a.cloneNode(true);
    parent.removeChild(a);
    parent.appendChild(newContent);
  }
  
  //A parent element is an element that contains other elements. In other words, if one element surrounds another, 
  //then the outer element is the parent of the inner element.
  function goToSecondPage(){
      var checkInDateInput = document.getElementById("checkindate");
      var checkOutDateInput = document.getElementById("checkoutdate");
      var adultsNumberInput = document.getElementById("adultsNumber");
      var childrenNumberInput = document.getElementById("childrenNumber");
      var checkindate = new Date(checkInDateInput.value); //only write like this we can compare the date
      var checkoutdate = new Date(checkOutDateInput.value);
  
      if(checkInDateInput.value==""||checkOutDateInput.value==""||adultsNumberInput.value==""||childrenNumberInput.value==""){
          alert("Please fill in the form below");
      }else if(checkindate>checkoutdate){
          alert("Please check the date");
      }else if(adultsNumberInput.value==0&&childrenNumberInput.value==0){
          alert("Please check the number of guests");
        }else if(adultsNumberInput.value==0&&childrenNumberInput.value>=0){
            alert("For your safty, at least 1 adult is required");
      }else{
          firstPage.style.display = 'none';
          secondPage.style.display = 'block';
          thirdPage.style.display = 'none';
          fourthPage.style.display = 'none';
          lastPage.style.display= "none";
      }
  }
  
    function myChange(){
      var a = document.getElementById("swimminggogglesnum").value;
      document.getElementById("swimmingGogglesNumber").innerHTML = a;
      var b = document.getElementById("surfboardsnum").value;
      document.getElementById("surfBoardsNumber").innerHTML = b;
      var c = document.getElementById("swimmingringnum").value;
      document.getElementById("swimmingRingNumber").innerHTML = c;
      var d = document.getElementById("wheelchairnum").value;
      document.getElementById("wheelChairNumber").innerHTML = d;
      var e = document.getElementById("poweradapternum").value;
      document.getElementById("powerAdapterNumber").innerHTML = e;
    }
  
    function showThirdPage(){
      firstPage.style.display ="none";
      secondPage.style.display ="none";
      thirdPage.style.display ="block";
      fourthPage.style.display ="none";
      lastPage.style.display="none";
    }
  
    function showFourthPage(){
      firstPage.style.display="none;";
      secondPage.style.display="none";
      thirdPage.style.display="none";
      fourthPage.style.display="block";
      lastPage.style.display="none";
    }
  
    function PreviousShowFirstPage(){
      firstPage.style.display="block";
      secondPage.style.display="none";
      thirdPage.style.display="none";
      fourthPage.style.display="none";
      lastPage.style.display="none";
    }
  
    function PreviousShowSecondPage(){
      firstPage.style.display="none";
      secondPage.style.display="block";
      thirdPage.style.display="none";
      fourthPage.style.display="none";
      lastPage.style.display="none";
    }
  
    function PreviousShowThirdPage(){
      firstPage.style.display="none";
      secondPage.style.display="none";
      thirdPage.style.display="block";
      fourthPage.style.display="none";
      lastPage.style.display="none";
    }
  
  function showAllInfo(){
    var f = document.getElementById("firstName").value;
    var g = document.getElementById("lastName").value;
    var h = document.getElementById("age").value;
    var i = document.getElementById("emailAddress").value;
    var j = document.getElementById("phoneNumber").value;
  
    if(f.value==""||g.value==""||h==""||i==""||j==""){
      alert("Please fill in all the details");
    }else if(!/^[0-9]+$/.test(h)||(!/^[0-9]+$/.test(j))){ // /^[0-9]+$/ means only number
      alert("Please write number for age and phone number column")
    }else if(!i.includes("@") || !i.includes(".com")){
      alert("Please write your correct email address");
    }else{
      firstPage.style.display="none";
      secondPage.style.display="none";
      thirdPage.style.display="none";
      fourthPage.style.display="none";
      lastPage.style.display="block";
  
    document.getElementById("listFirstName").innerHTML = firstName.value;
    document.getElementById("listLastName").innerHTML = lastName.value;
    document.getElementById("listAge").innerHTML = age.value;
    document.getElementById("listEmailAddress").innerHTML = emailAddress.value;
    document.getElementById("listPhoneNumber").innerHTML = phoneNumber.value;
    document.getElementById("listCheckInDate").innerHTML = checkindate.value;
    document.getElementById("listCheckOutDate").innerHTML = checkoutdate.value;
    document.getElementById("listNumberOfAdults").innerHTML = adultsNumber.value;
    document.getElementById("listNumberOfChildren").innerHTML = childrenNumber.value;
    document.getElementById("listNumberOfRoom").innerHTML = rooms.value;
  
    if(chooseRoomType1.checked){
      document.getElementById("listRoomType").innerHTML = deluxeQueenStudio.innerText;
    }else if(chooseRoomType2.checked){
      document.getElementById("listRoomType").innerHTML = deluxeKingSpa.innerText;
    }else if(chooseRoomType3.checked){
      document.getElementById("listRoomType").innerHTML = deluxeTwinStudio.innerText;
    }else if(chooseRoomTYpe4.checked){
      document.getElementById("listRoomType").innerHTML = executiveStudio.innerText;
    }
  
    if(smokecheck1.checked){
      document.getElementById("listSmoke").innerHTML = "YES";
    }else if(smokecheck2.checked){
      document.getElementById("listSmoke").innerHTML = "NO";
    }
  
    if(localCheck1.checked){
      document.getElementById("listlocal").innerHTML = "YES";
    }else if(localCheck2.checked){
      document.getElementById("listlocal").innerHTML = "NO";
    }
  
    if(kitchenCheck1.checked){
      document.getElementById("listKitchen").innerHTML = document.getElementById("kitchenYes").innerText;
    }else if(kitchenCheck2.checked){
      document.getElementById("listKitchen").innerHTML = document.getElementById("kitchenNo").innerText;
    }
  
    if(connectingCheck1.checked){
      document.getElementById("listConnectingRoom").innerHTML = document.getElementById("connectingYes").innerText;
    }else if(connectingCheck2.checked){
      document.getElementById("listConnectingRoom").innerHTML = document.getElementById("connectingNo").innerText;
    }
  
  document.getElementById("listSwimmingGoggles").innerHTML = swimmingGogglesNumber.innerText;
  document.getElementById("listSurfBoards").innerHTML = surfBoardsNumber.innerText;
  document.getElementById("listSwimmingRing").innerHTML = swimmingRingNumber.innerText;
  document.getElementById("listWheelChair").innerHTML = wheelChairNumber.innerText;
  document.getElementById("listPowerAdapter").innerHTML = powerAdapterNumber.innerText;
  
  var a = document.getElementById("swimmingGogglesColor").value; 
  aHTML = "<label style='background-color: " + a + "; width: 15px; height: 15px; margin: 0 auto; display: inline-block'></label>";
  document.getElementById("listSwimmingGogglesColor").innerHTML = aHTML;
  
  var b = document.getElementById("surfBoardColor").value;
  bHTML = "<label style='background-color: " + b + "; width: 15px; height: 15px; margin: 0 auto; display: inline-block'></label>";
  document.getElementById("listSurfBoardsColor").innerHTML = bHTML;
  
  var c = document.getElementById("swimmingRingColor").value;
  cHTML = "<label style='background-color: " + c + "; width: 15px; height: 15px; margin: 0 auto; display: inline-block'></label>";
  document.getElementById("listSwimmingRingColor").innerHTML =  cHTML;
  
  document.getElementById("close").addEventListener("click",function(){
      alert("All the information has been saved ans sent to our Booking System");
      firstPage.style.display = "block";
      secondPage.style.display = "none";
      thirdPage.style.display = "none";
      fourthPage.style.display = "none";
      lastPage.style.display = "none";
  
      document.getElementById("checkindate").value = "";
      document.getElementById("checkoutdate").value = "";
      document.getElementById("adultsNumber").value = "";
      document.getElementById("childrenNumber").value = "";
      document.getElementById("rooms").value = "one room"; // Reset to default value
      location.reload();
    });
  }
  }
  