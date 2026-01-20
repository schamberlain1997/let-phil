// Select all anchor tags inside the nav with the ID "main-nav"
const navLinks = document.querySelectorAll('#main-nav a');

// Log the entire collection of links to the console
console.log("Navigation Links (collection):", navLinks);

// Iterate through each link and log its href attribute
navLinks.forEach(link => {
    console.log("Link href:", link.href);
    console.log("Link Text:", link.textContent);
});