// Prosta wersja systemu ćwiczeń do debugowania

console.log('Loading simple test system...');

// Prosta baza ćwiczeń - tylko kilka przykładów
const SIMPLE_EXERCISES = {
    lesson1: [
        { id: 1, type: 'quiz', title: 'Co oznacza HTML?', description: 'Wybierz prawidłowe rozwinięcie', options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 2, type: 'code', title: 'Utwórz nagłówek H1', description: 'Napisz tag h1 z tekstem "Test"', expected: '<h1>Test</h1>', difficulty: 'easy', time: 3 },
        { id: 3, type: 'quiz', title: 'Który element zawiera treść?', description: 'Wybierz właściwy element', options: ['<head>', '<body>', '<html>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 4, type: 'quiz', title: 'W którym roku powstał HTML?', description: 'Kiedy Tim Berners-Lee stworzył HTML?', options: ['1989', '1991', '1993'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 5, type: 'quiz', title: 'Kto stworzył HTML?', description: 'Wybierz twórcę HTML', options: ['Bill Gates', 'Tim Berners-Lee', 'Steve Jobs'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 6, type: 'code', title: 'Podstawowy tag paragraf', description: 'Napisz tag p z tekstem "Hello"', expected: '<p>Hello</p>', difficulty: 'easy', time: 2 },
        { id: 7, type: 'quiz', title: 'Co to jest znacznik?', description: 'Jak nazywamy elementy w <>', options: ['Tag', 'Element', 'Kod'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 8, type: 'quiz', title: 'HTML5 to wersja z roku?', description: 'Kiedy standardowo wprowadzono HTML5?', options: ['2012', '2014', '2016'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 9, type: 'code', title: 'Tag strong', description: 'Napisz tag strong z tekstem "Ważne"', expected: '<strong>Ważne</strong>', difficulty: 'easy', time: 2 },
        { id: 10, type: 'quiz', title: 'Czy HTML to język programowania?', description: 'Wybierz prawdziwą odpowiedź', options: ['Tak', 'Nie', 'Czasami'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 11, type: 'quiz', title: 'Co oznacza HyperText?', description: 'Znaczenie pierwszej części HTML', options: ['Szybki tekst', 'Tekst z linkami', 'Duży tekst'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 12, type: 'code', title: 'Tag em dla kursywy', description: 'Napisz tag em z tekstem "Nacisk"', expected: '<em>Nacisk</em>', difficulty: 'easy', time: 2 },
        { id: 13, type: 'quiz', title: 'HTML składa się z?', description: 'Podstawowe części HTML', options: ['Elementów', 'Słów', 'Linii'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 14, type: 'quiz', title: 'Znacznik zamykający ma?', description: 'Co wyróżnia tag zamykający?', options: ['Ukośnik /', 'Znak +', 'Znak *'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 15, type: 'code', title: 'Komentarz HTML', description: 'Napisz komentarz z tekstem "Test"', expected: '<!-- Test -->', difficulty: 'medium', time: 3 },
        { id: 16, type: 'quiz', title: 'Pierwszy tag w dokumencie?', description: 'Jaki tag otwiera dokument?', options: ['<html>', '<body>', '<head>'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 17, type: 'quiz', title: 'HTML jest wrażliwy na wielkość liter?', description: 'Czy <HTML> = <html>?', options: ['Tak', 'Nie', 'Zależy'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 18, type: 'code', title: 'Tag div', description: 'Napisz pusty tag div', expected: '<div></div>', difficulty: 'easy', time: 2 },
        { id: 19, type: 'quiz', title: 'Co to jest element?', description: 'Element HTML to?', options: ['Tag + zawartość', 'Tylko tag', 'Tylko tekst'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 20, type: 'quiz', title: 'Gdzie HTML powstał?', description: 'W jakiej organizacji?', options: ['IBM', 'CERN', 'MIT'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 21, type: 'code', title: 'Tag span', description: 'Napisz tag span z tekstem "Tekst"', expected: '<span>Tekst</span>', difficulty: 'easy', time: 2 },
        { id: 22, type: 'quiz', title: 'HTML przed HTML5 to?', description: 'Poprzednia główna wersja', options: ['HTML3', 'HTML4', 'XHTML'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 23, type: 'quiz', title: 'Separator w HTML?', description: 'Znak oddzielający atrybuty', options: ['Spacja', 'Przecinek', 'Średnik'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 24, type: 'code', title: 'Tag z atrybutem', description: 'Napisz tag p z atrybutem class="test"', expected: '<p class="test"></p>', difficulty: 'medium', time: 4 },
        { id: 25, type: 'quiz', title: 'Pierwszy przeglądarka dla HTML?', description: 'Którą stworzył Tim Berners-Lee?', options: ['Mosaic', 'WorldWideWeb', 'Netscape'], correct: 1, difficulty: 'hard', time: 4 },
        { id: 26, type: 'quiz', title: 'Co oznacza Markup?', description: 'Znaczenie Markup w HTML', options: ['Znaczniki', 'Tekst', 'Styl'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 27, type: 'code', title: 'Tag br', description: 'Napisz tag łamania linii', expected: '<br>', difficulty: 'easy', time: 2 },
        { id: 28, type: 'quiz', title: 'HTML to standard?', description: 'Kto zarządza standardem HTML?', options: ['Google', 'W3C', 'Microsoft'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 29, type: 'quiz', title: 'Tagi można zagnieżdżać?', description: 'Czy można wkładać tagi w tagi?', options: ['Tak', 'Nie', 'Tylko niektóre'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 30, type: 'code', title: 'Tag hr', description: 'Napisz tag linii poziomej', expected: '<hr>', difficulty: 'easy', time: 2 },
        { id: 31, type: 'quiz', title: 'Czy każdy tag musi być zamknięty?', description: 'W HTML5 wszystkie tagi?', options: ['Tak', 'Nie, niektóre są self-closing', 'Tylko paired'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 32, type: 'quiz', title: 'Białe znaki w HTML?', description: 'Jak traktowane są spacje/taby?', options: ['Zachowywane', 'Zwijane do jednej spacji', 'Ignorowane'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 33, type: 'code', title: 'Tag small', description: 'Napisz tag small z tekstem "Mały"', expected: '<small>Mały</small>', difficulty: 'easy', time: 2 },
        { id: 34, type: 'quiz', title: 'XHTML to?', description: 'Czym był XHTML?', options: ['Nowa wersja HTML', 'HTML + XML', 'Konkurent HTML'], correct: 1, difficulty: 'hard', time: 4 },
        { id: 35, type: 'quiz', title: 'CSS to?', description: 'Co to Cascading Style Sheets?', options: ['Część HTML', 'Osobny język', 'Wersja HTML'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 36, type: 'code', title: 'Tag mark', description: 'Napisz tag mark z tekstem "Ważne"', expected: '<mark>Ważne</mark>', difficulty: 'medium', time: 3 },
        { id: 37, type: 'quiz', title: 'JavaScript a HTML?', description: 'Relacja JS do HTML', options: ['To samo', 'JS dodaje interaktywność', 'JS zastępuje HTML'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 38, type: 'quiz', title: 'Pierwsza strona WWW?', description: 'Co było pierwszą stroną?', options: ['Google', 'Info o WWW', 'Yahoo'], correct: 1, difficulty: 'hard', time: 4 },
        { id: 39, type: 'code', title: 'Tag del', description: 'Napisz tag del z tekstem "Usuń"', expected: '<del>Usuń</del>', difficulty: 'medium', time: 3 },
        { id: 40, type: 'quiz', title: 'Domain Name System a HTML?', description: 'Jak DNS pomaga HTML?', options: ['Nie pomaga', 'Tłumaczy adresy', 'Przechowuje HTML'], correct: 1, difficulty: 'hard', time: 4 },
        { id: 41, type: 'quiz', title: 'Co to jest viewport?', description: 'Viewport w kontekście HTML', options: ['Okno przeglądarki', 'Tag HTML', 'Atrybut'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 42, type: 'code', title: 'Tag ins', description: 'Napisz tag ins z tekstem "Nowy"', expected: '<ins>Nowy</ins>', difficulty: 'medium', time: 3 },
        { id: 43, type: 'quiz', title: 'HTTP a HTML?', description: 'Rola HTTP w dostarczaniu HTML', options: ['Protokół transportu', 'Język znaczników', 'Przeglądarka'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 44, type: 'quiz', title: 'Semantyczny HTML to?', description: 'Co oznacza semantyczny?', options: ['Szybki', 'Znaczący', 'Kolorowy'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 45, type: 'code', title: 'Tag sub', description: 'Napisz tag sub z tekstem "2"', expected: '<sub>2</sub>', difficulty: 'medium', time: 3 },
        { id: 46, type: 'quiz', title: 'Valid HTML to?', description: 'Czym jest poprawny HTML?', options: ['Działający kod', 'Zgodny ze standardem', 'Szybki kod'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 47, type: 'code', title: 'Tag sup', description: 'Napisz tag sup z tekstem "2"', expected: '<sup>2</sup>', difficulty: 'medium', time: 3 },
        { id: 48, type: 'quiz', title: 'HTML Living Standard?', description: 'Co to oznacza?', options: ['Stara wersja', 'Ciągle aktualizowany', 'Beta wersja'], correct: 1, difficulty: 'hard', time: 4 },
        { id: 49, type: 'quiz', title: 'Accessibility w HTML?', description: 'Dlaczego ważna dostępność?', options: ['Dla niepełnosprawnych', 'Dla SEO', 'Oba powody'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 50, type: 'code', title: 'Kompletny element', description: 'Napisz tag p z atrybutem id="test" i tekstem "Koniec"', expected: '<p id="test">Koniec</p>', difficulty: 'hard', time: 5 }
    ],
    lesson2: [
        { id: 51, type: 'quiz', title: 'Gdzie umieszcza się tytuł?', description: 'Wybierz właściwe miejsce', options: ['<body>', '<head>', '<html>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 52, type: 'code', title: 'Dodaj meta charset', description: 'Napisz meta tag z UTF-8', expected: '<meta charset="UTF-8">', difficulty: 'easy', time: 3 },
        { id: 53, type: 'quiz', title: 'Co to jest DOCTYPE?', description: 'Wybierz definicję', options: ['Deklaracja typu dokumentu', 'Tytuł dokumentu'], correct: 0, difficulty: 'easy', time: 3 },
        { id: 54, type: 'quiz', title: 'DOCTYPE w HTML5?', description: 'Jak wygląda DOCTYPE dla HTML5?', options: ['<!DOCTYPE html>', '<!DOCTYPE HTML5>', '<!DOCTYPE>'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 55, type: 'code', title: 'Element html z lang', description: 'Napisz tag html z atrybutem lang="pl"', expected: '<html lang="pl">', difficulty: 'easy', time: 3 },
        { id: 56, type: 'quiz', title: 'Sekcja HEAD zawiera?', description: 'Co znajduje się w sekcji head?', options: ['Metadane', 'Zawartość strony', 'Style CSS'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 57, type: 'quiz', title: 'Sekcja BODY zawiera?', description: 'Co znajduje się w sekcji body?', options: ['Metadane', 'Widoczną zawartość', 'Tytuł strony'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 58, type: 'code', title: 'Meta viewport', description: 'Napisz meta viewport dla urządzeń mobilnych', expected: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', difficulty: 'medium', time: 4 },
        { id: 59, type: 'quiz', title: 'Atrybut charset określa?', description: 'Do czego służy charset?', options: ['Kodowanie znaków', 'Język strony', 'Tytuł strony'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 60, type: 'code', title: 'Tag title', description: 'Napisz tag title z tekstem "Moja strona"', expected: '<title>Moja strona</title>', difficulty: 'easy', time: 2 },
        { id: 61, type: 'quiz', title: 'Element html otacza?', description: 'Co zawiera element html?', options: ['Tylko head', 'Tylko body', 'Head i body'], correct: 2, difficulty: 'easy', time: 2 },
        { id: 62, type: 'quiz', title: 'UTF-8 to?', description: 'Czym jest UTF-8?', options: ['Kodowanie Unicode', 'Język programowania', 'Typ pliku'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 63, type: 'code', title: 'Meta description', description: 'Napisz meta description z tekstem "Opis strony"', expected: '<meta name="description" content="Opis strony">', difficulty: 'medium', time: 4 },
        { id: 64, type: 'quiz', title: 'Atrybut lang w html?', description: 'Do czego służy atrybut lang?', options: ['Określa język', 'Określa region', 'Określa kodowanie'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 65, type: 'quiz', title: 'Czy DOCTYPE jest tagiem?', description: 'Czy DOCTYPE to element HTML?', options: ['Tak', 'Nie', 'Czasami'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 66, type: 'code', title: 'Link do CSS', description: 'Napisz link do pliku style.css', expected: '<link rel="stylesheet" href="style.css">', difficulty: 'medium', time: 4 },
        { id: 67, type: 'quiz', title: 'Element meta jest?', description: 'Jaki typ elementu to meta?', options: ['Blokowy', 'Self-closing', 'Kontenerowy'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 68, type: 'quiz', title: 'HEAD jest widoczny?', description: 'Czy zawartość HEAD wyświetla się na stronie?', options: ['Tak', 'Nie', 'Częściowo'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 69, type: 'code', title: 'Meta keywords', description: 'Napisz meta keywords z "html, css"', expected: '<meta name="keywords" content="html, css">', difficulty: 'medium', time: 4 },
        { id: 70, type: 'quiz', title: 'Initial-scale w viewport?', description: 'Co oznacza initial-scale=1.0?', options: ['Początkowe powiększenie', 'Maksymalne powiększenie', 'Minimalne powiększenie'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 71, type: 'quiz', title: 'Width=device-width?', description: 'Co oznacza width=device-width?', options: ['Szerokość jak urządzenie', 'Szerokość 100px', 'Szerokość auto'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 72, type: 'code', title: 'Meta author', description: 'Napisz meta author z "Jan Kowalski"', expected: '<meta name="author" content="Jan Kowalski">', difficulty: 'medium', time: 3 },
        { id: 73, type: 'quiz', title: 'Struktura HTML5 dokumentu?', description: 'Prawidłowa kolejność elementów', options: ['html>head>body', 'body>head>html', 'head>html>body'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 74, type: 'quiz', title: 'Element head może zawierać?', description: 'Co można umieścić w head?', options: ['p', 'meta', 'div'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 75, type: 'code', title: 'Script w head', description: 'Napisz tag script src="app.js"', expected: '<script src="app.js"></script>', difficulty: 'medium', time: 3 },
        { id: 76, type: 'quiz', title: 'Base tag służy do?', description: 'Do czego używa się base?', options: ['Bazowego URL', 'Stylu bazowego', 'Języka bazowego'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 77, type: 'quiz', title: 'Style można umieścić w?', description: 'Gdzie można dodać CSS?', options: ['Head', 'Body', 'Oba miejsca'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 78, type: 'code', title: 'Style inline w head', description: 'Napisz tag style z regułą body{margin:0}', expected: '<style>body{margin:0}</style>', difficulty: 'medium', time: 4 },
        { id: 79, type: 'quiz', title: 'Favicon to?', description: 'Czym jest favicon?', options: ['Ikona strony', 'Typ czcionki', 'Kolor strony'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 80, type: 'quiz', title: 'Link rel="icon"?', description: 'Do czego służy rel="icon"?', options: ['Dodania ikony', 'Linku do strony', 'Stylu CSS'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 81, type: 'code', title: 'Favicon link', description: 'Napisz link do favicon.ico', expected: '<link rel="icon" href="favicon.ico">', difficulty: 'medium', time: 4 },
        { id: 82, type: 'quiz', title: 'Ile elementów title w head?', description: 'Ile title może być w head?', options: ['0', '1', 'Wiele'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 83, type: 'quiz', title: 'Meta refresh służy do?', description: 'Do czego używa się meta refresh?', options: ['Odświeżania strony', 'Resetowania stylu', 'Czyszczenia cache'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 84, type: 'code', title: 'Meta refresh', description: 'Napisz meta refresh na 5 sekund', expected: '<meta http-equiv="refresh" content="5">', difficulty: 'hard', time: 5 },
        { id: 85, type: 'quiz', title: 'NoScript tag służy do?', description: 'Kiedy używa się noscript?', options: ['Gdy JS wyłączony', 'Gdy CSS wyłączony', 'Gdy HTML błędny'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 86, type: 'quiz', title: 'Meta http-equiv?', description: 'Do czego służy http-equiv?', options: ['Symuluje nagłówki HTTP', 'Ustawia protokół', 'Określa encoding'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 87, type: 'code', title: 'Meta X-UA-Compatible', description: 'Napisz meta dla IE compatibility', expected: '<meta http-equiv="X-UA-Compatible" content="IE=edge">', difficulty: 'hard', time: 5 },
        { id: 88, type: 'quiz', title: 'Preload w link?', description: 'Do czego służy rel="preload"?', options: ['Wstępne ładowanie', 'Styl CSS', 'Ikona strony'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 89, type: 'quiz', title: 'Manifest w HTML?', description: 'Web App Manifest to?', options: ['Plik konfiguracji PWA', 'Lista plików', 'Styl aplikacji'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 90, type: 'code', title: 'Link manifest', description: 'Napisz link do manifest.json', expected: '<link rel="manifest" href="manifest.json">', difficulty: 'hard', time: 4 },
        { id: 91, type: 'quiz', title: 'Base target="_blank"?', description: 'Co robi base target?', options: ['Ustawia domyślny target', 'Otwiera w nowej karcie', 'Blokuje linki'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 92, type: 'quiz', title: 'DNS-prefetch to?', description: 'Do czego służy dns-prefetch?', options: ['Wstępne DNS', 'Cache DNS', 'Blokada DNS'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 93, type: 'code', title: 'DNS prefetch', description: 'Napisz dns-prefetch dla google.com', expected: '<link rel="dns-prefetch" href="//google.com">', difficulty: 'hard', time: 4 },
        { id: 94, type: 'quiz', title: 'Preconnect link?', description: 'rel="preconnect" służy do?', options: ['Wstępnego połączenia', 'Łączenia stylów', 'Połączenia baz'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 95, type: 'quiz', title: 'Theme-color meta?', description: 'Meta theme-color ustawia?', options: ['Kolor przeglądarki', 'Kolor tekstu', 'Kolor tła'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 96, type: 'code', title: 'Theme color', description: 'Napisz meta theme-color=#ff0000', expected: '<meta name="theme-color" content="#ff0000">', difficulty: 'medium', time: 4 },
        { id: 97, type: 'quiz', title: 'Apple touch icon?', description: 'Do czego służy apple-touch-icon?', options: ['Ikona na iOS', 'Ikona Apple', 'Touch events'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 98, type: 'quiz', title: 'Canonical URL?', description: 'Link rel="canonical" określa?', options: ['Główną wersję strony', 'Kanoniczny styl', 'Autoryzację'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 99, type: 'code', title: 'Canonical link', description: 'Napisz canonical do /strona/', expected: '<link rel="canonical" href="/strona/">', difficulty: 'hard', time: 4 },
        { id: 100, type: 'quiz', title: 'Struktura semantyczna HEAD?', description: 'Najważniejsze w head to?', options: ['title i meta', 'style i script', 'link i base'], correct: 0, difficulty: 'medium', time: 3 }
    ],
    lesson3: [
        { id: 101, type: 'quiz', title: 'Ile poziomów nagłówków ma HTML?', description: 'Wybierz prawidłową liczbę', options: ['4', '6', '8'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 102, type: 'code', title: 'Stwórz pogrubiony tekst', description: 'Użyj semantycznego tagu dla ważnego tekstu', expected: '<strong>ważny</strong>', difficulty: 'easy', time: 3 },
        { id: 103, type: 'quiz', title: 'Różnica między <strong> a <b>?', description: 'Co wyróżnia tag strong?', options: ['Tylko wygląd', 'Znaczenie semantyczne', 'Rozmiar czcionki'], correct: 1, difficulty: 'easy', time: 3 },
        { id: 104, type: 'code', title: 'Nagłówek H2', description: 'Napisz nagłówek drugiego poziomu z tekstem "Rozdział"', expected: '<h2>Rozdział</h2>', difficulty: 'easy', time: 2 },
        { id: 105, type: 'quiz', title: 'Największy nagłówek to?', description: 'Który nagłówek jest największy?', options: ['H1', 'H6', 'H3'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 106, type: 'code', title: 'Element em', description: 'Napisz tag em z tekstem "nacisk"', expected: '<em>nacisk</em>', difficulty: 'easy', time: 2 },
        { id: 107, type: 'quiz', title: 'Tag <p> służy do?', description: 'Do czego używamy paragrafu?', options: ['Nagłówków', 'Akapitów tekstu', 'Linków'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 108, type: 'code', title: 'Paragraf z tekstem', description: 'Napisz paragraf z tekstem "To jest akapit"', expected: '<p>To jest akapit</p>', difficulty: 'easy', time: 2 },
        { id: 109, type: 'quiz', title: 'Różnica <em> i <i>?', description: 'Co wyróżnia em od i?', options: ['Znaczenie semantyczne', 'Kolor tekstu', 'Rozmiar czcionki'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 110, type: 'code', title: 'Tag small', description: 'Napisz tag small z tekstem "drobny druk"', expected: '<small>drobny druk</small>', difficulty: 'easy', time: 2 },
        { id: 111, type: 'quiz', title: 'Tag <mark> służy do?', description: 'Do czego używamy mark?', options: ['Zaznaczania tekstu', 'Usuwania tekstu', 'Ukrywania tekstu'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 112, type: 'code', title: 'Zaznaczony tekst', description: 'Napisz tag mark z tekstem "ważne"', expected: '<mark>ważne</mark>', difficulty: 'easy', time: 2 },
        { id: 113, type: 'quiz', title: 'Tag <br> to?', description: 'Jaki typ elementu to br?', options: ['Self-closing', 'Kontenerowy', 'Blokowy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 114, type: 'code', title: 'Łamanie linii', description: 'Napisz tag łamania linii', expected: '<br>', difficulty: 'easy', time: 2 },
        { id: 115, type: 'quiz', title: 'Tag <hr> tworzy?', description: 'Co tworzy element hr?', options: ['Nową linię', 'Linię poziomą', 'Linię pionową'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 116, type: 'code', title: 'Linia pozioma', description: 'Napisz tag linii poziomej', expected: '<hr>', difficulty: 'easy', time: 2 },
        { id: 117, type: 'quiz', title: 'Hierarchia nagłówków?', description: 'Jak używać nagłówków?', options: ['Losowo', 'W kolejności H1→H2→H3', 'Tylko H1'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 118, type: 'code', title: 'Nagłówek H3', description: 'Napisz nagłówek trzeciego poziomu "Podrozdział"', expected: '<h3>Podrozdział</h3>', difficulty: 'easy', time: 2 },
        { id: 119, type: 'quiz', title: 'Tag <del> oznacza?', description: 'Co reprezentuje del?', options: ['Usunięty tekst', 'Ważny tekst', 'Nowy tekst'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 120, type: 'code', title: 'Usunięty tekst', description: 'Napisz tag del z tekstem "stary"', expected: '<del>stary</del>', difficulty: 'easy', time: 2 },
        { id: 121, type: 'quiz', title: 'Tag <ins> oznacza?', description: 'Co reprezentuje ins?', options: ['Usunięty tekst', 'Wstawiony tekst', 'Ukryty tekst'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 122, type: 'code', title: 'Wstawiony tekst', description: 'Napisz tag ins z tekstem "nowy"', expected: '<ins>nowy</ins>', difficulty: 'easy', time: 2 },
        { id: 123, type: 'quiz', title: 'Tag <sub> tworzy?', description: 'Co robi element sub?', options: ['Indeks górny', 'Indeks dolny', 'Pogrubienie'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 124, type: 'code', title: 'Indeks dolny', description: 'Napisz H₂O używając sub', expected: 'H<sub>2</sub>O', difficulty: 'medium', time: 3 },
        { id: 125, type: 'quiz', title: 'Tag <sup> tworzy?', description: 'Co robi element sup?', options: ['Indeks górny', 'Indeks dolny', 'Podkreślenie'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 126, type: 'code', title: 'Indeks górny', description: 'Napisz x² używając sup', expected: 'x<sup>2</sup>', difficulty: 'medium', time: 3 },
        { id: 127, type: 'quiz', title: 'Tag <code> służy do?', description: 'Do czego używamy code?', options: ['Kodu programu', 'Zwykłego tekstu', 'Nagłówków'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 128, type: 'code', title: 'Kod inline', description: 'Napisz tag code z "console.log()"', expected: '<code>console.log()</code>', difficulty: 'easy', time: 2 },
        { id: 129, type: 'quiz', title: 'Tag <kbd> reprezentuje?', description: 'Co oznacza kbd?', options: ['Kod programu', 'Klawisze klawiatury', 'Zmienne'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 130, type: 'code', title: 'Klawisz', description: 'Napisz tag kbd z "Ctrl"', expected: '<kbd>Ctrl</kbd>', difficulty: 'medium', time: 2 },
        { id: 131, type: 'quiz', title: 'Tag <var> służy do?', description: 'Do czego używamy var?', options: ['Zmiennych', 'Kodów', 'Klawiszy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 132, type: 'code', title: 'Zmienna', description: 'Napisz tag var z "x"', expected: '<var>x</var>', difficulty: 'medium', time: 2 },
        { id: 133, type: 'quiz', title: 'Tag <samp> oznacza?', description: 'Co reprezentuje samp?', options: ['Przykładowe dane', 'Kod źródłowy', 'Błąd'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 134, type: 'code', title: 'Przykładowe wyjście', description: 'Napisz tag samp z "Hello World"', expected: '<samp>Hello World</samp>', difficulty: 'medium', time: 3 },
        { id: 135, type: 'quiz', title: 'Tag <u> służy do?', description: 'Co robi element u?', options: ['Podkreślenia', 'Pogrubienia', 'Kursywy'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 136, type: 'code', title: 'Podkreślony tekst', description: 'Napisz tag u z tekstem "podkreślone"', expected: '<u>podkreślone</u>', difficulty: 'easy', time: 2 },
        { id: 137, type: 'quiz', title: 'Tag <s> oznacza?', description: 'Co reprezentuje s?', options: ['Przekreślony tekst', 'Silny tekst', 'Skrót'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 138, type: 'code', title: 'Przekreślony tekst', description: 'Napisz tag s z tekstem "błąd"', expected: '<s>błąd</s>', difficulty: 'easy', time: 2 },
        { id: 139, type: 'quiz', title: 'Białe znaki w HTML?', description: 'Jak przeglądarka traktuje wiele spacji?', options: ['Pokazuje wszystkie', 'Zwija do jednej', 'Ignoruje'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 140, type: 'quiz', title: 'Niełamliwa spacja to?', description: 'Jak zapisać niełamliwą spację?', options: ['&nbsp;', '&space;', '&sp;'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 141, type: 'quiz', title: 'Tag <wbr> służy do?', description: 'Do czego używamy wbr?', options: ['Opcjonalnego łamania', 'Wymuszenia łamania', 'Blokady łamania'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 142, type: 'code', title: 'Długie słowo z wbr', description: 'Napisz długiSlownik<wbr>Terminow', expected: 'długiSlownik<wbr>Terminow', difficulty: 'hard', time: 4 },
        { id: 143, type: 'quiz', title: 'Które tagi są semantyczne?', description: 'Semantyczne znaczenie vs wygląd', options: ['strong, em', 'b, i', 'u, s'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 144, type: 'quiz', title: 'Dlaczego semantyka jest ważna?', description: 'Korzyści z semantycznych tagów', options: ['Dla przeglądarek', 'Dla SEO i accessibility', 'Oba powody'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 145, type: 'code', title: 'Cytowanie tekstu', description: 'Napisz tag q z cytatem "Hello"', expected: '<q>Hello</q>', difficulty: 'medium', time: 3 },
        { id: 146, type: 'quiz', title: 'Tag <q> vs <blockquote>?', description: 'Różnica między q i blockquote', options: ['q inline, blockquote blok', 'q blok, blockquote inline', 'Bez różnicy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 147, type: 'code', title: 'Blokowy cytat', description: 'Napisz blockquote z tekstem "Cytat"', expected: '<blockquote>Cytat</blockquote>', difficulty: 'medium', time: 3 },
        { id: 148, type: 'quiz', title: 'Tag <cite> służy do?', description: 'Do czego używamy cite?', options: ['Tytułów dzieł', 'Cytatów', 'Autorów'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 149, type: 'code', title: 'Tytuł dzieła', description: 'Napisz cite z "Hamlet"', expected: '<cite>Hamlet</cite>', difficulty: 'medium', time: 3 },
        { id: 150, type: 'quiz', title: 'Najlepsza praktyka nagłówków?', description: 'Jak organizować nagłówki?', options: ['Jeden H1 na stronę', 'Wiele H1', 'Tylko H3'], correct: 0, difficulty: 'medium', time: 3 }
    ],
    lesson4: [
        { id: 10, type: 'quiz', title: 'Tag dla listy punktowanej?', description: 'Wybierz właściwy tag', options: ['<ol>', '<ul>', '<li>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 11, type: 'code', title: 'Stwórz listę numerowaną', description: 'Lista z dwoma elementami: A i B', expected: '<ol><li>A</li><li>B</li></ol>', difficulty: 'easy', time: 4 },
        { id: 12, type: 'quiz', title: 'Tag dla definicji w liście definicji?', description: 'Wybierz właściwy tag', options: ['<dt>', '<dd>', '<dl>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 151, type: 'code', title: 'Lista punktowana', description: 'Stwórz listę punktowaną z trzema elementami: jabłko, banan, wiśnia', expected: '<ul><li>jabłko</li><li>banan</li><li>wiśnia</li></ul>', difficulty: 'easy', time: 3 },
        { id: 152, type: 'quiz', title: 'Tag <li> służy do?', description: 'Do czego używamy elementu li?', options: ['Linków', 'Elementów list', 'Nagłówków'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 153, type: 'code', title: 'Lista definicji', description: 'Stwórz listę definicji z terminem "HTML" i definicją "Język znaczników"', expected: '<dl><dt>HTML</dt><dd>Język znaczników</dd></dl>', difficulty: 'medium', time: 4 },
        { id: 154, type: 'quiz', title: 'Tag <dl> oznacza?', description: 'Co to jest dl?', options: ['Data List', 'Definition List', 'Display List'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 155, type: 'quiz', title: 'Tag <dt> oznacza?', description: 'Co reprezentuje dt?', options: ['Definition Term', 'Data Type', 'Display Title'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 156, type: 'code', title: 'Lista numerowana od 5', description: 'Lista ol zaczynająca się od liczby 5 z jednym elementem "start"', expected: '<ol start="5"><li>start</li></ol>', difficulty: 'medium', time: 3 },
        { id: 157, type: 'quiz', title: 'Atrybut start w <ol>?', description: 'Do czego służy atrybut start?', options: ['Rozpoczyna numerację od podanej liczby', 'Określa liczbę elementów', 'Ustawia odstępy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 158, type: 'code', title: 'Lista z typem numeracji', description: 'Lista ol z type="A" i elementem "pierwszy"', expected: '<ol type="A"><li>pierwszy</li></ol>', difficulty: 'medium', time: 3 },
        { id: 159, type: 'quiz', title: 'Wartości type dla <ol>?', description: 'Które wartości type są prawidłowe?', options: ['1, A, a, I, i', 'numbers, letters', 'decimal, alpha'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 160, type: 'code', title: 'Lista zagnieżdżona', description: 'Lista ul z elementem "owoce" zawierającym podlistę ul z elementem "jabłko"', expected: '<ul><li>owoce<ul><li>jabłko</li></ul></li></ul>', difficulty: 'hard', time: 5 },
        { id: 161, type: 'quiz', title: 'Zagnieżdżanie list?', description: 'Gdzie umieszcza się podlistę?', options: ['Przed elementem li', 'Wewnątrz elementu li', 'Po elemencie li'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 162, type: 'quiz', title: 'Które listy można zagnieżdżać?', description: 'Jakie kombinacje są możliwe?', options: ['Tylko ul w ul', 'Tylko ol w ol', 'Wszystkie kombinacje'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 163, type: 'code', title: 'Lista odwrócona', description: 'Lista ol z atrybutem reversed i elementami: "trzeci", "drugi", "pierwszy"', expected: '<ol reversed><li>trzeci</li><li>drugi</li><li>pierwszy</li></ol>', difficulty: 'medium', time: 4 },
        { id: 164, type: 'quiz', title: 'Atrybut reversed?', description: 'Co robi atrybut reversed w ol?', options: ['Odwraca kolejność elementów', 'Odwraca numerację', 'Ukrywa liczby'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 165, type: 'quiz', title: 'Domyślny typ <ul>?', description: 'Jaki jest domyślny styl punktowania?', options: ['Koła', 'Kwadraty', 'Diamenty'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 166, type: 'code', title: 'Element li z wartością', description: 'Element li z atrybutem value="10" i tekstem "dziesiąty"', expected: '<li value="10">dziesiąty</li>', difficulty: 'medium', time: 3 },
        { id: 167, type: 'quiz', title: 'Atrybut value w <li>?', description: 'Kiedy używa się value w li?', options: ['Tylko w ul', 'Tylko w ol', 'W obu typach list'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 168, type: 'quiz', title: 'Semantyka list?', description: 'Kiedy używać listy numerowanej?', options: ['Gdy kolejność jest ważna', 'Gdy kolejność nie ma znaczenia', 'Do dekoracji'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 169, type: 'code', title: 'Lista definicji z wieloma definicjami', description: 'Lista dl z terminem "CSS" i dwiema definicjami: "Cascading Style Sheets" i "Język stylów"', expected: '<dl><dt>CSS</dt><dd>Cascading Style Sheets</dd><dd>Język stylów</dd></dl>', difficulty: 'hard', time: 5 },
        { id: 170, type: 'quiz', title: 'Ile definicji na termin?', description: 'Ile elementów dd może mieć jeden dt?', options: ['Tylko jeden', 'Dowolną liczbę', 'Maksymalnie trzy'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 171, type: 'quiz', title: 'Ile terminów na definicję?', description: 'Ile elementów dt może dotyczyć jednej dd?', options: ['Tylko jeden', 'Dowolną liczbę', 'Maksymalnie dwa'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 172, type: 'code', title: 'Lista punktowana ze stylami', description: 'Lista ul z trzema elementami: "pomidor", "cebula", "czosnek"', expected: '<ul><li>pomidor</li><li>cebula</li><li>czosnek</li></ul>', difficulty: 'easy', time: 3 },
        { id: 173, type: 'quiz', title: 'Lista to element?', description: 'Jaki typ elementu to ul i ol?', options: ['Inline', 'Block', 'Inline-block'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 174, type: 'fix', title: 'Popraw zagnieżdżoną listę', description: 'Napraw: <ul><li>owoce</li><ul><li>jabłko</li></ul></ul>', expected: '<ul><li>owoce<ul><li>jabłko</li></ul></li></ul>', difficulty: 'medium', time: 4 },
        { id: 175, type: 'quiz', title: 'Błąd w strukturze listy?', description: 'Co jest błędne: <ul><ul><li>element</li></ul></ul>?', options: ['Brak li w zewnętrznej ul', 'Za dużo ul', 'Brak type'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 176, type: 'code', title: 'Lista z trzema poziomami', description: 'ul>li"kategoria">ul>li"podkategoria">ul>li"element"', expected: '<ul><li>kategoria<ul><li>podkategoria<ul><li>element</li></ul></li></ul></li></ul>', difficulty: 'hard', time: 5 },
        { id: 177, type: 'quiz', title: 'Maksymalna głębokość zagnieżdżenia?', description: 'Ile poziomów można zagnieździć?', options: ['3', '5', 'Bez ograniczeń'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 178, type: 'quiz', title: 'Lista w paragrafie?', description: 'Czy można umieścić listę w p?', options: ['Tak', 'Nie', 'Tylko ul'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 179, type: 'code', title: 'Lista z jednym elementem', description: 'Lista ol z jednym elementem "jedyny"', expected: '<ol><li>jedyny</li></ol>', difficulty: 'easy', time: 2 },
        { id: 180, type: 'quiz', title: 'Pusta lista?', description: 'Czy lista bez elementów li jest poprawna?', options: ['Tak', 'Nie', 'Tylko w ul'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 181, type: 'quiz', title: 'Element li bez listy?', description: 'Czy li może istnieć poza ul/ol/menu?', options: ['Tak', 'Nie', 'Tylko w HTML5'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 182, type: 'code', title: 'Lista rzymska', description: 'Lista ol z type="I" i elementami: "pierwszy", "drugi"', expected: '<ol type="I"><li>pierwszy</li><li>drugi</li></ol>', difficulty: 'medium', time: 3 },
        { id: 183, type: 'quiz', title: 'Cyfry rzymskie małe?', description: 'Jaka wartość type daje małe cyfry rzymskie?', options: ['I', 'i', 'roman'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 184, type: 'quiz', title: 'Lista alfabetyczna mała?', description: 'Jaka wartość type daje małe litery?', options: ['A', 'a', 'alpha'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 185, type: 'code', title: 'Lista mieszana', description: 'Lista dl z dwoma parami: "HTML"-"Język znaczników", "CSS"-"Język stylów"', expected: '<dl><dt>HTML</dt><dd>Język znaczników</dd><dt>CSS</dt><dd>Język stylów</dd></dl>', difficulty: 'medium', time: 4 },
        { id: 186, type: 'quiz', title: 'Kolejność w dl?', description: 'Jaka jest prawidłowa kolejność w dl?', options: ['dt potem dd', 'dd potem dt', 'Dowolna'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 187, type: 'quiz', title: 'Lista definicji to?', description: 'Do czego najczęściej używa się dl?', options: ['Słowników', 'Menu', 'Artykułów'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 188, type: 'code', title: 'Lista z liczbami i literami', description: 'ol start="3" type="A" z elementem "trzeci"', expected: '<ol start="3" type="A"><li>trzeci</li></ol>', difficulty: 'medium', time: 4 },
        { id: 189, type: 'quiz', title: 'Kombinacja start i type?', description: 'Czy można łączyć start z type?', options: ['Tak', 'Nie', 'Tylko w HTML5'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 190, type: 'fix', title: 'Napraw listę definicji', description: 'Popraw: <dl><dd>Definicja</dd><dt>Termin</dt></dl>', expected: '<dl><dt>Termin</dt><dd>Definicja</dd></dl>', difficulty: 'medium', time: 3 },
        { id: 191, type: 'quiz', title: 'Accessibility w listach?', description: 'Dlaczego listy są ważne dla accessibility?', options: ['Struktura dla czytników ekranu', 'Lepsze SEO', 'Oba powody'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 192, type: 'code', title: 'Lista z value różne od kolejności', description: 'ol z li value="5">"pięć" i li>"sześć"', expected: '<ol><li value="5">pięć</li><li>sześć</li></ol>', difficulty: 'medium', time: 4 },
        { id: 193, type: 'quiz', title: 'Value wpływa na kolejne li?', description: 'Czy value w li wpływa na numerację następnych?', options: ['Tak', 'Nie', 'Tylko w IE'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 194, type: 'quiz', title: 'Menu jako lista?', description: 'Czy nawigacja powinna być listą?', options: ['Tak, z ul', 'Nie, z div', 'Bez różnicy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 195, type: 'code', title: 'Lista z przerwą numeracji', description: 'ol z li>"a", li value="10">"b", li>"c"', expected: '<ol><li>a</li><li value="10">b</li><li>c</li></ol>', difficulty: 'hard', time: 4 },
        { id: 196, type: 'quiz', title: 'CSS a typ listy?', description: 'Czy można zmienić typ punktowania przez CSS?', options: ['Tak', 'Nie', 'Tylko w nowoczesnych przeglądarkach'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 197, type: 'quiz', title: 'Najlepsza praktyka dla list?', description: 'Kiedy używać list w HTML?', options: ['Zawsze gdy są elementy', 'Gdy elementy tworzą grupę', 'Nigdy'], correct: 1, difficulty: 'medium', time: 3 }
    ],
    lesson5: [
        { id: 13, type: 'quiz', title: 'Atrybut dla adresu linku?', description: 'Który atrybut zawiera URL?', options: ['src', 'href', 'link'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 14, type: 'code', title: 'Link do strony głównej', description: 'Stwórz link do index.html z tekstem "Home"', expected: '<a href="index.html">Home</a>', difficulty: 'easy', time: 3 },
        { id: 15, type: 'quiz', title: 'Wartość target="_blank"?', description: 'Co robi ten atrybut?', options: ['Otwiera w tej samej karcie', 'Otwiera w nowej karcie', 'Blokuje link'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 198, type: 'code', title: 'Link zewnętrzny', description: 'Stwórz link do google.com z tekstem "Google" otwierający się w nowej karcie', expected: '<a href="https://google.com" target="_blank">Google</a>', difficulty: 'easy', time: 3 },
        { id: 199, type: 'quiz', title: 'Link wewnętrzny vs zewnętrzny?', description: 'Który atrybut rozróżnia typy linków?', options: ['href', 'target', 'type'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 200, type: 'code', title: 'Kotwica na stronie', description: 'Stwórz link do sekcji o id="contact" z tekstem "Kontakt"', expected: '<a href="#contact">Kontakt</a>', difficulty: 'easy', time: 3 },
        { id: 201, type: 'quiz', title: 'Znak # w href oznacza?', description: 'Do czego służy # w adresie?', options: ['Koment', 'Kotwicę', 'Hashtag'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 202, type: 'code', title: 'Link mailto', description: 'Stwórz link do adresu email test@example.com z tekstem "Wyślij email"', expected: '<a href="mailto:test@example.com">Wyślij email</a>', difficulty: 'easy', time: 3 },
        { id: 203, type: 'quiz', title: 'Protokół mailto służy do?', description: 'Co robi mailto w linku?', options: ['Otwiera klienta email', 'Wyświeŭny email na stronie', 'Przenosi do poczty'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 204, type: 'code', title: 'Link tel', description: 'Stwórz link do numeru telefonu +48123456789 z tekstem "Zadzwoń"', expected: '<a href="tel:+48123456789">Zadzwoń</a>', difficulty: 'easy', time: 3 },
        { id: 205, type: 'quiz', title: 'Protokół tel jest przydatny na?', description: 'Gdzie najczęściej używa się tel?', options: ['Komputerach', 'Urządzeniach mobilnych', 'Wszystkich urządzeniach'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 206, type: 'code', title: 'Link z tytułem', description: 'Link do about.html z tekstem "O nas" i tytułem "Informacje o firmie"', expected: '<a href="about.html" title="Informacje o firmie">O nas</a>', difficulty: 'medium', time: 4 },
        { id: 207, type: 'quiz', title: 'Atrybut title w linku?', description: 'Do czego służy title w a?', options: ['Tooltip przy najechaniu', 'Tytuł strony', 'SEO'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 208, type: 'quiz', title: 'Target="_self"?', description: 'Co oznacza _self?', options: ['Ta sama karta', 'Nowa karta', 'Nowe okno'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 209, type: 'code', title: 'Link do pliku PDF', description: 'Link do dokumentu.pdf z tekstem "Pobierz PDF"', expected: '<a href="dokumentu.pdf">Pobierz PDF</a>', difficulty: 'easy', time: 3 },
        { id: 210, type: 'quiz', title: 'Atrybut download?', description: 'Co robi atrybut download?', options: ['Wymusza pobieranie', 'Blokuje pobieranie', 'Ukrywa link'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 211, type: 'code', title: 'Link do pobierania', description: 'Link do plik.zip z download i tekstem "Pobierz"', expected: '<a href="plik.zip" download>Pobierz</a>', difficulty: 'medium', time: 3 },
        { id: 212, type: 'quiz', title: 'Link bez href?', description: 'Czy link może nie mieć href?', options: ['Tak', 'Nie', 'Tylko w HTML5'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 213, type: 'code', title: 'Link z obrazem', description: 'Link do home.html zawierający img src="logo.png" alt="Logo"', expected: '<a href="home.html"><img src="logo.png" alt="Logo"></a>', difficulty: 'medium', time: 4 },
        { id: 214, type: 'quiz', title: 'Obraz może być linkiem?', description: 'Czy img może być wewnątrz a?', options: ['Tak', 'Nie', 'Tylko inline'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 215, type: 'quiz', title: 'Zagnieżdżanie linków?', description: 'Czy można umieścić link w linku?', options: ['Tak', 'Nie', 'Tylko z target'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 216, type: 'code', title: 'Link względny', description: 'Link do pliku style.css z tekstem "Style"', expected: '<a href="style.css">Style</a>', difficulty: 'easy', time: 2 },
        { id: 217, type: 'quiz', title: 'Link względny vs bezwzględny?', description: 'Link względny to?', options: ['Z http://', 'Bez domy', 'Z protokołem'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 218, type: 'code', title: 'Link do katalogu nadrzędnego', description: 'Link do pliku ../index.html z tekstem "Wróć"', expected: '<a href="../index.html">Wróć</a>', difficulty: 'medium', time: 3 },
        { id: 219, type: 'quiz', title: 'Znaczenie ../ w ścieżce?', description: 'Co oznacza ../ ?', options: ['Katalog bieżący', 'Katalog nadrzędny', 'Katalog domowy'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 220, type: 'code', title: 'Link z rel="noopener"', description: 'Link do external.com z target="_blank" i rel="noopener"', expected: '<a href="https://external.com" target="_blank" rel="noopener">external.com</a>', difficulty: 'medium', time: 4 },
        { id: 221, type: 'quiz', title: 'Atrybut rel="noopener"?', description: 'Dlaczego używać noopener?', options: ['Bezpieczeństwo', 'SEO', 'Wydajność'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 222, type: 'quiz', title: 'Rel="nofollow"?', description: 'Do czego służy nofollow?', options: ['Blokuje śledzenie', 'Nie przekazuje PageRank', 'Ukrywa link'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 223, type: 'code', title: 'Kotwica na górę strony', description: 'Link z href="#" i tekstem "Na górę"', expected: '<a href="#">Na górę</a>', difficulty: 'easy', time: 2 },
        { id: 224, type: 'quiz', title: 'Sam # w href?', description: 'Co robi link z href="#"?', options: ['Nic', 'Przewija na górę', 'Błąd'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 225, type: 'code', title: 'Link mailto z tematem', description: 'Mailto do test@example.com z tematem "Pytanie"', expected: '<a href="mailto:test@example.com?subject=Pytanie">Email</a>', difficulty: 'medium', time: 4 },
        { id: 226, type: 'quiz', title: 'Parametry w mailto?', description: 'Które parametry można dodać do mailto?', options: ['subject, body', 'to, from', 'Wszystkie opcje emaila'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 227, type: 'quiz', title: 'Link do fragmentu na innej stronie?', description: 'Jak połączyć się z sekcją na innej stronie?', options: ['page.html#sekcja', '#sekcja?page', 'page.html?sekcja'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 228, type: 'code', title: 'Link do sekcji na innej stronie', description: 'Link do about.html#team z tekstem "Zespół"', expected: '<a href="about.html#team">Zespół</a>', difficulty: 'medium', time: 3 },
        { id: 229, type: 'quiz', title: 'Base tag wpływa na linki?', description: 'Czy base zmienia zachowanie linków?', options: ['Tak', 'Nie', 'Tylko zewnętrznych'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 230, type: 'quiz', title: 'JavaScript w href?', description: 'Czy można użyć javascript: w href?', options: ['Tak, ale nie zaleca się', 'Nie', 'Tylko w starych przeglądarkach'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 231, type: 'fix', title: 'Napraw link zewnętrzny', description: 'Popraw: <a href="google.com">Google</a>', expected: '<a href="https://google.com">Google</a>', difficulty: 'medium', time: 3 },
        { id: 232, type: 'quiz', title: 'Protokół w linkach zewnętrznych?', description: 'Czy trzeba podać http/https?', options: ['Zawsze', 'Nie trzeba', 'Tylko dla https'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 233, type: 'code', title: 'Link z klasą CSS', description: 'Link do contact.html z class="button" i tekstem "Kontakt"', expected: '<a href="contact.html" class="button">Kontakt</a>', difficulty: 'easy', time: 3 },
        { id: 234, type: 'quiz', title: 'Stylowanie linków?', description: 'Jak najlepiej stylować linki?', options: ['Przez CSS', 'Przez atrybuty HTML', 'Przez JavaScript'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 235, type: 'quiz', title: 'Pseudoklasy dla linków?', description: 'Jakie stany linków można stylować?', options: [':hover, :visited', ':active, :focus', 'Wszystkie powyższe'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 236, type: 'code', title: 'Link z id', description: 'Link do home.html z id="nav-home" i tekstem "Start"', expected: '<a href="home.html" id="nav-home">Start</a>', difficulty: 'easy', time: 3 },
        { id: 237, type: 'quiz', title: 'Accessibility w linkach?', description: 'Co jest ważne dla accessibility?', options: ['Opisowy tekst linku', 'Kolor', 'Rozmiar'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 238, type: 'quiz', title: 'Tekst linku "kliknij tutaj"?', description: 'Czy to dobra praktyka?', options: ['Tak', 'Nie, mało opisowy', 'Bez różnicy'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 239, type: 'code', title: 'Link z aria-label', description: 'Link do # z aria-label="Wróć na górę" i tekstem "↑"', expected: '<a href="#" aria-label="Wróć na górę">↑</a>', difficulty: 'medium', time: 4 },
        { id: 240, type: 'quiz', title: 'Aria-label w linkach?', description: 'Kiedy używać aria-label?', options: ['Zawsze', 'Gdy tekst jest niejasny', 'Nigdy'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 241, type: 'quiz', title: 'Link do pliku obrazu?', description: 'Co się dzieje po kliknięciu linku do .jpg?', options: ['Wyświetla obraz', 'Pobiera plik', 'Błąd'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 242, type: 'code', title: 'Nawigacja jako lista', description: 'ul z trzema linkami: "Home", "O nas", "Kontakt"', expected: '<ul><li><a href="home.html">Home</a></li><li><a href="about.html">O nas</a></li><li><a href="contact.html">Kontakt</a></li></ul>', difficulty: 'medium', time: 5 },
        { id: 243, type: 'quiz', title: 'Nawigacja powinna być?', description: 'Najlepsza struktura dla menu?', options: ['Lista linków', 'Divy z linkami', 'Same linki'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 244, type: 'quiz', title: 'Najlepsza praktyka dla linków?', description: 'Co jest najważniejsze?', options: ['Ładny wygląd', 'Jasne oznaczenie celu', 'Krótki tekst'], correct: 1, difficulty: 'medium', time: 3 }
    ],
    lesson6: [
        { id: 16, type: 'quiz', title: 'Obowiązkowy atrybut dla <img>?', description: 'Który atrybut jest wymagany?', options: ['src', 'alt', 'width'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 17, type: 'code', title: 'Dodaj obraz', description: 'Tag img z src="photo.jpg" i alt="Zdjęcie"', expected: '<img src="photo.jpg" alt="Zdjęcie">', difficulty: 'easy', time: 3 },
        { id: 18, type: 'quiz', title: 'Tag dla podpisu obrazu?', description: 'Wybierz semantyczny tag', options: ['<caption>', '<figcaption>', '<subtitle>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 245, type: 'code', title: 'Obraz z wymiarami', description: 'Tag img z src="logo.png", alt="Logo", width="100", height="50"', expected: '<img src="logo.png" alt="Logo" width="100" height="50">', difficulty: 'easy', time: 3 },
        { id: 246, type: 'quiz', title: 'Atrybut alt w img?', description: 'Do czego służy alt?', options: ['Alternatywny tekst', 'Nazwa pliku', 'Tytuł obrazu'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 247, type: 'code', title: 'Figure z obrazem', description: 'Element figure zawierający img src="chart.png" alt="Wykres"', expected: '<figure><img src="chart.png" alt="Wykres"></figure>', difficulty: 'easy', time: 3 },
        { id: 248, type: 'quiz', title: 'Element figure służy do?', description: 'Do czego używa się figure?', options: ['Ilustracji z podpisem', 'Obrazków dekoracyjnych', 'Ikon'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 249, type: 'code', title: 'Figure z figcaption', description: 'Figure z img "photo.jpg" alt="Zdjęcie" i figcaption "Piękny widok"', expected: '<figure><img src="photo.jpg" alt="Zdjęcie"><figcaption>Piękny widok</figcaption></figure>', difficulty: 'medium', time: 4 },
        { id: 250, type: 'quiz', title: 'Figcaption musi być w figure?', description: 'Czy figcaption może istnieć poza figure?', options: ['Tak', 'Nie', 'Tylko w HTML5'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 251, type: 'quiz', title: 'Formaty obrazów w HTML?', description: 'Które formaty są obsługiwane?', options: ['JPG, PNG, GIF', 'Tylko JPG', 'Wszystkie formaty'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 252, type: 'code', title: 'Obraz responsywny', description: 'Img z src="banner.jpg" alt="Banner" i style="max-width:100%"', expected: '<img src="banner.jpg" alt="Banner" style="max-width:100%">', difficulty: 'medium', time: 4 },
        { id: 253, type: 'quiz', title: 'Loading="lazy" w img?', description: 'Co robi atrybut loading?', options: ['Opóźnia ładowanie', 'Przyśpiesza ładowanie', 'Blokuje ładowanie'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 254, type: 'code', title: 'Obraz z lazy loading', description: 'Img z src="big-image.jpg" alt="Duży obraz" i loading="lazy"', expected: '<img src="big-image.jpg" alt="Duży obraz" loading="lazy">', difficulty: 'medium', time: 3 },
        { id: 255, type: 'quiz', title: 'Element picture służy do?', description: 'Do czego używa się picture?', options: ['Responsywnych obrazów', 'Galerii', 'Animacji'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 256, type: 'code', title: 'Audio element', description: 'Tag audio z src="music.mp3" i controls', expected: '<audio src="music.mp3" controls></audio>', difficulty: 'easy', time: 3 },
        { id: 257, type: 'quiz', title: 'Atrybut controls w audio?', description: 'Do czego służy controls?', options: ['Pokazuje kontrolki odtwarzacza', 'Ukrywa audio', 'Auto odtwarzanie'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 258, type: 'code', title: 'Video element', description: 'Tag video z src="film.mp4", controls i width="400"', expected: '<video src="film.mp4" controls width="400"></video>', difficulty: 'easy', time: 3 },
        { id: 259, type: 'quiz', title: 'Autoplay w video?', description: 'Czy zaleca się autoplay?', options: ['Tak', 'Nie, przeszkadza użytkownikom', 'Tylko z dźwiękiem'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 260, type: 'code', title: 'Audio z wieloma źródłami', description: 'Audio z source src="song.mp3" type="audio/mpeg" i source src="song.ogg"', expected: '<audio controls><source src="song.mp3" type="audio/mpeg"><source src="song.ogg"></audio>', difficulty: 'medium', time: 4 },
        { id: 261, type: 'quiz', title: 'Element source w audio?', description: 'Po co wiele elementów source?', options: ['Kompatybilność z przeglądarkami', 'Lepsza jakość', 'Szybsze ładowanie'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 262, type: 'quiz', title: 'Atrybut type w source?', description: 'Do czego służy type?', options: ['Określa format pliku', 'Jakość dźwięku', 'Rozmiar pliku'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 263, type: 'code', title: 'Video z tekstem fallback', description: 'Video z controls i tekstem "Twoja przeglądarka nie obsługuje video"', expected: '<video controls>Twoja przeglądarka nie obsługuje video</video>', difficulty: 'medium', time: 4 },
        { id: 264, type: 'quiz', title: 'Tekst w elemencie video?', description: 'Kiedy wyświetla się tekst w video?', options: ['Zawsze', 'Gdy video się nie załaduje', 'Nigdy'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 265, type: 'quiz', title: 'Poster w video?', description: 'Co to atrybut poster?', options: ['Obraz przed odtworzeniem', 'Autor video', 'Tytuł filmu'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 266, type: 'code', title: 'Video z posterem', description: 'Video z src="movie.mp4", poster="thumbnail.jpg" i controls', expected: '<video src="movie.mp4" poster="thumbnail.jpg" controls></video>', difficulty: 'medium', time: 4 },
        { id: 267, type: 'quiz', title: 'Loop w audio/video?', description: 'Co robi atrybut loop?', options: ['Zapetla odtwarzanie', 'Zatrzymuje po skończeniu', 'Losuje kolejność'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 268, type: 'code', title: 'Audio z preload', description: 'Audio z src="sound.wav", controls i preload="metadata"', expected: '<audio src="sound.wav" controls preload="metadata"></audio>', difficulty: 'medium', time: 3 },
        { id: 269, type: 'quiz', title: 'Wartości preload?', description: 'Jakie opcje preload istnieją?', options: ['auto, metadata, none', 'true, false', 'fast, slow'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 270, type: 'quiz', title: 'Muted w video?', description: 'Po co atrybut muted?', options: ['Wycisza dźwięk', 'Usuwa dźwięk', 'Zmniejsza głośność'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 271, type: 'code', title: 'Video wyciszone z autoplay', description: 'Video z src="ad.mp4", autoplay, muted i controls', expected: '<video src="ad.mp4" autoplay muted controls></video>', difficulty: 'medium', time: 4 },
        { id: 272, type: 'quiz', title: 'Dlaczego muted z autoplay?', description: 'Czemu łączyć muted z autoplay?', options: ['Polityka przeglądarek', 'Lepsze UX', 'Oszczędność transferu'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 273, type: 'quiz', title: 'Element track w video?', description: 'Do czego służy track?', options: ['Napisy/podpisy', 'Ścieżka dźwiękowa', 'Metadane'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 274, type: 'code', title: 'Video z napisami', description: 'Video z controls i track kind="subtitles" src="subs.vtt" label="Polski"', expected: '<video controls><track kind="subtitles" src="subs.vtt" label="Polski"></video>', difficulty: 'hard', time: 5 },
        { id: 275, type: 'quiz', title: 'Formaty video w HTML5?', description: 'Które formaty są najlepiej obsługiwane?', options: ['MP4, WebM, OGV', 'AVI, MOV', 'Wszystkie'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 276, type: 'quiz', title: 'Formaty audio w HTML5?', description: 'Popularne formaty audio?', options: ['MP3, WAV, OGG', 'MIDI, FLAC', 'Tylko MP3'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 277, type: 'fix', title: 'Napraw obraz bez alt', description: 'Popraw: <img src="photo.jpg">', expected: '<img src="photo.jpg" alt="">', difficulty: 'easy', time: 3 },
        { id: 278, type: 'quiz', title: 'Pusty alt w img?', description: 'Kiedy alt może być pusty?', options: ['Nigdy', 'Dla obrazów dekoracyjnych', 'Zawsze'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 279, type: 'code', title: 'Mapa obrazów - usemap', description: 'Img z src="mapa.png" alt="Mapa" i usemap="#locations"', expected: '<img src="mapa.png" alt="Mapa" usemap="#locations">', difficulty: 'hard', time: 4 },
        { id: 280, type: 'quiz', title: 'Element map służy do?', description: 'Do czego używa się map?', options: ['Interaktywnych obrazów', 'Map geograficznych', 'Nawigacji'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 281, type: 'quiz', title: 'Srcset w img?', description: 'Do czego służy srcset?', options: ['Responsywne obrazy', 'Wiele formatów', 'Kompresja'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 282, type: 'code', title: 'Canvas element', description: 'Tag canvas z width="300" height="200" i tekstem "Canvas nieobsługiwany"', expected: '<canvas width="300" height="200">Canvas nieobsługiwany</canvas>', difficulty: 'medium', time: 4 },
        { id: 283, type: 'quiz', title: 'Canvas służy do?', description: 'Do czego używa się canvas?', options: ['Rysowania przez JavaScript', 'Wyświetlania obrazów', 'Animacji CSS'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 284, type: 'quiz', title: 'SVG vs Canvas?', description: 'Główna różnica?', options: ['SVG wektorowy, Canvas rastrowy', 'SVG szybszy', 'Canvas lepszy'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 285, type: 'code', title: 'SVG inline', description: 'Element svg z width="100" height="100" zawierający circle cx="50" cy="50" r="40"', expected: '<svg width="100" height="100"><circle cx="50" cy="50" r="40"></circle></svg>', difficulty: 'hard', time: 5 },
        { id: 286, type: 'quiz', title: 'Zalety SVG?', description: 'Dlaczego wybrać SVG?', options: ['Skalowalny bez straty jakości', 'Mały rozmiar', 'Oba powody'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 287, type: 'quiz', title: 'Object element?', description: 'Do czego służy object?', options: ['Osadzania różnych typów mediów', 'Tylko flash', 'Tylko PDF'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 288, type: 'quiz', title: 'Embed vs object?', description: 'Różnica między embed a object?', options: ['Object bardziej elastyczny', 'Embed nowszy', 'Bez różnicy'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 289, type: 'quiz', title: 'Iframe dla mediów?', description: 'Czy iframe może osadzać video?', options: ['Tak, z serwisów jak YouTube', 'Nie', 'Tylko audio'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 290, type: 'quiz', title: 'Accessibility dla mediów?', description: 'Co jest ważne dla accessibility?', options: ['Alt w obrazach, napisy w video', 'Tylko alt', 'Tylko napisy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 291, type: 'quiz', title: 'Najlepsza praktyka dla obrazów?', description: 'Co jest kluczowe?', options: ['Odpowiedni alt i rozmiar', 'Wysoka rozdzielczość', 'Dużo obrazów'], correct: 0, difficulty: 'medium', time: 3 }
    ],
    lesson7: [
        { id: 19, type: 'quiz', title: 'Tag dla wiersza tabeli?', description: 'Wybierz właściwy tag', options: ['<td>', '<tr>', '<th>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 20, type: 'code', title: 'Stwórz prostą tabelę', description: 'Tabela z jednym wierszem i dwiema komórkami: A, B', expected: '<table><tr><td>A</td><td>B</td></tr></table>', difficulty: 'easy', time: 4 },
        { id: 21, type: 'quiz', title: 'Różnica między <td> a <th>?', description: 'Co oznacza th?', options: ['Komórka danych', 'Nagłówek tabeli', 'Tytuł tabeli'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 292, type: 'code', title: 'Tabela z nagłówkami', description: 'Tabela z tr zawierającym th "Imie" i "Wiek"', expected: '<table><tr><th>Imie</th><th>Wiek</th></tr></table>', difficulty: 'easy', time: 3 },
        { id: 293, type: 'quiz', title: 'Element table zawiera?', description: 'Co może być bezpośrednio w table?', options: ['td', 'tr', 'text'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 294, type: 'code', title: 'Tabela z thead', description: 'Tabela z thead zawierającym tr z th "Produkt" i "Cena"', expected: '<table><thead><tr><th>Produkt</th><th>Cena</th></tr></thead></table>', difficulty: 'medium', time: 4 },
        { id: 295, type: 'quiz', title: 'Element thead służy do?', description: 'Do czego używa się thead?', options: ['Grupowania nagłówków', 'Tytułu tabeli', 'Pierwszego wiersza'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 296, type: 'code', title: 'Tabela z tbody', description: 'Tabela z tbody zawierającym tr z td "Jabłko" i "2zł"', expected: '<table><tbody><tr><td>Jabłko</td><td>2zł</td></tr></tbody></table>', difficulty: 'medium', time: 4 },
        { id: 297, type: 'quiz', title: 'Element tbody grupuje?', description: 'Co zawiera tbody?', options: ['Nagłówki', 'Główną zawartość', 'Stopkę'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 298, type: 'code', title: 'Tabela z tfoot', description: 'Tabela z tfoot zawierającym tr z td "Razem" i "10zł"', expected: '<table><tfoot><tr><td>Razem</td><td>10zł</td></tr></tfoot></table>', difficulty: 'medium', time: 4 },
        { id: 299, type: 'quiz', title: 'Element tfoot to?', description: 'Gdzie umieszcza się tfoot?', options: ['Na końcu tabeli', 'Na początku', 'W środku'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 300, type: 'code', title: 'Pełna struktura tabeli', description: 'Table z thead(th"Nazwa"), tbody(td"Test") i tfoot(td"Koniec")', expected: '<table><thead><tr><th>Nazwa</th></tr></thead><tbody><tr><td>Test</td></tr></tbody><tfoot><tr><td>Koniec</td></tr></tfoot></table>', difficulty: 'hard', time: 5 },
        { id: 301, type: 'quiz', title: 'Kolejność thead, tbody, tfoot?', description: 'Jaka powinna być kolejność?', options: ['thead, tbody, tfoot', 'Dowolna', 'tbody, thead, tfoot'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 302, type: 'code', title: 'Komórka z colspan', description: 'Tr z td "Tytuł" colspan="2" i tr z dwiema td "A", "B"', expected: '<tr><td colspan="2">Tytuł</td></tr><tr><td>A</td><td>B</td></tr>', difficulty: 'medium', time: 4 },
        { id: 303, type: 'quiz', title: 'Atrybut colspan?', description: 'Co robi colspan w td?', options: ['Łączy komórki w pionie', 'Łączy komórki w poziomie', 'Ustawia szerokość'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 304, type: 'code', title: 'Komórka z rowspan', description: 'Tr z td "Kategoria" rowspan="2" i td "A", tr z td "B"', expected: '<tr><td rowspan="2">Kategoria</td><td>A</td></tr><tr><td>B</td></tr>', difficulty: 'medium', time: 4 },
        { id: 305, type: 'quiz', title: 'Atrybut rowspan?', description: 'Co robi rowspan w td?', options: ['Łączy komórki w poziomie', 'Łączy komórki w pionie', 'Ustawia wysokość'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 306, type: 'quiz', title: 'Maksymalna wartość colspan?', description: 'Ile kolumn można połączyć?', options: ['10', '100', 'Bez ograniczeń'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 307, type: 'code', title: 'Tabela z caption', description: 'Table z caption "Lista produktów" i tr z td "Jabłko"', expected: '<table><caption>Lista produktów</caption><tr><td>Jabłko</td></tr></table>', difficulty: 'medium', time: 4 },
        { id: 308, type: 'quiz', title: 'Element caption służy do?', description: 'Do czego używa się caption?', options: ['Tytułu tabeli', 'Podpisu komórki', 'Nagłówka'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 309, type: 'quiz', title: 'Gdzie umieszcza się caption?', description: 'Pozycja caption w table?', options: ['Na początku', 'Na końcu', 'W środku'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 310, type: 'code', title: 'Komórka z headers', description: 'Th id="name" "Imie" i td headers="name" "Jan"', expected: '<th id="name">Imie</th><td headers="name">Jan</td>', difficulty: 'hard', time: 4 },
        { id: 311, type: 'quiz', title: 'Atrybut headers w td?', description: 'Do czego służy headers?', options: ['Wiąże z nagłówkami', 'Ustawia nagłówek', 'Styluje tekst'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 312, type: 'quiz', title: 'Scope w th?', description: 'Atrybut scope określa?', options: ['Zasięg nagłówka', 'Rozmiar komórki', 'Kolor tekstu'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 313, type: 'code', title: 'Th ze scope', description: 'Th scope="col" "Wiek" i th scope="row" "Osoba"', expected: '<th scope="col">Wiek</th><th scope="row">Osoba</th>', difficulty: 'medium', time: 4 },
        { id: 314, type: 'quiz', title: 'Wartości scope?', description: 'Jakie wartości ma scope?', options: ['col, row, colgroup, rowgroup', 'left, right', 'top, bottom'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 315, type: 'code', title: 'Colgroup element', description: 'Table z colgroup zawierającym col span="2"', expected: '<table><colgroup><col span="2"></colgroup></table>', difficulty: 'hard', time: 4 },
        { id: 316, type: 'quiz', title: 'Element colgroup służy do?', description: 'Do czego używa się colgroup?', options: ['Grupowania kolumn', 'Grupowania wierszy', 'Stylowania'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 317, type: 'quiz', title: 'Col vs colgroup?', description: 'Różnica między col a colgroup?', options: ['Col to pojedyncza kolumna', 'Bez różnicy', 'Col nowszy'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 318, type: 'code', title: 'Tabela z łączonymi komórkami', description: 'Table z tr(td colspan="2" "Nagłówek") i tr(td"A", td"B")', expected: '<table><tr><td colspan="2">Nagłówek</td></tr><tr><td>A</td><td>B</td></tr></table>', difficulty: 'medium', time: 4 },
        { id: 319, type: 'fix', title: 'Napraw strukturę tabeli', description: 'Popraw: <table><td>Dane</td></table>', expected: '<table><tr><td>Dane</td></tr></table>', difficulty: 'medium', time: 3 },
        { id: 320, type: 'quiz', title: 'Błąd w tabeli?', description: 'Co jest błędne: <table><td>komórka</td></table>?', options: ['Brak tr', 'Brak th', 'Brak tbody'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 321, type: 'quiz', title: 'Pusta komórka tabeli?', description: 'Jak stworzyć pustą komórkę?', options: ['<td></td>', '<td>&nbsp;</td>', 'Oba sposoby'], correct: 2, difficulty: 'medium', time: 3 },
        { id: 322, type: 'code', title: 'Tabela z pustymi komórkami', description: 'Tr z td"A", td pusty, td"C"', expected: '<tr><td>A</td><td></td><td>C</td></tr>', difficulty: 'easy', time: 3 },
        { id: 323, type: 'quiz', title: 'Accessibility w tabelach?', description: 'Co jest ważne dla accessibility?', options: ['Nagłówki th', 'Tylko td', 'Kolory'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 324, type: 'quiz', title: 'Tabele do layoutu?', description: 'Czy używać tabel do układu strony?', options: ['Tak', 'Nie, użyj CSS', 'Czasami'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 325, type: 'code', title: 'Tabela responywna', description: 'Table z style="width:100%" i tr z td"M" i td"T"', expected: '<table style="width:100%"><tr><td>M</td><td>T</td></tr></table>', difficulty: 'medium', time: 4 },
        { id: 326, type: 'quiz', title: 'Style w tabelach?', description: 'Jak najlepiej stylować tabele?', options: ['CSS zewnętrzny', 'Atrybuty HTML', 'JavaScript'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 327, type: 'quiz', title: 'Border w table?', description: 'Atrybut border jest?', options: ['Przestarzały', 'Aktualny', 'Wymagany'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 328, type: 'code', title: 'Zagnieżdżona tabela', description: 'Td zawierająca table z tr i td"Wewnętrzna"', expected: '<td><table><tr><td>Wewnętrzna</td></tr></table></td>', difficulty: 'hard', time: 5 },
        { id: 329, type: 'quiz', title: 'Zagnieżdżanie tabel?', description: 'Czy można zagnieżdżać tabele?', options: ['Tak, ale nie zaleca się', 'Nie', 'Tylko w td'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 330, type: 'quiz', title: 'Sortowanie tabel?', description: 'Jak dodać sortowanie do tabeli?', options: ['JavaScript', 'Atrybut sort', 'CSS'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 331, type: 'code', title: 'Komórka th jako dane', description: 'Tr z th"Imie" i th"Jan" (obie jako nagłówki)', expected: '<tr><th>Imie</th><th>Jan</th></tr>', difficulty: 'medium', time: 3 },
        { id: 332, type: 'quiz', title: 'Th może zawierać dane?', description: 'Czy th służy tylko do nagłówków?', options: ['Tak, tylko nagłówki', 'Może zawierać dane', 'Zależy od kontekstu'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 333, type: 'quiz', title: 'Cellpadding i cellspacing?', description: 'Te atrybuty są?', options: ['Aktualne', 'Przestarzałe', 'Opcjonalne'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 334, type: 'quiz', title: 'Semantyka tabel?', description: 'Tabele powinny reprezentować?', options: ['Dane tabelaryczne', 'Layout strony', 'Dekorację'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 335, type: 'code', title: 'Tabela z atrybutem summary', description: 'Table z summary="Sprzedaż miesięczna" (przestarzały)', expected: '<table summary="Sprzedaż miesięczna"></table>', difficulty: 'hard', time: 4 },
        { id: 336, type: 'quiz', title: 'Atrybut summary?', description: 'Stan atrybutu summary?', options: ['Aktualny', 'Przestarzały w HTML5', 'Nowy'], correct: 1, difficulty: 'hard', time: 4 },
        { id: 337, type: 'quiz', title: 'Alternatywa dla summary?', description: 'Zamiast summary użyć?', options: ['caption', 'title', 'description'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 338, type: 'quiz', title: 'Najlepsza praktyka tabel?', description: 'Co jest najważniejsze?', options: ['Czytelna struktura i semantyka', 'Ładny wygląd', 'Dużo danych'], correct: 0, difficulty: 'medium', time: 3 }
    ],
    lesson8: [
        { id: 22, type: 'quiz', title: 'Atrybut action w formularzu?', description: 'Do czego służy action?', options: ['Określa metodę', 'Określa docelowy URL', 'Określa typ pola'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 23, type: 'code', title: 'Pole tekstowe z etykietą', description: 'Input text z label "Imię" i name="name"', expected: '<label>Imię: <input type="text" name="name"></label>', difficulty: 'easy', time: 4 },
        { id: 24, type: 'quiz', title: 'Typ input dla hasła?', description: 'Jaki typ ukrywa znaki?', options: ['text', 'password', 'hidden'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 339, type: 'code', title: 'Podstawowy formularz', description: 'Form z action="submit.php" method="post"', expected: '<form action="submit.php" method="post"></form>', difficulty: 'easy', time: 3 },
        { id: 340, type: 'quiz', title: 'Metoda GET vs POST?', description: 'Kiedy używać POST?', options: ['Do wysyłania danych', 'Do pobierania danych', 'Zawsze'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 341, type: 'code', title: 'Input z atrybutami', description: 'Input type="text" name="username" id="user" placeholder="Podaj login"', expected: '<input type="text" name="username" id="user" placeholder="Podaj login">', difficulty: 'medium', time: 4 },
        { id: 342, type: 'quiz', title: 'Atrybut name w input?', description: 'Do czego służy name?', options: ['Identyfikuje pole na serwerze', 'Wyświetla nazwę', 'Styluje pole'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 343, type: 'code', title: 'Label powiązany z input', description: 'Label for="email" "Email" i input type="email" id="email"', expected: '<label for="email">Email</label><input type="email" id="email">', difficulty: 'medium', time: 4 },
        { id: 344, type: 'quiz', title: 'Atrybut for w label?', description: 'Do czego służy for?', options: ['Wiąże z polem przez id', 'Określa typ pola', 'Ustawia wartość'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 345, type: 'code', title: 'Button submit', description: 'Button type="submit" z tekstem "Wyślij"', expected: '<button type="submit">Wyślij</button>', difficulty: 'easy', time: 3 },
        { id: 346, type: 'quiz', title: 'Typy button?', description: 'Jakie typy ma button?', options: ['submit, reset, button', 'send, clear', 'post, get'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 347, type: 'code', title: 'Input submit', description: 'Input type="submit" value="Zatwierdź"', expected: '<input type="submit" value="Zatwierdź">', difficulty: 'easy', time: 3 },
        { id: 348, type: 'quiz', title: 'Button vs input submit?', description: 'Różnica między button a input submit?', options: ['Button bardziej elastyczny', 'Input lepszy', 'Bez różnicy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 349, type: 'code', title: 'Fieldset z legend', description: 'Fieldset z legend "Dane osobowe"', expected: '<fieldset><legend>Dane osobowe</legend></fieldset>', difficulty: 'medium', time: 3 },
        { id: 350, type: 'quiz', title: 'Element fieldset służy do?', description: 'Do czego używa się fieldset?', options: ['Grupowania pól', 'Stylowania', 'Walidacji'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 351, type: 'quiz', title: 'Element legend musi być?', description: 'Czy legend jest wymagany w fieldset?', options: ['Tak', 'Nie', 'Tylko w HTML5'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 352, type: 'code', title: 'Input hidden', description: 'Input type="hidden" name="token" value="abc123"', expected: '<input type="hidden" name="token" value="abc123">', difficulty: 'easy', time: 3 },
        { id: 353, type: 'quiz', title: 'Input hidden służy do?', description: 'Do czego używa się hidden?', options: ['Ukrytych danych', 'Hasła', 'Stylowania'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 354, type: 'code', title: 'Input number', description: 'Input type="number" min="0" max="100" step="5"', expected: '<input type="number" min="0" max="100" step="5">', difficulty: 'medium', time: 4 },
        { id: 355, type: 'quiz', title: 'Atrybuty min, max, step?', description: 'W jakich typach input działają?', options: ['number, range, date', 'Wszystkich', 'Tylko number'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 356, type: 'code', title: 'Input range', description: 'Input type="range" min="0" max="10" value="5"', expected: '<input type="range" min="0" max="10" value="5">', difficulty: 'medium', time: 3 },
        { id: 357, type: 'quiz', title: 'Input range wyświetla?', description: 'Jak wygląda type="range"?', options: ['Suwak', 'Pole tekstowe', 'Lista'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 358, type: 'code', title: 'Input date', description: 'Input type="date" name="birthday"', expected: '<input type="date" name="birthday">', difficulty: 'easy', time: 3 },
        { id: 359, type: 'quiz', title: 'Input type="email"?', description: 'Czym się różni od text?', options: ['Waliduje format email', 'Wygląda inaczej', 'Bez różnicy'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 360, type: 'code', title: 'Input email z walidacją', description: 'Input type="email" required name="mail"', expected: '<input type="email" required name="mail">', difficulty: 'medium', time: 3 },
        { id: 361, type: 'quiz', title: 'Atrybut required?', description: 'Co robi required?', options: ['Wymaga wypełnienia', 'Ukrywa pole', 'Wyłącza pole'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 362, type: 'code', title: 'Input url', description: 'Input type="url" placeholder="https://example.com"', expected: '<input type="url" placeholder="https://example.com">', difficulty: 'easy', time: 3 },
        { id: 363, type: 'quiz', title: 'Input type="tel"?', description: 'Do czego służy tel?', options: ['Numerów telefonu', 'Telegrafów', 'Tekstu'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 364, type: 'code', title: 'Input search', description: 'Input type="search" name="q" placeholder="Szukaj..."', expected: '<input type="search" name="q" placeholder="Szukaj...">', difficulty: 'easy', time: 3 },
        { id: 365, type: 'quiz', title: 'Atrybut placeholder?', description: 'Co wyświetla placeholder?', options: ['Tekst pomocniczy', 'Wartość domyślną', 'Błąd'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 366, type: 'code', title: 'Input z maxlength', description: 'Input type="text" maxlength="10" name="short"', expected: '<input type="text" maxlength="10" name="short">', difficulty: 'medium', time: 3 },
        { id: 367, type: 'quiz', title: 'Atrybut maxlength?', description: 'Co ogranicza maxlength?', options: ['Długość tekstu', 'Szerokość pola', 'Wysokość pola'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 368, type: 'code', title: 'Input z pattern', description: 'Input type="text" pattern="[0-9]{3}" title="3 cyfry"', expected: '<input type="text" pattern="[0-9]{3}" title="3 cyfry">', difficulty: 'hard', time: 4 },
        { id: 369, type: 'quiz', title: 'Atrybut pattern?', description: 'Pattern służy do?', options: ['Walidacji regex', 'Formatowania', 'Stylowania'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 370, type: 'code', title: 'Input disabled', description: 'Input type="text" disabled value="Nieaktywny"', expected: '<input type="text" disabled value="Nieaktywny">', difficulty: 'easy', time: 3 },
        { id: 371, type: 'quiz', title: 'Disabled vs readonly?', description: 'Różnica między disabled a readonly?', options: ['Disabled nie wysyła danych', 'Readonly nie wysyła', 'Bez różnicy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 372, type: 'code', title: 'Input readonly', description: 'Input type="text" readonly value="Tylko do odczytu"', expected: '<input type="text" readonly value="Tylko do odczytu">', difficulty: 'easy', time: 3 },
        { id: 373, type: 'quiz', title: 'Atrybut autocomplete?', description: 'Co robi autocomplete?', options: ['Kontroluje autouzupełnianie', 'Automatycznie wypełnia', 'Sprawdza pisownię'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 374, type: 'code', title: 'Input z autocomplete', description: 'Input type="email" autocomplete="email" name="user_email"', expected: '<input type="email" autocomplete="email" name="user_email">', difficulty: 'medium', time: 4 },
        { id: 375, type: 'quiz', title: 'Atrybut autofocus?', description: 'Co robi autofocus?', options: ['Fokus po załadowaniu', 'Auto kliknięcie', 'Auto wypełnienie'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 376, type: 'code', title: 'Button reset', description: 'Button type="reset" z tekstem "Wyczyść"', expected: '<button type="reset">Wyczyść</button>', difficulty: 'easy', time: 3 },
        { id: 377, type: 'quiz', title: 'Button type="reset"?', description: 'Co robi przycisk reset?', options: ['Czyści formularz', 'Wysyła formularz', 'Zamyka formularz'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 378, type: 'code', title: 'Input file', description: 'Input type="file" name="upload" accept=".jpg,.png"', expected: '<input type="file" name="upload" accept=".jpg,.png">', difficulty: 'medium', time: 3 },
        { id: 379, type: 'quiz', title: 'Atrybut accept w file?', description: 'Do czego służy accept?', options: ['Filtruje typy plików', 'Akceptuje upload', 'Sprawdza rozmiar'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 380, type: 'code', title: 'Input color', description: 'Input type="color" name="background" value="#ff0000"', expected: '<input type="color" name="background" value="#ff0000">', difficulty: 'medium', time: 3 },
        { id: 381, type: 'quiz', title: 'Input type="color"?', description: 'Jak wygląda color input?', options: ['Selektor kolorów', 'Pole tekstowe', 'Lista'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 382, type: 'fix', title: 'Napraw label', description: 'Popraw: <label>Imię</label><input id="name">', expected: '<label for="name">Imię</label><input id="name">', difficulty: 'medium', time: 3 },
        { id: 383, type: 'quiz', title: 'Formnovalidate w button?', description: 'Co robi formnovalidate?', options: ['Pomija walidację', 'Wymusza walidację', 'Ukrywa błędy'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 384, type: 'quiz', title: 'Najlepsza praktyka formularzy?', description: 'Co jest najważniejsze?', options: ['Jasne etykiety i walidacja', 'Ładny wygląd', 'Dużo pól'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 385, type: 'quiz', title: 'Accessibility w formularzach?', description: 'Co jest kluczowe dla accessibility?', options: ['Powiązane label z input', 'Kolory', 'Animacje'], correct: 0, difficulty: 'medium', time: 3 }
    ],
    lesson9: [
        { id: 25, type: 'quiz', title: 'Tag dla menu rozwijanego?', description: 'Wybierz właściwy tag', options: ['<select>', '<option>', '<dropdown>'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 26, type: 'code', title: 'Checkbox zaznaczony', description: 'Input checkbox name="agree" domyślnie zaznaczony', expected: '<input type="checkbox" name="agree" checked>', difficulty: 'easy', time: 3 },
        { id: 27, type: 'quiz', title: 'Atrybut required?', description: 'Co robi ten atrybut?', options: ['Ukrywa pole', 'Wymaga wypełnienia', 'Wyłącza pole'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 386, type: 'code', title: 'Select z opcjami', description: 'Select name="city" z option value="warszawa" "Warszawa" i option "Kraków"', expected: '<select name="city"><option value="warszawa">Warszawa</option><option>Kraków</option></select>', difficulty: 'medium', time: 4 },
        { id: 387, type: 'quiz', title: 'Element option zawiera?', description: 'Co umieszcza się w option?', options: ['Tekst do wyświetlenia', 'Wartość do wysłania', 'Oba'], correct: 2, difficulty: 'easy', time: 2 },
        { id: 388, type: 'code', title: 'Option selected', description: 'Select z option "Wybierz" i option selected value="pl" "Polska"', expected: '<select><option>Wybierz</option><option selected value="pl">Polska</option></select>', difficulty: 'medium', time: 4 },
        { id: 389, type: 'quiz', title: 'Atrybut selected?', description: 'Do czego służy selected?', options: ['Oznacza opcję domyślną', 'Blokuje opcję', 'Ukrywa opcję'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 390, type: 'code', title: 'Textarea element', description: 'Textarea name="message" rows="5" cols="30" z tekstem "Wiadomość"', expected: '<textarea name="message" rows="5" cols="30">Wiadomość</textarea>', difficulty: 'medium', time: 4 },
        { id: 391, type: 'quiz', title: 'Textarea vs input text?', description: 'Kiedy używać textarea?', options: ['Do długiego tekstu', 'Do krótkiego tekstu', 'Bez różnicy'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 392, type: 'quiz', title: 'Atrybuty rows i cols?', description: 'Do czego służą rows i cols?', options: ['Określają rozmiar', 'Ograniczają tekst', 'Stylują pole'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 393, type: 'code', title: 'Radio buttons', description: 'Dwa input radio name="gender" z value="M" i "K"', expected: '<input type="radio" name="gender" value="M"><input type="radio" name="gender" value="K">', difficulty: 'medium', time: 4 },
        { id: 394, type: 'quiz', title: 'Radio buttons z tym samym name?', description: 'Dlaczego radio mają to samo name?', options: ['Tworzą grupę - można wybrać jedno', 'Błąd', 'Lepsza walidacja'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 395, type: 'code', title: 'Checkbox z label', description: 'Label zawierający input checkbox i tekst "Zgadzam się"', expected: '<label><input type="checkbox">Zgadzam się</label>', difficulty: 'easy', time: 3 },
        { id: 396, type: 'quiz', title: 'Checkbox vs radio?', description: 'Główna różnica?', options: ['Checkbox - wiele opcji, radio - jedna', 'Radio lepszy', 'Bez różnicy'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 397, type: 'code', title: 'Select multiple', description: 'Select multiple name="hobbies" z opcjami "Sport", "Muzyka"', expected: '<select multiple name="hobbies"><option>Sport</option><option>Muzyka</option></select>', difficulty: 'medium', time: 4 },
        { id: 398, type: 'quiz', title: 'Atrybut multiple w select?', description: 'Co robi multiple?', options: ['Pozwala wybrać kilka opcji', 'Zwieksza rozmiar', 'Ukrywa opcje'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 399, type: 'code', title: 'Optgroup w select', description: 'Select z optgroup label="Europa" zawierającą option "Polska"', expected: '<select><optgroup label="Europa"><option>Polska</option></optgroup></select>', difficulty: 'medium', time: 4 },
        { id: 400, type: 'quiz', title: 'Element optgroup służy do?', description: 'Do czego używa się optgroup?', options: ['Grupowania opcji', 'Stylowania', 'Walidacji'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 401, type: 'quiz', title: 'Atrybut size w select?', description: 'Co określa size?', options: ['Liczbę widocznych opcji', 'Rozmiar czcionki', 'Szerokość'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 402, type: 'code', title: 'Textarea z placeholder', description: 'Textarea placeholder="Wprowadź komentarz" name="comment"', expected: '<textarea placeholder="Wprowadź komentarz" name="comment"></textarea>', difficulty: 'easy', time: 3 },
        { id: 403, type: 'quiz', title: 'Resize w textarea?', description: 'Czy użytkownik może zmieniać rozmiar?', options: ['Tak, domyślnie', 'Nie', 'Tylko w Chrome'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 404, type: 'code', title: 'Input z datalist', description: 'Input list="browsers" i datalist id="browsers" z option "Chrome"', expected: '<input list="browsers"><datalist id="browsers"><option>Chrome</option></datalist>', difficulty: 'hard', time: 5 },
        { id: 405, type: 'quiz', title: 'Element datalist?', description: 'Do czego służy datalist?', options: ['Podpowiedzi do input', 'Lista danych', 'Menu'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 406, type: 'quiz', title: 'Required w select?', description: 'Jak działa required w select?', options: ['Wymaga wyboru opcji', 'Nie działa', 'Tylko z multiple'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 407, type: 'code', title: 'Radio z checked', description: 'Input radio name="color" value="red" checked i radio name="color" value="blue"', expected: '<input type="radio" name="color" value="red" checked><input type="radio" name="color" value="blue">', difficulty: 'medium', time: 4 },
        { id: 408, type: 'quiz', title: 'Wiele checked w radio?', description: 'Można mieć kilka checked radio o tym samym name?', options: ['Nie, tylko jedno', 'Tak', 'Zależy od przeglądarki'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 409, type: 'code', title: 'Textarea z maxlength', description: 'Textarea name="bio" maxlength="500" placeholder="Opisz się"', expected: '<textarea name="bio" maxlength="500" placeholder="Opisz się"></textarea>', difficulty: 'medium', time: 4 },
        { id: 410, type: 'quiz', title: 'Validation w HTML5?', description: 'Jakie typy walidacji są wbudowane?', options: ['Required, pattern, type', 'Tylko required', 'Tylko pattern'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 411, type: 'code', title: 'Input z min i max', description: 'Input type="number" min="18" max="65" required', expected: '<input type="number" min="18" max="65" required>', difficulty: 'medium', time: 3 },
        { id: 412, type: 'quiz', title: 'Custom validity message?', description: 'Jak ustawić własną wiadomość błędu?', options: ['JavaScript setCustomValidity', 'Atrybut message', 'CSS'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 413, type: 'quiz', title: 'Novalidate w form?', description: 'Co robi atrybut novalidate?', options: ['Wyłącza walidację HTML5', 'Włącza walidację', 'Ukrywa błędy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 414, type: 'code', title: 'Select z pustym option', description: 'Select required z option value="" "Wybierz" i option value="1" "Opcja 1"', expected: '<select required><option value="">Wybierz</option><option value="1">Opcja 1</option></select>', difficulty: 'medium', time: 4 },
        { id: 415, type: 'quiz', title: 'Pusta wartość w required select?', description: 'Czy pusty value powoduje błąd walidacji?', options: ['Tak', 'Nie', 'Zależy od przeglądarki'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 416, type: 'code', title: 'Checkbox required', description: 'Input checkbox required name="terms" z label "Akceptuję regulamin"', expected: '<label><input type="checkbox" required name="terms">Akceptuję regulamin</label>', difficulty: 'medium', time: 4 },
        { id: 417, type: 'quiz', title: 'Required checkbox?', description: 'Kiedy checkbox z required jest ważny?', options: ['Gdy jest zaznaczony', 'Zawsze', 'Gdy ma wartość'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 418, type: 'quiz', title: 'Multiple checkboxes walidacja?', description: 'Jak walidować grupę checkboxów?', options: ['JavaScript', 'Required na każdym', 'Automatycznie'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 419, type: 'code', title: 'Radio group z required', description: 'Dwa radio name="gender" z required na pierwszym', expected: '<input type="radio" name="gender" required><input type="radio" name="gender">', difficulty: 'medium', time: 3 },
        { id: 420, type: 'quiz', title: 'Required na jednym radio?', description: 'Czy required na jednym radio waży całą grupę?', options: ['Tak', 'Nie', 'Tylko w Firefox'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 421, type: 'quiz', title: 'Textarea a input text validation?', description: 'Czy textarea obsługuje pattern?', options: ['Nie', 'Tak', 'Tylko w HTML5'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 422, type: 'code', title: 'Form z autocomplete off', description: 'Form autocomplete="off" action="save.php"', expected: '<form autocomplete="off" action="save.php"></form>', difficulty: 'medium', time: 3 },
        { id: 423, type: 'quiz', title: 'Autocomplete="off"?', description: 'Czy autocomplete="off" zawsze działa?', options: ['Nie, przeglądarki mogą ignorować', 'Tak', 'Tylko w trybie prywatnym'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 424, type: 'quiz', title: 'Disabled input w formie?', description: 'Czy disabled input wysyła dane?', options: ['Nie', 'Tak', 'Tylko w POST'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 425, type: 'code', title: 'Output element', description: 'Output for="price quantity" name="total"', expected: '<output for="price quantity" name="total"></output>', difficulty: 'hard', time: 4 },
        { id: 426, type: 'quiz', title: 'Element output służy do?', description: 'Do czego używa się output?', options: ['Wyników obliczeń', 'Dane wyjściowe', 'Debug'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 427, type: 'quiz', title: 'Progress element?', description: 'Do czego służy progress?', options: ['Pasek postępu', 'Input', 'Walidacja'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 428, type: 'code', title: 'Progress bar', description: 'Progress value="70" max="100"', expected: '<progress value="70" max="100"></progress>', difficulty: 'medium', time: 3 },
        { id: 429, type: 'quiz', title: 'Meter vs progress?', description: 'Kiedy używać meter?', options: ['Do pomiaru w zakresie', 'Do postępu', 'Bez różnicy'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 430, type: 'quiz', title: 'Label może zawierać?', description: 'Co może być w label?', options: ['Input i tekst', 'Tylko tekst', 'Tylko input'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 431, type: 'quiz', title: 'Najlepsza praktyka validation?', description: 'Co jest najważniejsze?', options: ['Kombinacja HTML5 i JavaScript', 'Tylko HTML5', 'Tylko JavaScript'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 432, type: 'quiz', title: 'UX w formularzach?', description: 'Co poprawia user experience?', options: ['Jasne komunikaty i szybka walidacja', 'Dużo pól', 'Kolorowe przyciski'], correct: 0, difficulty: 'medium', time: 3 }
    ],
    lesson10: [
        { id: 28, type: 'quiz', title: 'Tag dla głównej treści?', description: 'Semantyczny tag HTML5', options: ['<content>', '<main>', '<body>'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 29, type: 'code', title: 'Sekcja artykułu', description: 'Stwórz tag article z nagłówkiem h2 "Tytuł"', expected: '<article><h2>Tytuł</h2></article>', difficulty: 'easy', time: 3 },
        { id: 30, type: 'quiz', title: 'Różnica article vs section?', description: 'Kiedy używać article?', options: ['Zawsze', 'Dla niezależnej treści', 'Dla nawigacji'], correct: 1, difficulty: 'easy', time: 3 },
        { id: 433, type: 'code', title: 'Header element', description: 'Header zawierający h1 "Tytuł strony" i nav', expected: '<header><h1>Tytuł strony</h1><nav></nav></header>', difficulty: 'easy', time: 3 },
        { id: 434, type: 'quiz', title: 'Element header może być?', description: 'Gdzie można umieścić header?', options: ['Tylko na początku strony', 'W każdej sekcji', 'Tylko raz na stronie'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 435, type: 'code', title: 'Nav element', description: 'Nav z ul zawierającą li z linkiem "Home"', expected: '<nav><ul><li><a href="#">Home</a></li></ul></nav>', difficulty: 'medium', time: 4 },
        { id: 436, type: 'quiz', title: 'Element nav służy do?', description: 'Kiedy używać nav?', options: ['Każdego linku', 'Głównej nawigacji', 'Wszystkich linków'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 437, type: 'code', title: 'Main element', description: 'Main zawierający article z h1 "Artykuł"', expected: '<main><article><h1>Artykuł</h1></article></main>', difficulty: 'easy', time: 3 },
        { id: 438, type: 'quiz', title: 'Ile elementów main na stronie?', description: 'Ograniczenia dla main?', options: ['Jeden', 'Wiele', 'Dwa maksymalnie'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 439, type: 'code', title: 'Section element', description: 'Section z h2 "Rozdział" i p "Treść"', expected: '<section><h2>Rozdział</h2><p>Treść</p></section>', difficulty: 'easy', time: 3 },
        { id: 440, type: 'quiz', title: 'Section vs div?', description: 'Kiedy używać section?', options: ['Gdy treść ma semantyczny sens', 'Zawsze zamiast div', 'Do stylowania'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 441, type: 'code', title: 'Article zagnieżdżony', description: 'Article z h1 "Blog" zawierający article z h2 "Post"', expected: '<article><h1>Blog</h1><article><h2>Post</h2></article></article>', difficulty: 'medium', time: 4 },
        { id: 442, type: 'quiz', title: 'Zagnieżdżanie article?', description: 'Czy można zagnieżdżać article?', options: ['Tak', 'Nie', 'Tylko w section'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 443, type: 'code', title: 'Aside element', description: 'Aside z h3 "Sidebar" i p "Dodatkowe info"', expected: '<aside><h3>Sidebar</h3><p>Dodatkowe info</p></aside>', difficulty: 'easy', time: 3 },
        { id: 444, type: 'quiz', title: 'Element aside reprezentuje?', description: 'Do czego służy aside?', options: ['Treść poboczną', 'Główną treść', 'Nawigację'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 445, type: 'code', title: 'Footer element', description: 'Footer z p "Copyright 2024" i nav z linkiem "Kontakt"', expected: '<footer><p>Copyright 2024</p><nav><a href="#">Kontakt</a></nav></footer>', difficulty: 'medium', time: 4 },
        { id: 446, type: 'quiz', title: 'Footer może zawierać?', description: 'Co umieszcza się w footer?', options: ['Copyright, linki, informacje kontaktowe', 'Główną treść', 'Nawigację główną'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 447, type: 'quiz', title: 'Ile footerów na stronie?', description: 'Ograniczenia dla footer?', options: ['Jeden', 'Wiele w sekcjach', 'Dwa maksymalnie'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 448, type: 'code', title: 'Time element', description: 'Time datetime="2024-01-15" z tekstem "15 stycznia 2024"', expected: '<time datetime="2024-01-15">15 stycznia 2024</time>', difficulty: 'medium', time: 4 },
        { id: 449, type: 'quiz', title: 'Element time służy do?', description: 'Do czego używa się time?', options: ['Dat i czasów', 'Tylko dat', 'Tylko czasu'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 450, type: 'quiz', title: 'Atrybut datetime?', description: 'Po co datetime w time?', options: ['Format maszynowy', 'Wyświetlanie', 'Stylowanie'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 451, type: 'code', title: 'Address element', description: 'Address z p "ul. Nowa 1" i p "email@example.com"', expected: '<address><p>ul. Nowa 1</p><p>email@example.com</p></address>', difficulty: 'medium', time: 4 },
        { id: 452, type: 'quiz', title: 'Element address zawiera?', description: 'Co umieszcza się w address?', options: ['Dane kontaktowe autora', 'Wszystkie adresy', 'Adresy stron'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 453, type: 'code', title: 'Details i summary', description: 'Details z summary "Szczegóły" i p "Ukryta treść"', expected: '<details><summary>Szczegóły</summary><p>Ukryta treść</p></details>', difficulty: 'medium', time: 4 },
        { id: 454, type: 'quiz', title: 'Element details to?', description: 'Do czego służy details?', options: ['Rozwijane treści', 'Informacje szczegółowe', 'Debug'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 455, type: 'quiz', title: 'Summary w details?', description: 'Czy summary jest wymagany?', options: ['Nie, ale zalecany', 'Tak', 'Tylko w Chrome'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 456, type: 'code', title: 'Mark element w tekście', description: 'P z tekstem "To jest" mark"ważne" " słowo"', expected: '<p>To jest <mark>ważne</mark> słowo</p>', difficulty: 'easy', time: 3 },
        { id: 457, type: 'quiz', title: 'Element mark oznacza?', description: 'Semantyka mark?', options: ['Podkreślenie ważności', 'Wyszukiwanie', 'Żółte tło'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 458, type: 'code', title: 'Hgroup element', description: 'Hgroup z h1 "Tytuł" i h2 "Podtytuł"', expected: '<hgroup><h1>Tytuł</h1><h2>Podtytuł</h2></hgroup>', difficulty: 'medium', time: 4 },
        { id: 459, type: 'quiz', title: 'Element hgroup?', description: 'Stan hgroup w HTML5?', options: ['Usunięty z HTML5', 'Aktualny', 'Przestarzały'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 460, type: 'code', title: 'Dialog element', description: 'Dialog open z h2 "Okno" i button "Zamknij"', expected: '<dialog open><h2>Okno</h2><button>Zamknij</button></dialog>', difficulty: 'medium', time: 4 },
        { id: 461, type: 'quiz', title: 'Element dialog służy do?', description: 'Do czego używa się dialog?', options: ['Modalów i okien dialogowych', 'Rozmów', 'Komunikatów'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 462, type: 'quiz', title: 'Atrybut open w dialog?', description: 'Co robi open?', options: ['Pokazuje dialog', 'Otwiera link', 'Włącza JavaScript'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 463, type: 'code', title: 'Main z role', description: 'Main role="main" z h1 "Główna treść"', expected: '<main role="main"><h1>Główna treść</main>', difficulty: 'medium', time: 3 },
        { id: 464, type: 'quiz', title: 'Atrybuty ARIA w HTML5?', description: 'Czy nowe elementy potrzebują role?', options: ['Nie, mają implicit role', 'Tak', 'Tylko dla compatibility'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 465, type: 'quiz', title: 'Semantic HTML a SEO?', description: 'Jak semantyka wpływa na SEO?', options: ['Poprawia zrozumienie treści', 'Nie wpływa', 'Tylko meta tagi mają znaczenie'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 466, type: 'code', title: 'Section z aria-labelledby', description: 'Section aria-labelledby="heading1" z h2 id="heading1" "Sekcja"', expected: '<section aria-labelledby="heading1"><h2 id="heading1">Sekcja</h2></section>', difficulty: 'hard', time: 5 },
        { id: 467, type: 'quiz', title: 'Aria-labelledby służy do?', description: 'Do czego używa się aria-labelledby?', options: ['Wiąże element z etykietą', 'Tworzy etykietę', 'Ukrywa element'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 468, type: 'quiz', title: 'Outline algorytm?', description: 'Co to HTML5 outline algorithm?', options: ['Struktura nagłówków na podstawie sekcji', 'Kontur elementów', 'Algorytm CSS'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 469, type: 'code', title: 'Landmark navigation', description: 'Nav role="navigation" aria-label="Główne menu"', expected: '<nav role="navigation" aria-label="Główne menu"></nav>', difficulty: 'hard', time: 4 },
        { id: 470, type: 'quiz', title: 'Landmark roles?', description: 'Do czego służą landmarks?', options: ['Nawigacji czytników ekranu', 'SEO', 'CSS'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 471, type: 'quiz', title: 'Div vs semantic elements?', description: 'Kiedy używać div?', options: ['Gdy żaden semantic nie pasuje', 'Zawsze', 'Nigdy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 472, type: 'code', title: 'Breadcrumb navigation', description: 'Nav aria-label="Breadcrumb" z ol i li>a"Home"', expected: '<nav aria-label="Breadcrumb"><ol><li><a href="#">Home</a></li></ol></nav>', difficulty: 'hard', time: 5 },
        { id: 473, type: 'quiz', title: 'Breadcrumb to?', description: 'Do czego służy breadcrumb?', options: ['Pokazuje ścieżkę nawigacji', 'Menu główne', 'Sidebar'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 474, type: 'quiz', title: 'Skip links?', description: 'Do czego służą skip links?', options: ['Pomijanie nawigacji', 'Przekierowania', 'SEO'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 475, type: 'code', title: 'Skip link', description: 'A href="#main" "Przejdź do treści" na początku body', expected: '<a href="#main">Przejdź do treści</a>', difficulty: 'medium', time: 3 },
        { id: 476, type: 'quiz', title: 'Document outline?', description: 'Co to document outline?', options: ['Hierarchia treści', 'CSS outline', 'JavaScript'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 477, type: 'quiz', title: 'Screen reader testing?', description: 'Dlaczego testować z czytnikami ekranu?', options: ['Sprawdzenie accessibility', 'Debug CSS', 'Optymalizacja'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 478, type: 'quiz', title: 'Semantic versioning HTML?', description: 'HTML5 semantic elements są?', options: ['Backward compatible', 'Tylko w nowych przeglądarkach', 'Nie działają w IE'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 479, type: 'quiz', title: 'Najlepsza praktyka semantyki?', description: 'Co jest najważniejsze?', options: ['Używanie właściwych elementów do celu', 'Dużo tagów', 'Nowe tagi zawsze'], correct: 0, difficulty: 'medium', time: 3 }
    ],
    lesson11: [
        { id: 31, type: 'quiz', title: 'Meta tag dla opisu strony?', description: 'Który atrybut name?', options: ['keywords', 'description', 'author'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 32, type: 'code', title: 'Meta viewport', description: 'Responsive viewport dla urządzeń mobilnych', expected: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', difficulty: 'easy', time: 4 },
        { id: 33, type: 'quiz', title: 'Open Graph to?', description: 'Do czego służy OG?', options: ['SEO', 'Media społecznościowe', 'Analityka'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 480, type: 'code', title: 'Meta description SEO', description: 'Meta name="description" content="Opis strony dla wyszukiwarek"', expected: '<meta name="description" content="Opis strony dla wyszukiwarek">', difficulty: 'easy', time: 3 },
        { id: 481, type: 'quiz', title: 'Długość meta description?', description: 'Optymalna długość opisu?', options: ['50-60 znaków', '150-160 znaków', '300 znaków'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 482, type: 'code', title: 'Meta keywords', description: 'Meta name="keywords" content="HTML, CSS, JavaScript"', expected: '<meta name="keywords" content="HTML, CSS, JavaScript">', difficulty: 'easy', time: 3 },
        { id: 483, type: 'quiz', title: 'Meta keywords w 2024?', description: 'Czy Google używa keywords?', options: ['Tak', 'Nie, zignorowane', 'Czasami'], correct: 1, difficulty: 'medium', time: 3 },
        { id: 484, type: 'code', title: 'Meta author', description: 'Meta name="author" content="Jan Kowalski"', expected: '<meta name="author" content="Jan Kowalski">', difficulty: 'easy', time: 3 },
        { id: 485, type: 'quiz', title: 'Meta robots?', description: 'Do czego służy meta robots?', options: ['Instrukcje dla botów', 'Wykrywanie robotów', 'Blokowanie robotów'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 486, type: 'code', title: 'Meta robots noindex', description: 'Meta name="robots" content="noindex, nofollow"', expected: '<meta name="robots" content="noindex, nofollow">', difficulty: 'medium', time: 4 },
        { id: 487, type: 'quiz', title: 'Noindex oznacza?', description: 'Co robi noindex?', options: ['Nie indeksuje strony', 'Ukrywa stronę', 'Blokuje dostęp'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 488, type: 'code', title: 'Open Graph tytuł', description: 'Meta property="og:title" content="Tytuł dla Facebooka"', expected: '<meta property="og:title" content="Tytuł dla Facebooka">', difficulty: 'medium', time: 4 },
        { id: 489, type: 'quiz', title: 'Open Graph to standard?', description: 'Kto stworzył Open Graph?', options: ['Google', 'Facebook', 'Twitter'], correct: 1, difficulty: 'easy', time: 2 },
        { id: 490, type: 'code', title: 'OG opis', description: 'Meta property="og:description" content="Opis dla social media"', expected: '<meta property="og:description" content="Opis dla social media">', difficulty: 'medium', time: 4 },
        { id: 491, type: 'code', title: 'OG obraz', description: 'Meta property="og:image" content="https://example.com/image.jpg"', expected: '<meta property="og:image" content="https://example.com/image.jpg">', difficulty: 'medium', time: 4 },
        { id: 492, type: 'quiz', title: 'Rozmiar obrazu OG?', description: 'Zalecany rozmiar og:image?', options: ['1200x630px', '800x600px', '500x500px'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 493, type: 'code', title: 'OG typ', description: 'Meta property="og:type" content="website"', expected: '<meta property="og:type" content="website">', difficulty: 'medium', time: 3 },
        { id: 494, type: 'quiz', title: 'Typy OG content?', description: 'Popularne wartości og:type?', options: ['website, article, video', 'page, site', 'html, text'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 495, type: 'code', title: 'OG URL', description: 'Meta property="og:url" content="https://example.com"', expected: '<meta property="og:url" content="https://example.com">', difficulty: 'medium', time: 4 },
        { id: 496, type: 'quiz', title: 'OG URL powinien być?', description: 'Jaki URL w og:url?', options: ['Canonical URL', 'Bierzący URL', 'Krótki URL'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 497, type: 'code', title: 'Twitter Card', description: 'Meta name="twitter:card" content="summary_large_image"', expected: '<meta name="twitter:card" content="summary_large_image">', difficulty: 'medium', time: 4 },
        { id: 498, type: 'quiz', title: 'Twitter Cards vs OG?', description: 'Relacja Twitter Cards do OG?', options: ['Twitter używa też OG', 'Całkowicie oddzielne', 'Twitter nie obsługuje'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 499, type: 'code', title: 'Twitter site', description: 'Meta name="twitter:site" content="@nazwastrony"', expected: '<meta name="twitter:site" content="@nazwastrony">', difficulty: 'medium', time: 3 },
        { id: 500, type: 'quiz', title: 'Twitter:site vs twitter:creator?', description: 'Różnica między site a creator?', options: ['Site to konto strony, creator to autor', 'Bez różnicy', 'Site nowszy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 501, type: 'code', title: 'Canonical link', description: 'Link rel="canonical" href="https://example.com/strona"', expected: '<link rel="canonical" href="https://example.com/strona">', difficulty: 'medium', time: 4 },
        { id: 502, type: 'quiz', title: 'Canonical URL zapobiega?', description: 'Po co canonical link?', options: ['Duplicate content', 'Broken links', 'Slow loading'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 503, type: 'quiz', title: 'Hreflang atrybut?', description: 'Do czego służy hreflang?', options: ['Wersje językowe', 'Linki zewnętrzne', 'Anchor links'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 504, type: 'code', title: 'Hreflang link', description: 'Link rel="alternate" hreflang="en" href="/en/page"', expected: '<link rel="alternate" hreflang="en" href="/en/page">', difficulty: 'hard', time: 4 },
        { id: 505, type: 'code', title: 'Meta theme-color', description: 'Meta name="theme-color" content="#2196F3"', expected: '<meta name="theme-color" content="#2196F3">', difficulty: 'medium', time: 3 },
        { id: 506, type: 'quiz', title: 'Theme-color wpływa na?', description: 'Gdzie widać theme-color?', options: ['Pasek adresu w mobile', 'Tło strony', 'Czcionkę'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 507, type: 'code', title: 'Apple touch icon', description: 'Link rel="apple-touch-icon" href="icon-180.png"', expected: '<link rel="apple-touch-icon" href="icon-180.png">', difficulty: 'medium', time: 4 },
        { id: 508, type: 'quiz', title: 'Apple touch icon rozmiar?', description: 'Zalecany rozmiar dla iOS?', options: ['180x180px', '144x144px', '128x128px'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 509, type: 'code', title: 'Manifest link', description: 'Link rel="manifest" href="manifest.json"', expected: '<link rel="manifest" href="manifest.json">', difficulty: 'medium', time: 3 },
        { id: 510, type: 'quiz', title: 'Web App Manifest to?', description: 'Do czego służy manifest?', options: ['PWA configuration', 'Lista plików', 'SEO data'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 511, type: 'code', title: 'Meta application-name', description: 'Meta name="application-name" content="Moja App"', expected: '<meta name="application-name" content="Moja App">', difficulty: 'medium', time: 3 },
        { id: 512, type: 'quiz', title: 'Application-name vs title?', description: 'Różnica między application-name a title?', options: ['Application-name to nazwa app', 'Bez różnicy', 'Title lepszy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 513, type: 'code', title: 'Schema.org markup', description: 'Div itemscope itemtype="http://schema.org/Article"', expected: '<div itemscope itemtype="http://schema.org/Article">', difficulty: 'hard', time: 4 },
        { id: 514, type: 'quiz', title: 'Schema.org to?', description: 'Co to Schema.org?', options: ['Mikroformaty dla search engines', 'CSS framework', 'JS library'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 515, type: 'quiz', title: 'JSON-LD vs microdata?', description: 'Która metoda schema markup?', options: ['JSON-LD zalecana przez Google', 'Microdata lepsza', 'Bez różnicy'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 516, type: 'code', title: 'Rich snippets script', description: 'Script type="application/ld+json" z obiektem schema', expected: '<script type="application/ld+json">{}</script>', difficulty: 'hard', time: 4 },
        { id: 517, type: 'quiz', title: 'Rich snippets poprawiają?', description: 'Korzyści z rich snippets?', options: ['Lepsze wyświetlanie w SERP', 'Wyższy ranking', 'Szybsze ładowanie'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 518, type: 'quiz', title: 'Meta refresh a SEO?', description: 'Czy meta refresh jest dobre dla SEO?', options: ['Nie, użyj 301 redirect', 'Tak', 'Bez wpływu'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 519, type: 'code', title: 'Preload critical resource', description: 'Link rel="preload" href="critical.css" as="style"', expected: '<link rel="preload" href="critical.css" as="style">', difficulty: 'hard', time: 4 },
        { id: 520, type: 'quiz', title: 'Preload vs prefetch?', description: 'Różnica między preload a prefetch?', options: ['Preload dla bieżącej strony', 'Prefetch szybszy', 'Bez różnicy'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 521, type: 'code', title: 'DNS prefetch', description: 'Link rel="dns-prefetch" href="//fonts.googleapis.com"', expected: '<link rel="dns-prefetch" href="//fonts.googleapis.com">', difficulty: 'medium', time: 4 },
        { id: 522, type: 'quiz', title: 'DNS prefetch optymalizuje?', description: 'Co przyspiesza dns-prefetch?', options: ['Resolving DNS', 'Pobieranie CSS', 'Rendering'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 523, type: 'quiz', title: 'Core Web Vitals?', description: 'Które metryki to Core Web Vitals?', options: ['LCP, FID, CLS', 'SEO, UX, Speed', 'HTML, CSS, JS'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 524, type: 'quiz', title: 'Page Experience signals?', description: 'Co wpływa na Page Experience?', options: ['Core Web Vitals + UX factors', 'Tylko szybkość', 'Tylko treść'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 525, type: 'quiz', title: 'Mobile-first indexing?', description: 'Co oznacza mobile-first?', options: ['Google indeksuje mobile version', 'Mobile ważniejsze', 'Tylko mobile SEO'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 526, type: 'quiz', title: 'Najlepsza praktyka SEO?', description: 'Co jest podstawą dobrego SEO?', options: ['Jakościowa treść + technical SEO', 'Tylko keywords', 'Tylko metadata'], correct: 0, difficulty: 'medium', time: 3 }
    ],
    lesson12: [
        { id: 34, type: 'quiz', title: 'Struktura HTML5 dokumentu?', description: 'Prawidłowa kolejność', options: ['body, head, html', 'html, head, body', 'head, html, body'], correct: 1, difficulty: 'easy', time: 3 },
        { id: 35, type: 'code', title: 'Kompletna podstawa', description: 'DOCTYPE html + html z lang="pl"', expected: '<!DOCTYPE html><html lang="pl"></html>', difficulty: 'easy', time: 4 },
        { id: 36, type: 'quiz', title: 'Najważniejsza zasada HTML?', description: 'Co jest kluczowe?', options: ['Ładny wygląd', 'Semantyka i dostępność', 'Szybkość'], correct: 1, difficulty: 'easy', time: 3 },
        { id: 527, type: 'code', title: 'Pełny HTML5 dokument', description: 'DOCTYPE, html lang="pl", head z title"Test", body z h1"Start"', expected: '<!DOCTYPE html><html lang="pl"><head><title>Test</title></head><body><h1>Start</h1></body></html>', difficulty: 'medium', time: 5 },
        { id: 528, type: 'quiz', title: 'Walidacja HTML?', description: 'Po co walidować HTML?', options: ['Sprawdzenie poprawności', 'Lepsza wydajność', 'Oba powody'], correct: 2, difficulty: 'easy', time: 2 },
        { id: 529, type: 'quiz', title: 'W3C Validator?', description: 'Do czego służy W3C Validator?', options: ['Sprawdzania składni HTML', 'Testowania CSS', 'Debug JavaScript'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 530, type: 'code', title: 'Semantic layout', description: 'Header>nav, main>article, aside, footer', expected: '<header><nav></nav></header><main><article></article></main><aside></aside><footer></footer>', difficulty: 'hard', time: 5 },
        { id: 531, type: 'quiz', title: 'Progressive Enhancement?', description: 'Co to progressive enhancement?', options: ['Budowanie od HTML do JS', 'Nowe funkcje', 'Tylko CSS'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 532, type: 'quiz', title: 'Graceful Degradation?', description: 'Opposite of progressive enhancement?', options: ['Działa bez nowoczesnych funkcji', 'Tylko dla starych przeglądarek', 'Nie używać'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 533, type: 'code', title: 'Accessibility landmarks', description: 'Main role="main", nav role="navigation", aside role="complementary"', expected: '<main role="main"></main><nav role="navigation"></nav><aside role="complementary"></aside>', difficulty: 'hard', time: 5 },
        { id: 534, type: 'quiz', title: 'WCAG guidelines?', description: 'WCAG to standardy?', options: ['Web accessibility', 'CSS guidelines', 'HTML validation'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 535, type: 'quiz', title: 'Screen reader compatibility?', description: 'Co pomaga czytnikowi ekranu?', options: ['Semantic HTML + ARIA', 'Tylko ARIA', 'Tylko semantic'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 536, type: 'code', title: 'Focus management', description: 'Button autofocus tabindex="1" i link tabindex="2"', expected: '<button autofocus tabindex="1"></button><a href="#" tabindex="2"></a>', difficulty: 'medium', time: 4 },
        { id: 537, type: 'quiz', title: 'Tabindex values?', description: 'Zalecane wartości tabindex?', options: ['0, -1, positive numbers', 'Tylko 0', 'Tylko positive'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 538, type: 'quiz', title: 'Alt text best practices?', description: 'Jak pisać dobry alt?', options: ['Opisowy, konkretny, krótki', 'Długi opis', '"Obraz" wystarczy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 539, type: 'code', title: 'Form accessibility', description: 'Label for="name">"Imię", input id="name" required aria-describedby="help"', expected: '<label for="name">Imię</label><input id="name" required aria-describedby="help">', difficulty: 'hard', time: 5 },
        { id: 540, type: 'quiz', title: 'Aria-describedby?', description: 'Do czego służy aria-describedby?', options: ['Wiąże z dodatkowym opisem', 'Tworzy opis', 'Ukrywa element'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 541, type: 'quiz', title: 'Color contrast ratio?', description: 'Minimum contrast dla normal text?', options: ['4.5:1', '3:1', '7:1'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 542, type: 'code', title: 'Error handling', description: 'Input required aria-invalid="true" aria-describedby="error"', expected: '<input required aria-invalid="true" aria-describedby="error">', difficulty: 'hard', time: 4 },
        { id: 543, type: 'quiz', title: 'Responsive design principles?', description: 'Podstawy responsive web design?', options: ['Flexible grid, media queries, images', 'Tylko media queries', 'Tylko flexible layout'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 544, type: 'quiz', title: 'Mobile-first approach?', description: 'Dlaczego mobile-first?', options: ['Większość użytkowników mobile', 'Prostszy CSS', 'Szybsze ładowanie'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 545, type: 'code', title: 'Responsive images', description: 'Img srcset="small.jpg 480w, large.jpg 800w" sizes="(max-width: 600px) 480px, 800px"', expected: '<img srcset="small.jpg 480w, large.jpg 800w" sizes="(max-width: 600px) 480px, 800px">', difficulty: 'hard', time: 5 },
        { id: 546, type: 'quiz', title: 'Performance optimization HTML?', description: 'Jak optymalizować HTML?', options: ['Minifikacja, kompresja, cache', 'Tylko minifikacja', 'Tylko cache'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 547, type: 'quiz', title: 'Critical rendering path?', description: 'Co blokuje renderowanie?', options: ['CSS i sync JS', 'Tylko JS', 'Tylko CSS'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 548, type: 'code', title: 'Non-blocking CSS', description: 'Link rel="stylesheet" href="non-critical.css" media="print" onload="this.media=\'all\'"', expected: '<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media=\'all\'">', difficulty: 'hard', time: 5 },
        { id: 549, type: 'quiz', title: 'Async vs defer scripts?', description: 'Kiedy używać defer?', options: ['Gdy skrypt potrzebuje DOM', 'Zawsze', 'Gdy niezależny'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 550, type: 'code', title: 'Optimized script loading', description: 'Script src="app.js" defer i script src="analytics.js" async', expected: '<script src="app.js" defer></script><script src="analytics.js" async></script>', difficulty: 'medium', time: 4 },
        { id: 551, type: 'quiz', title: 'Web Components?', description: 'Co to Web Components?', options: ['Custom elements, Shadow DOM, Templates', 'Framework JS', 'CSS components'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 552, type: 'quiz', title: 'Service Workers + HTML?', description: 'Jak Service Workers wpływają na HTML?', options: ['Cache i offline support', 'Generują HTML', 'Zastępują HTML'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 553, type: 'quiz', title: 'PWA requirements?', description: 'Co potrzebne do PWA?', options: ['Manifest, Service Worker, HTTPS', 'Tylko manifest', 'Tylko HTTPS'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 554, type: 'code', title: 'PWA manifest link', description: 'Link rel="manifest" href="manifest.json" i meta theme-color="#000"', expected: '<link rel="manifest" href="manifest.json"><meta name="theme-color" content="#000">', difficulty: 'medium', time: 4 },
        { id: 555, type: 'quiz', title: 'HTML5 vs XHTML?', description: 'Główne różnice?', options: ['HTML5 młodszy i elastyczniejszy', 'XHTML lepszy', 'Bez różnicy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 556, type: 'quiz', title: 'HTML6 future?', description: 'Czy będzie HTML6?', options: ['HTML jest Living Standard', 'Tak, planowany', 'Nie, koniec rozwoju'], correct: 0, difficulty: 'hard', time: 4 },
        { id: 557, type: 'quiz', title: 'Browser compatibility?', description: 'Jak zapewnić compatibility?', options: ['Progressive enhancement + polyfills', 'Tylko nowe przeglądarki', 'Ignorować stare'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 558, type: 'code', title: 'Polyfill example', description: 'Script src="polyfills.js" nomodule dla starych przeglądarek', expected: '<script src="polyfills.js" nomodule></script>', difficulty: 'hard', time: 4 },
        { id: 559, type: 'quiz', title: 'Testing HTML?', description: 'Jak testować HTML?', options: ['Walidatory, accessibility tools, browsers', 'Tylko validators', 'Tylko browsers'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 560, type: 'quiz', title: 'Debugging HTML?', description: 'Narzędzia do debug HTML?', options: ['DevTools, validators, lighthouse', 'Tylko DevTools', 'Tylko validators'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 561, type: 'quiz', title: 'HTML best practices 2024?', description: 'Aktualne best practices?', options: ['Semantic HTML + accessibility + performance', 'Tylko semantyka', 'Tylko performance'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 562, type: 'quiz', title: 'Code organization?', description: 'Jak organizować HTML?', options: ['Modularity, components, consistency', 'Jeden duży plik', 'Losowo'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 563, type: 'quiz', title: 'Documentation practices?', description: 'Jak dokumentować HTML?', options: ['Comments, style guides, examples', 'Tylko comments', 'Nie dokumentować'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 564, type: 'code', title: 'HTML comments', description: 'Komentarz "TODO: optimize this section"', expected: '<!-- TODO: optimize this section -->', difficulty: 'easy', time: 2 },
        { id: 565, type: 'quiz', title: 'Team collaboration?', description: 'Współpraca w zespole nad HTML?', options: ['Style guides + code review + tools', 'Tylko tools', 'Każdy robi jak chce'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 566, type: 'quiz', title: 'Continuous integration?', description: 'HTML w CI/CD?', options: ['Automated testing + validation', 'Ręczne testy', 'Nie testować'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 567, type: 'quiz', title: 'Maintenance strategies?', description: 'Utrzymanie HTML?', options: ['Regular audits + updates + refactoring', 'Nie zmieniać', 'Przepisywać od nowa'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 568, type: 'quiz', title: 'Security considerations?', description: 'Bezpieczeństwo w HTML?', options: ['XSS prevention + CSP + validation', 'Tylko HTTPS', 'Bez zagrożeń'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 569, type: 'quiz', title: 'Internationalization?', description: 'HTML dla wielu języków?', options: ['Lang attributes + direction + encoding', 'Tylko encoding', 'Osobne pliki'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 570, type: 'code', title: 'RTL language support', description: 'Html lang="ar" dir="rtl"', expected: '<html lang="ar" dir="rtl">', difficulty: 'medium', time: 3 },
        { id: 571, type: 'quiz', title: 'Future-proofing HTML?', description: 'Jak przygotować HTML na przyszłość?', options: ['Standards compliance + accessibility + flexibility', 'Najnowsze funkcje', 'Ignorować standardy'], correct: 0, difficulty: 'medium', time: 3 },
        { id: 572, type: 'quiz', title: 'Learning path after HTML?', description: 'Co uczyć się po HTML?', options: ['CSS, JavaScript, frameworks', 'Od razu frameworks', 'Tylko backend'], correct: 0, difficulty: 'easy', time: 2 },
        { id: 573, type: 'quiz', title: 'HTML mastery indicators?', description: 'Oznaki opanowania HTML?', options: ['Semantic markup + accessibility + performance awareness', 'Znanie wszystkich tagów', 'Szybkie pisanie'], correct: 0, difficulty: 'medium', time: 3 }
    ]
};

// Prosta klasa testowa
class SimpleExerciseSystem {
    constructor() {
        console.log('SimpleExerciseSystem created');
        this.selectedExercises = [];
        this.currentExerciseIndex = 0;
        this.currentLesson = null;
        this.userAnswers = [];
        this.correctAnswers = 0;
    }

    // Wygeneruj ćwiczenia dla lekcji (losuj 20 z dostępnych)
    generateExercisesForLesson(lessonNumber) {
        console.log(`Generating exercises for lesson ${lessonNumber}`);
        const lessonKey = `lesson${lessonNumber}`;
        const exercises = SIMPLE_EXERCISES[lessonKey];

        if (!exercises) {
            console.error(`No exercises for lesson ${lessonNumber}`);
            return [];
        }

        // Losuj 20 ćwiczeń (lub wszystkie jeśli mniej niż 20)
        const exerciseCount = Math.min(20, exercises.length);
        const shuffled = [...exercises].sort(() => Math.random() - 0.5);
        this.selectedExercises = shuffled.slice(0, exerciseCount);

        console.log(`Generated ${this.selectedExercises.length} exercises from ${exercises.length} available`);
        return this.selectedExercises;
    }

    // Rozpocznij test
    startLessonTest(lessonNumber) {
        console.log(`Starting test for lesson ${lessonNumber}`);
        this.currentLesson = lessonNumber;
        this.generateExercisesForLesson(lessonNumber);
        this.currentExerciseIndex = 0;
        this.userAnswers = [];
        this.correctAnswers = 0;

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
        const key = `htmlCourse_test_completed_lesson${lessonNumber}`;
        return localStorage.getItem(key) === 'true';
    }

    // Sprawdź odpowiedź - NIE zwiększa indeksu!
    checkAnswer(answer) {
        console.log('Checking answer:', answer, 'for exercise index:', this.currentExerciseIndex);

        if (this.currentExerciseIndex >= this.selectedExercises.length) {
            console.error('No exercise at current index');
            return { correct: false, feedback: 'Błąd: brak ćwiczenia' };
        }

        const exercise = this.selectedExercises[this.currentExerciseIndex];
        let isCorrect = false;

        if (exercise.type === 'quiz') {
            isCorrect = parseInt(answer) === exercise.correct;
        } else if (exercise.type === 'code') {
            // Sprawdź czy odpowiedź zawiera oczekiwany kod (z małymi poprawkami)
            const userAnswer = answer.toLowerCase().trim().replace(/\s+/g, ' ');
            const expectedAnswer = exercise.expected.toLowerCase().trim().replace(/\s+/g, ' ');
            isCorrect = userAnswer.includes(expectedAnswer) || userAnswer === expectedAnswer;
        } else if (exercise.type === 'fix') {
            const userAnswer = answer.toLowerCase().trim().replace(/\s+/g, ' ');
            const expectedAnswer = exercise.expected.toLowerCase().trim().replace(/\s+/g, ' ');
            isCorrect = userAnswer.includes(expectedAnswer) || userAnswer === expectedAnswer;
        }

        // Zapisz odpowiedź
        this.userAnswers[this.currentExerciseIndex] = {
            answer: answer,
            correct: isCorrect,
            exercise: exercise
        };

        if (isCorrect) {
            this.correctAnswers++;
        }

        console.log(`Answer ${isCorrect ? 'correct' : 'incorrect'}, total correct: ${this.correctAnswers}`);

        return {
            correct: isCorrect,
            feedback: isCorrect ? 'Prawidłowa odpowiedź!' : 'Nieprawidłowa odpowiedź.',
            correctAnswer: exercise.expected || `Opcja ${exercise.correct + 1}: ${exercise.options[exercise.correct]}`
        };
    }

    // Przejdź do następnego pytania
    nextExercise() {
        if (this.currentExerciseIndex < this.selectedExercises.length - 1) {
            this.currentExerciseIndex++;
            return this.getCurrentExercise();
        }
        return null;
    }

    // Przejdź do poprzedniego pytania
    previousExercise() {
        if (this.currentExerciseIndex > 0) {
            this.currentExerciseIndex--;
            return this.getCurrentExercise();
        }
        return null;
    }

    // Ustaw konkretny indeks
    setExerciseIndex(index) {
        if (index >= 0 && index < this.selectedExercises.length) {
            this.currentExerciseIndex = index;
            return this.getCurrentExercise();
        }
        return null;
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
        const totalExercises = this.selectedExercises.length;
        const scorePercentage = Math.round((this.correctAnswers / totalExercises) * 100);
        let grade = 'F';
        let passed = false;

        if (scorePercentage >= 90) {
            grade = 'A';
            passed = true;
        } else if (scorePercentage >= 80) {
            grade = 'B';
            passed = true;
        } else if (scorePercentage >= 70) {
            grade = 'C';
            passed = true;
        } else if (scorePercentage >= 60) {
            grade = 'D';
            passed = false;
        }

        // Zapisz wynik jeśli zdał
        if (passed) {
            const key = `htmlCourse_test_completed_lesson${this.currentLesson}`;
            localStorage.setItem(key, 'true');
        }

        const results = {
            totalExercises: totalExercises,
            correctAnswers: this.correctAnswers,
            wrongAnswers: totalExercises - this.correctAnswers,
            scorePercentage: scorePercentage,
            grade: grade,
            passed: passed,
            totalTime: 0 // Będzie ustawiony przez test.html
        };

        console.log('Test finished with results:', results);
        return results;
    }
}

// Utwórz instancję
window.SimpleExerciseSystem = new SimpleExerciseSystem();

console.log('Simple test system loaded successfully');
console.log('Available at: window.SimpleExerciseSystem');