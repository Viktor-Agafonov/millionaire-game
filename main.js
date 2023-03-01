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

let forRendQuestionsArray = [
    [
        new Questions('1. Який герой мультфільму живе в ананасі під морем?', 'a) Камбала', 'b) Немо', 'c) Рік і Морті', 'd) Губка Боб Квадратні Штани', 'Питання на 500$ за правильну відповідь', 500, 'd) Губка Боб Квадратні Штани', 0),
        new Questions('1. Як називають дзвін годинника у Вестмінстерському палаці в Лондоні?', 'a) Біг Бен', 'b) Броненосець', 'c) Калабаш', 'd) Мумія', 'Питання на 500$ за правильну відповідь', 500, 'a) Біг Бен', 0),
        new Questions('1. Який перший безалкогольний напій винесли в космос?', 'a) Пепсі', 'b) Fanta', 'c) Кока-Кола', 'd) Snapple', 'Питання на 500$ за правильну відповідь', 500, 'c) Кока-Кола', 0),
        new Questions('1. У «Трьох поросятах» з чого зроблений найміцніший будинок?', 'a) Цегла', 'b) Палички', 'c) Солома', 'd) бамбук', 'Питання на 500$ за правильну відповідь', 500, 'a) Цегла', 0),
        new Questions('1. Як називаються факти, за якими ганяються журналісти?', 'a) смажені', "b) в'ялені", 'c) парені', 'd) з душком', 'Питання на 500$ за правильну відповідь', 500, 'a) смажені', 0),
        new Questions('1. Як називають тварин, які харчуються тільки рослинами?', 'a) Хижі', "b) Травоїдні тварини", 'c) Всеїдні тварини', 'd) Вегетаріанська', 'Питання на 500$ за правильну відповідь', 500, 'b) Травоїдні тварини', 0),
    ],
    [
        new Questions('2. Який баланс бухгалтер підприємства приносить до податкової інспекції?', 'a) Річний', "b) П'ятирічний", 'c) Кислотно-лужний', 'd) Багаторічний', 'Вопрос на 1000$ за правильный ответ', 1000, 'a) Річний', 0),
        new Questions('2. Чим погойдували мушкетери в пісні Михайла Боярського?', 'a) Стегнами ', "b) Пір'ями", 'c) Шпагами', 'd) Головами', 'Вопрос на 1000$ за правильный ответ', 1000, "b) Пір'ями", 0),
        new Questions('2. Що іноді робить людина зі своїм незатребуваним талантом?', 'a) Зариває в землю', 'b) Топить у ставку', 'c) Викидає на смітник', 'd) Здає в ломбард', 'Вопрос на 1000$ за правильный ответ', 1000, 'a) Зариває в землю', 0),
        new Questions('2. Який вид спорту грають на мітлах, грають у Гаррі Поттера?', 'a) Вибуховий знімок', 'b) Перегони крилатих коней', 'c) QuadPod', 'd) Квідич', 'Вопрос на 1000$ за правильный ответ', 1000, 'd) Квідич', 0),
        new Questions('2. Який автор написав книги «Гра престолів».?', 'a) CS Льюїс', 'b) Джордж Р. Р. Мартін', 'c) Дж.Р.Р.Толкін', 'd) Дж. К. Роулінг', 'Вопрос на 1000$ за правильный ответ', 1000, 'b) Джордж Р. Р. Мартін', 0),
    ],
    [
        new Questions('3. Яка країна не належить до Скандинавії?', 'a) Норвегія', 'b) Швеція', 'c) Данія', 'd) Нідерланди', 'Вопрос на 2000$ за правильный ответ', 2000, 'd) Нідерланди', 0),
        new Questions('3. В якій країні знаходиться Прага?', 'a) Іспанія', 'b) Бразилія', 'c) Чеська Республіка', 'd) Англія', 'Вопрос на 2000$ за правильный ответ', 2000, 'c) Чеська Республіка', 0),
        new Questions('3. У «Матриці» якого кольору таблетка, яку приймає Нео?', 'a) червоний', 'b) Синій', 'c) Зелений', 'd) Жовтий', 'Вопрос на 2000$ за правильный ответ', 2000, 'a) червоний', 0),
        new Questions('3. Злиття людського торсу з тулубом якої тварини дозволяло кентаврам швидко бігати?', 'a) Лось', 'b) Гепард', 'c) Кінь', 'd) Олень', 'Вопрос на 2000$ за правильный ответ', 2000, 'c) Кінь', 0),
        new Questions('3. Талісманом якого ресторану є клоун?', 'a) Макдональдс', 'b) Burger King', 'c) KFC', 'd) Маленькі Цезарі', 'Вопрос на 2000$ за правильный ответ', 2000, 'a) Макдональдс', 0),
    ],
    [
        new Questions('4. Один з видів якої комахи визнали найшвидшим у світі?', 'a) комар', 'b) травневий жук', 'c) шершень', 'd) сліпінь', 'Вопрос на 3000$ за правильный ответ', 3000, 'd) сліпінь', 0),
        new Questions("4. Яке ім'я було найпоширенішим у шведських королів?", 'a) Карл', 'b) Густав', 'c) Фредрік', 'd) Оскар', 'Вопрос на 3000$ за правильный ответ', 3000, 'a) Карл', 0),
        new Questions('4. Відтінком якого кольору є «ніагара»?', 'a) зеленого', 'b) червоного', 'c) синього', 'd) жовтого', 'Вопрос на 3000$ за правильный ответ', 3000, 'c) синього', 0),
        new Questions('4. Як часто називають лідера музичного гурту?', 'a) фрондер', 'b) фронтон', 'c) фронтмен', 'd) афронт', 'Вопрос на 3000$ за правильный ответ', 3000, 'c) фронтмен', 0),
        new Questions('4. Яка найменша країна світу?', 'a) Мальта', 'b) Мальдіви', 'c) Ватикан', 'd) Монако', 'Вопрос на 3000$ за правильный ответ', 3000, 'c) Ватикан', 0),
    ],
    [
        new Questions('5. З яких двох тварин складається австралійський герб?', 'a) Вомбат і валабі', 'b) Змія і павук', 'c) Кенгуру та ему', 'd) Дракон & динго', 'Вопрос на 5000$ за правильный ответ', 5000, 'c) Кенгуру та ему', 0),
        new Questions('5. Яка тварина при варінні стає в Японії делікатесом?', 'a) Креветки ', 'b) Риби фугу', 'c) Акула ', 'd) Вугор & динго', 'Вопрос на 5000$ за правильный ответ', 5000, 'b) Риби фугу', 0),
        new Questions('5. У якій країні виробляють найбільше кави у світі?', 'a) Колумбія', 'b) Індонезія', 'c) Бразилія', "d) В'єтнам & динго", 'Вопрос на 5000$ за правильный ответ', 5000, 'c) Бразилія', 0),
        new Questions('5. У якій країні відбулися перші Олімпійські ігри?', 'a) Італія', 'b) Греція', 'c) Японія', 'd) Франція', 'Вопрос на 5000$ за правильный ответ', 5000, 'b) Греція', 0),
    ],
    [
        new Questions('6. У якому відомому романі фігурували Джо, Мег, Бет та Емі Марч?', 'a) Маленькі жінки', 'b) Вбити пересмішника', 'c) Том Сойєр', 'd) Мобі Дік', 'Вопрос на 8000$ за правильный ответ.', 8000, 'a) Маленькі жінки', 5000),
        new Questions('6. Для якої країни грав David Beckham?', 'a) Іспанія', 'b) Бразилія', 'c) США', 'd) Англія', 'Вопрос на 8000$ за правильный ответ.', 8000, 'd) Англія', 5000),
        new Questions('6. Яка найменша планета нашої Сонячної системи?', 'a) Земля', 'b) Венера', 'c) Марс', 'd) Меркурій', 'Вопрос на 8000$ за правильный ответ.', 8000, 'd) Меркурій', 5000),
        new Questions('6. Хто зіграв детектива Ріка Декарда в «Бігу по лезу» (1982).)?', 'a) George Clooney', 'b) Richard Gere', 'c) Harrison Ford', 'd) Ryan Gosling', 'Вопрос на 8000$ за правильный ответ.', 8000, 'c) Harrison Ford', 5000),
    ],
    [
        new Questions('7. Какх королей?', 'a) Карл', 'b) Густав', 'c) Фредрик', 'd) Оскар', 'Вопрос на 10000$ за правильный ответ', 10000, 'a) Карл', 5000),
        new Questions('7. Що означає термін «фортепіано».?', 'a) У швидкому темпі', 'b) Щоб грати тихо', 'c) Помірно повільний', 'd) У швидкому темпі', 'Вопрос на 10000$ за правильный ответ', 10000, 'b) Щоб грати тихо', 5000),
        new Questions('7. Який персонаж Діснея в «Русалочці» співає пісню «Kiss the Girl».?', 'a) Камбала', 'b) Себастьян', 'c) Урсула', 'd) Prince Ерік', 'Вопрос на 10000$ за правильный ответ', 10000, 'b) Себастьян', 5000),
        new Questions("7. Яке друге ім'я Чендлера в ситкомі «Друзі».?", 'a) Артур', 'b) Bing', 'c) Мюріель', 'd) Джон', 'Вопрос на 10000$ за правильный ответ', 10000, 'c) Мюріель', 5000),
    ],
    [
        new Questions('8. Прапор якого святого не є частиною прапора Великобританії?', 'a) святого Андрія', 'b) святого Петра', 'c) святого Патрика', 'd) святого Георгія', 'Вопрос на 13000$ за правильный ответ', 13000, 'b) святого Петра', 5000),
        new Questions('8. Олімпіада проводиться кожні скільки років?', 'a) Шість років', 'b) Чотири роки', "c) П'ять років", 'd) Сім років', 'Вопрос на 13000$ за правильный ответ', 13000, 'b) Чотири роки', 5000),
        new Questions('8. Яку першу іграшку рекламували по телебаченню?', 'a) Барбі', 'b) Пан Картопляна Голова', "c) Легка духовка для випікання", 'd) Ракетний гонщик', 'Вопрос на 13000$ за правильный ответ', 13000, 'b) Пан Картопляна Голова', 5000),
        new Questions('8. За який фільм Tom Hanks отримав свою першу номінацію на премію Оскар?', 'a) Великий', 'b) Форрест Гамп', "c) Аполлон 13", 'd) Ви отримали пошту', 'Вопрос на 13000$ за правильный ответ', 13000, 'a) Великий', 5000),
    ],
    [
        new Questions('9. Якого роману немає у Артура Хейлі?', 'a) «Аэропорт»', 'b) «Отель»', 'c) «Больница»', 'd) «Колеса»', 'Вопрос на 15000$ за правильный ответ', 15000, 'c) «Больница»', 5000),
        new Questions('9. Скільки часу займає мить?', 'a) 60 секунд', 'b) 90 секунд', 'c) 120 секунд', 'd) 180 секунд', 'Вопрос на 15000$ за правильный ответ', 15000, 'b) 90 секунд', 5000),
        new Questions('9. Скільки триває олімпійський басейн?', 'a) 25 метрів', 'b) 50 метрів', 'c) 60 метрів', 'd) 40 метрів', 'Вопрос на 15000$ за правильный ответ', 15000, 'b) 50 метрів', 5000),
        new Questions('9. Скільки тривала Столітня війна?', 'a) 116 років', 'b) 100 років', 'c) 50 років', 'd) 101 рік', 'Вопрос на 15000$ за правильный ответ', 15000, 'a) 116 років', 5000),
    ],
    [
        new Questions('10. Яка національна тварина Шотландії?', 'a) Кінь', 'b) Єдиноріг', 'c) Вовк', 'd) Корова', 'Вопрос на 25000$ за правильный ответ', 25000, 'b) Єдиноріг', 5000),
        new Questions('10. Хто написав епічну поему «Втрачений рай».?', 'a) Генрі Джеймс', 'b) Джон Кітс', 'c) Джон Стейнбек', 'd) Джон Мілтон', 'Вопрос на 25000$ за правильный ответ', 25000, 'd) Джон Мілтон', 5000),
        new Questions('10. З якої речовини зроблені нігті?', 'a) Серотонін', 'b) Епідерміс', 'c) Меланін', 'd) Кератин', 'Вопрос на 25000$ за правильный ответ', 25000, 'd) Кератин', 5000),
    ],
    [
        new Questions('11. Якого роману немає в Артура Хейлі?', 'a) «Аеропорт»', 'b) «Готель»', 'c) «Лікарня»', 'd) «Коліса»', 'Вопрос на 50000$ за правильный ответ', 50000, 'c) «Лікарня»', 25000),
        new Questions('11. Яка служба електронної пошти належить Microsoft?', 'a) Outlook', 'b) Yahoo Mail', 'c) Gmail', 'd) iCloud Mail', 'Вопрос на 50000$ за правильный ответ', 50000, 'a) Outlook', 25000),
        new Questions('11. Скільки країн знаходиться всередині Сполученого Королівства?', 'a) Три', 'b) Чотири', "c) П'ять", 'd) Шість', 'Вопрос на 50000$ за правильный ответ', 50000, 'b) Чотири', 25000),
    ],
    [
        new Questions('12. Хто з персонажів комедії «Дель Арте» говорив ламаною італійською мовою з сильним іспанським акцентом?', 'a) Капітан', 'b) Панталоне', 'c) Лікар', 'd) Арлекін', 'Вопрос на 100000$ за правильный ответ', 100000, 'a) Капітан', 25000),
        new Questions('12. Яка країна має абревіатуру «Ч”?', 'a) Китай', 'b) Швейцарія', 'c) Куба', 'd) Чилі', 'Вопрос на 100000$ за правильный ответ', 100000, 'b) Швейцарія', 25000),
        new Questions('12. Який найважчий птах в Австралії?', 'a) Казуарі', 'b) Какаду ', 'c) Зимородок ', 'd) Ему', 'Вопрос на 100000$ за правильный ответ', 100000, 'a) Казуарі', 25000),
    ],
    [
        new Questions('13. У якому відомому романі фігурували Джо, Мег, Бет та Емі Марч?', 'a) Маленькі жінки', 'b) Вбити пересмішника', 'c) Том Сойєр', 'd) Мобі Дік', 'Вопрос на 250000$ за правильный ответ', 250000, 'a) Маленькі жінки', 25000),
        new Questions('13. Який найбільший острів у світі?', 'a) Ісландія', 'b) Фінляндія', 'c) Гренландія', 'd) Ірландія', 'Вопрос на 250000$ за правильный ответ', 250000, 'c) Гренландія', 25000),
        new Questions('13. У якому місті ви можете знайти вежі-близнюки Петронас?', 'a) Сінгапур ', 'b) Куала-Лумпур', 'c) Токіо', 'd) Бангкок', 'Вопрос на 250000$ за правильный ответ', 250000, 'b) Куала-Лумпур', 25000),
    ],
    [
        new Questions('14. Хто з цих блазнів персонаж роману Дюма «Графіня де Монсоро»?', 'a) Балакірєв', 'b) Ріголетто', 'c) Йорік', 'd) Шико', 'Вопрос на 500000$ за правильный ответ', 500000, 'd) Шико', 25000),
        new Questions('14. Хто написав відомий щоденник, переховуючись від нацистів в Амстердамі?', 'a) Анна Франк', 'b) Бріджит Джонс', 'c) Марія Кюрі', 'd) Хелен Келлер', 'Вопрос на 500000$ за правильный ответ', 500000, 'a) Анна Франк', 25000),
        new Questions('14. Хто був главою держави в Японії під час Другої світової війни?', 'a) Імператор Хірохіто', 'b) Імператор Муцухіто', 'c) Імператор Акіхіто', 'd) Імператор Йошіхіто', 'Вопрос на 500000$ за правильный ответ', 500000, 'a) Імператор Хірохіто', 25000),
    ],
    [
        new Questions("15. Яке ім'я не приймав жоден папа римський?", 'a) Валентин', 'b) Євгеній', 'c) Григорій', 'd) Віктор', 'Вопрос на 1000000$ за правильный ответ', 1000000, 'c) Григорій', 25000),
        new Questions("15. Скільки важить костюм Чубакки?", 'a) Вісім фунтів', 'b) Сімнадцять фунтів', 'c) Шість фунтів', "d) П'ятнадцять фунтів", 'Вопрос на 1000000$ за правильный ответ', 1000000, 'a) Вісім фунтів', 25000),
    ],
];
let questionsArray;
function givRandomQuestionsArray(array, bigArray) {
    bigArray.forEach(x => {
        let rand = Math.floor(Math.random() * x.length);
        let randArray = x[rand];
        array.push(randArray);
    });
}

