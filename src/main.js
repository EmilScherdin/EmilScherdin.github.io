
const test = () => {
    console.log('hello');
}

const tags = {
    YOU: 'ABOUT_YOU',
    WORK: 'ABOUT_WORK',
    CONTACT: 'CONTACT'
};

const types = {
    ELEMENT: 'ELEMENT',
    LETTER: 'LETTER',
    DELAY: 'DELAY',
    FUNC: 'FUNC',
    BOTTOM_SCROLL: 'BOTTOM_SCROLL'
};

const getAsk = () => {
    const qsLeft = question.filter(q => !q.selected);

    console.log(qsLeft);

    if (qsLeft.length === 1) {
        return lastAsk[qsLeft[0].tag];
    }
    else if (qsLeft.length === 2) {
        return secondAsk;
    }

    queDelay(2500);
    return endingWords;
}

const selectQuestion = tag => {

    question.map(q => {
        if (q.tag === tag) {
            q.selected = true;
        }

        return q;
    });
}

const queSpacer = () => {
    queNewElement('DIV', [{class: 'text-spacer'}]);
}
const queDivider = () => {
    queNewElement('DIV', [{class: 'text-divider'}]);
}

const queScroll = () => {
    que.push({ type: types.BOTTOM_SCROLL });
}

const onButtonPress = tag => {
    hideAnswers(tag);
    selectQuestion(tag);
    queDelay(700);

    switch (tag) {
        case tags.YOU:
            TypeOutParagraph(aboutMe, 'about-me-1');
            queDelay(400);
            TypeOutParagraph(aboutMe2, 'about-me-1');
            queDelay(500);
            queSpacer();
            TypeOutParagraph(aboutMe3, 'about-me-3');
            queDelay(200);
            TypeOutParagraph(aboutMe4, 'about-me-3');
            queDelay(300);
            TypeOutParagraph(aboutMe5, 'about-me-3');
            queDelay(200);
            TypeOutParagraph(aboutMe6, 'about-me-3');
            queDelay(500);
            queSpacer();
            TypeOutParagraph(aboutMe7, 'about-me-6');
            queDelay(300);
            TypeOutParagraph(aboutMe8, 'about-me-6');
            queDelay(700);
            TypeOutParagraph(aboutMe9, 'about-me-6');
            queDelay(300);
            TypeOutParagraph(aboutMe10, 'about-me-6');
            queSpacer();
            queDivider();
            break;
        case tags.WORK:
            TypeOutParagraph(aboutWork, 'about-work-1');
            TypeOutParagraph('Heja', 'work-link', {tag: 'A', attrs: [{ href: 'https://heja.io'}], target: 'about-work-1'});
            TypeOutParagraph(aboutWork2, 'about-work-1');
            queDelay(500);
            TypeOutParagraph(aboutWork3, 'about-work-1');
            queDelay(700);
            queSpacer();
            TypeOutParagraph(aboutWork4, 'about-work-4');
            TypeOutParagraph('laget.se', 'work-link-2', {tag: 'A', attrs: [{ href: 'https://laget.se'}], target: 'about-work-4'});
            TypeOutParagraph(aboutWork5, 'about-work-4');
            queDelay(500);
            queSpacer();
            TypeOutParagraph(aboutWork6, 'about-work-6');
            TypeOutParagraph('an email.', 'contact-work-link', {tag: 'A', attrs: [{ href: 'mailto:escherdin@gmail.com'}], target: 'about-work-6'});
            queSpacer();
            queDivider();
            break;
        case tags.CONTACT:
            TypeOutParagraph(contact, 'contact-me-1');
            queDelay(500);
            TypeOutParagraph(contact2, 'contact-me-1');
            TypeOutParagraph(contact3, 'contact-me-1');
            TypeOutParagraph('an email', 'contact-link', {tag: 'A', attrs: [{ href: 'mailto:escherdin@gmail.com'}], target: 'contact-me-1'});
            TypeOutParagraph(contact4, 'contact-me-1');
            queSpacer();
            queDivider();
            break;
        default:
            break;
    }
    
    queDelay(2000);
    queSpacer();
    TypeOutParagraph(getAsk(), 'ask-' + question.filter(q => !q.selected).length);
    que.push({type: types.FUNC, func: showAnswers});
}

const welcomeText = `Hi, I'm Emil.`;

const firstAsk = `What would you like to know about me?`;
const secondAsk = `What would you like to know next?`;
const lastAsk = {
    CONTACT: `Want to know how to contact me?`,
    ABOUT_WORK: `Want to know what I've worked with?`,
    ABOUT_YOU: `Want to know more about me?`,
};
 
