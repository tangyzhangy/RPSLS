/*
 HTTP Cloud Function.

 @param {Object} req Cloud Function request context.
 @param {Object} res Cloud Function response context.
*/
const choiceMapping = {
	"1": "rock",
	"2": "paper",
	"3": "scissor",
	"4": "lizard",
	"5": "spock",
}
const resultMapping = {
	"win": "Congratulations, you won! Pick another object to play again!",
	"tie": "It was a tie! Pick another object to play again!",
	"lose": "Aww, you lose! Pick another object to play again!",
}

exports.RPSLS = (req, res) => {
	var userChoice = req.body.result.parameters["user-choice"];
	var compChoice = choiceMapping[generateChoice(0, 5)];
	if(userChoice === "scissor"){
		if(compChoice === "paper")
			response = resultMapping["win"];
		else if (compChoice === "spock")
			response = resultMapping["lose"];
		else if (compChoice === "lizard")
			response = resultMapping["win"];
		else if (compChoice === "rock")
			response = resultMapping["lose"];
		else 
			response = resultMapping["tie"];
	} 
	else if(userChoice === "rock"){
		if(compChoice === "paper")
			response = resultMapping["lose"];
		else if (compChoice === "spock")
			response = resultMapping["lose"];
		else if (compChoice === "lizard")
			response = resultMapping["win"];
		else if (compChoice === "scissor")
			response = resultMapping["win"];
		else 
			response = resultMapping["tie"];
	}
	else if(userChoice === "paper"){
		if(compChoice === "scissor")
			response = resultMapping["lose"];
		else if (compChoice === "spock")
			response = resultMapping["win"];
		else if (compChoice === "lizard")
			response = resultMapping["lose"];
		else if (compChoice === "rock")
			response = resultMapping["win"];
		else 
			response = resultMapping["tie"];
	} 
	else if(userChoice === "lizard"){
		if(compChoice === "rock")
			response = resultMapping["lose"];
		else if (compChoice === "spock")
			response = resultMapping["win"];
		else if (compChoice === "paper")
			response = resultMapping["win"];
		else if (compChoice === "scissor")
			response = resultMapping["lose"];
		else 
			response = resultMapping["tie"];
	} 
	else {
		if(compChoice === "paper")
			response = resultMapping["lose"];
		else if (compChoice === "lizard")
			response = resultMapping["lose"];
		else if (compChoice === "rock")
			response = resultMapping["win"];
		else if (compChoice === "scissor")
			response = resultMapping["win"];
		else 
			response = resultMapping["tie"];
	}

res.setHeader('Content-Type', 'application/json'); 
  res.send(JSON.stringify({ "speech": response, "displayText": response
  }));
};

function generateChoice(min, max) {
	let a = Math.floor((Math.random() * 5) + 1);
	return a.toString();
}
