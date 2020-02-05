//create arrays for friends, locations, and weapons
var friends = ['Anna', 'Erica', 'Delaney', 'Maggie', 'Lilly'];
var locations = ['DMV', 'Dollar Tree', 'Mattress Firm Blowout Sale', 'Chiropractors Office', 'Bunk Bed', 'Taco Hell', 'Hogly Wogly', 'Build-a-Bear', 'gas station', ''];
var weapons = ['frozen sardine bullet', 'corn on the cob with spikes', 'expired can of soup', 'Mr. Potato Head doll', 'squash', 'dull spoon', 'cardboard from a toilet paper roll', 'mismatched socks', 'roly poly', 'head of cabbage', 'broken pinky toe', 'nokia phone', 'LG Chocolate', 'Danny Devito', 'bologna box', 'rusty penny', 'sea urchin', 'tennis ball', 'lecture', 'kangaroo'];

$(document).ready(function () {
    for (i = 1; i < 101; i++) {
        var h3 = $('<h3></h3>');
        h3.text('Accusation ' + i)
        $(h3).click(Accusations(i));
        $('.h3Container').append(h3);
    }
    function Accusations(index) {
        return function () {
            alert(friends[index % 5] + " killed them with a " + weapons[index % 20] + " in the " + locations[index % 10]);
        }
    }
});







