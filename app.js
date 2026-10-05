const quizData = [
    {
        question: "Jika 2x + 6 = 14, berapakah nilai x?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        category: "Matematika"
    },
    {
        question: "Hasil dari 15 × 4 adalah...",
        options: ["45", "50", "60", "75"],
        correct: 2,
        category: "Matematika"
    },
    {
        question: "Berapakah hasil dari 144 ÷ 12?",
        options: ["10", "11", "12", "14"],
        correct: 2,
        category: "Matematika"
    },
    {
        question: "Jika sebuah segitiga memiliki alas 10 cm dan tinggi 6 cm, luasnya adalah...",
        options: ["20 cm²", "30 cm²", "40 cm²", "60 cm²"],
        correct: 1,
        category: "Matematika"
    },
    {
        question: "Hasil dari 7² adalah...",
        options: ["14", "21", "42", "49"],
        correct: 3,
        category: "Matematika"
    },
    {
        question: "Berapakah 25% dari 200?",
        options: ["25", "40", "50", "75"],
        correct: 2,
        category: "Matematika"
    },
    {
        question: "Bilangan prima berikut adalah...",
        options: ["9", "15", "17", "21"],
        correct: 2,
        category: "Matematika"
    },
    {
        question: "Jika panjang persegi adalah 8 cm, luasnya adalah...",
        options: ["16 cm²", "32 cm²", "64 cm²", "72 cm²"],
        correct: 2,
        category: "Matematika"
    },
    {
        question: "Hasil dari 3/4 + 1/4 adalah...",
        options: ["1/2", "1", "3/4", "4/8"],
        correct: 1,
        category: "Matematika"
    },
    {
        question: "Rata-rata dari 6, 8, dan 10 adalah...",
        options: ["6", "7", "8", "9"],
        correct: 2,
        category: "Matematika"
    },

    {
        question: "What is the opposite of the word 'expensive'?",
        options: ["Cheap", "Large", "Fast", "Heavy"],
        correct: 0,
        category: "Bahasa Inggris"
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "She go to school every day.",
            "She going to school every day.",
            "She goes to school every day.",
            "She gone to school every day."
        ],
        correct: 2,
        category: "Bahasa Inggris"
    },
    {
        question: "What is the past tense of 'eat'?",
        options: ["Eated", "Ate", "Eating", "Eats"],
        correct: 1,
        category: "Bahasa Inggris"
    },
    {
        question: "What does 'beautiful' mean?",
        options: ["Cantik", "Cepat", "Kuat", "Lambat"],
        correct: 0,
        category: "Bahasa Inggris"
    },
    {
        question: "Complete the sentence: I ___ a student.",
        options: ["am", "is", "are", "be"],
        correct: 0,
        category: "Bahasa Inggris"
    },
    {
        question: "Which word is a noun?",
        options: ["Run", "Beautiful", "Book", "Quickly"],
        correct: 2,
        category: "Bahasa Inggris"
    },
    {
        question: "What is the plural form of 'child'?",
        options: ["Childs", "Childes", "Children", "Childrens"],
        correct: 2,
        category: "Bahasa Inggris"
    },
    {
        question: "Choose the correct word: They ___ playing football.",
        options: ["is", "am", "are", "be"],
        correct: 2,
        category: "Bahasa Inggris"
    },
    {
        question: "What is the meaning of 'library'?",
        options: ["Laboratorium", "Perpustakaan", "Kantor", "Kantin"],
        correct: 1,
        category: "Bahasa Inggris"
    },
    {
        question: "Which one is an adjective?",
        options: ["Quickly", "Run", "Beautiful", "Happiness"],
        correct: 2,
        category: "Bahasa Inggris"
    },

    {
        question: "Apa kepanjangan dari HTML?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTool Markup Language",
            "HomeText Markup Language"
        ],
        correct: 0,
        category: "Pemrograman"
    },
    {
        question: "Method JavaScript yang digunakan untuk memilih elemen berdasarkan CSS selector adalah...",
        options: [
            "getElement()",
            "querySelector()",
            "selectElement()",
            "findElement()"
        ],
        correct: 1,
        category: "Pemrograman"
    },
    {
        question: "Method yang digunakan untuk membuat elemen HTML baru adalah...",
        options: [
            "newElement()",
            "makeElement()",
            "createElement()",
            "addElement()"
        ],
        correct: 2,
        category: "Pemrograman"
    },
    {
        question: "Method yang digunakan untuk memasang event listener adalah...",
        options: [
            "addEventListener()",
            "setEvent()",
            "createEvent()",
            "eventListener()"
        ],
        correct: 0,
        category: "Pemrograman"
    },
    {
        question: "Apa kegunaan localStorage?",
        options: [
            "Menyimpan data sementara selama fungsi berjalan",
            "Menyimpan data di browser",
            "Menghapus seluruh HTML",
            "Menjalankan JavaScript tanpa browser"
        ],
        correct: 1,
        category: "Pemrograman"
    },
    {
        question: "Properti event yang menunjukkan elemen yang sebenarnya diklik adalah...",
        options: [
            "event.current",
            "event.element",
            "event.target",
            "event.click"
        ],
        correct: 2,
        category: "Pemrograman"
    },
    {
        question: "Method yang digunakan untuk menambahkan elemen sebagai child adalah...",
        options: [
            "append()",
            "remove()",
            "delete()",
            "clear()"
        ],
        correct: 0,
        category: "Pemrograman"
    },
    {
        question: "Apa kegunaan textContent?",
        options: [
            "Mengubah isi teks sebuah elemen",
            "Menghapus CSS",
            "Membuat database",
            "Menjalankan event"
        ],
        correct: 0,
        category: "Pemrograman"
    },
    {
        question: "Method yang digunakan untuk menghapus data tertentu dari localStorage adalah...",
        options: [
            "deleteItem()",
            "removeItem()",
            "clearItem()",
            "eraseItem()"
        ],
        correct: 1,
        category: "Pemrograman"
    },
    {
        question: "Apa kegunaan event delegation?",
        options: [
            "Menghapus semua event",
            "Menangani event dari child melalui parent",
            "Mengubah warna browser",
            "Menyimpan data ke server"
        ],
        correct: 1,
        category: "Pemrograman"
    },

    {
        question: "Indonesia memproklamasikan kemerdekaan pada tanggal...",
        options: [
            "17 Agustus 1945",
            "20 Mei 1908",
            "28 Oktober 1928",
            "10 November 1945"
        ],
        correct: 0,
        category: "Sejarah"
    },
    {
        question: "Tokoh yang membacakan teks Proklamasi Kemerdekaan Indonesia adalah...",
        options: [
            "Mohammad Hatta",
            "Soekarno",
            "Sutan Sjahrir",
            "Ki Hajar Dewantara"
        ],
        correct: 1,
        category: "Sejarah"
    },
    {
        question: "Sumpah Pemuda terjadi pada tahun...",
        options: ["1908", "1928", "1945", "1950"],
        correct: 1,
        category: "Sejarah"
    },
    {
        question: "Organisasi Budi Utomo berdiri pada tahun...",
        options: ["1905", "1908", "1912", "1928"],
        correct: 1,
        category: "Sejarah"
    },
    {
        question: "Peristiwa Rengasdengklok terjadi menjelang...",
        options: [
            "Sumpah Pemuda",
            "Proklamasi Kemerdekaan",
            "Konferensi Asia Afrika",
            "Pemilu pertama"
        ],
        correct: 1,
        category: "Sejarah"
    },
    {
        question: "Konferensi Asia Afrika diselenggarakan di...",
        options: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
        correct: 1,
        category: "Sejarah"
    },
    {
        question: "VOC merupakan singkatan dari...",
        options: [
            "Verenigde Oostindische Compagnie",
            "Verenigde Oost Company",
            "Dutch East Company",
            "East Indies Corporation"
        ],
        correct: 0,
        category: "Sejarah"
    },
    {
        question: "Hari Pahlawan diperingati setiap tanggal...",
        options: [
            "17 Agustus",
            "28 Oktober",
            "10 November",
            "20 Mei"
        ],
        correct: 2,
        category: "Sejarah"
    },
    {
        question: "Kerajaan Majapahit mencapai masa kejayaan pada masa pemerintahan...",
        options: [
            "Hayam Wuruk",
            "Ken Arok",
            "Raden Wijaya",
            "Airlangga"
        ],
        correct: 0,
        category: "Sejarah"
    },
    {
        question: "Pancasila secara resmi disahkan sebagai dasar negara pada...",
        options: [
            "1 Juni 1945",
            "17 Agustus 1945",
            "18 Agustus 1945",
            "20 Mei 1945"
        ],
        correct: 2,
        category: "Sejarah"
    }
];


