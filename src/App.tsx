import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from './routes';
import { RouteConfig as RouteType } from './components/types/basics';

const RouteConfig: React.FC = () => {
  return (
    <Routes>
      {routes.map((route: RouteType, index: number) => {
        const Component = route.component;
        const Layout = route.layout || React.Fragment;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Layout>
                  <Component />
                </Layout>
              </React.Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

function App() {
  return (
    <>
      <Router>
        <RouteConfig />
      </Router>
    </>
  );
}

export default App;
