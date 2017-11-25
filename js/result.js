function displayResult(event) {
	var popup = document.getElementById("myPopup");
	var x = event.clientX;
	generateMessage(x);
	popup.classList.toggle("show");
}

function closePopup() {
	location.reload();
}

function generateMessage(x){
	var happiness = (x/1300)*100;
	var sadness = 100 - happiness;
	var score = "Happiness: " + happiness.toFixed(2) + ", Sadness: " + sadness.toFixed(2);
	$('.score').text(score);
	
	var result;
	var advice;
	var buttonText;
	var buttonLink;
	
	switch (true) {
		case (happiness < 20):
			result = 	"Critical Relation";
			advice = 	"I am afriad your relationship has gone cold, you need to see us NOW ! " +
						"Follow the link below to go to iFamiliesUK. Talk to us, " +
						"no matter what your circumstance or stage you are in. We can always help you. You may not need a lawyer";
			buttonText = "iFamiliesUk"; 
			buttonLink = "https://ifamily2017.wordpress.com/";
			break;
		case (happiness > 20 && happiness < 50):
			result = "Lukewarm Relation";
			advice = "Unhappy and undecided ? Read some stories at iFamiliesUK and get some advice";
			buttonText = "iFamiliesUk"; 
			buttonLink = "https://ifamily2017.wordpress.com/";
			break;
		case (happiness > 50 && happiness < 80):
			result = "Generally happy but with problem";
			advice = "Fix them, follow the link below to visit Sheela's personal website, I am sure you can get some useful advice";
			buttonText = "Sheela's Website"; 
			buttonLink = "http://www.sheelamackintoshstewart.com/";
			break;
		default:
			result = "Relly Happy Stuff";
			advice = "Just enjoy, why now share your happy stories on Facebook ?";
			buttonText = "Facebook"; 
			buttonLink = "http://www.facebook.com/";
			break;
	}
	$('.result').text(result);
	$('.advice').text(advice);
	
	$("#actionButton").text(buttonText);
	document.getElementById("actionButton").onclick = function () {
		window.location.href = buttonLink;
	};
}