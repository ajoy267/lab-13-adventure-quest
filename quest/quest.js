import quests from '../data/quest-data.js';
import { findById, getUser, setUser, score, userProfile } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const questData = findById(quests, params.get('id'));

userProfile();

const title = document.getElementById('quest-title');
title.textContent = questData.title;

const img = document.getElementById('quest-img');
img.src = `../assets/${questData.image}`;

const description = document.getElementById('quest-description');
description.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');

for (let pick of questData.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choices';
    input.required = true;
    input.value = pick.id;

    const span = document.createElement('span');
    span.textContent = pick.description;
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose My Choice';
questChoices.append(button);

questChoices.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedChoice = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choices, selectedChoice.value);

    const user = getUser();
    
    score(choice, questData.id, user);

    setUser(user);

    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');

    const questResults = document.getElementById('results');

    const resultsP = document.createElement('p');
    resultsP.textContent = choice.result;

    const backLink = document.createElement('a');
    backLink.href = '../map';
    backLink.textContent = 'Back to Map';

    questResults.append(resultsP, backLink);
    questResults.classList.remove('hidden');

    userProfile();
});