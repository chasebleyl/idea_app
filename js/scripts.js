/*jslint es6, browser */
/*global
    Math, ideas
*/
/*property
    append, floor, length, random, val
*/


const ideas = [
    "10 old ideas I can make new",
    "10 ridiculous things I would invent",
    "10 books I can write",
    "10 business ideas for Google/Amazon/Twitter/etc.",
    "10 people I can send ideas to",
    "10 podcast ideas or videos I can shoot",
    "10 industries where I can remove the middleman",
    "10 things I disagree with that everyone else assumes is religion",
    "10 ways to take old posts of mine and make books out of them",
    "10 people I want to be friends with",
    "10 things I learned yesterday",
    "10 things I can do differently today",
    "10 ways I can save time",
    "10 things I learned from ________ (person)",
    "10 things I'm interested in getting better at",
    "10 things I was interested in as a kid that might be fun to explore now",
    "10 ways I might try to solve a problem I have",
    "10 names for my next dog",
    "10 names for my next baby boy",
    "10 names for my next baby girl",
    "10 apps I could build",
    "10 ways I could improve my career",
    "10 movie ideas",
];

$(function () {
    initialize();
});

/*
 * Initialize page by loading preliminary functions and processes
 */
initialize = function () {
    // Pick out an idea prompt
    createIdea();
    // Create 10 idea inputs
    generate10();
}

/*
 * Generates 10 idea boxes
 */
generate10 = function () {
    for (let i = 0; i < 10; i++) {
        createIdeaInput();
    }
}

/*
 * Pick idea prompt
 */
createIdea = function () {
    let prompt = ideas[Math.floor((Math.random() * ideas.length) + 1)];
    $("#question").text(prompt);
}

/*
 * Create individual idea inputs (textareas)
 */
createIdeaInput = function () {
    let input = "<div class=\"input-field col s12\"><textarea id=\"idea\" class=\"materialize-textarea validate\"></textarea><label for=\"idea\">Idea</label></div>";
    $("#idea-list").append(input);
}
