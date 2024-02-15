// script.js
const lithuaniaQuestions = [// Lithuania History
    { question: "What year did Lithuania declare independence from the Soviet Union?", a: "1991", b: "1989", c: "1990", d: "1992", correct: "c" },
    { question: "Who was the first known Grand Duke of Lithuania?", a: "Vytautas the Great", b: "Mindaugas", c: "Gediminas", d: "Algirdas", correct: "b" },
    { question: "When was the Battle of Grunwald?", a: "1410", b: "1430", c: "1392", d: "1405", correct: "a" },
    { question: "What was the main religion in Lithuania before Christianization in 1387?", a: "Paganism", b: "Islam", c: "Buddhism", d: "Judaism", correct: "a" },
    { question: "Which dynasty ruled the Grand Duchy of Lithuania in the 15th century?", a: "Piast Dynasty", b: "Jagiellonian Dynasty", c: "Gediminids", d: "Rurik Dynasty", correct: "b" },
    { question: "What is the capital of Lithuania?", a: "Kaunas", b: "Vilnius", c: "Klaipėda", d: "Šiauliai", correct: "b" },
    { question: "Which river runs through Vilnius?", a: "Nemunas", b: "Neris", c: "Venta", d: "Lielupe", correct: "b" },
    { question: "In what year did Lithuania join the European Union?", a: "2004", b: "1999", c: "2007", d: "2000", correct: "a" },
    { question: "Which of these castles is located in Lithuania?", a: "Buda Castle", b: "Trakai Island Castle", c: "Wawel Castle", d: "Hohenzollern Castle", correct: "b" },
    { question: "What is the traditional Lithuanian Christmas Eve dish?", a: "Kūčiukai", b: "Pierogi", c: "Cepelinai", d: "Borscht", correct: "a" },
    { question: "What is the national dish of Lithuania?", a: "Cepelinai", b: "Borscht", c: "Pierogi", d: "Goulash", correct: "a" },
    { question: "Which sea borders Lithuania?", a: "Black Sea", b: "Adriatic Sea", c: "Baltic Sea", d: "Caspian Sea", correct: "c" },
    { question: "What colors make up the Lithuanian flag?", a: "Red, white, blue", b: "Yellow, green, red", c: "Black, red, green", d: "Blue, yellow, red", correct: "b" },
    { question: "Which of these is a traditional Lithuanian festival?", a: "Joninės", b: "Oktoberfest", c: "Carnival", d: "Saint Patrick's Day", correct: "a" },
    { question: "What is the second-largest city in Lithuania?", a: "Klaipėda", b: "Šiauliai", c: "Panevėžys", d: "Kaunas", correct: "d" },
    { question: "Which famous scientist was born in Vilnius, Lithuania?", a: "Marie Curie", b: "Albert Einstein", c: "Isaac Newton", d: "Jokūbas Jurgis Šernas", correct: "d" },
    { question: "Which forest is known for being a geographical centre of Europe?", a: "Black Forest", b: "Sherwood Forest", c: "Puszcza Białowieska", d: "Ponary Forest", correct: "d" },
    { question: "What is Lithuania's national sport?", a: "Football", b: "Basketball", c: "Hockey", d: "Tennis", correct: "b" },
    { question: "What Lithuanian castle is depicted on the national currency?", a: "Gediminas' Tower", b: "Trakai Island Castle", c: "Kaunas Castle", d: "Hill of Crosses", correct: "b" },
    { question: "Which river is the longest in Lithuania?", a: "Nemunas", b: "Neris", c: "Venta", d: "Lielupe", correct: "a" },
    { question: "In which year did Lithuania first participate as an independent nation in the Olympics?", a: "1924", b: "1992", c: "1980", d: "2004", correct: "a" },
    { question: "What is the famous Lithuanian beer known as?", a: "Utenos", b: "Švyturys", c: "Gubernija", d: "Kalnapilis", correct: "b" },
    { question: "Which Lithuanian city is known for its sea festival?", a: "Vilnius", b: "Klaipėda", c: "Kaunas", d: "Nida", correct: "b" },
    { question: "What is the name of the famous Lithuanian amber museum?", a: "Kernavė Museum", b: "Palanga Amber Museum", c: "Vilnius Amber Museum", d: "Trakai History Museum", correct: "b" },
    { question: "Which Lithuanian holiday is known as 'Užgavėnės'?", a: "Christmas", b: "Easter", c: "Midsummer Day", d: "Shrove Tuesday", correct: "d" }
];