let questionsDiv = document.querySelector(".questions");
let wrapper = document.querySelector('.wrapper')
let textDiv = document.querySelector(".infoMenu");
let templateNewGameAsk = document.querySelector('#templateNewGameAsk');
let templateWin = document.querySelector('#templateWin');
let templateLose = document.querySelector('#templateLose');
let gameOver = document.querySelector('#gameOver');
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
let indexTemplateInfoMenu = 0;
let stopFn = false;
let trValue;
let trArrayRevers = Array.from(trGallery);
let trArray = trArrayRevers.reverse();
let arrayFromAnswer;
let loseCorrectAnswerRemove;
let mouseoverMouseout;
let mouseoverMouseoutForStartMenu;
let valueTimer = 60;
let timerId;
let timerLose;
let checkClickContinue;
let checkClickHelps;

let soundCallFriends = new Audio('sounds/vdohnovenie.mp3');
let zvukСhasov = new Audio('sounds/zvukСhasov.mp3');
let zvukFona = new Audio('sounds/zvukFona.mp3');
let helpAudience = new Audio('sounds/helpAudience.mp3');
let helpFifty = new Audio('sounds/helpFifty.mp3');
let clickAnswerSound = new Audio('sounds/clickAnswer.mp3');
let nextQuestionSound = new Audio('sounds/nextQuestionSound.mp3');
let notCorrectAnswer = new Audio('sounds/notCorrectAnswer.mp3');
let expectationSound = new Audio('sounds/expectationSound.mp3');
let correctAnswerSound = new Audio('sounds/correctAnswerSound.mp3');

