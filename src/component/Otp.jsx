import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

const Otp = ({phoneNumber, togglePopup}) => {

    const [otp, setOtp] = useState(["", "", "", "", "", ""])

    const newOtp = [...otp];

    // handle changes while entering OTP
     const handleChange = (index, value) => {

        if (value.length > 1) {
          value = value.charAt(0);
        }

        if(isNaN(value)) return false;
    
        newOtp[index] = value;
        setOtp(newOtp);

        if (value.length === 1 && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) {
              nextInput.focus();
            }
          }
      };
    
      // handle changes while pressing backspace and arrow key
      const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
            newOtp[index] = "";
          const previousInput = document.getElementById(`otp-${index - 1}`)
          if (previousInput) {
            previousInput.focus();
          }
        } else if (event.key === 'ArrowLeft') {
          
            const currentInput = document.getElementById(`otp-${index}`)
            if(currentInput.selectionStart === 0) {
                const previousInput = document.getElementById(`otp-${index - 1}`);
                if (previousInput) {
                previousInput.focus();
            }
          }
        } else if (event.key === 'ArrowRight' && index < otp.length - 1) {
            
            const currentInput = document.getElementById(`otp-${index}`)
            if(currentInput.selectionStart === currentInput.value.length) {
                const nextInput = document.getElementById(`otp-${index + 1}`)
                if (nextInput) {
                nextInput.focus();
                }
            }
        
        }
      };

      // handle changes while pasting inside the otp input field
      const handlePaste = (event) => {
        event.preventDefault();
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData("text");
        if(/^\d+$/.test(pastedData)) {
            const digits = pastedData.split("").slice(0, otp.length);
    
        digits.forEach((digit, index) => {
          newOtp[index] = digit;
        });
        
        setOtp(newOtp);
        }
      };

      // toast notifications
      const notifyResend = () => toast.success(`OTP sent to ${phoneNumber}`);
      console.log(otp);

      const notifyFullOtp = () => toast.success(`OTP ${otp.join('')} verified`)
      const notifyOtp = () => toast.error(`Kindly write all 6 digits of OTP`)

 
    return (
        <>
            <div className="main-otp-div popup">
                <div>
                    <button className="close" onClick={togglePopup}>
                        &times;
                    </button>
                </div>
                <div>
                    <h1>Phone Verification</h1>
                </div>
                <div>
                    <p>Enter the OTP you recieved on {phoneNumber} </p>
                </div>
                <div className="otp-div">
                    {
                        otp.map((digit, index) => (
                            <div className="otp-child-div" key={index}>
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    id={`otp-${index}`}
                                    className="otp-input"
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="otp-links">
                    <div onClick={togglePopup} style={{cursor: "pointer", color: "#383CC1", fontWeight: "bold"}}>
                        Change Number
                    </div>
                    <div onClick={() => notifyResend()} style={{cursor: "pointer", color: "#383CC1", fontWeight: "bold"}}>
                        Re-send OTP
                    </div>
                </div>
                <div>
                    <button className="otp-btn" onClick={() => {
                        if(otp.join('').split('').length === otp.length) {
                            notifyFullOtp()
                        } else {
                            notifyOtp()
                        }
                    }}>Verify Phone Number</button>
                </div>
                <Toaster />
            </div>
        </>
    )
}

export default Otp;