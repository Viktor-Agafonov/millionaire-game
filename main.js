class Questions {
    constructor(questions, answerA, answerB, answerC, answerD, text, prize, correctAnswer, amountFireproof) {
        this.questions = questions;
        this.prize = prize;
        this.correctAnswer = correctAnswer;
        this.text = text;
        this.answers = {};
        this.answers.answerA = answerA;
        this.answers.answerB = answerB;
        this.answers.answerC = answerC;
        this.answers.answerD = answerD;
        this.amountFireproof = amountFireproof;
    }
}

let questionsArray = [
    new Questions('1. Какую страну не относят к Скандинавии?', 'a) Норвегию', 'b) Швецию', 'c) Данию', 'd) Нидерланды' , 'Вопрос на 500$ за правильный ответ', 500, 'd) Нидерланды', 0),
    new Questions('2. Как называются факты, за которыми гоняются журналисты?', 'a) жаренные', 'b) вяленные', 'c) пареные', 'd) с душком', 'Вопрос на 1000$ за правильный ответ', 1000, 'a) жаренные', 0),
    new Questions('3. Какой баланс бухгалтер предприятия приносит в налоговую инспекцию?', 'a) Годовой', 'b) Пятилетний', 'c) Кислотно-щелочной', 'd) Многолетний', 'Вопрос на 2000$ за правильный ответ', 2000, 'a) Годовой', 0),
    new Questions('4. Чем покачивали мушкетеры в песне Михаила Боярского?', 'a) Бедрами', 'b) Перьями', 'c) Шпагами', 'd) Головами', 'Вопрос на 3000$ за правильный ответ', 3000, 'b) Перьями', 0),
    new Questions('5. Слияние человеческого торса с туловищем какого животного позволяло кентаврам быстро бегать?', 'a) Лось', 'b) Гепард', 'c) Конь', 'd) Олень', 'Вопрос на 5000$ за правильный ответ', 5000, 'c) Конь', 0),
    new Questions('6. Что иногда делает человек со своим невостребованным талантом?', 'a) Зарывает в землю', 'b) Топит в пруду', 'c) Выбрасывает на свалку', 'd) Сдает в ломбард', 'Вопрос на 8000$ за правильный ответ.', 8000, 'a) Зарывает в землю', 5000),
    new Questions('7. Какое имя было самым распространенным у шведских королей?', 'a) Карл', 'b) Густав', 'c) Фредрик', 'd) Оскар', 'Вопрос на 10000$ за правильный ответ', 10000, 'a) Карл', 5000),
    new Questions('8. Флаг какого святого не является частью флага Великобритании?', 'a) святого Андрея', 'b) святого Петра', 'c) святого Патрика', 'd) святого Георгия', 'Вопрос на 13000$ за правильный ответ', 13000, 'b) святого Петра', 5000),
    new Questions('9. Какого романа нет у Артура Хейли?', 'a) «Аэропорт»', 'b) «Отель»', 'c) «Больница»', 'd) «Колеса»' ,'Вопрос на 15000$ за правильный ответ', 15000, 'c) «Больница»', 5000),
    new Questions('10. Один из видов какого насекомого признали самым быстрым в мире?', 'a) комар', 'b) майский жук', 'c) шершень', 'd) слепень', 'Вопрос на 25000$ за правильный ответ', 25000, 'd) слепень', 5000),
    new Questions('11. Оттенком какого цвета является «ниагара»?', 'a) зеленого', 'b) красного', 'c) синего', 'd) желтого', 'Вопрос на 50000$ за правильный ответ', 50000, 'c) синего', 25000),
    new Questions('12. Кто из персонажей комедии дель арте говорил на ломаном итальянском языке с сильным испанским акцентом?', 'a) Капитан', 'b) Панталоне', 'c) Доктор', 'd) Арлекин', 'Вопрос на 100000$ за правильный ответ', 100000, 'a) Капитан', 25000),
    new Questions('13. Как часто называют лидера музыкальной группы?', 'a) фрондер', 'b) фронтон', 'c) фронтмен', 'd) афронт', 'Вопрос на 250000$ за правильный ответ', 250000, 'c) фронтмен', 25000),
    new Questions('14. Кто из этих шутов персонаж романа Дюма «Графиня де Монсоро»?', 'a) Балакирев', 'b) Риголетто', 'c) Йорик', 'd) Шико', 'Вопрос на 500000$ за правильный ответ', 500000, 'd) Шико', 25000),
    new Questions('15. Какое имя не принимал ни один папа римский?', 'a) Валентин', 'b) Евгений', 'c) Григорий', 'd) Виктор', 'Вопрос на 1000000$ за правильный ответ', 1000000, 'c) Григорий', 25000),
];

