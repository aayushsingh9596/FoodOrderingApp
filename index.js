import App from "./App";
const elem = React.createElement(
  "h1",
  { className: "heading" },
  "This is React Project"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
