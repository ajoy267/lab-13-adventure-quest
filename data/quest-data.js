const unitedStates = {
    id: 'us',
    title: 'Adventures to the US',
    map: {
        top: '65%',
        left: '25%'
    },
    image: 'america.png',
    description: `You fly to Texas only to realize you got on the wrong 
    flight to the US, you were suppose to fly to Las Vegas. What do 
    you do?`,
    choices: [{
        id: 'stay',
        description: 'Stay in Texas for the remainder of your trip',
        result: `You've spent $1250 and earned 1000mi. 
        During your stay you encountered many Texans who were eager 
        to show you how the sterotypes for Texas were mostly wrong.`,
        miles: 1000,
        money: -1250
    }, {
        id: 'rent-a-car',
        description: 'Rent a car and roadtrip to Las Vegas',
        result: `You've spent $2500 and earned 2000mi. 
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
    image: 'european-flag.png',
    description: `You're European tour begins with a journey to Belgium. 
    After a nice welcome from the Belgian people, you decided to go to the 
    neighboring country; The Netherlands. Once entering the Dutch country 
    side you left with a dilemna; which city to go to? You only have enough 
    time to visit one.`,
    choices: [{
        id: 'amsterdam',
        description: `The capital of the Netherlands`,
        result: `You got kidnapped and robbed while visiting the 
        capital. You're stuck working in the red light district, 
        with little to no chance of ever returning home.`,
        miles: 2500,
        money: -5000
    }, {
        id: 'rotterdam',
        description: `The city of Architecture`,
        result: `You had a nice enjoyable time exploring the city 
        and taking in the sites. You got 2750mi and only spent $1000 on 
        this adventure. You also meet a lot of really nice people and 
        some good friends.`,
        miles: 2750,
        money: -1000
    }, {
        id: 'lisse',
        description: 'Tulip Country side',
        result: `Nothing says "You're in the Netherlands" like visiting 
        Lisse's Keukenhof in the country side. You earned 2000mi and 
        spent $800. You learned a lot about the Dutch culture.`,
        miles: 2000, 
        money: -800
    }]
};

const africa = {
    id: 'africa',
    title: 'African Tour',
    map: {
        top: '50%',
        left: '60%'
    },
    image: 'african-flag.png',
    description: `You have embarked on your African Tour and are 
    eager to learn about the unique culture that they have. Upon 
    visiting a small village, an African Drug Lord and his followers 
    ransack the town. What do you do?`,
    choices: [{
        id: 'hide',
        description: 'Hide from the drug lord',
        result: `After hiding for a few hours you end up getting 
        caught by the drug lord and imprisonned for being an outsider. 
        You lose all your money but gain 1500mi.`,
        miles: 1500,
        money: -5000
    }, {
        id: 'fight',
        description: 'Fight the Drug Lord',
        result: `Charging with the rebels of the village you 
        begin fighting back. Many have fallen but you manage to 
        help the rebels over power the drug lord. The villagers 
        repay you for your help by giving you $2000. The trip itself 
        also earned you 2000mi.`,
        miles: 2000,
        money: 2000
    }, {
        id: 'payoff',
        description: 'Bribe the Drug Lord',
        result: `You offer the drug lord some of your money in 
        hopes that he will leave. He agrees to leave for $3000, 
        after you pay him, he betrays your trust by returning in 
        the night. They destroy the village and imprission everyone 
        in it and steal the rest of your money, however you still earn 
        1000mi.`,
        miles: 1000,
        money: -5000
    }]
};

const quests = [
    unitedStates,
    europe,
    africa
];

export default quests;