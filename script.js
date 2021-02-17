'use strict';
window.alert(
  'Το παιχνίδι σε αυτήν την ιστοσελίδα παίζεται ως εξής:\nΈνας αριθμός κρύβεται πίσω από το ερωτηματικό και εσύ πρέπει να μαντέψεις ποιος είναι.\nΣτο πλαίσιο πάνω από το κουμπί Έλεγξε βάζεις ένα νούμερο από το 1 έως το 20 και έχεις 10 προσπάθειες να τον βρεις\nΘα εμφανίζεται ένα μήνυμα στα δεξιά για το αν είσαι πάνω από το νούμερο που ψάχνεις ή κάτω\nΌταν τον βρεις οι εναπομείναντες προσπάθειες σου γίνονται το νέο σου Highscore και αν θες ξανά πατάς το κουμπί Ξανά για να βελτιώσεις το Highscore σου.'
);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function testing() {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ Δεν έχεις βάλει νούμερο');
    // When palyer wins
  } else if (guess === secretNumber) {
    displayMessage(
      '✌ Σωστό Νούμερο. Πάτησε το Ξανά! για να βελτιώσεις το Highscore σου!!!'
    );
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Πιο υψηλό από αυτό που ψάχνουμε'
          : '📉 Πιο χαμηλό από αυτό που ψάχνουμε'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 Έχασες το παιχνίδι!!!');
      document.querySelector('body').style.backgroundColor = 'Red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Ξεκίνα να μαντεύεις...');
  document.querySelector('.number').textContent = '?';
});