const vilniusQuestions = [// Vilnius History
    { question: "When was Vilnius first mentioned in written sources?", a: "1323", b: "1251", c: "1387", d: "1401", correct: "a" },
    { question: "What is the name of the famous Baroque church in Vilnius' Old Town?", a: "St. Anne's Church", b: "Vilnius Cathedral", c: "St. Peter and St. Paul's Church", d: "Gate of Dawn", correct: "a" },
    { question: "Which river flows through Vilnius?", a: "Nemunas", b: "Neris", c: "Venta", d: "Lielupe", correct: "b" },
    { question: "In which year did Vilnius become the capital of Lithuania?", a: "1323", b: "1401", c: "1569", d: "1918", correct: "d" },
    { question: "What is the iconic tower that is a symbol of Vilnius?", a: "Vilnius TV Tower", b: "Pilies Tower", c: "Gediminas' Tower", d: "Europa Tower", correct: "c" },
    { question: "What is the iconic tower in Vilnius?", a: "Gediminas' Tower", b: "Vilnius TV Tower", c: "Pilies Tower", d: "Europa Tower", correct: "a" },
    { question: "What style is the Vilnius Cathedral predominantly?", a: "Gothic", b: "Baroque", c: "Renaissance", d: "Neoclassical", correct: "d" },
    { question: "Which river flows through Vilnius?", a: "Nemunas", b: "Neris", c: "Venta", d: "Lielupe", correct: "b" },
    { question: "Which famous Baroque church is located in Vilnius?", a: "St. Anne's Church", b: "Vilnius Cathedral", c: "St. Peter and St. Paul's Church", d: "Gate of Dawn", correct: "a" },
    { question: "When was Vilnius first mentioned in written records?", a: "1323", b: "1401", c: "1251", d: "1387", correct: "a" },
    { question: "What is the oldest university in Vilnius?", a: "Vilnius Gediminas Technical University", b: "European Humanities University", c: "Vilnius University", d: "Mykolas Romeris University", correct: "c" },
    { question: "Vilnius is known for its large number of what type of building?", a: "Skyscrapers", b: "Churches", c: "Castles", d: "Museums", correct: "b" },
    { question: "Which river flows through the heart of Vilnius?", a: "Nemunas", b: "Venta", c: "Neris", d: "Lielupe", correct: "c" },
    { question: "In which district of Vilnius is the famous Užupis Republic located?", a: "Žirmūnai", b: "Užupis", c: "Fabijoniškės", d: "Naujamiestis", correct: "b" },
    { question: "What style is the Gate of Dawn in Vilnius?", a: "Baroque", b: "Gothic", c: "Renaissance", d: "Modernist", correct: "a" },
    { question: "Which famous writer was a resident of Vilnius and is commemorated with a statue in the city?", a: "Romain Gary", b: "Adam Mickiewicz", c: "Czesław Miłosz", d: "Leo Tolstoy", correct: "b" },
    { question: "What is the name of the main street in the Old Town of Vilnius?", a: "Pilies Street", b: "Gedimino Avenue", c: "Laisvės Alėja", d: "Vokiečių Street", correct: "a" },
    { question: "What is the large square in front of the Vilnius Cathedral called?", a: "Lukiškės Square", b: "Cathedral Square", c: "Town Hall Square", d: "Vincas Kudirka Square", correct: "b" },
    { question: "Which museum in Vilnius is dedicated to the victims of genocide?", a: "National Museum of Lithuania", b: "KGB Museum (Museum of Occupations and Freedom Fights)", c: "MO Museum", d: "Radvila Palace Museum of Art", correct: "b" },
    { question: "Which park in Vilnius is known for its TV tower?", a: "Vingis Park", b: "Bernardine Garden", c: "Verkiai Regional Park", d: "Karoliniškės Park", correct: "d" },
    { question: "Vilnius was a European Capital of Culture in which year?", a: "2009", b: "2013", c: "2001", d: "2017", correct: "a" },
    { question: "What is the famous hill with thousands of crosses called?", a: "Three Crosses Hill", b: "Gediminas' Hill", c: "Hill of Crosses", d: "Crooked Hill", correct: "c" },
    { question: "Which architectural style predominantly characterizes Vilnius Old Town?", a: "Baroque", b: "Gothic", c: "Renaissance", d: "Art Nouveau", correct: "a" },
    { question: "Which church in Vilnius is famous for its twin bell towers?", a: "St. Anne's Church", b: "St. Peter and Paul's Church", c: "St. Francis and St. Bernardine Church", d: "Vilnius Cathedral", correct: "d" },
    { question: "The Presidential Palace of Lithuania is located in which city?", a: "Kaunas", b: "Klaipėda", c: "Vilnius", d: "Šiauliai", correct: "c" }
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const answerLabels = [document.getElementById('a_text'), document.getElementById('b_text'), document.getElementById('c_text'), document.getElementById('d_text')];
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start-quiz-btn');

let currentQuiz = 0;
let score = 0;
let answerSelected = false;
let quizData;

startBtn.addEventListener('click', function() {
    document.getElementById('starter-page').style.display = 'none';
    quiz.style.display = 'block';
    quizData = getShuffledQuestions();
    loadQuiz();
});

function getShuffledQuestions() {
    const selectedLithuaniaQuestions = shuffleArray(lithuaniaQuestions).slice(0, 5);
    const selectedVilniusQuestions = shuffleArray(vilniusQuestions).slice(0, 5);
    return shuffleArray([...selectedLithuaniaQuestions, ...selectedVilniusQuestions]);
}

function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function loadQuiz() {
    deselectAnswers();
    answerSelected = false;
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    const answers = shuffleAnswers([
        { key: 'a', value: currentQuizData.a },
        { key: 'b', value: currentQuizData.b },
        { key: 'c', value: currentQuizData.c },
        { key: 'd', value: currentQuizData.d }
    ]);

    answerLabels.forEach((label, index) => {
        label.innerText = answers[index].value;
        label.previousElementSibling.value = answers[index].key;
    });

    submitBtn.innerText = 'Submit';
}

function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

function showCorrectAnswer(correctAnswer) {
    document.querySelector(`input[value="${correctAnswer}"]`).parentNode.classList.add('correct');
}

function showWrongAnswer(wrongAnswer) {
    document.querySelector(`input[value="${wrongAnswer}"]`).parentNode.classList.add('wrong');
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.value;
            answerSelected = true;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
        answerEl.parentNode.classList.remove('correct', 'wrong');
    });
}