let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let timer;
let timeLeft = 15;
let selectedCategory = "";

const categoryMenu = document.querySelector("#categoryMenu");
const quizContent = document.querySelector("#quizContent");

const category = document.querySelector("#category");
const progress = document.querySelector("#progress");
const progressFill = document.querySelector("#progressFill");
const timerDisplay = document.querySelector("#timer");
const question = document.querySelector("#question");
const options = document.querySelector("#options");
const nextBtn = document.querySelector("#nextBtn");

const result = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#highScore");

const restartBtn = document.querySelector("#restartBtn");
const categoryBtn = document.querySelector("#categoryBtn");
const themeBtn = document.querySelector("#themeBtn");


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}


function startQuiz(categoryName) {
    selectedCategory = categoryName;

    if (categoryName === "Random") {
        questions = shuffle([...quizData]).slice(0, 10);
    } else {
        questions = quizData
            .filter((item) => item.category === categoryName);

        questions = shuffle([...questions]);
    }

    currentQuestion = 0;
    score = 0;

    categoryMenu.classList.add("hidden");
    result.classList.add("hidden");
    quizContent.classList.remove("hidden");

    renderQuestion();
}


function renderQuestion() {
    clearInterval(timer);

    answered = false;
    timeLeft = 15;

    const current = questions[currentQuestion];

    category.textContent = current.category;
    progress.textContent =
        `Soal ${currentQuestion + 1}/${questions.length}`;

    question.textContent = current.question;
    timerDisplay.textContent = timeLeft;

    progressFill.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    options.innerHTML = "";
    nextBtn.classList.add("hidden");

    current.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.classList.add("option-btn");
        button.type = "button";
        button.textContent = option;
        button.dataset.index = index;

        options.append(button);
    });

    startTimer();
}


