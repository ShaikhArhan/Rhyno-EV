import React, { useEffect, useRef, useState } from 'react';
import '../Contact.css';
import '../Background.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const textareaRef = useRef(null);
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const textarea = textareaRef.current;

    const handleInput = () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    };

    textarea.addEventListener('input', handleInput);

    // Clean up the event listener on component unmount
    return () => {
      textarea.removeEventListener('input', handleInput);
    };
  }, []);

  const sendEmail = () => {
    const templateParams = {
      from_email: fromEmail,
      to_email: 'info@rhyno.in',
      message,
    };
    if (templateParams.from_email && templateParams.from_email != "info@rhyno.in" && templateParams.message) {
      emailjs.send('service_xl36qis', 'template_nmfwhrg', templateParams, 'iA8j0CmbPzvNvGxek')
        .then((response) => {
          // console.log('SUCCESS!', response.status, response.text);
          toast('✉️ Email sent successfully .', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });

          setFromEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('FAILED...', error);
          toast.error('Failed to send email !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        });
    }
    else if (!templateParams.from_email || templateParams.from_email == "info@rhyno.in") {
      toast('❌ Enter your email or correct email !', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      
      setFromEmail('');
    }
    else if(!templateParams.message){
      toast('💬 Write a message .', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div id="bodyContainer">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div id="contactContainer">
        <h2>Contact Us</h2>
        <div id="contantItem">
          <div id="contentMail">
            <h3>Mail</h3>
            <div id="from">
              <span>From :</span>
              <input
                type="email"
                placeholder="Email..."
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
              />
            </div>
            <div id="to">
              <span>TO :</span>
              <input type="email" value="info@rhyno.in" readOnly />
            </div>
            <div id="message">
              <span>Message :</span>
              <textarea
                id="expandingTextarea"
                rows="1"
                placeholder="Message..."
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div id="send">
              <button type='button' id="sendBtn" onClick={sendEmail}>
                <span>Send Mail</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
          <div id="phoneNo">
            <span>Mobile no. :</span>
            <span>+91-9023987528</span>
          </div>
          <div id="location">
            <span>Location :</span>
            <span>Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