let questionsDiv = document.querySelector(".questions");
let textDiv = document.querySelector(".infoMenu");
let templateWin = document.querySelector('#templateWin');
let templateLose = document.querySelector('#templateLose');
let templateHelpButtonAudience = document.querySelector('#templateHelpButtonAudience');
let answersDiv = document.querySelector('.answers');
let templateInfoMenu = document.querySelector('#templateInfoMenu');
let takeMoney = document.querySelector('#takeMoney');
let templateCallFriends = document.querySelector('#templateCallFriends');
let helpButtonAudienceBackground = document.querySelector('#helpButtonAudience');
let helpButtonPhoneBackground = document.querySelector('#helpButtonPhone');
let helpButtonFiftyBackground = document.querySelector('#helpButtonFifty');
let trGallery = document.querySelectorAll('#table tr');

let prizeWin = 0;
let correctAnswer = '';
let questionText = '';
let amountFireproof = 0;
let action;
let clickAction;
let actionDataset;
let countIndex = 1;
let indexTemplateInfoMenu = 1;
let stopFn = false;
let trValue;
let trArrayRevers = Array.from(trGallery);
let trArray = trArrayRevers.reverse();
let arrayFromAnswer;

document.querySelector('#startButton').addEventListener('click', startGame);
document.querySelector('#continueButton').addEventListener('click', continueGame);
document.querySelector('#takeMoneyButton').addEventListener('click', takeMoneyGame);

function startGame() {
    this.removeEventListener('click', startGame);
    action = '';
    showQuestionsAnswersBlock(0);
    answersDiv.addEventListener('click', clickAnswers,);
    showTemplateInfoMenu();
    helpButtonAudienceBackground.classList.remove('helpButtonAudienceFinish');
    helpButtonAudienceBackground.classList.add('iconAudience');
    helpButtonPhoneBackground.classList.remove('helpButtonPhoneFinish');
    helpButtonPhoneBackground.classList.add('iconPhone');
    helpButtonFiftyBackground.classList.remove('helpButtonFiftyFinish');
    helpButtonFiftyBackground.classList.add('iconFifty');
    document.querySelector('#helpButtonPhone').addEventListener('click', showCallFriends);
    document.querySelector('#helpButtonFifty').addEventListener('click', showHelpFiftyButton);
    document.querySelector('#helpButtonAudience').addEventListener('click', showHelpButtonAudience);
}

function showQuestionsAnswersBlock (index){
    const questionsValue = questionsArray[index];
    trValue = trArray[index];
    trValue.classList.add('trNormalColor')
    correctAnswer = questionsArray[index].correctAnswer;
    prizeWin = questionsArray[index].prize;
    questionText = questionsArray[index].text;
    amountFireproof = questionsArray[index].amountFireproof;
    arrayFromAnswer = document.querySelectorAll('.answer')

    questionsDiv.textContent = questionsValue.questions;
    document.querySelector('.firstAnswer').textContent = questionsValue.answers.answerA;
    document.querySelector('.secondAnswer').textContent = questionsValue.answers.answerB;
    document.querySelector('.thirdAnswer').textContent = questionsValue.answers.answerC;
    document.querySelector('.fourthAnswer').textContent = questionsValue.answers.answerD;

}

function clickAnswers(e) {
    if (!stopFn) {
        if (e.target === this){
        this.stopPropagation();
        }
        stopFn = true;
        action = e.target.textContent;
        actionDataset = e.target.dataset.action
        clickAction = e.target;
        if (action === correctAnswer) {
            clickAction.classList.remove('answer');
            clickAction.classList.add('clickAnswerStyleWin');
            trValue.classList.add('trWinColor')
            showTemplateWin();
        }
        else if (action === questionsArray[14].correctAnswer){
            showGameWinMoney();
        }
        else if (action !== correctAnswer) {
            clickAction.classList.remove('answer');
            clickAction.classList.add('clickAnswerStyleLose');
            trValue.classList.add('trLoseColor');
            showTemplateLose();
        }
    }
}

function continueGame (){
    stopFn = false;
    trValue.classList.remove('trWinColor');
    trValue.classList.remove('trLoseColor');
    clickAction.classList.remove('clickAnswerStyleWin');
    clickAction.classList.remove('clickAnswerStyleLose');
    trValue.classList.remove('trNormalColor');
    clickAction.classList.add('answer');
    removeStyleFiftyArray();
    textDiv.innerHTML = '';
    // questionText = questionsArray[indexTemplateInfoMenu].text;
    indexTemplateInfoMenu++;
    showTemplateInfoMenu();
    if (action === correctAnswer){
        showQuestionsAnswersBlock(countIndex);
        countIndex++;
    } else {
        let loseNewGame = confirm(`Желаете начать игру заново?`);
        if (loseNewGame){
            textDiv.innerHTML = '';
            countIndex = 1;
            startGame();
        } else {
            textDiv.innerHTML = '';
            countIndex = 1;
            alert(`Возвращайтесь! Bye!`);
            showGameOver();
        }
    }
}

function takeMoneyGame() {
    if (action === correctAnswer) {
        textDiv.innerHTML = '';
        showTakeMoney();
        correctAnswer = false;
        indexTemplateInfoMenu = 1;
        countIndex = 1;
        removeStyleFiftyArray();
    }
}

function showTemplateInfoMenu() {
    let templateInfoMenuClone = templateInfoMenu.content.cloneNode(true);
    templateInfoMenuClone.querySelector('#templateInfo').textContent = questionText;
    textDiv.appendChild(templateInfoMenuClone);
}

