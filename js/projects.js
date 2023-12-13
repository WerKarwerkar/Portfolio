const initialSlider = document.querySelector('.slider');
const leftArrow = document.querySelector('.toleft');
const rightArrow = document.querySelector('.toright');

let sectionIndex = 0;
const totalSections = initialSlider.children.length;

leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : totalSections - 1;
    updateSliderTransform();
});

rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < totalSections - 1) ? sectionIndex + 1 : 0;
    updateSliderTransform();
});

function updateSliderTransform() {
    const transformPercentage = (sectionIndex / totalSections) * -100;
    initialSlider.style.transform = 'translateX(' + transformPercentage + '%)';
}