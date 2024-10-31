# Info-6150-assignment-7

A web application that includes a two-page user interface with a Login and Calculator. This application uses **jQuery** for validations and **arrow functions** for calculations. It provides real-time feedback on validation errors and performs basic arithmetic operations in a user-friendly format.

## Features

- **Login Page** with form validation:
  - Fields: Email, Username, Password, Confirm Password.
  - Validates inputs for null values, special characters, length limits, and email format.
  - Error messages are displayed inline (no pop-ups).
  - Login button is disabled until all fields are valid.
- **Calculator Page**:
  - Displays the logged-in Username.
  - Allows basic arithmetic operations (Add, Subtract, Multiply, Divide) between two input numbers.
  - Results display in a non-editable field.
  - Input fields are validated for null values, numbers-only, and division by zero.
  **Stopwatch**
- Time Display: Shows time in "HH:MM:SS" format, initially set to `00:00:00`.
- Buttons:
  - Start: Begins the timer.
  - Stop: Pauses the timer.
  - Reset: Resets the time to `00:00:00`.
    - Date Picker: Displays the current date and allows selection of past and future dates without manual editing.
    - Responsive Design: Basic CSS for a clean layout.

## Requirements

- **jQuery**: All validations and interactions are done using jQuery.
- **Arrow Functions**: A single arrow function is used for all arithmetic operations.
- **CSS**: Basic styling for an intuitive user interface.

## Validation Rules

### Login Page

- **Email**: Only Northeastern email addresses (`@northeastern.edu`) are accepted.
- **Username**: Only valid characters allowed, no special characters.
- **Password**: Minimum and maximum length requirements.
- **Confirm Password**: Must match the Password field.
- **Error Messages**: Specific to each validation, displayed below each field in red.

### Calculator Page

- **Number 1 & Number 2**: Only numbers are allowed.
- **Error Handling**: Handles null values, special characters, and division by zero.
- **Error Messages**: Displayed inline below each field in red.

## Project Structure

```plaintext
├── index.html         
├── calculator.html    
├── stopwatch.html
├── css/
│   └── login.css 
│   └── calculator.css 
│   └── stopwatch.css      
└── js/
    └── login.js
    └── calculator.js
    └── stopwatch.js      