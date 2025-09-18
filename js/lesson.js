// JavaScript dla stron lekcji

document.addEventListener('DOMContentLoaded', function() {
    // Inicjalizacja funkcji dla lekcji
    initLessonFeatures();
    initCodeHighlighting();
    initProgressTracking();
    initKeyboardNavigation();
});

// Główne funkcje lekcji
function initLessonFeatures() {
    // Smooth scrolling dla linków wewnętrznych
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dodaj tooltips do meta informacji
    addTooltips();

    // Animacje dla sekcji przy scrollowaniu
    initScrollAnimations();
}

// Podświetlanie składni kodu
function initCodeHighlighting() {
    // Jeśli Prism.js jest dostępny, dodaj dodatkowe funkcje
    if (typeof Prism !== 'undefined') {
        // Dodaj numery linii do bloków kodu
        document.querySelectorAll('pre code').forEach(block => {
            if (block.textContent.split('\n').length > 3) {
                block.parentElement.classList.add('line-numbers');
            }
        });

        // Dodaj przyciski kopiowania
        addCopyButtons();
    }
}

// Przyciski kopiowania kodu
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('.code-example pre');

    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '📋';
        copyButton.title = 'Kopiuj kod';

        copyButton.addEventListener('click', function() {
            const code = block.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.innerHTML = '✅';
                copyButton.title = 'Skopiowano!';

                setTimeout(() => {
                    copyButton.innerHTML = '📋';
                    copyButton.title = 'Kopiuj kod';
                }, 2000);
            });
        });

        // Pozycjonuj przycisk
        block.style.position = 'relative';
        block.appendChild(copyButton);
    });
}

// Tooltips
function addTooltips() {
    const tooltipElements = [
        { selector: '.duration', text: 'Szacowany czas potrzebny na ukończenie lekcji' },
        { selector: '.difficulty.easy', text: 'Łatwy poziom - dla początkujących' },
        { selector: '.difficulty.medium', text: 'Średni poziom - wymaga podstawowej wiedzy' },
        { selector: '.difficulty.hard', text: 'Trudny poziom - dla zaawansowanych' }
    ];

    tooltipElements.forEach(({ selector, text }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.title = text;
        });
    });
}

// Animacje scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.lesson-section, .info-box, .example-box, .exercise-box');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Progress tracking dla lekcji
function initProgressTracking() {
    const lessonNumber = getLessonNumber();
    if (lessonNumber) {
        // Oznacz lekcję jako rozpoczętą
        markLessonAsStarted(lessonNumber);

        // Sprawdź czas spędzony na stronie
        trackTimeSpent(lessonNumber);

        // Śledzenie scrollowania
        trackScrollProgress();
    }
}

// Pobierz numer lekcji z URL lub tytułu
function getLessonNumber() {
    const url = window.location.pathname;
    const match = url.match(/lekcja-(\d+)/);
    return match ? match[1] : null;
}

// Oznacz lekcję jako rozpoczętą
function markLessonAsStarted(lessonNumber) {
    const startedLessons = JSON.parse(localStorage.getItem('htmlCourse_started') || '[]');
    if (!startedLessons.includes(lessonNumber)) {
        startedLessons.push(lessonNumber);
        localStorage.setItem('htmlCourse_started', JSON.stringify(startedLessons));
    }
}

// Śledź czas spędzony na lekcji
function trackTimeSpent(lessonNumber) {
    const startTime = Date.now();

    window.addEventListener('beforeunload', function() {
        const timeSpent = Date.now() - startTime;
        const lessonTimes = JSON.parse(localStorage.getItem('htmlCourse_times') || '{}');
        lessonTimes[lessonNumber] = (lessonTimes[lessonNumber] || 0) + timeSpent;
        localStorage.setItem('htmlCourse_times', JSON.stringify(lessonTimes));
    });
}

