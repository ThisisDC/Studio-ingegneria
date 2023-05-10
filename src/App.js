import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage/>
        }
      ]
    }
  ]);
  return <RouterProvider router={router}/>
}

export default App;
