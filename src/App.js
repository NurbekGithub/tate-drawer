import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [code, setCode] = useLocalStorage("code", "");
  return (
    <>
      <Header />
      <Main code={code} setCode={setCode} />
      <Footer setCode={setCode} />
    </>
  );
}

export default App;
