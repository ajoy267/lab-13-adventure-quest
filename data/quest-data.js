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
        money: -1250
    }, {
        id: 'rent-a-car',
        description: 'Rent a car and roadtrip to Las Vegas',
        result: `You've spent 1/2 of your money and earned 2000mi. 
        While you were driving you ran out of gas is New Mexico and 
        were stranded for a day. While you wer waiting for help, some 
        muggers came by and stole your luggage for your trip.`,
        miles: 2000,
        money: -2500
    }, {
        id: 'fly-to-vegas',
        description: 'Talk to the airline',
        result: `You talk to the airline and manage to get a 
        complimentary flight to Las Vegas. You didn't spend any money 
        and earned 2000mi. You were even upgraded to first class and 
        had a very enjoyable experience.`,
        miles: 2000,
        money: 0
    }]
};

const europe = {
    id: 'europe',
    title: 'European Tour',
    map: {
        top: '70%',
        left: '60%'
    },
    image: '../assests/european-flag.png',
    description: `You're European tour begins with a journey to Belgium. 
    After a nice welcome from the Belgian people, you decided to go to the 
    neighboring country; The Netherlands. Once entering the Dutch country 
    side you left with a dilemna; which city to go to? You only have enough 
    time to visit one.`,
    choices: [{
        id: 'amsterdam',
        description: `You visit the capital of the Netherlands`,
        result: `You got kidnapped and robbed while visiting the 
        capital. You're stuck working in the red light district, 
        with little to no chance of returning home.`,
        miles: 2500,
        money: -5000
    }]
};