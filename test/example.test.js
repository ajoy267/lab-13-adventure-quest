// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateUser, setUser, getUser, score, completedAllQuests } from '../utils.js';

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

test('score should update money, miles and completed', (expect) => {
    const user = {
        completed: {},
        miles: 0,
        money: 5000,
        name: 'Andrew',
        status: 'gold',
    };
    const choice = {
        id: 'hide',
        description: 'Hide from the drug lord',
        result: `After hiding for a few hours you end up getting 
        caught by the drug lord and imprisonned for being an outsider. 
        You lose all your money but gain 1500mi.`,
        miles: 1500,
        money: -5000
    };
    const questId = 'africa';

    score(choice, questId, user);
    expect.equal(user.money, 0);
    expect.equal(user.miles, 1500);
    expect.equal(user.completed[questId], true);
});

test('completedAllQuests returns false if the user hasnt done it', (expect) => {
    const user = {
        completed: { unitedStates: true, europe: true },
    };
    const actual = completedAllQuests(user);
    expect.equal(actual, false);
});
