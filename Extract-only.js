function getImageNamesFromObject(obj) {
    var imgn = [];

    for (var key in obj) {
        if (key.includes("img")) {
            imgn.push(obj[key])
        }
    }
    console.log(imgn)
    return imgn

}

// function getImageNamesFromObject(obj) {
//     var imgn = [];

//     for (var key in obj) {
//         if (key.indexOf("img") <= 0) {
//             imgn.push(obj[key])
//         }
//     }
//     console.log(imgn)
//     return imgn

// }




var jennyObj = {
    name: "jenny",
    img_40x40: "selfy-ig-profile.png",
    job: 'seamstress',
    age: 28,
    profileActive: false,
    img_40x40: "thumnail-me.jpg",
    img_100x100: "jenny-profile.jpg",
    img_244x244: "frend-kitkat.jpg",
    img_200x200: "penguin-hat.png",
}

var rufusDolanObj = {
    name: "rufus",
    img_50x50: "srs-photo.png",
    job: 'cook',
    age: 48,
    hasFace: false,
    img_100x100: "glamour-shot.png",
    img_300x200: "at-the-game.png",
}

var userImageList2 = getImageNamesFromObject(rufusDolanObj)
//=> ["srs-photo.png", "glamour-shot.png", "at-the-game.png"]