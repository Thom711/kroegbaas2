const age = 18;
const isFemale = true;
const driverStatus = 'bob';

if (age >= 18 && isFemale) {
    console.log('Kom binnen!');

    if (driverStatus === 'bob') {
        console.log('Je bent de bob, je mag rijden.');
    } else {
        console.log('Je bent niet de bob, je mag niet rijden.');
    }
} else {
    console.log('Geen toegang, sorry.');
}

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting!');
} else {
    console.log('Sorry, geen korting..');
}

const name = 'Bram';

if (name === 'Bram' || name=== 'Sarah') {
    console.log('Je krijgt een gratis biertje!');
} else {
    
    console.log('Je krijgt geen gratis biertje..');
}

const totalAmount = 105;

if (totalAmount > 100) {
    console.log('Je krijgt een gratis fles champagne!');
} else if (totalAmount > 50) {
    console.log('Je krijgt een gratis portie nachos.');
} else if (totalAmount > 25) {
    console.log('Je krijgt een gratis portie bitterballen, kan ook vega!');
} else {
    console.log('Helaas krijg je niks gratis.');
}