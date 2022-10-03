(function(window){
    var goodbyeSpeaker = {};
    var goodbyeWord = "Good Bye";
    goodbyeSpeaker.speak = function(name){
        console.log(goodbyeWord+" "+name);
    };

    window.goodbyeSpeaker = goodbyeSpeaker;
})(window);