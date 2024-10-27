$(document).ready(() => {
    // Enable or disable login button based on validation checks
    const enableLoginButton = () => {
      const noErrors = $('#loginForm .error:empty').length === 4; // Check if all errors are empty
      const allFilled = $('#email').val() && $('#username').val() && $('#password').val() && $('#confirmPassword').val();
      $('#loginButton').prop('disabled', !(noErrors && allFilled));
    };
  
    // Validation function to check individual field validity
    const validateField = (selector, regex, message) => {
      const value = $(selector).val();
      const errorElement = $(selector + 'Error');
      if (!value) {
        errorElement.text('This field cannot be empty').addClass('error');
        $(selector).addClass('invalid');
      } else if (!regex.test(value)) {
        errorElement.text(message).addClass('error');
        $(selector).addClass('invalid');
      } else {
        errorElement.text('');
        $(selector).removeClass('invalid');
      }
      enableLoginButton();
    };
  
    // Specific validations for each input field
    $('#email').on('input', () => validateField(
      '#email',
      /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/,
      'Enter a valid Northeastern email.'
    ));
  
    $('#username').on('input', () => validateField(
      '#username',
      /^[a-zA-Z0-9]{5,15}$/,
      'Username should be 5-15 alphanumeric characters.'
    ));
  
    $('#password').on('input', () => validateField(
      '#password',
      /^[a-zA-Z0-9!@#$%^&*]{6,20}$/,
      'Password should be 6-20 characters with no special characters.'
    ));
  
    $('#confirmPassword').on('input', () => {
      if ($('#confirmPassword').val() !== $('#password').val()) {
        $('#confirmPasswordError').text("Passwords don't match").addClass('error');
        $('#confirmPassword').addClass('invalid');
      } else {
        $('#confirmPasswordError').text('');
        $('#confirmPassword').removeClass('invalid');
      }
      enableLoginButton();
    });
  
    // Form submission logic
    $('#loginForm').on('submit', (e) => {
      e.preventDefault();
      if ($('#loginButton').is(':disabled')) return;
      const username = $('#username').val();
      localStorage.setItem('username', username);
      window.location.href = 'calculator.html';
    });
  });
  