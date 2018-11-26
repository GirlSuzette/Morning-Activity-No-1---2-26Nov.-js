function getFirstLetterFromFirstName(array) {
    var letterNames = [];

    for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        var name = obj.firstName;
        var oneLetter = name[0];
        letterNames.push(oneLetter.toUpperCase())
    }
    console.log(letterNames)
    return letterNames
}




var names = [{
    firstName: "pedro",
    lastName: "Paramo"
}, {
    firstName: "chuck",
    lastName: "Norris"
}, {
    firstName: "vicente",
    lastName: "Fernandez"
}, {
    firstName: "electric",
    lastName: "Blue"
}];

getFirstLetterFromFirstName(names); // => ["P", "C", "V", "E"]