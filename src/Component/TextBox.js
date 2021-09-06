import React, { useState } from 'react'

export default function TextBox(props) {

    const handleUpClick = () => {
        console.log("The Buttton was clicked" + text)
        let newText = text.toUpperCase()
        settext(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick = () => {
        console.log("The Buttton was clicked" + text)
        let newText = text.toLowerCase()
        settext(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = () => {
        console.log("The Buttton was clicked" + text)
        let newText = " "
        settext(newText)
    }
    const handleOnChange = (event) => {
        console.log("on change")
        settext(event.target.value)
    }
    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))


    }
  
    const [text, settext] = useState('');

    return (
        <>

            <div className='container' style={{
                color: (() => {
                    switch (props.mode) {
                        case "#401b1b": return 'white';
                        case 'light': return '#070725';
                        case "dark": return "white";
                        default: return "#FFFFFF";
                    }
                })()
            }}>
                <h1>{props.heading}</h1>
                <div className="mb-3"   >


                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        color: (() => {
                            switch (props.mode) {
                                case "#401b1b": return 'white';
                                case 'light': return 'black';
                                case "dark": return "white";
                                default: return "#FFFFFF";
                            }
                        })(), background: (() => {
                            switch (props.mode) {
                                case "#401b1b": return '#6d380b';
                                case 'light': return 'white';
                                case "dark": return "grey";
                                default: return "#FFFFFF";
                            }
                        })()
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${(() => {
        switch (props.mode) {
          case "#401b1b":return 'secondary';
          case 'light': return 'primary';
          case "dark":  return "primary";
          default:      return "#FFFFFF";
        }
      })()} mx-2`} on onClick={handleUpClick}>Convert to uppercase</button>
                <button className={`btn btn-${(() => {
        switch (props.mode) {
          case "#401b1b":return 'secondary';
          case 'light': return 'primary';
          case "dark":  return "primary";
          default:      return "#FFFFFF";
        }
      })()} mx-2`} on onClick={handleLowClick}>Convert to Lowercase</button>
                <button className={`btn btn-${(() => {
        switch (props.mode) {
          case "#401b1b":return 'secondary';
          case 'light': return 'primary';
          case "dark":  return "primary";
          default:      return "#FFFFFF";
        }
      })()} mx-2`} on onClick={handleClearClick}>Clear Text</button>
                <button className={`btn btn-${(() => {
        switch (props.mode) {
          case "#401b1b":return 'secondary';
          case 'light': return 'primary';
          case "dark":  return "primary";
          default:      return "#FFFFFF";
        }
      })()} mx-2`}

                    on onClick={removeSpaces}>Remove spaces</button>
            </div>

            <div className="container   my-3" style={{ color: props.mode === 'light' ? '#070725' : 'white' }}>
                <h1>
                    Your text Summary
                </h1>
                <p>
                    This text has {text.length===0?"0":text.trim().split(" ").length} word and {text.length} Characterds
                </p>
                <p>
                    This is {.008 * text.length} Minutes read
                </p>
                <h2>
                    Preview
                </h2>
                <p>
                    {text.length === 0 ? "Enter something in textbox to preview here" : text}
                </p>





            </div>
        </>


    )
}
