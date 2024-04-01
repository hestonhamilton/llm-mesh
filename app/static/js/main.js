// Main JavaScript file for the application

document.addEventListener('DOMContentLoaded', function() {
    // More JavaScript code goes here.
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('submit-button').addEventListener('click', function() {
            var userQuery = document.getElementById('user-query').value;
            console.log(userQuery); // For now, we'll just log the input. Later, you can add the logic to send this to the LLM.
        });
    });    
});
