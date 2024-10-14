const log = console.log
let humanScore = 0
let computerScore = 0
function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3 + 1)
	log(randomNumber)
	if (randomNumber === 1) {
		log("Taş")
		dynamicImageComputer.src = "misc/mickeyRockM.png"
		resultContainer.append(dynamicImageComputer)
		return 1

	} else if (randomNumber === 2) {
		log("Kağıt")
		dynamicImageComputer.src = "misc/mickeyPaperM.png"
		resultContainer.append(dynamicImageComputer)
		return 2
	} else if (randomNumber === 3) {
		log("Makas")
		dynamicImageComputer.src = "misc/mickeyScissorsM.png"
		resultContainer.append(dynamicImageComputer)
		return 3
	}
}
const logBubble = document.querySelector(".log")
const scoreLog = document.querySelector(".score-log")
let dynamicImageComputer = document.createElement('img');
let dynamicImageHuman = document.createElement('img');
dynamicImageComputer.className="mickeyResult2"
dynamicImageHuman.className="mickeyResult1"


const resultContainer = document.querySelector(".result-container")


function getHumanChoice(event) {
	if (round == 5) {
		console.log("buraya neden giriyor")
		console.log(round)
		
		console.log(`human choice oyun başlaması ${gameStart}`)
		console.log(`human choice round başlaması ${roundStart}`)
		if (gameStart == true && roundStart == true) {
			const computerChoice = getComputerChoice()
			if (event.type == "click") {
				//console.log(event)
				//console.log(event.target)
				//console.log(event.currentTarget)
				switch (event.currentTarget.id) {
					case "button-rock":
						console.log("taşa tıklandı")
						humanChoice = 1
						dynamicImageHuman.src = "misc/mickeyRock.png"
						resultContainer.prepend(dynamicImageHuman)
						break

					case "button-paper":
						console.log("kagıda tıklandı")
						humanChoice = 2
						dynamicImageHuman.src = "misc/mickeyPaper.png"
						resultContainer.prepend(dynamicImageHuman)
						break

					case "button-scissors":
						console.log("makasa tıklandı")
						humanChoice = 3
						dynamicImageHuman.src = "misc/mickeyScissors.png"
						resultContainer.prepend(dynamicImageHuman)
						break

					default:
						console.log("defulta girdi click")
						humanChoice = 4
						break
				}
				playRound(humanChoice, computerChoice)
				
				if (humanScore > computerScore) {
					logBubble.textContent =
						"Oyun bitti. Siz kazandınız!!! Tekrar oynamak için Play tuşuna basınız."
				} else if (computerScore > humanScore) {
					logBubble.textContent =
						"Oyun bitti. Bilgisayar kazandı!!! Tekrar oynamak için Play tuşuna basınız."
				} else {
					logBubble.textContent =
						"Oyun bitti. Berabere kaldınız!!! Tekrar oynamak için Play tuşuna basınız."
				}
				reset.remove()
				resetText.remove()
				playContainerDiv.append(play)
				playContainerDiv.append(playText)
				gameStart = false
				roundStart = false
				
			}
		} else {
			console.log("oyun başlamadı veya bir sonraki rounda geçilmedi")
		}
	} else {
		console.log(`human choice oyun başlaması ${gameStart}`)
		console.log(`human choice round başlaması ${roundStart}`)
		if (gameStart == true && roundStart == true) {
			const computerChoice = getComputerChoice()
			if (event.type == "click") {
				//console.log(event)
				//console.log(event.target)
				//console.log(event.currentTarget)
				switch (event.currentTarget.id) {
					case "button-rock":
						console.log("taşa tıklandı")
						humanChoice = 1
						dynamicImageHuman.src = "misc/mickeyRock.png"
						resultContainer.prepend(dynamicImageHuman)
						break

					case "button-paper":
						console.log("kagıda tıklandı")
						humanChoice = 2
						dynamicImageHuman.src = "misc/mickeyPaper.png"
						resultContainer.prepend(dynamicImageHuman)
						break

					case "button-scissors":
						console.log("makasa tıklandı")
						dynamicImageHuman.src = "misc/mickeyScissors.png"
						resultContainer.prepend(dynamicImageHuman)
						humanChoice = 3
						break

					default:
						console.log("defulta girdi click")
						humanChoice = 4
						break
				}
				playRound(humanChoice, computerChoice)
				roundStart = false
				logBubble.textContent =
					"Round bitti. Bir sonraki rounda geçmek için lütfen 'Next' tuşuna basınız."
			}
		} else {
			console.log("oyun başlamadı veya bir sonraki rounda geçilmedi")
		}
	}
}
let round = 1
gameStart = false
if (gameStart == false && round == 1) {
	logBubble.textContent = "Lütfen oyunu başlatmak için 'Play' tuşuna basınız."
} 
pickHand = false
roundStart = false
const buttonRock = document.querySelector("#button-rock")
const buttonPaper = document.querySelector("#button-paper")
const buttonScissors = document.querySelector("#button-scissors")
const play = document.querySelector("#play-button")
const next = document.querySelector("#next-button")
const reset = document.querySelector("#reset-button")
const playText = document.querySelector(".play-text")
const nextText = document.querySelector(".next-text")
const resetText = document.querySelector(".reset-text")
const resetContainerDiv = document.querySelector(".reset-container")
const playContainerDiv = document.querySelector(".play-container")
const nextContainerDiv = document.querySelector(".next-container")
const messageContainer = document.querySelector(".messages-container")



