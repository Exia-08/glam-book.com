document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Display confirmation message
    const confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `
      <p>Thank you, ${name}!</p>
      <p>Your ${service} appointment is booked for ${date} at ${time}.</p>
    `;
  
    // Clear the form
    document.getElementById('bookingForm').reset();
  });