function playAudio(sound) {
    sound.play();
    sound.volume = 0.1;
}

function pauseAudio(sound) {
    sound.pause();

}

function stopAudio(sound) {
    sound.pause();
    sound.currentTime = 0.0;
}

document.querySelector('#startButton').addEventListener('click', startGame);
document.querySelector('#continueButton').addEventListener('click', continueGame);
document.querySelector('#takeMoneyButton').addEventListener('click', takeMoneyGame);

const mediaQueryMax = window.matchMedia('(max-width: 1199px)');
function showMouseOverOutStyle(value) {
    if (!value.matches) {
        document.querySelectorAll('.answer').forEach(button => {
            button.addEventListener('mouseover', function (e) {
                if (!mouseoverMouseout)
                    e.target.style.background = '#00c8ff';
            });
            button.addEventListener('mouseout', function (e) {
                e.target.style.background = '';
            });
        });
        let btnMenuArray = document.querySelectorAll('.menu');
        btnMenuArray.forEach(button => {
            button.addEventListener('mouseover', function (e) {
                if (!mouseoverMouseoutForStartMenu && e.target === btnMenuArray[0])
                    e.target.style.background = '#00c8ff';
                if (mouseoverMouseout && e.target === btnMenuArray[1])
                    e.target.style.background = '#00c8ff';
                if (action === correctAnswer && e.target === btnMenuArray[2])
                    e.target.style.background = '#00c8ff';
            });
            button.addEventListener('mouseout', function (e) {
                e.target.style.background = '';
            });
        });
    }
}
showMouseOverOutStyle(mediaQueryMax);

