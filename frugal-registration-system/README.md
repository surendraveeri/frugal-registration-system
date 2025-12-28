# Frugal Testing – Registration System Automation

## Project Overview
This project is developed as part of the Frugal Testing Software Engineer assignment.
It includes a registration form with client-side validations and Selenium automation.

## Tech Stack
- HTML, CSS, JavaScript
- Java
- Selenium WebDriver
- ChromeDriver

## Project Structure
- frontend/: UI files
- automation/: Selenium test script
- lib/: Selenium libraries
- screenshots/: Evidence screenshots

## Automation Scenarios Covered
1. Negative test – missing mandatory fields
2. Positive test – successful registration
3. Validation checks (password, terms, required fields)

## How to Run Automation
1. Navigate to automation folder
2. Compile:
   javac -cp ".;..\lib\*;..\lib\libs\*" RegistrationTest.java
3. Run:
   java -cp ".;..\lib\*;..\lib\libs\*" RegistrationTest

## Screenshots & Video
All screenshots are available in the screenshots folder.
Automation execution video is shared via Google Drive.
