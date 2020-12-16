//function submitInfo() {
//        (age.value && hightFoot.value && hightInches.value && weightStones.value && weightPounds.value && activityLevel.value && hight.value && weight.value) ? alert("Thank you!"):
//        alert("Please fill in all fields"); //If statementを使ってる
//    }
//       document.getElementById("button").onclick = submitInfo;

function calBmr() {
    
    var gender = document.getElementsByName( "sex" );
    for ( var a="", i=gender.length; i--; ) {
	if ( gender[i].checked ) {
		var sex = gender[i].value ;
		break ;
	}
}

    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    
    var activity = document.getElementsByName( "activityLevel" );
    for ( var a="", i=activity.length; i--; ) {
	if ( activity[i].checked ) {
		var activityLevel = activity[i].value ;
		break ;
	}
}
    
    var formula = 1;
    var bmr = 0;
    var dailyCalorieNeeds = 0;
        
    formula == sex ? (bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5,
    dailyCalorieNeeds = bmr * activityLevel):
    (bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161, 
        dailyCalorieNeeds = bmr * activityLevel);
        
        document.getElementById("bmrValue").innerHTML = bmr;
        document.getElementById("dailyCalorieNeedsValue").innerHTML = dailyCalorieNeeds;
        
    }
       document.getElementById("button").onclick = calBmr;
//       document.getElementById("button").addEventListener("click", calBmr, false);
