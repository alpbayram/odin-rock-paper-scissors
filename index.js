const log = console.log
let humanScore = 0
let computerScore = 0
function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3 + 1)
	log(randomNumber)
	if (randomNumber === 1) {
		log("Taş")
		return 1
	} else if (randomNumber === 2) {
		log("Kağıt")
		return 2
	} else if (randomNumber === 3) {
		log("Makas")
		return 3
	}
}

function getHumanChoice() {
	let humanChoice = parseInt(
		prompt(
			"Lütfen Seçiminizi giriniz:\nTaş için '1'\nKağıt için '2'\nMakas için '3' girişini yapınız."
		)
	)
	log(humanChoice)
	log(typeof humanChoice)
	if (humanChoice === 1) {
		alert("Taş seçtiniz.")
		return 1
	} else if (humanChoice === 2) {
		alert("Kağıt seçtiniz.")
		return 2
	} else if (humanChoice === 3) {
		alert("Makas seçtiniz.")
		return 3
	} else {
		alert("Hiç bir seçim yapmadınız.")
		return 4
	}
}

function scoreAlert() {
	alert(`Sizin skorunuz: ${humanScore}\nRakibinizin skoru: ${computerScore}`)
}
function playGame() {
	function playRound(humanChoice, ComputerChoice) {
		if (humanChoice === 1 && ComputerChoice === 1) {
			alert("Berabere kaldınız. Rakibiniz de taş seçti.")
			scoreAlert()
		} else if (humanChoice === 1 && ComputerChoice === 2) {
			alert("Bilgisayar kazandı. Rakibiniz kağıt seçti.")
			computerScore++
			scoreAlert()
		} else if (humanChoice === 1 && ComputerChoice === 3) {
			alert("Kazandınız. Rakibiniz makas seçti.")
			humanScore++
			scoreAlert()
		} else if (humanChoice === 2 && ComputerChoice === 1) {
			alert("Kazandınız. Rakibiniz taş seçti.")
			humanScore++
			scoreAlert()
		} else if (humanChoice === 2 && ComputerChoice === 2) {
			alert("Berabere kaldınız. Rakibiniz de kağıt seçti.")
			scoreAlert()
		} else if (humanChoice === 2 && ComputerChoice === 3) {
			alert("Kaybettiniz. Rakibiniz makas seçti.")
			computerScore++
			scoreAlert()
		} else if (humanChoice === 3 && ComputerChoice === 1) {
			alert("Kaybettiniz. Rakibiniz taş seçti.")
			computerScore++
			scoreAlert()
		} else if (humanChoice === 3 && ComputerChoice === 2) {
			alert("Kazandınız. Rakibiniz kağıt seçti")
			humanScore++
			scoreAlert()
		} else if (humanChoice === 3 && ComputerChoice === 3) {
			alert("Berabere kaldınız. Rakibiniz de makas seçti.")
			scoreAlert()
		} else {
			alert("Error.")
			return "Error"
		}
	}
	let leaveGame = false
	for (let i = 0; i < 2; i++) {
		log(`Round: ${i + 1}`)
		alert(`Round: ${i + 1}`)
		const playerSelection = getHumanChoice()
		const computerSelection = getComputerChoice()
		if (playerSelection === 4) {
			alert("Oyundan çıkılıyor.")
			leaveGame = true

			break
		}
		playRound(playerSelection, computerSelection)
	}
	if (leaveGame != true) {
		if (humanScore > computerScore) {
			alert("Siz kazandınız. Tebrikler.")
		} else if (humanScore < computerScore) {
			alert("Kaybettiniz. Bilgisayar kazandı.")
		} else if (humanScore == computerScore) {
			humanScore = 0
			computerScore = 0
			let onay = confirm("Berabere kaldınız. Son bir altın maç ister misiniz?")
			if (onay == true) {
				const playerSelection = getHumanChoice()
				const computerSelection = getComputerChoice()
				if (playerSelection === 4) {
					alert("Oyundan çıkılıyor.")
				}
				playRound(playerSelection, computerSelection)
				if (humanScore > computerScore) {
					alert("Şampiyon sizsiniz.")
				} else if (humanScore < computerScore) {
					alert("Yenildin!!!")
				} else {
					alert("Yine berabere!!!")
				}
			} else {
				alert("Sonuç beraberlik.")
			}
		}
	}
}
playGame()
