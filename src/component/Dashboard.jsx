import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react"

import Otp from "./Otp"

const Dashboard = () => {
    const [visible, setVisible] = useState(false)

    // toggle for popup
    const togglePopup = () => {
        setVisible(!visible)
    }

        const [phoneNumber, setPhoneNumber] = useState("");
      
        // verifying 10 digit phone number
        const handlePhoneNumberChange = (event) => {
            const inputPhoneNumber = event.target.value;
            // Regular expression to validate Indian phone numbers
            const phoneRegex = /^[1-9]\d{0,9}$/;
            if (!inputPhoneNumber || phoneRegex.test(inputPhoneNumber)) {
              setPhoneNumber(inputPhoneNumber);
            //   console.log(!inputPhoneNumber)
            //   console.log(phoneRegex.test(inputPhoneNumber))
            }
          };

          // toast notification for incorrect phone number
          const notifyMobile = () => toast.error(`please enter a valid Mobile number`)

    return (
        <>
            <div className="dashboard">
                <div className="login-div">
                    <h1>Login</h1>
                    <p>Get access to your account</p>
                </div>
                <div className="dashboard-input-div">
                    <div>Enter Mobile number</div>
                    <input
                        id="phoneNumberInput"
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <button className="otp-btn" onClick={() =>phoneNumber.length === 10 ? togglePopup() : notifyMobile()}>Request OTP</button>
                {visible && (
                    <Otp togglePopup={togglePopup} phoneNumber={phoneNumber} />
                )}
                <Toaster />
            </div>
        
        </>
    )
}

export default Dashboard