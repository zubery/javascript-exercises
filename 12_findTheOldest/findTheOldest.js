const findTheOldestHelper = function(person1, person2) {
    const person1FirstYear = person1.yearOfBirth;
    const person1LastYear = person1.yearOfDeath ?? (new Date()).getFullYear();
    const person1Age = person1LastYear - person1FirstYear;

    const person2FirstYear = person2.yearOfBirth;
    const person2LastYear = person2.yearOfDeath ?? (new Date()).getFullYear();
    const person2Age = person2LastYear - person2FirstYear;

    return person1Age > person2Age ? person1 : person2;
};

const findTheOldest = function(people) {
    return people.reduce(findTheOldestHelper, { yearOfBirth: 0, yearOfDeath: 0 });
};

// Do not edit below this line
module.exports = findTheOldest;
