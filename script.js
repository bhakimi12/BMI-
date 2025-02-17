// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    // Input validation
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.className = 'alert alert-danger';
        result.textContent = 'Please enter valid numbers for weight and height.';
        return;
    }

    // BMI Calculation
    const bmi = (weight / (height * height)).toFixed(2);
    result.className = 'alert alert-success';
    result.textContent = `Your BMI is ${bmi}`;
}

// Function to reset all fields
function resetFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    const result = document.getElementById('result');
    result.className = 'alert alert-info';
    result.textContent = 'Results will be displayed here.';
    showBMIImage(0); // Hide images
}

// Add event listeners to buttons
document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
document.getElementById('resetBtn').addEventListener('click', resetFields);
