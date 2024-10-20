// Variable to store the original parent and reference of Introduction
let originalParent = null;
let originalPosition = null;

function rearrangeElements() {
    const introduction = document.querySelector('.Introduction');
    const typewriter = document.querySelector('.typewriter');

    // Store original position and parent
    if (!originalParent && !originalPosition) {
        originalParent = introduction.parentNode;
        originalPosition = introduction; // Save reference to .Introduction
    }

    // Check if the window width is 966px or more
    if (window.innerWidth >= 966) {
        // Move .Introduction after .typewriter
        if (typewriter && introduction.parentNode !== typewriter.parentNode) {
            typewriter.parentNode.insertBefore(introduction, typewriter.nextSibling);
        }
    } else {
        // Move .Introduction back to its original position if needed
        if (introduction.parentNode !== originalParent) {
            originalParent.appendChild(introduction); // Append back to original parent
        }
    }
}

// Undo function to revert changes
function undoLastChange() {
    const introduction = document.querySelector('.Introduction');

    if (introduction && originalPosition) {
        // Move .Introduction back to its original position
        originalParent.appendChild(introduction);
    }
}

// Run on initial load and on resize
rearrangeElements();
window.addEventListener('resize', rearrangeElements);

// Call the undo function when needed, for example, using a button
document.getElementById('undoButton').addEventListener('click', undoLastChange);
