function navBar(target) {
    let home = document.querySelector('.home-btn'); // choose home button
    let homePage = document.querySelector('.home-page'); // choose home page
    let projects = document.querySelector('.projects-btn'); // choose projects button
    let projectsPage = document.querySelector('.projects-page'); // choose projects page
    let experience = document.querySelector('.experience-btn'); // choose experience button
    let experiencePage = document.querySelector('.experience-page'); // choose experience page

    // if the button projects is clicked
    if(target.classList.contains('projects-btn')) {
        home.style.textDecoration = 'none';
        projects.style.textDecoration = 'underline';
        experience.style.textDecoration = 'none';
        homePage.style.visibility = 'hidden';
        experiencePage.style.visibility = 'hidden';
        projectsPage.style.visibility = 'visible';
        
    // if the button experience is clicked
    } else if(target.classList.contains('experience-btn')) {
    home.style.textDecoration = 'none';
    projects.style.textDecoration = 'none';
    experience.style.textDecoration = 'underline';
    homePage.style.visibility = 'hidden';
    projectsPage.style.visibility = 'hidden';
    experiencePage.style.visibility = 'visible';
    
    // if the button home or name is clicked
} else {
        home.style.textDecoration = 'underline';
        projects.style.textDecoration = 'none';
        experience.style.textDecoration = 'none';
        projectsPage.style.visibility = 'hidden';
        experiencePage.style.visibility = 'hidden';
        homePage.style.visibility = 'visible';
    }
};