// Get references to navigation links and content sections
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const servicesLink = document.getElementById('services-link');
const contactLink = document.getElementById('contact-link');

const homeContent = document.getElementById('home-content');
const aboutContent = document.getElementById('about-content');
const servicesContent = document.getElementById('services-content');
const contactContent = document.getElementById('contact-content');

// Function to show home content and hide others
function showHome() {
homeContent.style.display = 'block';
aboutContent.style.display = 'none';
servicesContent.style.display = 'none';
contactContent.style.display = 'none';
}

// Function to show about content and hide others
function showAbout() {
homeContent.style.display = 'none';
aboutContent.style.display = 'block';
servicesContent.style.display = 'none';
contactContent.style.display = 'none';
}

// Function to show services content and hide others
function showServices() {
homeContent.style.display = 'none';
aboutContent.style.display = 'none';
servicesContent.style.display = 'block';
contactContent.style.display = 'none';
}

// Function to show contact content and hide others
function showContact() {
homeContent.style.display = 'none';
aboutContent.style.display = 'none';
servicesContent.style.display = 'none';
contactContent.style.display = 'block';
}

// Event listeners to handle click events on navigation links
homeLink.addEventListener('click', function(event) {
event.preventDefault();
showHome();
});

aboutLink.addEventListener('click', function(event) {
event.preventDefault();
showAbout();
});

servicesLink.addEventListener('click', function(event) {
event.preventDefault();
showServices();
});

contactLink.addEventListener('click', function(event) {
event.preventDefault();
showContact();
});

// Show home content by default
showHome();