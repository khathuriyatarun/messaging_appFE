import { useState, useRef } from 'react';

function OtpInput({setStep}) {
  const [otp, setOtp] = useState(['', '', '', '']); // An array to store OTP values
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    // Check if the input is a digit and not empty
    if (/^\d+$/.test(value) && value !== '') {
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1); // Only keep the last digit
      setOtp(newOtp);

      // Focus on the next input field if available
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    // Handle backspace and delete events
    if (event.key === 'Backspace' || event.key === 'Delete') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      // Focus on the previous input field if available
      if (event.key === 'Backspace' && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }

      // Focus on the next input field if available
      if (event.key === 'Delete' && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (event) => {
    // Get the pasted text
    const pastedText = event.clipboardData.getData('text/plain');

    // Check if it's a valid OTP (6 digits)
    if (/^\d{6}$/.test(pastedText)) {
      const newOtp = pastedText.split('').map((digit) => parseInt(digit, 10));

      // Update the OTP array
      setOtp(newOtp);

      // Focus on the next input field if available
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }

    // Prevent the default paste behavior
    event.preventDefault();
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-full flex flex-col items-center">
                <span className='block w-[300px] text-gray-400 mb-2'>Otp sent on xyz@email.com</span>
                <div>
                    {otp.map((value, index) => (
                        <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleInputChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        ref={(input) => (inputRefs.current[index] = input)}
                        className='w-[60px] h-[60px] text-sm bg-[#f5f7fa] text-[#333333] text-center mx-2 outline-0'
                        />
                    ))}
                </div>
                <button onClick={() => setStep(2)} className="max-w-[300px] w-full bg-[#3ab4f2] text-[#fff] rounded-3xl py-2 px-4 my-4">Continue</button>
                <span className='text-gray-400 underline'>Resend OTP</span>
            </div>
    </div>
  );
}

export default OtpInput;
