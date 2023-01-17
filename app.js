const heading1 = React.createElement("h1", {}, "Hello World from React!!");
const heading2 = React.createElement(
  "h2",
  null,
  "This is my first React Project."
);
console.log(heading2);
const container = React.createElement("div", {id: 'main-container'}, [heading1, heading2]);
const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

rootElement.render(container);
