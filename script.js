document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const input = document.querySelector('input[type="text"]');
    const submitBtn = document.querySelector('input[type="submit"]');
    const container = document.querySelector('.container');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const enteredName = input.value.trim();

        if (enteredName.toLowerCase() === "jan") {
            window.location.href = "askpage.html";
        }
        else {
        container.innerHTML = '<p2 style= "text-align: center;">Wrong person! Krai kub Nia &#x1f621;? Try again.</p2>';
        setTimeout(function() {
            window.location.reload(); // Reload the page after 3 seconds
        }, 3000);
        }

      input.value = ''; // Clear the input field
    });
});