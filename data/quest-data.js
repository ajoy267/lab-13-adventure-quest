const unitedStates = {
    id: 'us',
    title: 'Adventures to the US',
    map: {
        top: '65%',
        left: '25%'
    },
    image: '../assests/america.png',
    description: `You fly to Texas only to realize you got on the wrong 
    flight to the US, you were suppose to fly to Las Vegas. What do 
    you do?`,
    choices: [{
        id: 'stay',
        description: 'Stay in Texas for the remainder of your trip',
        result: `You've spent 1/4 of your money and earned 1000mi. 
        During your stay you encountered many Texans who were eager 
        to show you how the sterotypes for Texas were mostly wrong.`,
        miles: 1000,
        money: 3750
    }]
};