function startGame() {
    stopAudio(zvukСhasov);
    stopAudio(zvukFona);
    questionsArray = [];
    givRandomQuestionsArray(questionsArray, forRendQuestionsArray);
    resetValue();
    givClearInterval();
    addTimer();
    this.removeEventListener('click', startGame);
    action = '';
    mouseoverMouseoutForStartMenu = null;
    indexTemplateInfoMenu = 0;
    loseCorrectAnswerRemove = false;
    showQuestionsAnswersBlock(0);
    answersDiv.addEventListener('click', clickAnswers,);
    showTemplateConstructor(templateInfoMenu, '#templateInfo', questionsArray[indexTemplateInfoMenu].text, textDiv);
    resetHelpButtonStyle();
    document.querySelectorAll('.answers div').forEach(answer => answer.className = 'answer');
    document.querySelector('#helpButtonPhone').addEventListener('click', showCallFriends);
    document.querySelector('#helpButtonFifty').addEventListener('click', showHelpFiftyButton);
    document.querySelector('#helpButtonAudience').addEventListener('click', showHelpButtonAudience);
}

function showQuestionsAnswersBlock(index) {
    const questionsValue = questionsArray[index];
    trValue = trArray[index];
    trValue.classList.add('trNormalColor')
    correctAnswer = questionsArray[index].correctAnswer;
    prizeWin = questionsArray[index].prize;
    questionText = questionsArray[index].text;
    amountFireproof = questionsArray[index].amountFireproof;
    arrayFromAnswer = document.querySelectorAll('.answer')
    questionsDiv.textContent = questionsValue.questions;
    document.querySelector('#firstAnswer').textContent = questionsValue.answers.answerA;
    document.querySelector('#secondAnswer').textContent = questionsValue.answers.answerB;
    document.querySelector('#thirdAnswer').textContent = questionsValue.answers.answerC;
    document.querySelector('#fourthAnswer').textContent = questionsValue.answers.answerD;

}