submitBtn.addEventListener('click', () => {
    if (!answerSelected) {
        const answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }
            showCorrectAnswer(quizData[currentQuiz].correct);
            if (answer !== quizData[currentQuiz].correct) {
                showWrongAnswer(answer);
            }

            if (currentQuiz === quizData.length - 1) {
                submitBtn.innerText = 'Show Results';
            } else {
                submitBtn.innerText = 'Next Question';
            }

            answerSelected = true;
        }
    } else {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }
});

function showResults() {
    let containerColor = '';
    let badgeText = '';

    if (score === 0) {
        document.body.innerHTML = `<div class="emoji-container">🙈</div>
                                   <button onclick="location.reload()">Reload</button>`;
        return;
    }

    let resultText = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>`;

    if (score >= 9) {
        containerColor = 'gold';
        badgeText = 'GOLD';
    } else if (score >= 7) {
        containerColor = 'silver';
        badgeText = 'SILVER';
    } else if (score >= 5) {
        containerColor = '#cd7f32';
        badgeText = 'BRONZE';
    } else {
        containerColor = '#8b4513';
        badgeText = 'LEATHER';
    }

    resultText += `<div class="badge-text">${badgeText}</div>`;
    resultText += '<button onclick="location.reload()">Reload</button>';
    quiz.innerHTML = resultText;
    quiz.style.backgroundColor = containerColor;
    quiz.style.color = (containerColor === 'silver' || containerColor === 'gold') ? 'black' : 'white';
}
