
document.addEventListener("DOMContentLoaded", function () {
    const submitMessageInput = document.getElementById("submit-message");
    const submitButton = document.getElementById("submit-button");
    const responseMessage = document.getElementById("response-message");

    submitButton.addEventListener("click", function () {
        const message = submitMessageInput.value.trim();

        if (message.length > 0 && message.length <= 200) {
            responseMessage.textContent = "Alex Recieved Your Message";
            responseMessage.style.color = "#fff"; 
            submitMessageInput.value = ""; 
        } else {
            responseMessage.textContent = "Oops. Looks like you dont have 1-200 characters!";
            responseMessage.style.color = "#FF0000"; 
        }
    });
});

// curren date and time
document.addEventListener("DOMContentLoaded", function () {
    const currentTimeElement = document.getElementById("current-time");

    function updateClock() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const formattedTime = now.toLocaleString('en-US', options);
        currentTimeElement.textContent = formattedTime;
    }

    // Second by second update
    setInterval(updateClock, 1000);

    // Initial call to set the clock immediately
    updateClock();
});

// User check box
document.addEventListener("DOMContentLoaded", function () {
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const submitButton = document.getElementById('submit-rating');

    submitButton.addEventListener('click', function () {
       
        ratingInputs.forEach(input => {
            input.checked = false;
        });
    });
});


