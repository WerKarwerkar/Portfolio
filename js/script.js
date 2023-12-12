document.addEventListener("DOMContentLoaded", function () {
    const logoSection = document.querySelector('.logo');
    const containerNavi = document.querySelector('.container-navi');

    setTimeout(function () {
        const arrow = document.createElement('span');
        arrow.innerHTML = '<i class="fas fa-chevron-down"></i>';
        arrow.classList.add('arrow');

        const navContainer = document.createElement('div');
        navContainer.appendChild(arrow);
        navContainer.appendChild(containerNavi);

        logoSection.appendChild(navContainer);

        arrow.addEventListener('click', function () {
            containerNavi.style.display = 'block';
           
            containerNavi.classList.add('fade-in');

            containerNavi.innerHTML = '';

            const aboutLink = createNavLink('about.html', 'About');
            const projectsLink = createNavLink('projects.html', 'Projects');
            const contactLink = createNavLink('contact.html', 'Contact');

            containerNavi.appendChild(aboutLink);
            containerNavi.appendChild(projectsLink);
            containerNavi.appendChild(contactLink);

            arrow.style.display = 'none';

            setTimeout(function () {
                containerNavi.classList.add('show');
            }, 1000);
        });
    }, 1000);

    function createNavLink(href, text) {
        const link = document.createElement('a');
        const linkText = document.createElement('h2');
        link.href = href;
        link.classList.add('navi');
        linkText.textContent = text;
        link.appendChild(linkText);
        return link;
    }
});