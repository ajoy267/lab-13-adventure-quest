// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateUser, setUser, getUser } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a user', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        miles: 0,
        money: 5000,
        name: 'Andrew',
        status: 'gold',
    };
    
    const formData = new FormData();
    formData.set('name', 'Andrew');
    formData.set('status', 'gold');
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setUser should save to localStorage', (expect) => {
    localStorage.removeItem('USER');
    const expected = {
        completed: {},
        miles: 0,
        money: 5000,
        name: 'Andrew',
        status: 'gold',
    };
    setUser(expected);
    const actual = JSON.parse(localStorage.getItem('USER'));
    expect.deepEqual(actual, expected);
});

test('getUser should get the user info from localStorage', (expect) => {
    localStorage.removeItem('USER');
    const expected = {
        completed: {},
        miles: 0,
        money: 5000,
        name: 'Andrew',
        status: 'gold',
    };
    setUser(expected);
    const actual = getUser();
    expect.deepEqual(actual, expected);
});
