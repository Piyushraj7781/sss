document.getElementById("submit-button").addEventListener("click", function(event) {
    // Prevent the default button click behavior
    event.preventDefault();

    // Perform form validation here
    const isValid = validateForm();
    if (!isValid) return;

    // You can simulate a successful payment here (e.g., check payment details).
    const isPaymentSuccessful = true; // Change this based on your logic

    if (isPaymentSuccessful) {
        // Show the payment success modal
        const modal = document.getElementById("paymentSuccessModal");
        modal.style.display = "block";

        // Close the modal when the "Close" button is clicked
        modal.querySelector(".close").addEventListener("click", function() {
            modal.style.display = "none";
        });
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});

function validateForm() {
    const cardholdername = document.getElementById("cardholdername").value;
    const cardnumber = document.getElementById("cardnumber").value;
    const expirydate = document.getElementById("expirydate").value;
    const cvv = document.getElementById("cvv").value;
    const amount = document.getElementById("amount").value;

    // Simple validation example
    if (!cardholdername || !cardnumber || !expirydate || !cvv || !amount) {
        alert("Please fill in all fields.");
        return false;
    }

    // Add more validation logic as needed
    return true;
}
