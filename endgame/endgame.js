import { userProfile, getUser } from '../utils.js';

userProfile();

const tryAgain = document.getElementById('try-again');

tryAgain.addEventListener('click', () => {
    localStorage.removeItem('USER');
    window.location.replace('..');
});

const endgameResults = document.getElementById('endgame-results');
const user = getUser();

if (user.money <= 0) {
    endgameResults.textContent = 'You lost all your money! You Lose!';
} else {
    endgameResults.textContent = `You successfully finished you're 
    adventure with money left over! You Win!`;
}