// Główny plik JavaScript dla kursu HTML

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling dla linków nawigacyjnych
    initSmoothScrolling();

    // Animacje dla kart lekcji
    initLessonCardAnimations();

    // Progress tracking
    initProgressTracking();

    // Responsive navigation
    initResponsiveNavigation();
});

// Smooth scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .cta-button[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Offset dla sticky header

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Animacje dla kart lekcji
function initLessonCardAnimations() {
    const lessonCards = document.querySelectorAll('.lesson-card');

    // Intersection Observer dla animacji wjazdu
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

    // Ustaw początkowe style i obserwuj karty
    lessonCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Hover effects
    lessonCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Progress tracking
function initProgressTracking() {
    // Sprawdź postęp w localStorage
    const completedLessons = JSON.parse(localStorage.getItem('htmlCourse_progress') || '[]');

    // Oznacz ukończone lekcje
    completedLessons.forEach(lessonNumber => {
        markLessonAsCompleted(lessonNumber);
    });

    // Dodaj event listenery do linków lekcji
    const lessonLinks = document.querySelectorAll('.lesson-link');
    lessonLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const lessonCard = this.closest('.lesson-card');
            const lessonNumber = lessonCard.dataset.lesson;

            // Zapisz informację o rozpoczęciu lekcji
            const startedLessons = JSON.parse(localStorage.getItem('htmlCourse_started') || '[]');
            if (!startedLessons.includes(lessonNumber)) {
                startedLessons.push(lessonNumber);
                localStorage.setItem('htmlCourse_started', JSON.stringify(startedLessons));
            }
        });
    });

    // Wyświetl postęp w konsoli (do debugowania)
    console.log('Ukończone lekcje:', completedLessons);
    console.log(`Postęp: ${completedLessons.length}/12 lekcji`);
}

// Oznacz lekcję jako ukończoną
function markLessonAsCompleted(lessonNumber) {
    const lessonCard = document.querySelector(`[data-lesson="${lessonNumber}"]`);
    if (lessonCard) {
        lessonCard.classList.add('completed');

        // Dodaj ikonę ukończenia
        const lessonContent = lessonCard.querySelector('.lesson-content');
        if (!lessonContent.querySelector('.completion-badge')) {
            const badge = document.createElement('div');
            badge.className = 'completion-badge';
            badge.innerHTML = '✅ Ukończono';
            badge.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: #10b981;
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 0.8rem;
                font-weight: 500;
            `;
            lessonContent.style.position = 'relative';
            lessonContent.appendChild(badge);
        }
    }
}

// Responsive navigation
function initResponsiveNavigation() {
    // Dodaj hamburger menu dla mobile (opcjonalne)
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');

    // Sprawdź czy potrzebujemy mobile menu
    function checkNavOverflow() {
        const headerContainer = header.querySelector('.container');
        const headerWidth = headerContainer.offsetWidth;
        const logo = headerContainer.querySelector('.logo');
        const navWidth = nav.offsetWidth;
        const logoWidth = logo.offsetWidth;

        if (logoWidth + navWidth + 40 > headerWidth) {
            header.classList.add('mobile-nav');
        } else {
            header.classList.remove('mobile-nav');
        }
    }

    // Sprawdź przy załadowaniu i zmianie rozmiaru
    checkNavOverflow();
    window.addEventListener('resize', checkNavOverflow);
}

// Funkcje pomocnicze dostępne globalnie
window.CourseUtils = {
    // Oznacz lekcję jako ukończoną
    completeLesson: function(lessonNumber) {
        const completedLessons = JSON.parse(localStorage.getItem('htmlCourse_progress') || '[]');
        if (!completedLessons.includes(lessonNumber)) {
            completedLessons.push(lessonNumber);
            localStorage.setItem('htmlCourse_progress', JSON.stringify(completedLessons));
            markLessonAsCompleted(lessonNumber);
        }
    },

    // Sprawdź czy lekcja jest ukończona
    isLessonCompleted: function(lessonNumber) {
        const completedLessons = JSON.parse(localStorage.getItem('htmlCourse_progress') || '[]');
        return completedLessons.includes(lessonNumber);
    },

    // Zresetuj postęp
    resetProgress: function() {
        localStorage.removeItem('htmlCourse_progress');
        localStorage.removeItem('htmlCourse_started');
        location.reload();
    },

    // Pobierz statystyki
    getStats: function() {
        const completed = JSON.parse(localStorage.getItem('htmlCourse_progress') || '[]');
        const started = JSON.parse(localStorage.getItem('htmlCourse_started') || '[]');

        return {
            completed: completed.length,
            started: started.length,
            total: 12,
            percentage: Math.round((completed.length / 12) * 100)
        };
    }
};

// CSS dla stanu ukończenia
const completedStyles = `
    .lesson-card.completed {
        border-color: #10b981;
        background: linear-gradient(135deg, #f0fdf4, #ffffff);
    }

    .lesson-card.completed .lesson-number {
        background: linear-gradient(135deg, #10b981, #059669);
    }

    .header.mobile-nav .nav {
        display: none;
    }

    @media (max-width: 768px) {
        .header.mobile-nav .nav {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            padding: 1rem;
            box-shadow: var(--shadow);
        }

        .header.mobile-nav .nav.open {
            display: flex;
        }
    }
`;

// Dodaj style do head
const styleSheet = document.createElement('style');
styleSheet.textContent = completedStyles;
document.head.appendChild(styleSheet);

// Konsola deweloperska - przydatne komendy
console.log(`
🎓 HTML Course Developer Console
================================

Dostępne komendy:
- CourseUtils.getStats() - pokaż statystyki postępu
- CourseUtils.completeLesson('1') - oznacz lekcję jako ukończoną
- CourseUtils.resetProgress() - zresetuj postęp
- CourseUtils.isLessonCompleted('1') - sprawdź czy lekcja ukończona

Przykład użycia:
CourseUtils.completeLesson('1');
CourseUtils.getStats();
`);