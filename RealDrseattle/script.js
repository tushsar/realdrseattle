document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const firstName = document.querySelector("input[name='first-name']");
    const lastName = document.querySelector("input[name='last-name']");
    const email = document.querySelector("input[name='email']");
    const company = document.querySelector("input[name='company']");
    const country = document.querySelector("input[name='country']");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Clear previous error messages
        clearErrors();

        // Validate the form
        let isValid = true;

        if (firstName.value.trim() === "") {
            showError(firstName, "First name is required.");
            isValid = false;
        }

        if (lastName.value.trim() === "") {
            showError(lastName, "Last name is required.");
            isValid = false;
        }

        if (!validateEmail(email.value.trim())) {
            showError(email, "Valid email is required.");
            isValid = false;
        }

        if (company.value.trim() === "") {
            showError(company, "Company name is required.");
            isValid = false;
        }

        if (country.value.trim() === "") {
            showError(country, "Country is required.");
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            const formData = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                company: company.value,
                country: country.value
            };

            console.log("Form Submitted:", formData);

            // Optionally, you can send the data to a server using fetch()
            // fetch('your-server-endpoint', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => console.log('Success:', data))
            // .catch(error => console.error('Error:', error));

            // Reset the form after successful submission
            form.reset();
            alert("Form submitted successfully!");
        }
    });

    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.innerText = message;
        input.parentNode.appendChild(errorElement);
        input.classList.add("error");
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function(errorMessage) {
            errorMessage.remove();
        });

        const errorInputs = document.querySelectorAll(".error");
        errorInputs.forEach(function(input) {
            input.classList.remove("error");
        });
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
