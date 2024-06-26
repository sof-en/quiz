type arrayOfQuestions = {
    question: string;
    arr: string[];
    current: number;
};

const questionData: arrayOfQuestions[] = [
    {
        question: "Как объявить переменную в TypeScript?",
        arr: ["var", "let", "const", "all of the above"],
        current: 3, // all of the above
    },
    {
        question:
            "Какой оператор используется для аннотации типов в TypeScript?",
        arr: [":", "::", "=", "=="],
        current: 0, // :
    },
    {
        question:
            "Как задать тип переменной, чтобы она могла хранить либо строку, либо число?",
        arr: [
            "string|number",
            "string/number",
            "string&number",
            "string or number",
        ],
        current: 0, // string|number
    },
    {
        question: "Как импортировать модуль в TypeScript?",
        arr: [
            "import { модуль } from 'путь'",
            "include модуль 'путь'",
            "require('путь')",
            "fetch('путь')",
        ],
        current: 0, // import { модуль } from 'путь'
    },
];

export default questionData