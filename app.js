// Detect sections entering the viewport
const sections = document.querySelectorAll('section');

const checkSectionInView = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
};

window.addEventListener('scroll', checkSectionInView);

// Initialize once
checkSectionInView();