function clickAnswers(e) {
    if (!stopFn) {
        if (e.target === this) {
            this.stopPropagation();
        }
        stopAudio(zvukСhasov);
        stopAudio(zvukFona);
        playAudio(clickAnswerSound);
        playAudio(expectationSound);
        givClearInterval();
        stopFn = true;
        indexTemplateInfoMenu++;
        action = e.target.textContent;
        actionDataset = e.target.dataset.action
        clickAction = e.target;
        checkClickContinue = e.target;
        checkClickHelps = true;
        mouseoverMouseout = clickAction;
        mouseoverMouseoutForStartMenu = mouseoverMouseout;
        loseCorrectAnswerRemove = true;
        if (action === correctAnswer) {
            clickAction.className = 'clickAnswerStyleWin';
            trValue.classList.add('trWinColor');
            setTimeout(() => {
                stopAudio(expectationSound);
                playAudio(correctAnswerSound);
            }, 3100);
            if (action === questionsArray[14].correctAnswer) {
                showGameWinMoney();
            }
            showTemplateWin();
            document.querySelector('.HelpAudienceBlock').remove();
        } else if (action !== correctAnswer) {
            clickAction.className = 'clickAnswerStyleLose';
            trValue.classList.add('trLoseColor');
            setTimeout(showLoseCorrectAnswer, 3100);
            showTemplateConstructor(templateLose, '#prizeLose', amountFireproof, textDiv);
            document.querySelector('.HelpAudienceBlock').remove();

        }
    }
}

