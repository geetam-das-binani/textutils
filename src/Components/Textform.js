import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";



export default function Textform(props) {
  const [text, setText] = useState("");
  let handleUpClick=()=>{
          let newtext=text.toUpperCase()
          setText(newtext)
          props.alert('Converted to UpperCase!','success')
     }
         let handleLoClick=()=>{
            let newtext=text.toLowerCase()
            setText(newtext)
            props.alert('Converted to LowerCase!','success')
      }
       let removespaces=()=>{
             let split=text.split(/[\s]+/)
             let newtext=split.join(' ')
             setText(newtext)
             props.alert('Removed Spaces!','success')
     }
        let copytext=()=>{
          let texta=document.getElementById("mybox")
          texta.select()
       navigator.clipboard.writeText(texta.value)
       props.alert('Text Copied!','success')
        }
        let makeParagraph=()=>{
           let split=text.split(' ')
            let para=split.join('')
           setText(para)
           props.alert(' A Paragraph!','success')
           

           

        }
     let makeitalic=()=>{
        let texta=document.getElementById("mybox")
       texta.style.fontStyle='italic'
       props.alert(' Text in Italic!','success')
      
       
     }

    let clearext=()=>{
      setText('')
      props.alert(' Cleared All!','success')
      
    }
   
   return (
    <>
        <div className="container my-3">
        <h2 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h2>
        <div className="mb-3">
            <textarea style={{color:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='warning'?'black':'black',backgroundColor:props.mode==='light'?'white':props.mode==='dark'?'grey':props.mode==='danger'?'#dc3545':props.mode==='warning'?'rgb(189 152 40)':'black'}} className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}} id="mybox" rows="8"></textarea>
        </div>
        <button style={{backgroundColor:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'red':props.mode==='warning'?'rgb(209 165 35)':'black',color:props.mode==='light'?'white':props.mode==='dark'?'black':props.mode==='danger'?'white':'white'}}  type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>

        <button style={{backgroundColor:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'red':props.mode==='warning'?'rgb(209 165 35)':'black',color:props.mode==='light'?'white':props.mode==='dark'?'black':props.mode==='danger'?'white':'white'}}  type="button" className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
        <button style={{backgroundColor:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'red':props.mode==='warning'?'rgb(209 165 35)':'black',color:props.mode==='light'?'white':props.mode==='dark'?'black':props.mode==='danger'?'white':'white'}}  type="button" className="btn btn-primary mx-1 my-1" onClick={removespaces}>Remove Spaces</button>
        <button style={{backgroundColor:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'red':props.mode==='warning'?'rgb(209 165 35)':'black',color:props.mode==='light'?'white':props.mode==='dark'?'black':props.mode==='danger'?'white':'white'}}   type="button" className="btn btn-primary mx-1 my-1" onClick={copytext}>CopyText</button>
        <button style={{backgroundColor:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'red':props.mode==='warning'?'rgb(209 165 35)':'black',color:props.mode==='light'?'white':props.mode==='dark'?'black':props.mode==='danger'?'white':'white'}}  type="button" className="btn btn-primary mx-1 my-1" onClick={makeParagraph}>Make Paragraph</button>
        <button style={{backgroundColor:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'red':props.mode==='warning'?'rgb(209 165 35)':'black',color:props.mode==='light'?'white':props.mode==='dark'?'black':props.mode==='danger'?'white':'white'}}  type="button" className="btn btn-primary mx-1 my-1" onClick={makeitalic}>Make Italic</button>
        <button style={{backgroundColor:props.mode==='light'?'black':props.mode==='dark'?'white':props.mode==='danger'?'red':props.mode==='warning'?'rgb(209 165 35)':'black',color:props.mode==='light'?'white':props.mode==='dark'?'black':props.mode==='danger'?'white':'white'}}  type="button" className="btn btn-primary mx-1 my-1" onClick={clearext}>Clear Text</button>
      
       </div>
       <div  style={{color:props.mode==='light'?'black':'white'}}  className="container">
          <h3>Your Text Summary</h3>
          <span>{text===''?0:text.trim().split(' ').length} Words, </span>
          <span>{text===''?0:text.trim().split(/[\s+]/).join('').length}Characters</span>
          <p>{text===''?0.0008*0:text.trim().split(' ').length*0.008} Minutes Read</p>
          <p>Preview</p>
          <p>{text}</p>
        </div>
  
       </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
};
Textform.defaultProps = {
  heading: "Enter the text to analyze below",
};














 