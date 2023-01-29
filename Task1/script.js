const questions = [
    {
        question: "	Какое прозвище носил король Англии Ричард I?",
        a: "Львиное сердце",
        b: "Первый",
        c: "Иоанн Безземельный",
        d: "Пашка-пирамидон",
        correct: "a",
    },
    {
        question: "На какой день недели приходится первый день Нового 2002 года?",
        a: "Воскресенье.",
        b: "14 февраля",
        c: "Апрель",
        d: "Вторник",
        correct: "d",
    },
    {
        question: "В каком году Челси выиграл первую Лигу Чемпионов?",
        a: "1899",
        b: "2005",
        c: "2012",
        d: "2021",
        correct: "c",
    },

    {
        question: "Что Шекспир назвал «вкуснейшим из блюд в земном пиру»??",
        a: "Опьянение",
        b: "Любовь",
        c: "Уединение",
        d: "Сон",
        correct: "d",
    },
    {
        question: "Сколько морей омывают Балканский полуостров?",
        a: "3",
        b: "4",
        c: "6",
        d: "5",
        correct: "c",
    },
    {
        question: "Кто является главой государства Монако?",
        a: "Король",
        b: "Князь",
        c: "Великий герцог",
        d: "Султан",
        correct: "b",
    },
    {
        question: "Какого цвета мультипликационный герой Шрек?",
        a: " Синего",
        b: "Красного",
        c: "Зелёного",
        d: "Жёлтого",
        correct: "c",
    },
    {
        question: "Что несла бабушке Красная Шапочка?",
        a: "Торт",
        b: "Пирожки",
        c: "Кекс",
        d: "Пиццу",
        correct: "b",
    },
    {
        question: "Кто из этих легендарных личностей не входит в число трёх братьев, основавших Киев?",
        a: "Кий",
        b: "Щек",
        c: "Рюрик",
        d: "Хорив",
        correct: "c",
    },
    {
        question: "Чему в 1982 году журнал «Тайм» присудил титул «Человек года»?",
        a: "Видеомагнитофону",
        b: "Телевизору",
        c: "Компьютеру",
        d: "Автомобилю",
        correct: "c",
    },
    {
        question: "Что делает парикмахер на голове клиента?",
        a: "Завивку",
        b: "Подливку",
        c: "Наливку",
        d: "Прививку",
        correct: "a",
    },
    {
        question: "Какое животное существует на самом деле?",
        a: "Козлотур",
        b: "Овцебык",
        c: "Конеяк",
        d: "Коровосвин",
        correct: "b",
    },
    {
        question: "Что входит в состав симфонического оркестра?",
        a: "Круг",
        b: "Квадрат",
        c: "Овал",
        d: "Треугольник",
        correct: "d",
    },
    {
        question: "Какому коню не смотрят в зубы?",
        a: "Дарёному",
        b: " Боевому",
        c: "Троянскому",
        d: "Шахматному",
        correct: "a",
    },
    {
        question: "На каком языке программирования, написана эта игра?",
        a: "JavaScript",
        b: "Ruby",
        c: "C++",
        d: "C++",
        correct: "a",
    }
];


let questionNumber = 0;

// interface elements
const scoreItems = document.getElementsByClassName('score-item');
const question = document.getElementById('question');
const answer_a = document.getElementById('a_text');
const answer_b = document.getElementById('b_text');
const answer_c = document.getElementById('c_text');
const answer_d = document.getElementById('d_text');
const submitButton = document.getElementById('submit');
const variant_a = document.getElementById('a_input');
const variant_b = document.getElementById('b_input');
const variant_c = document.getElementById('c_input');
const variant_d = document.getElementById('d_input');
const helper_a = document.getElementById('helper_a');
const helper_b = document.getElementById('helper_b');
const helper_c = document.getElementById('helper_c');

scoreItems[scoreItems.length - 1].classList.add('current-score');


// Fill data
const renderQuestion = (questionNumber) => {
    question.innerHTML = questions[questionNumber].question;
    answer_a.innerHTML = questions[questionNumber].a;
    answer_b.innerHTML = questions[questionNumber].b;
    answer_c.innerHTML = questions[questionNumber].c;
    answer_d.innerHTML = questions[questionNumber].d;
}
renderQuestion(questionNumber);

//user action

let randomVariants = [];
const helpWithA = () => {
    const variants = 'abcd';
    for (let i = 0; randomVariants.length < 2; i++) {
        const randomIndex = Math.floor(Math.random() * variants.length);
        const randomVariant = variants[randomIndex];
        if (randomVariant !== questions[questionNumber].correct && randomVariant !== randomVariants[0]) {
            randomVariants.push(randomVariant);
        }
    }
    document.getElementById(randomVariants[0]).style.display = "none";
    document.getElementById(randomVariants[1]).style.display = "none";

    helper_a.disabled = true

}
const helpWithBC = (type) => {
    alert(`Привет,интересный вопрос, я думаю правильны ответ  ${questions[questionNumber].correct}`);
    if (type === 'B') {
        helper_b.disabled = true
    } else {
        helper_c.disabled = true
    }
}

const restartGame = () => {
    renderQuestion(0);
    if(questionNumber!==15){
        scoreItems[scoreItems.length - (questionNumber + 1)].classList.remove('current-score');
    }
    scoreItems[scoreItems.length - 1].classList.add('current-score');
    questionNumber = 0;
    helper_b.disabled = false
    helper_a.disabled = false
    helper_c.disabled = false
    if (randomVariants.length) {
        document.getElementById(randomVariants[0]).style.display = "block";
        document.getElementById(randomVariants[1]).style.display = "block";
    }
    randomVariants = [];
}
const submit = () => {
    let answer = '';
    if (variant_a.checked) {
        answer = 'a';
    } else if (variant_b.checked) {
        answer = 'b';
    } else if (variant_c.checked) {
        answer = 'c';
    } else if (variant_d.checked) {
        answer = 'd';
    }
    if (answer === questions[questionNumber].correct) {
        questionNumber = questionNumber + 1;
        if (questionNumber === 15) {
            alert("Поздравляю,вы ПОБЕДИТЕЛЬ!!!! ваш выигрыш ");
            restartGame();
            scoreItems[0].classList.remove('current-score');
            return;
        }
        renderQuestion(questionNumber);
        if (randomVariants.length) {
            document.getElementById(randomVariants[0]).style.display = "block";
            document.getElementById(randomVariants[1]).style.display = "block";
        }
        scoreItems[scoreItems.length - (questionNumber + 1)].classList.add('current-score');
        scoreItems[scoreItems.length - questionNumber].classList.remove('current-score');
    } else {
        let saveNumber = '0';
        if (questionNumber===5){
            saveNumber = '1000'
        }
        if(questionNumber===10){
            saveNumber='32 000'
        }
        alert(`Вы проиграли, ваш выигрыш составляет ${saveNumber}`);
        restartGame();
    }

}

// event handlers
submitButton.addEventListener("click", submit);
helper_a.addEventListener("click", helpWithA);
helper_b.addEventListener("click", () => helpWithBC('B'));
helper_c.addEventListener("click", () => helpWithBC('C'));