function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showCorrectAnswer();
        }
    }, 1000);
}


function showCorrectAnswer() {
    if (answered) {
        return;
    }

    answered = true;

    const current = questions[currentQuestion];
    const buttons = options.querySelectorAll(".option-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === current.correct) {
            button.classList.add("correct");
        }
    });

    nextBtn.classList.remove("hidden");
}


options.addEventListener("click", (e) => {
    const selectedButton = e.target.closest(".option-btn");

    if (!selectedButton || answered) {
        return;
    }

    answered = true;
    clearInterval(timer);

    const selectedIndex = Number(selectedButton.dataset.index);
    const current = questions[currentQuestion];

    const buttons = options.querySelectorAll(".option-btn");

    buttons.forEach((button) => {
        button.disabled = true;
    });

    if (selectedIndex === current.correct) {
        score++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("wrong");
        buttons[current.correct].classList.add("correct");
    }

    nextBtn.classList.remove("hidden");
});


nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
});


function showResult() {
    clearInterval(timer);

    quizContent.classList.add("hidden");
    result.classList.remove("hidden");

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    scoreDisplay.textContent =
        `${score}/${questions.length}`;

    highScoreDisplay.textContent =
        `${getHighScore(percentage)}%`;
}


function getHighScore(currentScore) {
    const savedHighScore =
        Number(localStorage.getItem("quizHighScore")) || 0;

    if (currentScore > savedHighScore) {
        localStorage.setItem("quizHighScore", currentScore);
        return currentScore;
    }

    return savedHighScore;
}


document.querySelector(".category-grid").addEventListener("click", (e) => {
    const selectedButton = e.target.closest(".category-btn");

    if (!selectedButton) {
        return;
    }

    startQuiz(selectedButton.dataset.category);
});


restartBtn.addEventListener("click", () => {
    startQuiz(selectedCategory);
});


categoryBtn.addEventListener("click", () => {
    clearInterval(timer);

    quizContent.classList.add("hidden");
    result.classList.add("hidden");
    categoryMenu.classList.remove("hidden");

    category.textContent = "Interactive Quiz";
});


themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    if (isDark) {
        themeBtn.innerHTML =
            '<i class="fi fi-rr-sun"></i>';

        localStorage.setItem("quizTheme", "dark");
    } else {
        themeBtn.innerHTML =
            '<i class="fi fi-rr-moon"></i>';

        localStorage.setItem("quizTheme", "light");
    }
});


function loadTheme() {
    const savedTheme =
        localStorage.getItem("quizTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        themeBtn.innerHTML =
            '<i class="fi fi-rr-sun"></i>';
    }
}


loadTheme();