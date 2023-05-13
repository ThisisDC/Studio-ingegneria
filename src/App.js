import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';
import InfoPage from './pages/Info';
import ProjectsPage from './pages/Projects';


function App() {
  //use createHashRouter for github!
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: 'chi-siamo',
          element: <InfoPage/>
        },
        {
          path: 'progetti',
          element: <ProjectsPage/>
        },
      ]
    }
  ]);
  return <RouterProvider router={router}/>
}

export default App;
