import quests from './data/quest-data.js';

export function generateUser(formData) {
    return {
        completed: {},
        miles: 0,
        money: 5000,
        name: formData.get('name'),
        status: formData.get('status'),
    };
}

export function setUser(user) {
    const userString = JSON.stringify(user);
    localStorage.setItem('USER', userString);
}

export function getUser() {
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function score(userChoice, questId, userObject) {
    userObject.miles += userChoice.miles;
    userObject.money += userChoice.money;
    userObject.completed[questId] = true;
}

export function completedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}

export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function userProfile() {
    const user = getUser();

    const img = document.getElementById('user-image');
    img.src = `../assets/${user.status}-icon.png`;

    const name = document.getElementById('user-name');
    name.textContent = user.name;

    const miles = document.getElementById('user-miles');
    miles.textContent = user.miles;

    const money = document.getElementById('user-money');
    money.textContent = user.money;
}