function nextRound() {
	scoreLog.remove()
	if (round == 4) {
		if (gameStart == true) {
			if (roundStart == false) {
				round++
				roundStart = true
				console.log(`round${round}`)
				logBubble.textContent = `SON ROUND!!! Lütfen seçim yapınız.`
				nextText.remove()
				next.remove()
			} else {
				
				logBubble.textContent = "bir sonraki round geçmek için seçim yapınız"
			}
		} else {
			console.log("oyun başlamadı")
		}
	} else {
		if (gameStart == true) {
			if (roundStart == false) {
				round++
				roundStart = true
				console.log(`round${round}`)
				logBubble.textContent = `Round: ${round}. Seçim yapınız.`
			} else {
				
				logBubble.textContent = "Seçim yapınız."
			}
		} else {
			console.log("oyun başlamadı")
		}
	}
}
nextText.remove()
next.remove()
function playGame() {
	if (round == 5) {
		round = 1
		humanScore = 0
		computerScore = 0
		scoreAlert()
		dynamicImageComputer.remove()
		dynamicImageHuman.remove()
		if (gameStart == false) {
			play.remove()
			playText.remove()
			nextContainerDiv.append(next)
			nextContainerDiv.append(nextText)
			
			logBubble.textContent = "Oyun başladı. Lütfen seçim yapınız."
			console.log(`round${round}`)
			

			gameStart = true
			roundStart = true
			resetContainerDiv.append(reset)
			resetContainerDiv.append(resetText)
			scoreLog.remove()
			console.log(`Oyun başlaması: ${gameStart}`)
		} else {
			
			logBubble.textContent = "oyun zaten başladı"
		}
	} else {
		if (gameStart == false) {
			play.remove()
			playText.remove()
			nextContainerDiv.append(next)
			nextContainerDiv.append(nextText)
			
			logBubble.textContent = "Oyun başladı. Lütfen seçim yapınız."
			console.log(`round${round}`)
			console.log("lütfen seçim yapınız")

			gameStart = true
			roundStart = true
			console.log(`play tuşu kontrol Oyun başlaması: ${gameStart}`)
		} else {
			console.log("oyun zaten başladı")
			logBubble.textContent = "oyun zaten başladı"
		}
	}
}
function resetGame() {
	
	if (gameStart == true) {
		playContainerDiv.append(play)
		playContainerDiv.append(playText)
		nextText.remove()
		next.remove()
		scoreLog.remove()
		dynamicImageComputer.remove()
		dynamicImageHuman.remove()
		console.log("reset basıldı")
		logBubble.textContent = "Reset tuşuna basıldı. Tekrar başlamak için Play tuşuna basınız."
		console.log(`round${round}`)
		console.log("lütfen seçim yapınız")
		round = 1
		computerScore = 0
		humanScore = 0
		scoreAlert()
		gameStart = false
		roundStart = false
		console.log(`Oyun başlaması: ${gameStart}`)
	} else {
		console.log("oyun zaten başladı")
		logBubble.textContent = "Oyun resetlendi. Tekrar başlamak için Play tuşuna basınız."
	}
}
buttonRock.addEventListener("click", getHumanChoice)
buttonPaper.addEventListener("click", getHumanChoice)
buttonScissors.addEventListener("click", getHumanChoice)
play.addEventListener("click", playGame)
next.addEventListener("click", nextRound)
reset.addEventListener("click", resetGame)
const computerScore1 = document.querySelector(".computer-score")
const playerScore1 = document.querySelector(".player-score")