function continueGame() {
    if (checkClickContinue === false) {
        pauseAudio(zvukСhasov);
        pauseAudio(zvukFona);
        valueTimer = document.querySelector('#timer').textContent;
        givClearInterval();
        showTimerContinueTemplateConstructor(templateNewGameAsk, '#textTemplateNewGameAsk', 'Yes - розпочати заново! <br /> NO - Продовжити!', wrapper);
        document.querySelector('#newGameAskButtonYes').addEventListener('click', function () {
            document.querySelector('.newGameAskBackground').remove();
            document.querySelector('.newGameAskDiv').remove();
            textDiv.innerHTML = '';
            countIndex = 1;
            givClearInterval();
            showRemoveTrValueClassList();
            startGame();
        });
        document.querySelector('#newGameAskButtonNo').addEventListener('click', function () {
            document.querySelector('.newGameAskBackground').remove();
            document.querySelector('.newGameAskDiv').remove();
            addTimer();
        });
    } else {
        stopAudio(correctAnswerSound);
        playAudio(nextQuestionSound);
        checkClickContinue = false;
        checkClickHelps = false;
        stopFn = false;
        showRemoveTrValueClassList();
        document.querySelectorAll('.answers div').forEach(answer => answer.className = 'answer');
        textDiv.innerHTML = '';
        mouseoverMouseout = '';
        showTemplateConstructor(templateInfoMenu, '#templateInfo', questionsArray[indexTemplateInfoMenu].text, textDiv);
        resetValue();
        addTimer();
        if (action === correctAnswer) {
            showQuestionsAnswersBlock(countIndex);
            countIndex++;
        } else {
            givClearInterval();
            showTimerContinueTemplateConstructor(templateNewGameAsk, '#textTemplateNewGameAsk', 'Відповідь Невірна! <br /> Бажаєте розпочати заново?', wrapper);
            document.querySelector('#newGameAskButtonYes').addEventListener('click', function () {
                document.querySelector('.newGameAskBackground').remove();
                document.querySelector('.newGameAskDiv').remove();
                textDiv.innerHTML = '';
                countIndex = 1;
                startGame();
            });
            document.querySelector('#newGameAskButtonNo').addEventListener('click', function () {
                document.querySelector('.newGameAskBackground').remove();
                document.querySelector('.newGameAskDiv').remove();
                textDiv.innerHTML = '';
                countIndex = 1;
                showTimerContinueTemplateConstructor(gameOver, '#textGameOver', 'Кінець гри! <br /> Вдалого дня! <br /> Повертайтесь!', wrapper);
            });
        }
    }
}

