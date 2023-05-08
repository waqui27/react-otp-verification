# **OTP Verification React App**
This is a simple React application that implements OTP (One-Time Password) verification functionality. Users can enter their mobile number, request an OTP, and verify it to complete the phone verification process.

## Features

- User can enter their mobile number for OTP verification.
- Mobile number validation is performed to ensure a 10-digit phone number is entered.
- User can request an OTP by clicking on the "Request OTP" button.
- A popup window is displayed to enter the OTP received on the provided mobile number.
- The OTP input field automatically focuses on the next digit upon entering a valid digit.
- Users can navigate between OTP input fields using arrow keys.
- Paste functionality is handled to allow pasting the OTP into the input fields.
- Toast notifications are displayed for various actions such as OTP resend, OTP verification success, and incomplete OTP entry.
- Responsive design for optimal viewing on different devices.

## Prerequisites
- Node.js (v12.0.0 or higher)
- npm package manager

## Installation

To run the backend, follow these steps:

1. Clone the repository or download the source code.
```
git clone https://github.com/waqui27/react-otp-verification.git
```
2. Navigate to the project directory.
```
cd react-otp-verification
```
3. Install the dependencies.
```
npm install
```
4. Start the development server.
```
npm run dev
```
5. Open your browser and visit http://localhost:5173/ to view the app.

## Usage
1. Enter your 10-digit mobile number in the provided input field.
2. Click on the "Request OTP" button to trigger the OTP verification process.
3. A popup window will appear with an OTP input field.
4. Enter the received OTP digit by digit into the input field.
    - The input field will automatically focus on the next digit upon entering a valid digit.
    - Arrow keys can be used to navigate between OTP input fields.
    - Pasting the OTP is also supported.
5. Click on the "Verify Phone Number" button to verify the entered OTP.
    - If all 6 digits of the OTP are entered, a success toast notification will be displayed.
    - If the OTP is incomplete, an error toast notification will be displayed.

6. If you want to change the mobile number, click on the "Change Number" link in the popup.
7. To resend the OTP, click on the "Re-send OTP" link in the popup.

## Contributing
Contributions to this project are welcome. Feel free to open issues and submit pull requests to suggest improvements or fix any bugs.