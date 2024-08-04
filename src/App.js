import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
    {
      path: "demo",
      element: <Demo />,
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />

            {/* 
              Header
              Body 
                - Sidebar
                  - MenuItem
                - Main Container
                  - ButtonList
                  - VideoContainer
                    - VideoCard
            */}
        </div>
    </Provider>
    
  );
}

export default App;
