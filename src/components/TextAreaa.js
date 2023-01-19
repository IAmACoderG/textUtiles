import React, { useState } from 'react'

export default function TextAreaa(props) {

    const plsClickedCap = () => {
        console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Given Data is Capatlized", "success");



    };
    const plsClickedLow = () => {
        console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Given Data is changed in lower case", "success");


    };

    const clickOnChange = (event) => {
        console.log("typing");
        setText(event.target.value)
    };

    const [text, setText] = useState("")
    return (
        <>
            <div style={{ color: props.Mode === "light" ? 'black' : 'white' }}>

                <div>
                    <h2>{props.heading}</h2>

                    <div className="mb-2">
                        <textarea className="form-control" value={text} onChange={clickOnChange} style={{ backgroundColor: props.Mode === 'light' ? 'white' : 'grey', color: props.Mode === 'light' ? 'black' : 'white' }} id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={plsClickedCap}>Upper</button>
                    <button className="btn btn-danger mx-1" onClick={plsClickedLow}>Lower</button>
                </div>

                <div className="container mb-1" style={{ color: props.Mode === "light" ? 'black' : 'white' }}>
                    <h3>Text Summary</h3>
                    <p>Words {text.split(' ').length} Characters {text.length} </p>
                    <h4>Reading Time Estimated Here...</h4>
                    <p>{text.split(' ').length * 0.008} minutes</p>
                    <h5>Preview</h5>
                    <p>{text.length > 0 ? text : 'please enter some text for review'}</p>
                </div>

            </div>
        </>
    )
}
