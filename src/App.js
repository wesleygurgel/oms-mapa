import "./App.css";
import { Tooltip } from 'react-tooltip'
import MapChart from "./components/MapChart";
import { useState } from "react";

function App() {
    const [content, setContent] = useState("");

    return (
        <div>
            <MapChart setTooltipContent={setContent} />
            <Tooltip
                id="map-tooltip"
                place="top"
                content={content}
                isOpen={content !== ""}
            />
        </div>
    );
}

export default App;