const aboutMe = `So, `;
const aboutMe2 = `I'm an energetic guy born in 1995 from Sweden.`;
const aboutMe3 = `There's a lot of things I love, `;
const aboutMe4 = `especially sports. `;
const aboutMe5 = `Any kind of sports. `;
const aboutMe6 = `Mix that up with concepts, designing and talking ideas and you have my perfect day.`;
const aboutMe7 = `My schedule is often full of things to do, `;
const aboutMe8 = `planned into the minutes. `;
const aboutMe9 = `But, `;
const aboutMe10 = ` I always make sure to make time for my friends and to get out in nature and read a good book.`;

const aboutWork = `Today I work with `;
const aboutWork2 = `. `;
const aboutWork3 = `I work with our product & business strategy along with the product design.`;
const aboutWork4 = `Earlier I've been working as a developer, designer, project manager and product strategist for brands like `;
const aboutWork5 = `, Happy Order, and Pliq.`;
const aboutWork6 = `I'm always up for discussing new ideas or concepts, drop me `;

const contact = 'I often like to meet in person over a juice, beer or food. ';
const contact2 = 'But just to kick it off, ';
const contact3 = 'drop me ';
const contact4 = ' :)';

const endingWords = `That's all you get to know about me for now. Thanks for stopping by.`;

const question = [
    { text: 'Something personal', tag: tags.YOU, selected: false },
    { text: `What I've worked with`, tag: tags.WORK, selected: false },
    { text: 'How to contact me', tag: tags.CONTACT, selected: false },
];


const queFunc = (func = () => {}) => {
    que.push({type: types.FUNC, func });
}

const removeButtons = () => {
    question.forEach(q => {
        if (!q.selected) {
            document.getElementById('question-' + q.tag).remove();
        }
    })
}

const hideAnswers = (ignoreTag) => {
    que.push({type: types.FUNC, func: () => addClass('question-' + ignoreTag, 'selected')}); 
    question.forEach(q => {
        if (ignoreTag !== q.tag && !q.selected) {
            que.push({type: types.FUNC, func: () => {
                removeClass('question-' + q.tag, 'show');
                addClass('question-' + q.tag, 'hide');
            }});
        }
    });
    queDelay(600);
    queFunc(removeButtons);
};

const showAnswers = () => {
    const buttonsTemplate = document.getElementById('buttons-template').innerHTML;

    const items = question.filter(q => !q.selected);
    if (items.length === 1) {
        items[0].text = 'Yes please';
    }
    var rendered = Mustache.render(buttonsTemplate, { items });
    
    //fade them in
    document.getElementById('content').innerHTML += rendered;  
    question.filter(q => !q.selected).forEach(q => {
        queFunc(() => addClass('question-' + q.tag, 'show'));
    });
    queDelay(400);
    queScroll();
}

const addClass = (target, classname) => {
    document.getElementById(target).classList.add(classname);
}

const removeClass = (target, classname) => {
    document.getElementById(target).classList.remove(classname);
}

const addLetter = (targetId, letter) => {
    const node = document.getElementById(targetId);
    node.innerHTML += letter;
}

const createElement = (tag, attrs = [], target = 'content') => {
    console.log(target);
    const el = document.createElement(tag);
    attrs.forEach(attr => {
        const keys = Object.keys(attr);
        el.setAttribute(keys[0], attr[keys[0]]); 
    });
    document.getElementById(target).appendChild(el);
}

const queNewElement = (tag, attrs = [], target) => {
   que.push({ type: types.ELEMENT, tag, attrs, target });
}

const TypeOutParagraph = (text, targetId, element = {tag: 'P', attrs: []}) => {
    console.log('el', element.target);
    const attributes = [...element.attrs, { id: targetId }];
    queNewElement(element.tag, attributes, element.target);

    text.split('').forEach((letter, i) => {
        que.push({type: types.LETTER, text: letter, targetId});
    });
}

const queDelay = delay => {
    que.push({type: types.DELAY, delay });
}

const start = () => {
    TypeOutParagraph(welcomeText, 'text-hi');
    queSpacer();
    queDelay(900);
    TypeOutParagraph(firstAsk, 'ask-first');  
    que.push({type: types.FUNC, func: showAnswers });
}

const scrollToBottom = () => {
    //YEY new API works good in chrome, let's just stick with this, the other browsers will catch uo..
    document.getElementById('scroll-anchor').scrollIntoView({behavior: 'smooth', lock: "end", inline: 'end'});
}
 
const que = [];

const queConsumer = (defaultDelay = 20) => {
    let delay = defaultDelay;

    if (que.length > 0) {
        const current = que.shift();
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

    setTimeout(() => {
        queConsumer();  
    }, delay);
}

setTimeout(() => {
    queConsumer();
    start();
}, 2000);
