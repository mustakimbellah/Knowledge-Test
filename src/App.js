import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },

        {
          path: '/topics',
          element: <Topics></Topics>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