// Śledzenie postępu scrollowania
function trackScrollProgress() {
    let maxScrollPercentage = 0;

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercentage > maxScrollPercentage) {
            maxScrollPercentage = scrollPercentage;

            // Zapisz maksymalny postęp dla tej lekcji
            const lessonNumber = getLessonNumber();
            if (lessonNumber) {
                const scrollProgress = JSON.parse(localStorage.getItem('htmlCourse_scroll') || '{}');
                scrollProgress[lessonNumber] = maxScrollPercentage;
                localStorage.setItem('htmlCourse_scroll', JSON.stringify(scrollProgress));
            }
        }
    }

    window.addEventListener('scroll', updateScrollProgress);
}

// Nawigacja klawiaturą
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Strzałka w lewo - poprzednia lekcja
        if (e.key === 'ArrowLeft' && e.altKey) {
            const prevLink = document.querySelector('.nav-btn.prev');
            if (prevLink) {
                window.location.href = prevLink.href;
            }
        }

        // Strzałka w prawo - następna lekcja
        if (e.key === 'ArrowRight' && e.altKey) {
            const nextLink = document.querySelector('.nav-btn.next');
            if (nextLink) {
                window.location.href = nextLink.href;
            }
        }

        // Escape - powrót do kursu
        if (e.key === 'Escape') {
            window.location.href = '../index.html';
        }
    });
}

// Funkcje dostępne globalnie dla lekcji
window.LessonUtils = {
    // Oznacz aktualną lekcję jako ukończoną
    completeCurrentLesson: function() {
        const lessonNumber = getLessonNumber();
        if (lessonNumber && typeof CourseUtils !== 'undefined') {
            CourseUtils.completeLesson(lessonNumber);
            return true;
        }
        return false;
    },

    // Sprawdź czy aktualna lekcja jest ukończona
    isCurrentLessonCompleted: function() {
        const lessonNumber = getLessonNumber();
        if (lessonNumber && typeof CourseUtils !== 'undefined') {
            return CourseUtils.isLessonCompleted(lessonNumber);
        }
        return false;
    },

    // Pokaż statystyki aktualnej lekcji
    getCurrentLessonStats: function() {
        const lessonNumber = getLessonNumber();
        if (!lessonNumber) return null;

        const times = JSON.parse(localStorage.getItem('htmlCourse_times') || '{}');
        const scroll = JSON.parse(localStorage.getItem('htmlCourse_scroll') || '{}');
        const started = JSON.parse(localStorage.getItem('htmlCourse_started') || '[]');
        const completed = JSON.parse(localStorage.getItem('htmlCourse_progress') || '[]');

        return {
            lessonNumber: lessonNumber,
            timeSpent: times[lessonNumber] || 0,
            scrollProgress: scroll[lessonNumber] || 0,
            isStarted: started.includes(lessonNumber),
            isCompleted: completed.includes(lessonNumber)
        };
    },

    // Wyświetl wskazówkę dotyczącą nawigacji klawiaturą
    showKeyboardShortcuts: function() {
        alert(`Skróty klawiszowe:

Alt + ← - Poprzednia lekcja
Alt + → - Następna lekcja
Esc - Powrót do kursu`);
    }
};

// Style CSS dla funkcji JavaScript
const lessonStyles = `
    .copy-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        z-index: 10;
    }

    .copy-btn:hover {
        background: white;
        transform: scale(1.1);
    }

    .lesson-section {
        scroll-margin-top: 100px;
    }

    .code-example pre {
        position: relative;
    }

    .line-numbers {
        counter-reset: line-numbering;
    }

    .line-numbers code {
        counter-increment: line-numbering;
    }

    @media (max-width: 768px) {
        .copy-btn {
            top: 5px;
            right: 5px;
            padding: 0.3rem;
            font-size: 0.8rem;
        }
    }
`;

// Dodaj style do dokumentu
const lessonStyleSheet = document.createElement('style');
lessonStyleSheet.textContent = lessonStyles;
document.head.appendChild(lessonStyleSheet);

// Konsola deweloperska dla lekcji
console.log(`
📚 Lesson Utils Available:
=========================

Commands:
- LessonUtils.completeCurrentLesson() - mark current lesson as completed
- LessonUtils.getCurrentLessonStats() - show current lesson statistics
- LessonUtils.showKeyboardShortcuts() - display keyboard shortcuts

Keyboard Shortcuts:
- Alt + ← Previous lesson
- Alt + → Next lesson
- Esc - Return to course
`);