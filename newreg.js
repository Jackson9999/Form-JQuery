$(function(){
	$("#log").blur(function(){
	 let textIn = $("#log").val();
	 let regexp = /^\w+$/;
	 let rezult = regexp.test(textIn);
	  if(rezult===true){
        $("#text").text("Ok");
        $("#log").css({"border-width": "2px", "border-style": "solid", "border-color": "#00FF00"});
	  }
	  else{
        $("#text").text("Error");
        $("#log").css({"border-width": "2px", "border-style": "solid", "border-color": "#FF0000"});
	  }
    });

    $("#mail").blur(function(){
        let textIn = $("#mail").val();
        let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
        let rezult = regexp.test(textIn);
         if(rezult===true){
           $("#valid").text("Ok");
           $("#mail").css({"border-width": "2px", "border-style": "solid", "border-color": "#00FF00"});
         }
         else{
           $("#valid").text("Error");
           $("#mail").css({"border-width": "2px", "border-style": "solid", "border-color": "#FF0000"});
         }
       });
       
       $("#pas").blur(function(){
        let textIn = $("#pas").val();
        let regexp = /^[a-zA-Z0-9]{6,}$/g;
        let rezult = regexp.test(textIn);
         if(rezult===true){
           $("#numb").text("Ok");
           $("#pas").css({"border-width": "2px", "border-style": "solid", "border-color": "#00FF00"});
         }
         else{
           $("#numb").text("Error");
           $("#pas").css({"border-width": "2px", "border-style": "solid", "border-color": "#FF0000"});
         }
         $("#repas").blur(function(){
          let textRe = $("#repas").val();
           if(textIn===textRe){
             $("#replay").text("Ok");
             $("#repas").css({"border-width": "2px", "border-style": "solid", "border-color": "#00FF00"});
           }
           else{
             $("#replay").text("Не правильный пароль");
             $("#repas").css({"border-width": "2px", "border-style": "solid", "border-color": "#FF0000"});
           }
         });
       });
	})