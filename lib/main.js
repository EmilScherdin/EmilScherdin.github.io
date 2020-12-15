'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

    if (qsLeft.length === 1) {
        return lastAsk[qsLeft[0].tag];
    } else if (qsLeft.length === 2) {
        return secondAsk;
    }

    queDelay(2500);
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
    queDelay(700);

    // Yeah I agree, this is ugly.. But better done than perfect
    switch (tag) {
        case tags.YOU:
            TypeOutParagraph(aboutMe[0], 'about-me-1', 400);
            TypeOutParagraph(aboutMe[1], 'about-me-1', 500);
            queSpacer();
            TypeOutParagraph(aboutMe[2], 'about-me-3', 200);
            TypeOutParagraph(aboutMe[3], 'about-me-3', 300);
            TypeOutParagraph(aboutMe[4], 'about-me-3', 200);
            TypeOutParagraph(aboutMe[5], 'about-me-3', 500);
            queSpacer();
            TypeOutParagraph(aboutMe[6], 'about-me-6', 300);
            TypeOutParagraph(aboutMe[7], 'about-me-6', 700);
            TypeOutParagraph(aboutMe[8], 'about-me-6', 300);
            TypeOutParagraph(aboutMe[9], 'about-me-6');
            queSpacer();
            queDivider();
            break;
        case tags.WORK:
            TypeOutParagraph(aboutWork[0], 'about-work-1');
            TypeOutParagraph('Heja', 'work-link', null, { tag: 'A', attrs: [{ href: 'https://heja.io' }], target: 'about-work-1' });
            TypeOutParagraph(aboutWork[1], 'about-work-1', 500);
            TypeOutParagraph(aboutWork[2], 'about-work-1', 700);
            queSpacer();
            TypeOutParagraph(aboutWork[3], 'about-work-4');
            TypeOutParagraph('laget.se', 'work-link-2', null, { tag: 'A', attrs: [{ href: 'https://laget.se' }], target: 'about-work-4' });
            TypeOutParagraph(aboutWork[4], 'about-work-4', 500);
            queSpacer();
            TypeOutParagraph(aboutWork[5], 'about-work-6');
            TypeOutParagraph('an email.', 'contact-work-link', null, { tag: 'A', attrs: [{ href: 'mailto:escherdin@gmail.com' }], target: 'about-work-6' });
            queSpacer();
            queDivider();
            break;
        case tags.CONTACT:
            TypeOutParagraph(contact[0], 'contact-me-1', 500);
            TypeOutParagraph(contact[1], 'contact-me-1');
            TypeOutParagraph(contact[2], 'contact-me-1');
            TypeOutParagraph('an email', 'contact-link', null, { tag: 'A', attrs: [{ href: 'mailto:escherdin@gmail.com' }], target: 'contact-me-1' });
            TypeOutParagraph(contact[3], 'contact-me-1');
            queSpacer();
            queDivider();
            break;
        default:
            break;
    }

    queDelay(2000);
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

var aboutMe = ['So, ', 'I\'m an energetic guy born in \xD6rebro, living in Stockholm.', 'There\'s a lot of things I love, ', 'especially sports. ', 'Any kind of sports. ', 'Mix that up with concepts, designing, talking ideas and world problems and it\'s my perfect day.', 'My schedule is often tight packaged of things to do, ', 'planned into the minutes. ', 'But, ', 'I always make sure to make time for my friends, get out in nature and to read a good book.'];
var aboutWork = ['Today I work with ', '. ', // Like what? No one will understand this code mess. But what to do for UX. Imagine a life without clickable links..
'I work with our product & business strategy along with the product design.', 'Earlier I\'ve been working as a developer, designer, project manager and product strategist for brands like ', ', Happy Order, and Emax.', 'I\'m always up for discussing new ideas or concepts, drop me '];

var contact = ['I often like to meet in person over a juice, beer or food. ', 'But just to kick it off, ', 'drop me ', ' :)'];

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
    queDelay(600);
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
    queDelay(400);
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
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var element = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { tag: 'P', attrs: [] };

    var attributes = [].concat(_toConsumableArray(element.attrs), [{ id: targetId }]);
    queNewElement(element.tag, attributes, element.target);

    text.split('').forEach(function (letter, i) {
        que.push({ type: types.LETTER, text: letter, targetId: targetId });
    });

    if (delay) {
        queDelay(delay);
    }
};

var queDelay = function queDelay(delay) {
    que.push({ type: types.DELAY, delay: delay });
};

var start = function start() {
    TypeOutParagraph(welcomeText, 'text-hi');
    queSpacer();
    queDelay(900);
    TypeOutParagraph(firstAsk, 'ask-first');
    que.push({ type: types.FUNC, func: showAnswers });
};

var scrollToBottom = function scrollToBottom() {
    //Yey, new API works good in chrome, let's just stick with this, the other browsers will catch uo..
    document.getElementById('scroll-anchor').scrollIntoView({ behavior: 'smooth', lock: "end", inline: 'end' });
};

var que = [];

var queConsumer = function queConsumer() {
    var defaultDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

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