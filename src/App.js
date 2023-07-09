import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import GlobalStyle from "./component/Global";
import ArticlePage from "./component/ArticlePage";
import Notfound from "./component/Notfound";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;