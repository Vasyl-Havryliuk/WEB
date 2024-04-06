(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (let name of names) {
        if (name.charAt(0).toLowerCase() == "j") {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }

    for (let name of names) {
        if (name.charCodeAt(name.length - 1) === 110) {
            helloSpeaker.speak(name);
        }else {
            byeSpeaker.speak(name);
        }
    }
})();