function addTimer() {
    if (!timerId) {
        timerId = setInterval(tick, 1000);
        timerLose = setTimeout(function () {
            showTimerContinueTemplateConstructor(templateNewGameAsk, '#textTemplateNewGameAsk', 'Час вийшов! <br /> Бажаєте розпочати заново?', wrapper);
            document.querySelector('#newGameAskButtonYes').addEventListener('click', function () {
                document.querySelector('.newGameAskBackground').remove();
                document.querySelector('.newGameAskDiv').remove();
                textDiv.innerHTML = '';
                countIndex = 1;
                showRemoveTrValueClassList();
                resetValue();
                startGame();
            });
            document.querySelector('#newGameAskButtonNo').addEventListener('click', function () {
                document.querySelector('.newGameAskBackground').remove();
                document.querySelector('.newGameAskDiv').remove();
                textDiv.innerHTML = '';
                countIndex = 1;
                showRemoveTrValueClassList();
                showTimerContinueTemplateConstructor(gameOver, '#textGameOver', 'Кінець гри! <br /> Вдалого дня! <br /> Повертайтесь!', wrapper);
            });
        }, valueTimer * 1000);
    }
}
function tick() {
    let timer = document.querySelector("#timer");
    timer.textContent = valueTimer;
    valueTimer--;
    if (valueTimer < 0)
        valueTimer = 0;
    else if (valueTimer < 10) {
        timer.className = 'timerStyleRed';
        if (zvukСhasov.pause) playAudio(zvukСhasov);
    }
    else if (valueTimer < 30) {
        timer.className = 'timerStyleYellow';
        stopAudio(zvukFona);
        playAudio(zvukСhasov);
    }
    else if (valueTimer > 30) {
        timer.className = 'timerStyle';
        playAudio(zvukFona);
    }
}
function resetValue() {
    valueTimer = 60;
}
function givClearInterval() {
    if (timerId) {
        clearInterval(timerId);
        clearInterval(timerLose);
        timerId = null;
    }
}

