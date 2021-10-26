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