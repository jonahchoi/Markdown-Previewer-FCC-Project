class ConvertToHTML extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultText };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value });

  }

  render() {

    const markdown = marked.parse(this.state.input, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement("header", null, /*#__PURE__*/
      React.createElement("h1", null, "Markdown Previewer")), /*#__PURE__*/

      React.createElement("div", { className: "flex-container" }, /*#__PURE__*/
      React.createElement("div", { className: "editor-box" }, /*#__PURE__*/
      React.createElement("h2", { className: "box-header" }, "Editor"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.state.input, onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { id: "preview-box" }, /*#__PURE__*/
      React.createElement("h2", { className: "box-header" }, "Preview"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: markdown } })))));






  }}
;

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;



ReactDOM.render( /*#__PURE__*/React.createElement(ConvertToHTML, null), document.getElementById("app"));