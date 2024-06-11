# EZ Works Contact Form
This project implements a contact form for EZ Works, designed to collect user email addresses. It was developed as part of a selection process and features validation for email addresses and submission to a backend service.

## Features
- Collects user email addresses via a form.
- Validates email format and prevents submission if the format is incorrect or if the email ends with "@ez.works".
- Displays error and success messages based on form submission status.
- Utilizes a simple card component to display information about EZ Works services.

## Technologies Used
- React: Used for building the user interface.
- TailwindCSS: Employed for styling the application.
- Fetch API: Utilized for submitting form data to a backend service.

## Setup Instructions

1. Clone the Repository:

    ```
    git clone https://github.com/your-username/ez-works-contact-form
    cd ez-works-contact-form
    ```
2. Install Dependencies:
    ```
    npm install 
    ```
3. Run the Application:
    ```
    npm start
    ```

### This will start the development server, and you can view the application at http://localhost:{PORT}.

## Project Structure
    ```
    src/: Contains all the source code for the application.
    components/: Contains the React components.
    Form.jsx: Component for the contact form.
    Card.jsx: Simple card component to display information.
    utils/: Contains utility functions and constants.
    constants.js: Contains validation functions and API endpoints.
    assets/: Contains any necessary image or asset files.
    ```

## Repository link: [ez-works-contact-form]()

