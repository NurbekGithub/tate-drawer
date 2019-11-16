import React, { useState } from "react";
import { saveFile } from "../utils/fileUtils";
import FooterDrawer from "./FooterDrawer";
import Reference from "./Reference";

function FileNameInput() {
  const [filename, setFilename] = useState("");
  return (
    <form
      className="filename-input"
      onSubmit={() => saveFile(JSON.parse(window.localStorage.code), filename)}
    >
      <label>
        Атын қойыңыз
        <input
          autoFocus
          value={filename}
          onChange={({ target: { value } }) => {
            setFilename(value);
          }}
        />
      </label>
      <button type="submit">OK!</button>
    </form>
  );
}

function Footer({ setCode }) {
  const [drawer, setDrawer] = useState({
    height: 0,
    content: null
  });

  function closeDrawer() {
    setDrawer({
      height: 0,
      content: null
    });
  }

  function openSaveFile() {
    setDrawer({
      height: 30,
      content: <FileNameInput />
    });
  }

  function openReference() {
    setDrawer({
      height: 300,
      content: <Reference setCode={setCode} />
    });
  }

  function handleFileUpdload(e) {
    if (!e.target.files[0]) return;
    var reader = new FileReader();
    reader.onload = function() {
      setCode(reader.result);
    };
    reader.readAsText(e.target.files[0]);
  }

  return (
    <>
      {drawer.content && (
        <FooterDrawer
          height={drawer.height}
          content={drawer.content}
          closeDrawer={closeDrawer}
        />
      )}
      <footer>
        <button className="btn" onClick={openSaveFile}>
          Сақтау
        </button>
        <input id="file" type="file" hidden onChange={handleFileUpdload} />
        <label htmlFor="file" className="btn">
          Жүктеу
        </label>
        <button className="btn" onClick={openReference}>
          Анықтама
        </button>
      </footer>
    </>
  );
}

export default React.memo(Footer, () => true);
