"use client"
import React from 'react'
import { CopyBlock, dracula} from 'react-code-blocks'
const CodeBlock = () => {

  const test = `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Ky" />, 
  mountNode 
);`


  return (
    <section>
=      <CopyBlock
          language={"jsx"}
          text={test}
          showLineNumbers={true}
          theme={dracula}
          codeBlock
        />    
    </section>
  )
}

export default CodeBlock