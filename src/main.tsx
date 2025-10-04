import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

var css = "text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; font-size: 40px;"
console.log("%cHello there!", css);
console.log("%cPlease do close this page if you don't know what you're doing.\n", 'color: green; font-size: larger');
