'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var test = function test() {
    console.log('hello');
};

var tags = {
    YOU: 'ABOUT_YOU',
    WORK: 'ABOUT_WORK',
    CONTACT: 'CONTACT'
};

var types = {
    ELEMENT: 'ELEMENT',
    LETTER: 'LETTER',
    DELAY: 'DELAY',
    FUNC: 'FUNC',
    BOTTOM_SCROLL: 'BOTTOM_SCROLL'
};

var getAsk = function getAsk() {
    var qsLeft = question.filter(function (q) {
        return !q.selected;
    });

    console.log(qsLeft);

    if (qsLeft.length === 1) {
        return lastAsk[qsLeft[0].tag];
    } else if (qsLeft.length === 2) {
        return secondAsk;
    }

    queDelay(3000);
    return endingWords;
};

var selectQuestion = function selectQuestion(tag) {

    question.map(function (q) {
        if (q.tag === tag) {
            q.selected = true;
        }

        return q;
    });
};

var queSpacer = function queSpacer() {
    queNewElement('DIV', [{ class: 'text-spacer' }]);
};
var queDivider = function queDivider() {
    queNewElement('DIV', [{ class: 'text-divider' }]);
};

var queScroll = function queScroll() {
    que.push({ type: types.BOTTOM_SCROLL });
};

var onButtonPress = function onButtonPress(tag) {
    hideAnswers(tag);
    selectQuestion(tag);
    queDelay(1000);

    switch (tag) {
        case tags.YOU:
            TypeOutParagraph(aboutMe, 'about-me-1');
            queDelay(500);
            TypeOutParagraph(aboutMe2, 'about-me-1');
            queDelay(600);
            queSpacer();
            TypeOutParagraph(aboutMe3, 'about-me-3');
            queDelay(300);
            TypeOutParagraph(aboutMe4, 'about-me-3');
            queDelay(400);
            TypeOutParagraph(aboutMe5, 'about-me-3');
            queDelay(300);
            TypeOutParagraph(aboutMe6, 'about-me-3');
            queDelay(600);
            queSpacer();
            TypeOutParagraph(aboutMe7, 'about-me-6');
            queDelay(400);
            TypeOutParagraph(aboutMe8, 'about-me-6');
            queDelay(1000);
            TypeOutParagraph(aboutMe9, 'about-me-6');
            queDelay(400);
            TypeOutParagraph(aboutMe10, 'about-me-6');
            queSpacer();
            queDivider();
            break;
        case tags.WORK:
            TypeOutParagraph(aboutWork, 'about-work-1');
            TypeOutParagraph('Heja', 'work-link', { tag: 'A', attrs: [{ href: 'https://heja.io' }], target: 'about-work-1' });
            TypeOutParagraph(aboutWork2, 'about-work-1');
            queDelay(600);
            TypeOutParagraph(aboutWork3, 'about-work-1');
            queDelay(1000);
            queSpacer();
            TypeOutParagraph(aboutWork4, 'about-work-4');
            TypeOutParagraph('laget.se', 'work-link-2', { tag: 'A', attrs: [{ href: 'https://laget.se' }], target: 'about-work-4' });
            TypeOutParagraph(aboutWork5, 'about-work-4');
            queDelay(600);
            queSpacer();
            TypeOutParagraph(aboutWork6, 'about-work-6');
            TypeOutParagraph('an email.', 'contact-work-link', { tag: 'A', attrs: [{ href: 'mailto:escherdin@gmail.com' }], target: 'about-work-6' });
            queSpacer();
            queDivider();
            break;
        case tags.CONTACT:
            TypeOutParagraph(contact, 'contact-me-1');
            queDelay(600);
            TypeOutParagraph(contact2, 'contact-me-1');
            TypeOutParagraph(contact3, 'contact-me-1');
            TypeOutParagraph('an email', 'contact-link', { tag: 'A', attrs: [{ href: 'mailto:escherdin@gmail.com' }], target: 'contact-me-1' });
            TypeOutParagraph(contact4, 'contact-me-1');
            queSpacer();
            queDivider();
            break;
        default:
            break;
    }

    queDelay(3000);
    queSpacer();
    TypeOutParagraph(getAsk(), 'ask-' + question.filter(function (q) {
        return !q.selected;
    }).length);
    que.push({ type: types.FUNC, func: showAnswers });
};

var welcomeText = 'Hi, I\'m Emil.';

var firstAsk = 'What would you like to know about me?';
var secondAsk = 'What would you like to know next?';
var lastAsk = {
    CONTACT: 'Want to know how to contact me?',
    ABOUT_WORK: 'Want to know what I\'ve worked with?',
    ABOUT_YOU: 'Want to know more about me?'
};

var aboutMe = 'Sooo, ';
var aboutMe2 = 'I\'m an energetic guy born in 1995 from Sweden.';
var aboutMe3 = 'There\'s a lot of things I love, ';
var aboutMe4 = 'especially sports. ';
var aboutMe5 = 'Any kind of sports really. ';
var aboutMe6 = 'Mix that up with concepts, designing and talking ideas and you have my perfect day.';
var aboutMe7 = 'My schedule is often full of things to do, ';
var aboutMe8 = 'planned into the minutes. ';
var aboutMe9 = 'But at the same time, ';
var aboutMe10 = ' I always make sure to make time for my friends and to get out in nature and reed a good book.';

