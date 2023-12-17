const initialSlider = document.querySelector('.slider');
const leftArrow = document.querySelector('.toleft');
const rightArrow = document.querySelector('.toright');

let sectionIndex = 0;
const totalSections = initialSlider.children[0].children.length;

leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    updateSliderTransform();
});

rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < totalSections - 1) ? sectionIndex + 1 : totalSections - 1;
    updateSliderTransform();
});

function updateSliderTransform() {
    initialSlider.style.transform = 'translate(' + (sectionIndex * -100) + '%)';
}