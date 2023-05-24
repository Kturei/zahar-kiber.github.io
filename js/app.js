function set_text(id, text) {
    document.getElementById(id).innerHTML = text;
}

function reset_text(id) {
    document.getElementById(id).innerHTML = '';
}

function submit() {
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var status = document.getElementById('status');

    if (name == '') {
        status.innerHTML = 'Заполните поле ФИО'
    } else if (email == '') {
        status.innerHTML = 'Заполните E-mail'
    } else if (phone == '') {
        status.innerHTML = 'Заполните телефон обратной связи'
    } else {
        status.innerHTML = `Регестрация прошла успешно. Ваши данные внесены в сайт: ФИО - ${name} e-mail - ${email} телефон - ${phone}`;
    }
}


function set_body_color(color) {
    document.body.style.backgroundColor = color;
}

function set_body_color_classic() {
    document.body.style.backgroundColor = '';
}

function set_input_color() {
    var input_color = document.getElementById('color').value;
    if (input_color == 'negr') {
        document.main.style.backgroundColor = 'black';
    }
    set_body_color(input_color);
}

function set_font_size(id, size) {
    document.getElementById(id).style.fontSize = size;
}

function set_custom_text_button(id, color) {
    document.getElementById(id).style.color = color;
}


function set_custom_text() {
    var input_text_color = document.getElementById('colorText').value;
    var input_text_id = document.getElementById('textId').value;
    set_custom_text_button(input_text_id, input_text_color);
}

function lampOn() {
    document.getElementById('lamp').src = 'images/pic_bulbon.gif';

    document.getElementById('main').style.backgroundColor = '#fff';
    document.getElementById('main').style.color = '#000';
}

function lampOff() {
    document.getElementById('lamp').src = 'images/pic_bulboff.gif';

    document.getElementById('main').style.backgroundColor = '#000';
    document.getElementById('main').style.color = '#fff';
}

function deleteTitle() {
    document.getElementById('title').style.display = 'none';
}

function createButton() {
    var btn = document.createElement('BUTTON');

    btn.innerHTML = 'новая кнопка';
    document.getElementById('buttonList').appendChild(btn);
}

function createP() {
    var btn = document.createElement('P');

    btn.innerHTML = 'новая кнопка';
    document.getElementById('Plist').appendChild(btn);
}
// Создания объекта
var person = new Object();
// Добавления свойств со значениями
person.name = 'Прохор'
person.surname = 'Пупкин'
person.age = '88 года'
person.weight = '50 кг'
person.fullname = function() {
    return this.name + ' ' + this.surname;
}

function showPerson() {
document.getElementById('person').innerHTML =  person.fullname() + '; ' + person.age + '; ' + person.weight;
}

var avto = new Object();
avto.brend = 'Merseder-Benz'
avto.package = 'Amg'
avto.model = 'Gle coupe'
avto.color = 'Белая'
avto.year = '2022'
avto.fullAvto = function() {
    return avto.brend + ' ' + avto.package;
}
function showAvto() {
    document.getElementById('avto').innerHTML = `Марка машины: ${avto.fullAvto()}<br>Модель: ${avto.model}<br> Цвет: ${avto.color}<br>Год выпуска: ${avto.year}`
}

let cat = {
    poroda: 'Sphinx',
    color: 'white',
    age: '3 y.o.',
}

cat.eyes = 'green'


cat.showInfo = function() {
    document.getElementById('cat').innerHTML = 
    `Порода: ${cat.poroda}<br>
    Цвет: ${cat.color}<br>
    Годы жизни ${cat.age}<br>
    Глаза: ${cat.eyes}<br>`
}

const questions = [
    {
        question: 'Вопрос 1',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no',
        },
        rightAnswer: '3'
    },
    {
        question: 'Вопрос 2',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no',
        },
        rightAnswer: '3'
    },
    {
        question: 'Вопрос 3',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'no',
            4: 'no',
        },
        rightAnswer: '1'
    }
]

let testContainer = document.getElementById('test');
let resultButton = document.getElementById('resultButton')
let resultContainer = document.getElementById('result')

function generateTest(questions, testContainer, resultContainer, resultButton) {
    let out = [];
    let answers;

    for(let i=0; i<questions.length; i++) {
        answers = [];
        for(let ans_text in questions[i].answers) {
            answers.push(
                `<label><br><input type="radio" name="question${i}" value="${ans_text}"> ${ans_text}) ${questions[i].answers[ans_text]} </label>`
            );
        }
        out.push(
            `<div class="question"> ${questions[i].question} </div>
            <div class='answers'> ${answers.join('')} </div>`
        )
    }
testContainer.innerHTML = out.join('');
}

generateTest(questions, testContainer, resultContainer, resultButton);

function showResults(question, testContainer, resultContainer) {
    let answerContainers = testContainer.querySelectorAll('.answers');

    let userAnswer = '';
    let rightAnswersNum = 0

    for(let i=0; i<question.lenhth; i++){

    }
}