function showTemplateWin() {
    let templateWinClone = templateWin.content.cloneNode(true);
    templateWinClone.querySelector('#prizeWin').textContent = prizeWin;
    templateWinClone.querySelector('#amountFireproof').textContent = amountFireproof;
    textDiv.appendChild(templateWinClone);
    document.querySelector('.HelpAudienceBlock').remove();
}

function showTemplateLose() {
    let templateLoseClone = templateLose.content.cloneNode(true);
    templateLoseClone.querySelector('#prizeLose').textContent = amountFireproof;
    textDiv.appendChild(templateLoseClone);
    document.querySelector('.HelpAudienceBlock').remove();
}

function showTakeMoney() {
    let takeMoneyClone = takeMoney.content.cloneNode(true);
    takeMoneyClone.querySelector('#prizeTakeMoney').textContent = prizeWin;
    textDiv.appendChild(takeMoneyClone);
}

function showGameWinMoney() {
    let gameWinMoney = document.querySelector('#gameWinMoney');
    let gameWinMoneyClone = gameWinMoney.content.cloneNode(true);
    textDiv.appendChild(gameWinMoneyClone);
}

function showGameOver() {
    let gameOver = document.querySelector('#gameOver');
    let gameOverClone = gameOver.content.cloneNode(true);
    textDiv.appendChild(gameOverClone);
}

function showTemplateHelpButtonAudience() {
    let templateHelpButtonAudienceClone = templateHelpButtonAudience.content.cloneNode(true);
    textDiv.appendChild(templateHelpButtonAudienceClone);
}

function showTemplateCallFriends() {
    let templateCallFriendsClone = templateCallFriends.content.cloneNode(true);
    templateCallFriendsClone.querySelector('#callFriendsCorrectAnswer').textContent = correctAnswer;
    textDiv.appendChild(templateCallFriendsClone);
}

function showHelpButtonAudience (){
    showTemplateHelpButtonAudience()
    let arrayForAudience = [];
    givRandomArrayForAudience(arrayForAudience);
    let arrayBlock = document.querySelectorAll('.HelpAudienceInterest');
    let arrayLine = document.querySelectorAll('.HelpAudienceDivLine');
    let index2 = 0;
    for (let index = 0; index < arrayFromAnswer.length; index++) {
        const answerValue = arrayFromAnswer[index].textContent;
        index2++;
        if (answerValue === correctAnswer) {
            arrayBlock[index].textContent = arrayForAudience[0] + "%";
            arrayLine[index].style.height = arrayForAudience[0] + "%";
            index2 = index2 - 1;
        } else {
            arrayBlock[index].textContent = arrayForAudience[index2] + "%";
            arrayLine[index].style.height = arrayForAudience[index2] + "%";
        }
    }

    helpButtonAudienceBackground.classList.remove('iconAudience');
    helpButtonAudienceBackground.classList.add('helpButtonAudienceFinish');
    this.removeEventListener('click', showHelpButtonAudience);

}

function givRandomArrayForAudience(value) {
    let randomFirst = randomInteger(50, 70);
    let randomSecond = randomInteger(10, 30);
    let randomThird = randomInteger(5, 20);
    randomIntegerLastIndex();

    function randomIntegerLastIndex() {
        let lastElem = 100 - randomFirst - randomSecond - randomThird;
        if (lastElem <= 0) {
            givRandomArrayForAudience(value);
        } else {
            value.push(randomFirst);
            value.push(randomSecond);
            value.push(randomThird);
            value.push(lastElem);
        }
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}

function showCallFriends() {
    helpButtonPhoneBackground.classList.remove('iconPhone');
    helpButtonPhoneBackground.classList.add('helpButtonPhoneFinish');
    showTemplateCallFriends();
    this.removeEventListener('click', showCallFriends);
}

function showHelpFiftyButton(){
    helpButtonFiftyBackground.classList.remove('iconFifty');
    helpButtonFiftyBackground.classList.add('helpButtonFiftyFinish');
    this.removeEventListener('click', showHelpFiftyButton);
    let arrayHelpFifty = [];
    let arrayHelpFiftyStyle = [];
    givFiftyArray(arrayFromAnswer);
    showStyleFiftyArray();

    function givFiftyArray(array) {
        for (let i = 0; i < 2; i++) {
            let r = Math.floor(Math.random() * array.length);
            let value = array[r].textContent;
            let valueStyle = array[r];
            if (value === correctAnswer) {
                i--;
            } else if (value === arrayHelpFifty[0]) {
                i--;
            } else {
                arrayHelpFifty.push(value);
                arrayHelpFiftyStyle.push(valueStyle);
            }
        }
    }

    function showStyleFiftyArray() {
        arrayHelpFiftyStyle.forEach(value => {
            value.classList.remove('answer');
            value.classList.add('clickHelpFiftyStyle');
        });
    }
}

function removeStyleFiftyArray() {
    arrayFromAnswer.forEach(value => {
        value.classList.remove('clickHelpFiftyStyle');
        value.classList.add('answer');
    });
}

