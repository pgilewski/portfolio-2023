import React, { useState, useContext } from 'react';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as LastFm } from '../assets/icons/lastfm.svg';
import NotyfContext from '../context/NotyfContext';
// TODO: Hover on send button
// Props interfaces
const Contact = () => {
  const initialMessageInput = {
    name: '',
    email: '',
    message: '',
  };

  const notyf = useContext(NotyfContext);

  const inputValidation = (message: any) => {
    if (message.name === '' || null) {
      notyf.error('Please, enter how you want to be called.');
      return false;
    } else if (message.email === '' || null) {
      notyf.error('Please, enter your email adress.');
      return false;
    } else if (message.message === '' || null) {
      notyf.error('Message cannot be empty.');
      return false;
    } else if (
      message.email !== '' &&
      message.message !== '' &&
      message.name !== ''
    ) {
      return true;
    }
  };
  const addMessageToDb = async (message: any) => {
    if (inputValidation(message)) {
      try {
        // const response = await API.graphql(
        //   graphqlOperation(createMessage, { input: message })
        // );
        // console.log(response);
        // if (response) {
        //   notyf.success('Thanks for your message!');
        //   setMessage(initialMessageInput);
        // } else {
        //   notyf.error("Sorry, something isn't working. We are working on it.");
        // }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState(initialMessageInput);

  const handleChange = (e: any) => {
    setMessage(() => ({
      ...message,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    // setLoading(true)

    addMessageToDb(message);
  };

  return (
    <div>
      <div className="flex bg-white/10 shadow-lg rounded-xl flex-row text-center shadow-strong m-auto justify-evenly items-center center md:max-w-screen-md w-full bg-navyDark mt-6 font-mono text-md pt-6">
        <a href="https://www.linkedin.com/in/przemyslaw-gilewski/">
          <LinkedIn className="w-16 h-16 ml-4" />
        </a>
        <a href="https://github.com/pgilewski">
          <Github className="w-16 h-16" />
        </a>
        <a href="https://www.facebook.com/przemekgilewski.1808">
          <Facebook className="w-16 h-16" />
        </a>
        <a href="https://www.last.fm/user/pgilewski">
          <LastFm className="w-16 h-16" />
        </a>
      </div>
      <div className="bg-white/10 shadow-lg rounded-xl text-center shadow-strong m-auto justify-center items-center center md:max-w-screen-md w-full bg-navyDark mt-6 font-mono text-md p-8">
        <div className="text-xl mb-4 font-semibold">Write me a message</div>
        {!loading ? (
          <div>
            <div>
              <input
                onChange={handleChange}
                value={message.name}
                name="name"
                className="bg-navyLight py-2 px-2 border border-1 border-gray-800 rounded-sm my-2"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                value={message.email}
                name="email"
                className="bg-navyLight py-2 px-2 border border-1 border-gray-800 rounded-sm my-2"
                type="email"
                placeholder="Email adress"
              />
            </div>
            <div>
              <textarea
                onChange={handleChange}
                value={message.message}
                name="message"
                className="bg-navyLight py-2 px-2 border border-1 border-gray-800 text-black rounded-sm my-2 sm:w-96"
                placeholder="Your message..."
              />
            </div>
            <button
              onClick={handleClick}
              className="py-2 px-2  border-1 border-gray-800 rounded-md my-2 bg-white/30 focus:outline"
            >
              Click to send
            </button>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
};

export default Contact;