function showLoseCorrectAnswer() {
    document.querySelectorAll('.answer').forEach(answer => {
        if (loseCorrectAnswerRemove) {
            if (answer.textContent === correctAnswer) {
                answer.classList.remove('answer')
                answer.classList.add('loseCorrectAnswer');
                stopAudio(expectationSound);
                playAudio(notCorrectAnswer);
            }
        }
    });
}

function showTemplateConstructor(templateId, textSelectorId, templateText, divAdd) {
    let templateClone = templateId.content.cloneNode(true);
    templateClone.querySelector(textSelectorId).textContent = templateText;
    divAdd.appendChild(templateClone);
}
function showTimerContinueTemplateConstructor(templateId, textSelectorId, templateText, divAdd) {
    let templateClone = templateId.content.cloneNode(true);
    templateClone.querySelector(textSelectorId).innerHTML = templateText;
    divAdd.appendChild(templateClone);
}

function showTemplateWin() {
    let templateWinClone = templateWin.content.cloneNode(true);
    templateWinClone.querySelector('#prizeWin').textContent = prizeWin;
    templateWinClone.querySelector('#amountFireproof').textContent = amountFireproof;
    textDiv.appendChild(templateWinClone);
}
function showGameWinMoney() {
    let gameWinMoney = document.querySelector('#gameWinMoney');
    let gameWinMoneyClone = gameWinMoney.content.cloneNode(true);
    textDiv.appendChild(gameWinMoneyClone);
}
function takeMoneyGame() {
    if (action === correctAnswer) {
        textDiv.innerHTML = '';
        showTemplateConstructor(takeMoney, '#prizeTakeMoney', prizeWin, textDiv);
        correctAnswer = 2;
        indexTemplateInfoMenu = 0;
        countIndex = 1;
    }
}


function showHelpButtonAudience() {
    if (!checkClickHelps) {
        helpAudience.play();
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

        function givRandomArrayForAudience(value) {
            let randomFirst = randomInteger(40, 65);
            let randomSecond = randomInteger(10, 50);
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
    }
}
function showTemplateHelpButtonAudience() {
    let templateHelpButtonAudienceClone = templateHelpButtonAudience.content.cloneNode(true);
    textDiv.appendChild(templateHelpButtonAudienceClone);
}
function showCallFriends() {
    if (!checkClickHelps) {
        helpButtonPhoneBackground.classList.remove('iconPhone');
        helpButtonPhoneBackground.classList.add('helpButtonPhoneFinish');
        showTemplateCallFriends();
        soundCallFriends.play();
        this.removeEventListener('click', showCallFriends);
    }
}
function showTemplateCallFriends() {
    let templateCallFriendsClone = templateCallFriends.content.cloneNode(true);
    templateCallFriendsClone.querySelector('#callFriendsCorrectAnswer').textContent = correctAnswer;
    textDiv.appendChild(templateCallFriendsClone);
}
function showHelpFiftyButton() {
    if (!checkClickHelps) {
        helpFifty.play();
        helpButtonFiftyBackground.classList.remove('iconFifty');
        helpButtonFiftyBackground.classList.add('helpButtonFiftyFinish');
        this.removeEventListener('click', showHelpFiftyButton);
        let arrayHelpFifty = [];
        let arrayHelpFiftyStyle = [];
        givFiftyArray(arrayFromAnswer);
        arrayHelpFiftyStyle.forEach(value => value.className = 'clickHelpFiftyStyle');

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
    }
}

function showRemoveTrValueClassList() {
    trValue.classList.remove('trWinColor');
    trValue.classList.remove('trLoseColor');
    trValue.classList.remove('trNormalColor');
}
function resetHelpButtonStyle() {
    helpButtonAudienceBackground.classList.remove('helpButtonAudienceFinish');
    helpButtonAudienceBackground.classList.add('iconAudience');
    helpButtonPhoneBackground.classList.remove('helpButtonPhoneFinish');
    helpButtonPhoneBackground.classList.add('iconPhone');
    helpButtonFiftyBackground.classList.remove('helpButtonFiftyFinish');
    helpButtonFiftyBackground.classList.add('iconFifty');
}


