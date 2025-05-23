import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./scss.module.scss";
import css from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles["test-child-suffix"]}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles["nested-child"]}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className={css.nestedLogo2}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