var aboutWork = 'Today I work with ';
var aboutWork2 = '. ';
var aboutWork3 = 'I lead the product team, work with our product & business strategy along with the product design.';
var aboutWork4 = 'Earlier I\'ve been working as a developer, designer and product strategist for brands like ';
var aboutWork5 = ', Happy Order, and Pliq.';
var aboutWork6 = 'I\'m always up for discussing new ideas or concepts, drop me ';

var contact = 'I often like to meet in person over a juice, beer or food. ';
var contact2 = 'But just to kick it off, ';
var contact3 = 'drop me ';
var contact4 = ' :)';

var endingWords = 'That\'s all you get to know about me for now. Thanks for stopping by.';

var question = [{ text: 'Something personal', tag: tags.YOU, selected: false }, { text: 'What I\'ve worked with', tag: tags.WORK, selected: false }, { text: 'How to contact me', tag: tags.CONTACT, selected: false }];

var queFunc = function queFunc() {
    var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    que.push({ type: types.FUNC, func: func });
};

var removeButtons = function removeButtons() {
    question.forEach(function (q) {
        if (!q.selected) {
            document.getElementById('question-' + q.tag).remove();
        }
    });
};

var hideAnswers = function hideAnswers(ignoreTag) {
    que.push({ type: types.FUNC, func: function func() {
            return addClass('question-' + ignoreTag, 'selected');
        } });
    question.forEach(function (q) {
        if (ignoreTag !== q.tag && !q.selected) {
            que.push({ type: types.FUNC, func: function func() {
                    removeClass('question-' + q.tag, 'show');
                    addClass('question-' + q.tag, 'hide');
                } });
        }
    });
    queDelay(750);
    queFunc(removeButtons);
};

var showAnswers = function showAnswers() {
    var buttonsTemplate = document.getElementById('buttons-template').innerHTML;

    var items = question.filter(function (q) {
        return !q.selected;
    });
    if (items.length === 1) {
        items[0].text = 'Yes please';
    }
    var rendered = Mustache.render(buttonsTemplate, { items: items });

    //fade them in
    document.getElementById('content').innerHTML += rendered;
    question.filter(function (q) {
        return !q.selected;
    }).forEach(function (q) {
        queFunc(function () {
            return addClass('question-' + q.tag, 'show');
        });
    });
    queDelay(500);
    queScroll();
};

var addClass = function addClass(target, classname) {
    document.getElementById(target).classList.add(classname);
};

var removeClass = function removeClass(target, classname) {
    document.getElementById(target).classList.remove(classname);
};

var addLetter = function addLetter(targetId, letter) {
    var node = document.getElementById(targetId);
    node.innerHTML += letter;
};

var createElement = function createElement(tag) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'content';

    console.log(target);
    var el = document.createElement(tag);
    attrs.forEach(function (attr) {
        var keys = Object.keys(attr);
        el.setAttribute(keys[0], attr[keys[0]]);
    });
    document.getElementById(target).appendChild(el);
};

var queNewElement = function queNewElement(tag) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var target = arguments[2];

    que.push({ type: types.ELEMENT, tag: tag, attrs: attrs, target: target });
};

var TypeOutParagraph = function TypeOutParagraph(text, targetId) {
    var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { tag: 'P', attrs: [] };

    console.log('el', element.target);
    var attributes = [].concat(_toConsumableArray(element.attrs), [{ id: targetId }]);
    queNewElement(element.tag, attributes, element.target);

    text.split('').forEach(function (letter, i) {
        que.push({ type: types.LETTER, text: letter, targetId: targetId });
    });
};

var queDelay = function queDelay(delay) {
    que.push({ type: types.DELAY, delay: delay });
};

var start = function start() {
    TypeOutParagraph(welcomeText, 'text-hi');
    queSpacer();
    queDelay(1500);
    TypeOutParagraph(firstAsk, 'ask-first');
    que.push({ type: types.FUNC, func: showAnswers });
};

var scrollToBottom = function scrollToBottom() {
    //YEY new API works good in chrome, let's just stick with this, the other browsers will catch uo..
    document.getElementById('scroll-anchor').scrollIntoView({ behavior: 'smooth', lock: "end", inline: 'end' });
};

var que = [];

var queConsumer = function queConsumer() {
    var defaultDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

    var delay = defaultDelay;

    if (que.length > 0) {
        var current = que.shift();
        switch (current.type) {
            case types.LETTER:
                addLetter(current.targetId, current.text);
                scrollToBottom();
                break;
            case types.ELEMENT:
                createElement(current.tag, current.attrs, current.target);
                break;
            case types.DELAY:
                delay = current.delay;
            case types.FUNC:
                current.func && current.func();
            case types.BOTTOM_SCROLL:
                scrollToBottom();
            default:
                break;
        }
    }

    setTimeout(function () {
        queConsumer();
    }, delay);
};

setTimeout(function () {
    queConsumer();
    start();
}, 2000);