function scoreAlert() {
	playerScore1.textContent = `Oyuncu Skoru: ${humanScore}`
	computerScore1.textContent = `Bilgisayar Skoru: ${computerScore}`
}

function playRound(humanChoice, ComputerChoice) {
	if (humanChoice === 1 && ComputerChoice === 1) {
		scoreLog.textContent = "Berabere kaldınız. Rakibiniz de taş seçti."

		messageContainer.prepend(scoreLog)
		scoreAlert()
		roundStart = false
	} else if (humanChoice === 1 && ComputerChoice === 2) {
		scoreLog.textContent = "Bilgisayar kazandı. Rakibiniz kağıt seçti."
		messageContainer.prepend(scoreLog)
		computerScore++
		scoreAlert()
		roundStart = false
	} else if (humanChoice === 1 && ComputerChoice === 3) {
		scoreLog.textContent = "Kazandınız. Rakibiniz makas seçti."
		messageContainer.prepend(scoreLog)
		humanScore++
		scoreAlert()
		roundStart = false
	} else if (humanChoice === 2 && ComputerChoice === 1) {
		scoreLog.textContent = "Kazandınız. Rakibiniz taş seçti."
		messageContainer.prepend(scoreLog)
		humanScore++
		scoreAlert()
		roundStart = false
	} else if (humanChoice === 2 && ComputerChoice === 2) {
		scoreLog.textContent = "Berabere kaldınız. Rakibiniz de kağıt seçti."
		messageContainer.prepend(scoreLog)
		scoreAlert()
		roundStart = false
	} else if (humanChoice === 2 && ComputerChoice === 3) {
		scoreLog.textContent = "Kaybettiniz. Rakibiniz makas seçti."
		messageContainer.prepend(scoreLog)
		computerScore++
		scoreAlert()
		roundStart = false
	} else if (humanChoice === 3 && ComputerChoice === 1) {
		scoreLog.textContent = "Kaybettiniz. Rakibiniz taş seçti."
		messageContainer.prepend(scoreLog)
		computerScore++
		scoreAlert()
		roundStart = false
	} else if (humanChoice === 3 && ComputerChoice === 2) {
		scoreLog.textContent = "Kazandınız. Rakibiniz kağıt seçti."
		messageContainer.prepend(scoreLog)
		humanScore++
		scoreAlert()
		roundStart = false
	} else if (humanChoice === 3 && ComputerChoice === 3) {
		scoreLog.textContent = "Berabere kaldınız. Rakibiniz de makas seçti."
		messageContainer.prepend(scoreLog)
		scoreAlert()
		roundStart = false
	} else {
		alert("Error.")
		return "Error"
	}
}
const gestures1 = document.querySelector("#gestures1")
const gestures2 = document.querySelector("#gestures2")
const gestures3 = document.querySelector("#gestures3")
//console.log(gestures1)
// playGame()
function gestureFunction(event) {
	if (event.type == "mouseenter") {
		//console.log(event)
		//console.log(event.target)

		switch (event.target.id) {
			case "gestures1":
				srcGif1 = "misc/rock.gif"
				document.querySelector("#gestures1").src = srcGif1
				//console.log("ilk case")

				break
			case "gestures2":
				srcGif2 = "misc/paper.gif"
				document.querySelector("#gestures2").src = srcGif2
				//console.log("ikinci case")
				break

			case "gestures3":
				srcGif3 = "misc/scissors.gif"
				document.querySelector("#gestures3").src = srcGif3
				//console.log("ücüncü case")
				break

			default:
				//console.log("defulta girdi mouseover")
				break
		}
	} else if (event.type == "mouseleave") {
		switch (event.target.id) {
			case "gestures1":
				srcGif1 = "misc/defaultGesture.png"
				document.querySelector("#gestures1").src = srcGif1
				//console.log("ilk case")

				break
			case "gestures2":
				srcGif2 = "misc/defaultGesture.png"
				document.querySelector("#gestures2").src = srcGif2
				//console.log("ikinci case")
				break

			case "gestures3":
				srcGif3 = "misc/defaultGesture.png"
				document.querySelector("#gestures3").src = srcGif3
				//console.log("ücüncü case")
				break

			default:
				//console.log("defulta girdi mouseout")
				break
		}
	}
}
gestures1.addEventListener("mouseenter", gestureFunction)
gestures1.addEventListener("mouseleave", gestureFunction)
gestures2.addEventListener("mouseenter", gestureFunction)
gestures2.addEventListener("mouseleave", gestureFunction)
gestures3.addEventListener("mouseenter", gestureFunction)
gestures3.addEventListener("mouseleave", gestureFunction)
