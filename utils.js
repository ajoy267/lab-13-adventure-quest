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