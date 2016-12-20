

			

 					//Initialize Variables for Game

					var targetNumber = 0;
					var score = 0;
					$("div.totalScore").html("Your Total Score Is: " +  score);
					var winTotal = 0;
					$("div.wins").html("Wins: " + winTotal);
					var lossTotal = 0;
					$("div.loss").html("Losses: " + lossTotal);

					//Define Crystal Objects:

					var greenCrystal = 0;
					var redCrystal = 0;
					var yellowCrystal = 0;
					var blueCrystal = 0;


					
					//Create random function rather than re-writing random number code over and over:
					function getRandom(min, max) {
						min = Math.ceil(min);
						max = Math.floor(max);
						return Math.floor(Math.random() * (max - min)) + min;
					}


					//On Startup set our target number
					function getTarget() {
					targetNumber = getRandom(19, 120);
					$( "div.targetNumber").html(targetNumber);
				};
					getTarget();


					//Set our crystal numbers:

					redCrystal = getRandom(1, 12);
					
					greenCrystal = getRandom(1, 12);
					
					yellowCrystal = getRandom(1, 12);
					
					blueCrystal = getRandom(1, 12);
					

					//Our Functions for adding numbers
					function addingFunction (a, b){
						return a+b;
					}

					//Our Win Function
					function winFunction () {
						winTotal++;
						$("div.wins").html("Wins: " + winTotal);
						alert("You Win!")
						score = 0;
						$("div.totalScore").html("Your Total Score Is: " + score);
						getTarget();
						redCrystal = getRandom(1, 12);
						greenCrystal = getRandom(1, 12);
						yellowCrystal = getRandom(1, 12);
						blueCrystal = getRandom(1, 12);
						

					}

					//And it's partner
					function loseFunction () {
						lossTotal++;
						$("div.loss").html("Losses: " + lossTotal);
						getTarget();
						alert("You Lose!")
						score = 0;
						$("div.totalScore").html("Your Total Score Is: " + score);
						redCrystal = getRandom(1, 12);
						greenCrystal = getRandom(1, 12);
						yellowCrystal = getRandom(1, 12);
						blueCrystal = getRandom(1, 12);	
					
					}
					

					//When clicking gems:

					$("#red").click(function (){
						var tempNum = addingFunction(redCrystal, score);
						score = tempNum;
						$("div.totalScore").html("Your Total Score Is: " + score);
							if (score === targetNumber) { 
							winFunction();
							}
							else if (score > targetNumber) {
								loseFunction();
							}
					});

					$("#blue").click(function (){
						var tempNum = addingFunction(blueCrystal, score);
						score = tempNum;
						$("div.totalScore").html("Your Total Score Is: " + score);
							if (score === targetNumber) { 
							winFunction();
							}
							else if (score > targetNumber) {
								loseFunction();
							}
					});

					$("#green").click(function (){
						var tempNum = addingFunction(greenCrystal, score);
						score = tempNum;
						$("div.totalScore").html("Your Total Score Is: " + score);
							if (score === targetNumber) { 
							winFunction();
							}
							else if (score > targetNumber) {
								loseFunction();
							}
					});

					$("#yellow").click(function (){
						var tempNum = addingFunction(yellowCrystal, score);
						score = tempNum;
						$("div.totalScore").html("Your Total Score Is: " + score);
							if (score === targetNumber) { 
							winFunction();
							}
							else if (score > targetNumber) {
								loseFunction();
							}
					});




				
				