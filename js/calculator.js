$(document).ready(() => {
  const username = localStorage.getItem('username');
  $('#loggedInUser').text(username);

  const showError = (selector, message) => {
    $(selector).text(message);
    $(selector).prev('input').addClass('invalid');
  };

  const clearError = (selector) => {
    $(selector).text('');
    $(selector).prev('input').removeClass('invalid');
  };

  const validateNumber = (inputId, errorId) => {
    const value = $(inputId).val();

    if (!value) {
      showError(errorId, 'This field cannot be empty.');
      return false;
    }
    if (/\s/.test(value)) {
      showError(errorId, 'No spaces allowed in the input.');
      return false;
    }
    if (!/^-?\d+(\.\d+)?$/.test(value)) {
      showError(errorId, 'Only valid numbers are allowed.');
      return false;
    }
    if (!isFinite(value)) {
      showError(errorId, 'The number is too large or not finite.');
      return false;
    }
    clearError(errorId);
    return true;
  };

  // Single arrow function to handle all operations
  const calculate = (num1, num2, operation) => {
    switch (operation) {
      case 'add': 
        return num1 + num2;
      case 'subtract': 
        return num1 - num2;
      case 'multiply': 
        return num1 * num2;
      case 'divide': 
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      default: 
        return 'Invalid operation';
    }
  };

  // Real-time validation for input fields
  $('#num1').on('input', () => validateNumber('#num1', '#num1Error'));
  $('#num2').on('input', () => validateNumber('#num2', '#num2Error'));

  // Event handler for operation buttons
  $('button').on('click', (e) => {
    // Trigger validation before calculating
    const isNum1Valid = validateNumber('#num1', '#num1Error');
    const isNum2Valid = validateNumber('#num2', '#num2Error');
    if (!isNum1Valid || !isNum2Valid) return; // Stop if any input is invalid

    const num1 = parseFloat($('#num1').val());
    const num2 = parseFloat($('#num2').val());
    const operation = e.target.id.replace('Button', '').toLowerCase(); // Get operation type
    const result = calculate(num1, num2, operation);

    if (result === 'Cannot divide by zero') {
      $('#resultError').text(result);
      $('#result').text('');
    } else {
      $('#resultError').text('');
      $('#result').text(result);
    }
  });
});
