import RenderingEngine from "../src/RenderingEngine";
import { FILE_DUMP } from "./constants";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <RenderingEngine dataDump={FILE_DUMP} />
    </div>
  );
}
