// Get elements from index.html
const generateButton = document.getElementById('generateButton');
const lengthCheckbox = document.getElementById('generatePost');
const generatedPostTextarea = document.getElementById('generatedPost');
const mainContainer = document.getElementById('main-container');

// Add event listener to generate button
generateButton.addEventListener('click', generatePost);

// Function to generate post
function generatePost() {
    // Get post length from checkbox
    let maxPostLength = 0;

    switch (lengthCheckbox.checked) {
        case true:
            maxPostLength = 200;
            break;
        case false:
            maxPostLength = 10;
            break;
    }

    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .?!,:;-()'\"\n";
    const postLength = Math.floor(Math.random() * (maxPostLength - 10 + 1)) + 10;
    let post = "";

    for(i = 0; i < postLength; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        post += randomChar;
    }

    // Display post in textarea
    generatedPostTextarea.value = post;

    // Adjust textarea height to fit content without showing scrollbar
    generatedPostTextarea.style.height = 'auto';
    generatedPostTextarea.style.height = (generatedPostTextarea.scrollHeight + 2) + 'px';
    generatedPostTextarea.style.overflowY = 'hidden';
    
    // Create an anchor tag with an image inside
    const anchorTag = document.createElement('a');
    anchorTag.href = 'https://www.threads.net/intent/post?url=https%3A%2F%2Fmcquaidn.github.io%2FinfiniteMonkeys&text=' + post + " #infiniteMonkeys96"
    anchorTag.target = '_blank'; // Open in a new tab
    anchorTag.rel = 'noopener noreferrer'; // Security best practice for external links
    anchorTag.className = 'ms-2'; // Add margin-left for spacing

    const imageElement = document.createElement('img');
    imageElement.src = 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/threads-app-icon.png'; // Set the image source
    imageElement.alt = 'Threads Post Icon'; // Set alt text for accessibility
    imageElement.width = 40; // Set width as needed
    imageElement.height = 40; // Set height as needed

    anchorTag.appendChild(imageElement);

    mainContainer.appendChild(anchorTag);
}


