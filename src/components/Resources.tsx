import '@aws-amplify/ui-react/styles.css';
import { Auth, API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { listResources } from '../graphql/queries';
import { createResources as createResourcesMutation } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';
const initialFormState = {
  title: '',
  link: '',
  author: '',
  description: '',
};

export interface GraphQLResult {
  data?: object;
  errors?: [object];
  extensions?: {
    [key: string]: any;
  };
}
const dummyData = [
  {
    id: 1,
    title:
      'Color tools - mixer, gradient generator, palette generator',
    link: 'https://colordesigner.io/tools',
    description:
      'Nice and simple tools to help with color picking and gradient generation',
    author: 'Przemek',
    createdAt: 'January 22, 2023 17:35:04',
  },
  {
    id: 2,
    title:
      'An open-source set with all the essential free icons for user interfaces',
    link: 'https://www.streamlinehq.com/icons/streamline-mini-line',
    description: 'Good free icons',
    author: 'Przemek',
    createdAt: 'January 22, 2023 17:37:32',
  },
  {
    id: 3,
    title: '5 Best Resources To Learn JavaScript As A Beginner',
    link: 'https://catalins.tech/best-resources-to-learn-javascript-as-a-beginner/#ckdrjdi7b00mnfzs1hjro1uj9',
    description: 'Best resources to start learning JS',
    author: 'Przemek',
    createdAt: 'January 22, 2023 17:39:17',
  },
  {
    id: 4,
    title: 'The Complete Guide to Lazy Loading Images',
    link: 'https://css-tricks.com/the-complete-guide-to-lazy-loading-images/',
    description: 'Very good tutorial to lazy loading in React',
    author: 'Przemek',
    createdAt: 'January 22, 2023 17:41:20',
  },
  {
    id: 5,
    title: 'All in One Bookmark Links for Designer',
    link: 'https://www.evernote.design/',
    description:
      'Useful resource with all kind of materials for designers',
    author: 'Przemek',
    createdAt: 'January 23, 2023 11:35:32',
  },
];
type TResource = {
  id: number;
  title: string;
  link: string;
  description: string;
  author: string;
  createdAt: string;
};
export const Resources: React.FC = () => {
  // const [user, setUser] = useState();
  const [resources, setResources] = useState<TResource[]>(dummyData);
  // const [formData, setFormData] = useState(initialFormState);
  // const navigate = useNavigate();

  // async function fetchUser() {
  //   Auth.currentAuthenticatedUser({
  //     bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  //   })
  //     .then((user) => {
  //       console.log(user);
  //       setUser(user);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // async function fetchResources() {
  //   const apiData: any = await API.graphql({ query: listResources });
  //   setResources(apiData.data.listResources.items);
  // }

  // async function createResource() {
  //   if (
  //     !formData.title ||
  //     !formData.description ||
  //     !formData.author
  //   ) {
  //     //
  //   } else {
  //     await API.graphql({
  //       query: createResourcesMutation,
  //       variables: { input: formData },
  //     });
  //     setResources([...resources, formData]);
  //     setFormData(initialFormState);
  //   }
  // }

  // async function signOut() {
  //   try {
  //     await Auth.signOut({ global: true });
  //     navigate('/signup', { replace: true });
  //   } catch (error) {
  //     console.log('error signing out: ', error);
  //   }
  // }
  // useEffect(() => {
  //   fetchUser();
  //   fetchResources();
  // }, []);
  return (
    <div className="h-screen text-center shadow-strong m-auto justify-center items-center center md:max-w-screen-lg xl:max-w-xxl w-full bg-navyDark mt-6 font-mono text-md p-8">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50/75 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nazwa / Link
              </th>
              <th scope="col" className="px-6 py-3">
                Opis
              </th>
              <th scope="col" className="px-6 py-3">
                Czas powstania
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Akcja</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => {
              const createdAt = new Date(resource.createdAt);
              return (
                <tr
                  key={resource.id}
                  className="bg-white/75 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50/75 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    <a href={resource.link} className="text-blue-500">
                      {resource.title}
                    </a>
                  </th>
                  <td className="px-6 py-4 text-black">
                    {resource.description}
                  </td>
                  <td className="px-6 py-4">
                    {createdAt.toLocaleDateString()}{' '}
                    {createdAt.toLocaleTimeString()}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edytuj
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
