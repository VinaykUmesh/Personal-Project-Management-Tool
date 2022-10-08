import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
import { AddProject } from "./components/AddProject";
import Projects from "./components/Projects";
import Project from "./components/Project";
import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <Header />
        <div className="mx-3" style={{ margin: "70px" }}>
          <Routes>
            <Route index path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/projects" element={<Projects />}>
              <Route path=":projectId" element={<Project />} />
            </Route>
            <Route path="/addProject" element={<AddProject />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
