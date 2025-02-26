let playerSkor = 0;
let obotSkor = 0;
let playerName = "";

function play(pickPlayer) {
  const bot = ["Batu✊", "Gunting✌️", "Kertas✋"];
  const pickBot = bot[Math.floor(Math.random() * bot.length)];

  let result = "";
  if (pickPlayer === pickBot) {
    result = `Obot ${pickBot} </br> VS </br> Kamu ${pickPlayer} </br> </br> Seri!🤝`;
  } else if (
    (pickPlayer === "Batu✊" && pickBot === "Gunting✌️") ||
    (pickPlayer === "Gunting✌️" && pickBot === "Kertas✋") ||
    (pickPlayer === "Kertas✋" && pickBot === "Batu✊")
  ) {
    result = `Obot ${pickBot} </br> VS </br> Kamu ${pickPlayer} </br> </br> Kamu Menang!👑 `;
    playerSkor++;
  } else {
    result = `Obot ${pickBot} </br> VS </br> Kamu ${pickPlayer} </br> </br> Kamu Kalah!👎 `;
    obotSkor++;
  }
  document.getElementById("hasil").innerHTML = `${result}`;
  document.getElementById("playerScore").textContent = `${playerSkor}`;
  document.getElementById("obotScore").textContent = `${obotSkor}`;
  document.getElementById("hasil").style.animation = "fadeIn 0.5s ease";

  if (playerSkor === 10) {
    setTimeout(() => {
      alert(`Selamat ${playerName}! Kamu menang 🎉`);
      resetGame();
    }, 100);
  } else if (obotSkor === 10) {
    setTimeout(() => {
      alert(`Maaf ${playerName}, Obot menang! Coba lagi ya 🤖`);
      resetGame();
    }, 100);
  }
}

function resetGame() {
  playerSkor = 0;
  obotSkor = 0;
  document.getElementById("playerScore").textContent = playerSkor;
  document.getElementById("obotScore").textContent = obotSkor;
  document.getElementById("hasil").innerHTML = "Ayo main lagi!";
}

function tampilkanNama() {
  const nama = document.getElementById("inputName").value;
  playerName = nama;
  const btn_name = document.getElementById("sendName");
  const btn_question = document.getElementById("question");
  const btn_question_name = document.getElementById("question-name");
  document.getElementById("nama").textContent = nama;

  btn_name.addEventListener("click", () => {
    btn_question.style.display = "block";
    btn_question_name.style.display = "none";
  });

  if (nama.trim() !== "") {
    localStorage.setItem("playerName", nama); // Simpan nama
  } else {
    alert("Masukkan namamu terlebih dahulu!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  playerName = localStorage.getItem("playerName") || "NamaPlayer";
  document.getElementById("playerName").textContent = playerName;
});

function btnRun() {
  const button = document.getElementById("btn-no");
  const maxWidth = window.innerWidth - button.offsetWidth;
  const maxHeight = window.innerHeight - button.offsetHeight;

  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  button.style.position = "absolute";
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
