import { userProfile } from '../utils.js';

userProfile();

const tryAgain = document.getElementById('try-again');

tryAgain.addEventListener('click', () => {
    localStorage.removeItem('USER');
    window.location.replace('..');
});