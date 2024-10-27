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
  
    // Single arrow function to perform all operations based on the type
    const calculate = (num1, num2, operation) => {
      const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => b != 0 ? a / b : 'Cannot divide by zero'
      };
      return operations[operation](num1, num2);
    };
  
    // Event handler for operation buttons
    $('button').on('click', (e) => {
      if (!validateNumber('#num1', '#num1Error') || !validateNumber('#num2', '#num2Error')) return;
      const num1 = parseFloat($('#num1').val());
      const num2 = parseFloat($('#num2').val());
      const operation = e.target.id.replace('Button', '').toLowerCase(); // Get operation type
      $('#result').text(calculate(num1, num2, operation));
    });
  });
  