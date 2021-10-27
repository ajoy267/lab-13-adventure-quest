import quests from '../data/quest-data.js';
import { getUser, completedAllQuests } from '../utils.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

if (user.money <= 0 || completedAllQuests(user)) {
    window.location.replace('../endgame');
}

for (let quest of quests) {
    if (user.completed[quest.id]) {
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displayLink(quest) {
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('link');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;

    mapLinks.appendChild(a);
}

function displaySpan(quest) {
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('link');
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    mapLinks.appendChild(span);
}