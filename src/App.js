import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },

        {
          path: '/topics',
          element: <Topics></Topics>
        },

        {
          path: '/quizdetails/:abc',

          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.abc}`)
          },
          element: <QuizDetails></QuizDetails>
        },

      ]

    },
    {
      path: '*',
      element: <div><h3>404 Found</h3></div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
