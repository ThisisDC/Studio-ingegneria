import {
  RouterProvider,
  // createHashRouter, use it for github and add this for in package.json --> "homepage": "https://thisisdc.github.io/Studio-ingegneria",
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import {
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from "react";
// import InfoPage from "./pages/Info";
// import ProjectsPage from "./pages/Projects";

export const globalContext = createContext();

function App() {
  const [value, setValue] = useState({ ready: false });
  const setAppReady = useCallback(() => {
    setValue((oldState) => ({ ...oldState, ready: true }));
  }, []);

  //use createHashRouter for github!
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);

  const contextValue = useMemo(
    () => ({
      value,
      setAppReady,
    }),
    [value, setAppReady]
  );
  return (
    <globalContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </globalContext.Provider>
  );
}

export default App;
