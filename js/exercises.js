// System ćwiczeń dla kursu HTML - baza danych zadań

const EXERCISES_DATABASE = {
    // Lekcja 1: Wprowadzenie do HTML
    lesson1: [
        { id: 1, type: 'code', title: 'Utwórz podstawową strukturę HTML', description: 'Napisz minimalny dokument HTML z DOCTYPE, html, head i body', expected: '<!DOCTYPE html>', difficulty: 'easy', time: 5 },
        { id: 2, type: 'code', title: 'Dodaj tytuł strony', description: 'Utwórz dokument HTML z tytułem "Moja pierwsza strona"', expected: '<title>Moja pierwsza strona</title>', difficulty: 'easy', time: 3 },
        { id: 3, type: 'quiz', title: 'Co oznacza HTML?', description: 'Wybierz prawidłowe rozwinięcie skrótu HTML', options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 4, type: 'code', title: 'Dodaj nagłówek H1', description: 'Utwórz nagłówek pierwszego poziomu z tekstem "Witaj świecie!"', expected: '<h1>Witaj świecie!</h1>', difficulty: 'easy', time: 3 },
        { id: 5, type: 'code', title: 'Dodaj paragraf', description: 'Utwórz paragraf z dowolnym tekstem', expected: '<p>', difficulty: 'easy', time: 3 },
        { id: 6, type: 'quiz', title: 'Która wersja HTML jest najnowsza?', description: 'Wybierz aktualną wersję HTML', options: ['HTML4', 'HTML5', 'HTML6'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 7, type: 'code', title: 'Ustaw język dokumentu', description: 'Dodaj atrybut lang="pl" do elementu html', expected: '<html lang="pl">', difficulty: 'easy', time: 4 },
        { id: 8, type: 'code', title: 'Dodaj meta charset', description: 'Dodaj meta tag z kodowaniem UTF-8', expected: '<meta charset="UTF-8">', difficulty: 'easy', time: 4 },
        { id: 9, type: 'fix', title: 'Napraw błędny tag', description: 'Popraw błąd w tagu: <h1>Nagłówek<h1>', original: '<h1>Nagłówek<h1>', expected: '<h1>Nagłówek</h1>', difficulty: 'easy', time: 3 },
        { id: 10, type: 'quiz', title: 'Który element zawiera treść strony?', description: 'Wybierz element który zawiera widoczną treść', options: ['<head>', '<body>', '<html>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 11, type: 'code', title: 'Dodaj komentarz HTML', description: 'Napisz komentarz HTML z tekstem "To jest komentarz"', expected: '<!-- To jest komentarz -->', difficulty: 'easy', time: 4 },
        { id: 12, type: 'code', title: 'Utwórz kompletną stronę', description: 'Stwórz kompletną stronę HTML z tytułem i nagłówkiem', expected: '<!DOCTYPE html>', difficulty: 'medium', time: 8 },
        { id: 13, type: 'fix', title: 'Napraw DOCTYPE', description: 'Popraw błędny DOCTYPE: <!doctype HTML>', original: '<!doctype HTML>', expected: '<!DOCTYPE html>', difficulty: 'easy', time: 3 },
        { id: 14, type: 'quiz', title: 'Co robi tag DOCTYPE?', description: 'Wybierz funkcję tagu DOCTYPE', options: ['Definiuje typ dokumentu', 'Dodaje style', 'Tworzy linki'], correct: 0, difficulty: 'easy', time: 3 },
        { id: 15, type: 'code', title: 'Dodaj viewport meta', description: 'Dodaj meta tag viewport dla responsive design', expected: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', difficulty: 'medium', time: 5 },
        { id: 16, type: 'code', title: 'Zagnieździj elementy', description: 'Umieść paragraf wewnątrz elementu div', expected: '<div><p>', difficulty: 'easy', time: 4 },
        { id: 17, type: 'quiz', title: 'Który znak kończy tag zamykający?', description: 'Wybierz znak który kończy tag zamykający', options: ['>', '/>', '</'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 18, type: 'code', title: 'Dodaj dwa nagłówki', description: 'Utwórz H1 z "Tytuł" i H2 z "Podtytuł"', expected: '<h1>Tytuł</h1>', difficulty: 'easy', time: 5 },
        { id: 19, type: 'fix', title: 'Napraw zagnieżdżenie', description: 'Popraw błędne zagnieżdżenie: <p><div>tekst</div></p>', original: '<p><div>tekst</div></p>', expected: '<div><p>tekst</p></div>', difficulty: 'medium', time: 5 },
        { id: 20, type: 'code', title: 'Użyj encji HTML', description: 'Napisz "Tom & Jerry" używając encji HTML', expected: 'Tom &amp; Jerry', difficulty: 'medium', time: 4 },
        { id: 21, type: 'quiz', title: 'Który element jest samodomykający?', description: 'Wybierz element który nie ma tagu zamykającego', options: ['<p>', '<br>', '<div>'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 22, type: 'code', title: 'Dodaj atrybut id', description: 'Dodaj atrybut id="main" do elementu div', expected: '<div id="main">', difficulty: 'easy', time: 3 },
        { id: 23, type: 'code', title: 'Dodaj atrybut class', description: 'Dodaj klasę "highlight" do paragrafu', expected: '<p class="highlight">', difficulty: 'easy', time: 3 },
        { id: 24, type: 'fix', title: 'Napraw cudzysłowy', description: 'Popraw błędne cudzysłowy: <p class=test>tekst</p>', original: '<p class=test>tekst</p>', expected: '<p class="test">tekst</p>', difficulty: 'easy', time: 3 },
        { id: 25, type: 'code', title: 'Utwórz listę znaczników', description: 'Wymień 3 znaczniki HTML w paragrafach', expected: '<p>&lt;html&gt;</p>', difficulty: 'medium', time: 6 },
        { id: 26, type: 'quiz', title: 'Co to są atrybuty?', description: 'Wybierz definicję atrybutów HTML', options: ['Dodatkowe informacje o elemencie', 'Tekst elementu', 'Style CSS'], correct: 0, difficulty: 'easy', time: 3 },
        { id: 27, type: 'code', title: 'Dodaj kilka atrybutów', description: 'Dodaj id, class i title do elementu div', expected: '<div id=', difficulty: 'medium', time: 5 },
        { id: 28, type: 'code', title: 'Utwórz strukturę nagłówków', description: 'Stwórz nagłówki H1, H2, H3 w hierarchii', expected: '<h1>', difficulty: 'easy', time: 5 },
        { id: 29, type: 'fix', title: 'Napraw wielkość liter', description: 'Popraw wielkość liter w tagu: <P>tekst</P>', original: '<P>tekst</P>', expected: '<p>tekst</p>', difficulty: 'easy', time: 3 },
        { id: 30, type: 'code', title: 'Dodaj tekst z formatowaniem', description: 'Utwórz paragraf z pogrubionym słowem "ważne"', expected: '<p>', difficulty: 'medium', time: 4 },
        { id: 31, type: 'quiz', title: 'Który tag nie istnieje w HTML?', description: 'Wybierz nieistniejący tag HTML', options: ['<paragraph>', '<p>', '<div>'], correct: 0, difficulty: 'easy', time: 3 },
        { id: 32, type: 'code', title: 'Dodaj meta description', description: 'Dodaj meta opis strony', expected: '<meta name="description"', difficulty: 'medium', time: 5 },
        { id: 33, type: 'code', title: 'Utwórz pusty element', description: 'Napisz tag br (łamanie linii)', expected: '<br>', difficulty: 'easy', time: 2 },
        { id: 34, type: 'fix', title: 'Napraw brakujący tag', description: 'Dodaj brakujący tag zamykający: <html><body>treść', original: '<html><body>treść', expected: '<html><body>treść</body></html>', difficulty: 'medium', time: 4 },
        { id: 35, type: 'code', title: 'Dodaj separator', description: 'Dodaj poziomą linię (hr) między dwoma paragrafami', expected: '<p>tekst</p><hr><p>tekst</p>', difficulty: 'easy', time: 4 },
        { id: 36, type: 'quiz', title: 'W którym elemencie umieszcza się meta tagi?', description: 'Wybierz właściwe miejsce dla meta tagów', options: ['<body>', '<head>', '<html>'], correct: 1, difficulty: 'easy', time: 3 },
        { id: 37, type: 'code', title: 'Dodaj tekst preformatowany', description: 'Użyj tagu pre do wyświetlenia tekstu z zachowanymi spacjami', expected: '<pre>', difficulty: 'medium', time: 4 },
        { id: 38, type: 'code', title: 'Utwórz cytat', description: 'Dodaj cytat blokowy z tagu blockquote', expected: '<blockquote>', difficulty: 'medium', time: 4 },
        { id: 39, type: 'fix', title: 'Napraw zagnieżdżone cudzysłowy', description: 'Popraw: <p title="Jan "Kowalski"">tekst</p>', original: '<p title="Jan "Kowalski"">tekst</p>', expected: '<p title="Jan \'Kowalski\'">tekst</p>', difficulty: 'hard', time: 5 },
        { id: 40, type: 'code', title: 'Dodaj skrót', description: 'Użyj tagu abbr dla skrótu "HTML"', expected: '<abbr title="HyperText Markup Language">HTML</abbr>', difficulty: 'medium', time: 5 },
        { id: 41, type: 'quiz', title: 'Który atrybut jest globalny?', description: 'Wybierz atrybut dostępny dla wszystkich elementów', options: ['href', 'src', 'id'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 42, type: 'code', title: 'Dodaj kod inline', description: 'Użyj tagu code do wyróżnienia kodu w tekście', expected: '<code>', difficulty: 'medium', time: 4 },
        { id: 43, type: 'code', title: 'Utwórz adres', description: 'Użyj tagu address dla informacji kontaktowych', expected: '<address>', difficulty: 'medium', time: 4 },
        { id: 44, type: 'fix', title: 'Napraw strukturę dokumentu', description: 'Popraw kolejność: <body><head><title>test</title></head></body>', original: '<body><head><title>test</title></head></body>', expected: '<head><title>test</title></head><body></body>', difficulty: 'medium', time: 5 },
        { id: 45, type: 'code', title: 'Dodaj podkreślenie semantyczne', description: 'Użyj tagu u do podkreślenia tekstu', expected: '<u>', difficulty: 'easy', time: 3 },
        { id: 46, type: 'quiz', title: 'Co oznacza semantyczny HTML?', description: 'Wybierz definicję semantycznego HTML', options: ['HTML z znaczeniem', 'HTML ze stylami', 'HTML z JavaScriptem'], correct: 0, difficulty: 'medium', time: 4 },
        { id: 47, type: 'code', title: 'Dodaj tekst małymi literami', description: 'Użyj tagu small dla drobnego druku', expected: '<small>', difficulty: 'easy', time: 3 },
        { id: 48, type: 'code', title: 'Utwórz nagłówek z podtytułem', description: 'Stwórz H1 i bezpośrednio pod nim H2', expected: '<h1>', difficulty: 'easy', time: 4 },
        { id: 49, type: 'fix', title: 'Napraw niepoprawny element', description: 'Zamień deprecated tag <center> na div z odpowiednim stylem', original: '<center>tekst</center>', expected: '<div style="text-align: center">tekst</div>', difficulty: 'hard', time: 6 },
        { id: 50, type: 'code', title: 'Stwórz kompletną stronę wizytówkę', description: 'Utwórz stronę HTML z tytułem, nagłówkiem, paragrafem i stopką', expected: '<!DOCTYPE html>', difficulty: 'hard', time: 10 }
    ],

    // Lekcja 2: Struktura dokumentu HTML
    lesson2: [
        { id: 51, type: 'code', title: 'Dodaj lang do html', description: 'Ustaw język dokumentu na polski', expected: '<html lang="pl">', difficulty: 'easy', time: 3 },
        { id: 52, type: 'code', title: 'Ustaw kodowanie znaków', description: 'Dodaj meta charset UTF-8', expected: '<meta charset="UTF-8">', difficulty: 'easy', time: 3 },
        { id: 53, type: 'quiz', title: 'Gdzie umieszcza się tytuł strony?', description: 'Wybierz właściwe miejsce dla tagu title', options: ['<body>', '<head>', '<html>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 54, type: 'code', title: 'Dodaj viewport', description: 'Ustaw viewport dla urządzeń mobilnych', expected: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', difficulty: 'medium', time: 5 },
        { id: 55, type: 'code', title: 'Dodaj opis strony', description: 'Dodaj meta description z opisem strony', expected: '<meta name="description"', difficulty: 'easy', time: 4 },
        { id: 56, type: 'fix', title: 'Napraw kolejność elementów', description: 'Przenieś title z body do head', original: '<head></head><body><title>Test</title></body>', expected: '<head><title>Test</title></head><body></body>', difficulty: 'medium', time: 4 },
        { id: 57, type: 'code', title: 'Dodaj słowa kluczowe', description: 'Dodaj meta keywords', expected: '<meta name="keywords"', difficulty: 'easy', time: 4 },
        { id: 58, type: 'quiz', title: 'Który element definiuje dokument HTML5?', description: 'Wybierz właściwy DOCTYPE dla HTML5', options: ['<!DOCTYPE HTML5>', '<!DOCTYPE html>', '<!DOCTYPE>'], correct: 1, difficulty: 'easy', time: 3 },
        { id: 59, type: 'code', title: 'Dodaj autora strony', description: 'Użyj meta author', expected: '<meta name="author"', difficulty: 'easy', time: 3 },
        { id: 60, type: 'code', title: 'Utwórz sekcję head', description: 'Stwórz kompletną sekcję head z tytułem i meta tagami', expected: '<head>', difficulty: 'medium', time: 7 },
        { id: 61, type: 'fix', title: 'Napraw brakujący DOCTYPE', description: 'Dodaj DOCTYPE do dokumentu', original: '<html><head><title>Test</title></head></html>', expected: '<!DOCTYPE html><html><head><title>Test</title></head></html>', difficulty: 'easy', time: 3 },
        { id: 62, type: 'code', title: 'Dodaj refresh redirect', description: 'Ustaw przekierowanie po 5 sekundach', expected: '<meta http-equiv="refresh"', difficulty: 'hard', time: 6 },
        { id: 63, type: 'quiz', title: 'Co zawiera sekcja head?', description: 'Wybierz co umieszcza się w head', options: ['Metadane dokumentu', 'Treść strony', 'Stopkę'], correct: 0, difficulty: 'easy', time: 3 },
        { id: 64, type: 'code', title: 'Dodaj favicon', description: 'Połącz ikonę strony (favicon.ico)', expected: '<link rel="icon"', difficulty: 'medium', time: 5 },
        { id: 65, type: 'code', title: 'Ustaw język treści', description: 'Dodaj atrybut lang do konkretnego elementu', expected: 'lang=', difficulty: 'medium', time: 4 },
        { id: 66, type: 'fix', title: 'Napraw zagnieżdżenie head w body', description: 'Przenieś head poza body', original: '<body><head><title>Test</title></head><p>treść</p></body>', expected: '<head><title>Test</title></head><body><p>treść</p></body>', difficulty: 'medium', time: 5 },
        { id: 67, type: 'code', title: 'Dodaj base URL', description: 'Ustaw bazowy URL dla relatywnych linków', expected: '<base href=', difficulty: 'hard', time: 6 },
        { id: 68, type: 'quiz', title: 'Które meta tagi są ważne dla SEO?', description: 'Wybierz meta tag ważny dla SEO', options: ['charset', 'description', 'viewport'], correct: 1, difficulty: 'medium', time: 4 },
        { id: 69, type: 'code', title: 'Dodaj Open Graph', description: 'Dodaj meta tag og:title dla mediów społecznościowych', expected: '<meta property="og:title"', difficulty: 'hard', time: 6 },
        { id: 70, type: 'code', title: 'Ustaw tryb zgodności IE', description: 'Dodaj meta tag dla Internet Explorer', expected: '<meta http-equiv="X-UA-Compatible"', difficulty: 'medium', time: 5 },
        { id: 71, type: 'fix', title: 'Napraw duplikat charset', description: 'Usuń zdublowany meta charset', original: '<meta charset="UTF-8"><meta charset="UTF-8">', expected: '<meta charset="UTF-8">', difficulty: 'easy', time: 3 },
        { id: 72, type: 'code', title: 'Dodaj CSS link', description: 'Połącz zewnętrzny plik CSS', expected: '<link rel="stylesheet"', difficulty: 'medium', time: 4 },
        { id: 73, type: 'quiz', title: 'Który atrybut łączy CSS?', description: 'Wybierz atrybut do łączenia CSS', options: ['src', 'href', 'link'], correct: 1, difficulty: 'easy', time: 3 },
        { id: 74, type: 'code', title: 'Dodaj CSS inline', description: 'Dodaj style tag z prostym CSS', expected: '<style>', difficulty: 'medium', time: 4 },
        { id: 75, type: 'code', title: 'Połącz JavaScript', description: 'Dodaj link do zewnętrznego pliku JS', expected: '<script src=', difficulty: 'medium', time: 4 },
        { id: 76, type: 'fix', title: 'Napraw script w head', description: 'Przenieś script na koniec body', original: '<head><script src="app.js"></script></head><body></body>', expected: '<head></head><body><script src="app.js"></script></body>', difficulty: 'medium', time: 5 },
        { id: 77, type: 'code', title: 'Dodaj preload zasób', description: 'Ustaw preload dla ważnego zasobu', expected: '<link rel="preload"', difficulty: 'hard', time: 6 },
        { id: 78, type: 'quiz', title: 'Gdzie umieszcza się JavaScript?', description: 'Wybierz najlepsze miejsce dla JS', options: ['<head>', 'przed </body>', 'w <title>'], correct: 1, difficulty: 'medium', time: 4 },
        { id: 79, type: 'code', title: 'Dodaj manifest PWA', description: 'Połącz manifest dla Progressive Web App', expected: '<link rel="manifest"', difficulty: 'hard', time: 6 },
        { id: 80, type: 'code', title: 'Ustaw robots meta', description: 'Dodaj meta robots z index,follow', expected: '<meta name="robots"', difficulty: 'medium', time: 5 },
        { id: 81, type: 'fix', title: 'Napraw błędny link CSS', description: 'Popraw link do CSS', original: '<link href="style.css">', expected: '<link rel="stylesheet" href="style.css">', difficulty: 'medium', time: 4 },
        { id: 82, type: 'code', title: 'Dodaj canonical URL', description: 'Ustaw canonical link dla SEO', expected: '<link rel="canonical"', difficulty: 'hard', time: 6 },
        { id: 83, type: 'quiz', title: 'Co to jest DOCTYPE?', description: 'Wybierz definicję DOCTYPE', options: ['Deklaracja typu dokumentu', 'Tytuł dokumentu', 'Opis dokumentu'], correct: 0, difficulty: 'easy', time: 3 },
        { id: 84, type: 'code', title: 'Dodaj alternate lang', description: 'Dodaj link do wersji w innym języku', expected: '<link rel="alternate" hreflang=', difficulty: 'hard', time: 7 },
        { id: 85, type: 'code', title: 'Ustaw theme color', description: 'Dodaj kolor motywu dla przeglądarki mobilnej', expected: '<meta name="theme-color"', difficulty: 'medium', time: 5 },
        { id: 86, type: 'fix', title: 'Napraw niekompletny viewport', description: 'Dodaj brakujące parametry viewport', original: '<meta name="viewport" content="width=device-width">', expected: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', difficulty: 'medium', time: 5 },
        { id: 87, type: 'code', title: 'Dodaj DNS prefetch', description: 'Ustaw DNS prefetch dla zewnętrznej domeny', expected: '<link rel="dns-prefetch"', difficulty: 'hard', time: 6 },
        { id: 88, type: 'quiz', title: 'Który element ładuje się pierwszy?', description: 'Wybierz element ładowany jako pierwszy', options: ['<body>', '<head>', 'DOCTYPE'], correct: 2, difficulty: 'medium', time: 4 },
        { id: 89, type: 'code', title: 'Dodaj Twitter Card', description: 'Dodaj meta tag dla Twitter Card', expected: '<meta name="twitter:card"', difficulty: 'hard', time: 6 },
        { id: 90, type: 'code', title: 'Utwórz template HTML5', description: 'Stwórz kompletny szablon HTML5 strony', expected: '<!DOCTYPE html>', difficulty: 'hard', time: 10 },
        { id: 91, type: 'fix', title: 'Napraw mixed content', description: 'Zmień http na https w linku', original: '<link rel="stylesheet" href="http://example.com/style.css">', expected: '<link rel="stylesheet" href="https://example.com/style.css">', difficulty: 'medium', time: 4 },
        { id: 92, type: 'code', title: 'Dodaj application name', description: 'Ustaw nazwę aplikacji web', expected: '<meta name="application-name"', difficulty: 'medium', time: 4 },
        { id: 93, type: 'quiz', title: 'Który meta tag wpływa na SEO?', description: 'Wybierz meta tag najważniejszy dla SEO', options: ['keywords', 'description', 'author'], correct: 1, difficulty: 'medium', time: 4 },
        { id: 94, type: 'code', title: 'Dodaj generator meta', description: 'Dodaj informację o generatorze strony', expected: '<meta name="generator"', difficulty: 'easy', time: 3 },
        { id: 95, type: 'code', title: 'Ustaw cache control', description: 'Dodaj meta cache-control', expected: '<meta http-equiv="cache-control"', difficulty: 'hard', time: 6 },
        { id: 96, type: 'fix', title: 'Napraw przeterminowany meta', description: 'Usuń przestarzały meta tag', original: '<meta http-equiv="pragma" content="no-cache">', expected: '', difficulty: 'medium', time: 4 },
        { id: 97, type: 'code', title: 'Dodaj Apple touch icon', description: 'Ustaw ikonę dla urządzeń Apple', expected: '<link rel="apple-touch-icon"', difficulty: 'medium', time: 5 },
        { id: 98, type: 'quiz', title: 'Co oznacza responsive design?', description: 'Wybierz definicję responsive design', options: ['Szybkie ładowanie', 'Dopasowanie do urządzeń', 'Ładne kolory'], correct: 1, difficulty: 'easy', time: 3 },
        { id: 99, type: 'code', title: 'Dodaj preconnect link', description: 'Ustaw preconnect dla zewnętrznej domeny', expected: '<link rel="preconnect"', difficulty: 'hard', time: 6 },
        { id: 100, type: 'code', title: 'Stwórz optymalizowaną stronę', description: 'Utwórz stronę z wszystkimi najważniejszymi meta tagami', expected: '<!DOCTYPE html>', difficulty: 'hard', time: 12 }
    ]
};

class ExerciseSystem {
    constructor() {
        this.currentLesson = null;
        this.selectedExercises = [];
        this.completedExercises = [];
        this.currentExerciseIndex = 0;
        this.startTime = null;
        this.scores = [];

        this.loadProgress();
    }

    // Załaduj postęp z localStorage
    loadProgress() {
        const savedProgress = localStorage.getItem('htmlCourse_exercises');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            this.completedExercises = progress.completed || [];
            this.scores = progress.scores || [];
        }
    }

    // Zapisz postęp do localStorage
    saveProgress() {
        const progress = {
            completed: this.completedExercises,
            scores: this.scores,
            lastUpdate: Date.now()
        };
        localStorage.setItem('htmlCourse_exercises', JSON.stringify(progress));
    }

    // Wygeneruj 20 losowych ćwiczeń dla lekcji
    generateExercisesForLesson(lessonNumber) {
        const lessonKey = `lesson${lessonNumber}`;
        const exercises = EXERCISES_DATABASE[lessonKey];

        if (!exercises) {
            console.error(`Brak ćwiczeń dla lekcji ${lessonNumber}`);
            return [];
        }

        // Sprawdź czy już mamy wybrane ćwiczenia dla tej lekcji
        const savedKey = `htmlCourse_exercises_lesson${lessonNumber}`;
        const saved = localStorage.getItem(savedKey);

        if (saved) {
            this.selectedExercises = JSON.parse(saved);
            return this.selectedExercises;
        }

        // Losuj 20 ćwiczeń z 50 dostępnych
        const shuffled = [...exercises].sort(() => 0.5 - Math.random());
        this.selectedExercises = shuffled.slice(0, 20);

        // Zapisz wybrane ćwiczenia
        localStorage.setItem(savedKey, JSON.stringify(this.selectedExercises));

        return this.selectedExercises;
    }

    // Rozpocznij test dla lekcji
    startLessonTest(lessonNumber) {
        this.currentLesson = lessonNumber;
        this.generateExercisesForLesson(lessonNumber);
        this.currentExerciseIndex = 0;
        this.startTime = Date.now();

        return this.getCurrentExercise();
    }

    // Pobierz aktualne ćwiczenie
    getCurrentExercise() {
        if (this.currentExerciseIndex >= this.selectedExercises.length) {
            return null; // Test zakończony
        }

        return {
            exercise: this.selectedExercises[this.currentExerciseIndex],
            index: this.currentExerciseIndex + 1,
            total: this.selectedExercises.length
        };
    }

    // Sprawdź odpowiedź
    checkAnswer(answer) {
        const exercise = this.selectedExercises[this.currentExerciseIndex];
        let isCorrect = false;
        let feedback = '';

        switch (exercise.type) {
            case 'quiz':
                isCorrect = parseInt(answer) === exercise.correct;
                feedback = isCorrect ? 'Prawidłowa odpowiedź!' : `Nieprawidłowo. Prawidłowa odpowiedź to: ${exercise.options[exercise.correct]}`;
                break;

            case 'code':
                isCorrect = this.checkCodeAnswer(answer, exercise.expected);
                feedback = isCorrect ? 'Kod jest prawidłowy!' : 'Kod zawiera błędy lub jest niepełny.';
                break;

            case 'fix':
                isCorrect = this.checkCodeAnswer(answer, exercise.expected);
                feedback = isCorrect ? 'Błąd został poprawnie naprawiony!' : 'Błąd nie został prawidłowo naprawiony.';
                break;
        }

        // Zapisz wynik
        const timeSpent = Date.now() - this.startTime;
        const result = {
            exerciseId: exercise.id,
            correct: isCorrect,
            timeSpent: timeSpent,
            answer: answer
        };

        this.scores.push(result);
        this.currentExerciseIndex++;

        return {
            correct: isCorrect,
            feedback: feedback,
            timeSpent: Math.round(timeSpent / 1000),
            expectedTime: exercise.time * 60
        };
    }

    // Sprawdź odpowiedź kodu
    checkCodeAnswer(answer, expected) {
        // Prosta walidacja - sprawdź czy odpowiedź zawiera oczekiwane elementy
        const normalizedAnswer = answer.toLowerCase().replace(/\s+/g, '');
        const normalizedExpected = expected.toLowerCase().replace(/\s+/g, '');

        return normalizedAnswer.includes(normalizedExpected);
    }

    // Zakończ test i oblicz wyniki
    finishTest() {
        const testResults = this.calculateResults();

        // Dodaj do ukończonych testów
        this.completedExercises.push({
            lesson: this.currentLesson,
            date: Date.now(),
            results: testResults
        });

        this.saveProgress();

        return testResults;
    }

    // Oblicz wyniki testu
    calculateResults() {
        const totalExercises = this.selectedExercises.length;
        const correctAnswers = this.scores.filter(score => score.correct).length;
        const totalTime = this.scores.reduce((sum, score) => sum + score.timeSpent, 0);
        const expectedTime = this.selectedExercises.reduce((sum, ex) => sum + (ex.time * 60 * 1000), 0);

        const scorePercentage = Math.round((correctAnswers / totalExercises) * 100);
        const timeEfficiency = Math.round((expectedTime / totalTime) * 100);

        let grade = 'F';
        if (scorePercentage >= 90) grade = 'A';
        else if (scorePercentage >= 80) grade = 'B';
        else if (scorePercentage >= 70) grade = 'C';
        else if (scorePercentage >= 60) grade = 'D';

        return {
            totalExercises,
            correctAnswers,
            wrongAnswers: totalExercises - correctAnswers,
            scorePercentage,
            grade,
            totalTime: Math.round(totalTime / 1000),
            expectedTime: Math.round(expectedTime / 1000),
            timeEfficiency,
            passed: scorePercentage >= 70
        };
    }

    // Sprawdź czy lekcja ma ukończony test
    hasCompletedTest(lessonNumber) {
        return this.completedExercises.some(test => test.lesson === lessonNumber);
    }

    // Pobierz wyniki testu dla lekcji
    getTestResults(lessonNumber) {
        const test = this.completedExercises.find(test => test.lesson === lessonNumber);
        return test ? test.results : null;
    }

    // Zresetuj postęp ćwiczeń
    resetProgress() {
        this.completedExercises = [];
        this.scores = [];
        localStorage.removeItem('htmlCourse_exercises');

        // Usuń wszystkie zapisane ćwiczenia dla lekcji
        for (let i = 1; i <= 12; i++) {
            localStorage.removeItem(`htmlCourse_exercises_lesson${i}`);
        }
    }

    // Pobierz statystyki ogólne
    getOverallStats() {
        const totalTests = this.completedExercises.length;
        const passedTests = this.completedExercises.filter(test => test.results.passed).length;
        const averageScore = totalTests > 0 ?
            this.completedExercises.reduce((sum, test) => sum + test.results.scorePercentage, 0) / totalTests : 0;

        return {
            totalTests,
            passedTests,
            failedTests: totalTests - passedTests,
            averageScore: Math.round(averageScore),
            completionRate: Math.round((totalTests / 12) * 100)
        };
    }
}

// Globalna instancja systemu ćwiczeń
window.ExerciseSystem = new ExerciseSystem();

// Dodaj do CourseUtils
if (typeof window.CourseUtils !== 'undefined') {
    window.CourseUtils.startTest = function(lessonNumber) {
        return window.ExerciseSystem.startLessonTest(lessonNumber);
    };

    window.CourseUtils.hasCompletedTest = function(lessonNumber) {
        return window.ExerciseSystem.hasCompletedTest(lessonNumber);
    };

    window.CourseUtils.getTestResults = function(lessonNumber) {
        return window.ExerciseSystem.getTestResults(lessonNumber);
    };
}

console.log('📚 Exercise System Loaded');
console.log('Available commands:');
console.log('- ExerciseSystem.startLessonTest(1) - start test for lesson 1');
console.log('- ExerciseSystem.getOverallStats() - get overall statistics');
console.log('- ExerciseSystem.resetProgress() - reset all exercise progress');