import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialFormState = { username: '', password: '', email: '' };
const Signup = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();
  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username: formData.username,
        password: formData.password,
        attributes: {
          email: formData.email,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      localStorage.setItem('username', user.getUsername());
      navigate('/confirm', { replace: true });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  return (
    <div className="bg-white">
      <div className="grid max-w-screen-xl h-screen text-black m-auto place-content-center">
        <div className="w-[30rem] space-y-6">
          <div className="flex flex-col">
            <label> Username </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="username"
              value={formData.username}
              type="text"
              className="border border-sky-500 p-2 rounded w-full"
            />
          </div>

          <div className="flex flex-col">
            <label>Password </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="pasword"
              value={formData.password}
              type="password"
              className="border p-2 rounded border-sky-500"
            />
          </div>

          <div className="flex flex-col">
            <label>Email </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="email"
              value={formData.email}
              type="email"
              className="border p-2 rounded border-sky-500"
            />
          </div>

          <div>
            <button
              className="border-none bg-sky-700 text-white p-2 mt-4 rounded m-auto"
              onClick={signUp}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
