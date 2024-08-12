const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = "";
    for (person of people){
        if (person.yearOfDeath === undefined && ((2024 - person.yearOfBirth) > oldestAge)){
            oldestAge = (2024-person.yearOfBirth);
            oldestPerson = person;
        }
        else if ((person.yearOfDeath - person.yearOfBirth) > oldestAge){
            oldestAge = (person.yearOfDeath - person.yearOfBirth);
            oldestPerson = person;
        }
        console.log(oldestPerson);
    }

    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
