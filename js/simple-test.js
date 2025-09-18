// Prosta wersja systemu ćwiczeń do debugowania

console.log('Loading simple test system...');

// Prosta baza ćwiczeń - tylko kilka przykładów
const SIMPLE_EXERCISES = {
    lesson1: [
        { id: 1, type: 'quiz', title: 'Co oznacza HTML?', description: 'Wybierz prawidłowe rozwinięcie', options: ['HyperText Markup Language', 'High Tech Modern Language'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 2, type: 'code', title: 'Utwórz nagłówek H1', description: 'Napisz tag h1 z tekstem "Test"', expected: '<h1>Test</h1>', difficulty: 'easy', time: 3 },
        { id: 3, type: 'quiz', title: 'Który element zawiera treść?', description: 'Wybierz właściwy element', options: ['<head>', '<body>', '<html>'], correct: 1, difficulty: 'easy', time: 2 }
    ],
    lesson2: [
        { id: 4, type: 'quiz', title: 'Gdzie umieszcza się tytuł?', description: 'Wybierz właściwe miejsce', options: ['<body>', '<head>', '<html>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 5, type: 'code', title: 'Dodaj meta charset', description: 'Napisz meta tag z UTF-8', expected: '<meta charset="UTF-8">', difficulty: 'easy', time: 3 },
        { id: 6, type: 'quiz', title: 'Co to jest DOCTYPE?', description: 'Wybierz definicję', options: ['Deklaracja typu dokumentu', 'Tytuł dokumentu'], correct: 0, difficulty: 'easy', time: 3 }
    ]
};

// Prosta klasa testowa
class SimpleExerciseSystem {
    constructor() {
        console.log('SimpleExerciseSystem created');
        this.selectedExercises = [];
        this.currentExerciseIndex = 0;
        this.currentLesson = null;
    }

    // Wygeneruj ćwiczenia dla lekcji (dla testu bierzemy wszystkie 3)
    generateExercisesForLesson(lessonNumber) {
        console.log(`Generating exercises for lesson ${lessonNumber}`);
        const lessonKey = `lesson${lessonNumber}`;
        const exercises = SIMPLE_EXERCISES[lessonKey];

        if (!exercises) {
            console.error(`No exercises for lesson ${lessonNumber}`);
            return [];
        }

        // Weź wszystkie 3 ćwiczenia (zamiast losować 20)
        this.selectedExercises = [...exercises];
        console.log('Generated exercises:', this.selectedExercises);
        return this.selectedExercises;
    }

    // Rozpocznij test
    startLessonTest(lessonNumber) {
        console.log(`Starting test for lesson ${lessonNumber}`);
        this.currentLesson = lessonNumber;
        this.generateExercisesForLesson(lessonNumber);
        this.currentExerciseIndex = 0;

        return this.getCurrentExercise();
    }

    // Pobierz aktualne ćwiczenie
    getCurrentExercise() {
        if (this.currentExerciseIndex >= this.selectedExercises.length) {
            return null;
        }

        return {
            exercise: this.selectedExercises[this.currentExerciseIndex],
            index: this.currentExerciseIndex + 1,
            total: this.selectedExercises.length
        };
    }

    // Sprawdź czy lekcja ma ukończony test
    hasCompletedTest(lessonNumber) {
        return false; // Dla uproszczenia zawsze false
    }

    // Sprawdź odpowiedź
    checkAnswer(answer) {
        console.log('Checking answer:', answer);
        const exercise = this.selectedExercises[this.currentExerciseIndex];
        let isCorrect = false;

        if (exercise.type === 'quiz') {
            isCorrect = parseInt(answer) === exercise.correct;
        } else if (exercise.type === 'code') {
            isCorrect = answer.toLowerCase().includes(exercise.expected.toLowerCase());
        }

        this.currentExerciseIndex++;

        return {
            correct: isCorrect,
            feedback: isCorrect ? 'Prawidłowa odpowiedź!' : 'Nieprawidłowa odpowiedź.'
        };
    }

    // Statystyki
    getOverallStats() {
        return {
            totalTests: 0,
            passedTests: 0,
            averageScore: 0
        };
    }

    // Zakończ test
    finishTest() {
        return {
            totalExercises: this.selectedExercises.length,
            correctAnswers: 2, // Dummy
            scorePercentage: 67,
            grade: 'C',
            passed: false
        };
    }
}

// Utwórz instancję
window.SimpleExerciseSystem = new SimpleExerciseSystem();

console.log('Simple test system loaded successfully');
console.log('Available at: window.SimpleExerciseSystem');