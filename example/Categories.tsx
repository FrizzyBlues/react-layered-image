import React from 'react'
import CSS from 'csstype';


export default function Categories(props) {

    const floatContainer: CSS.Properties = {

    };

    const floatChild: CSS.Properties = {
        display: 'flex',
        justifyContent: 'left', 
        alignItems: 'start',
    };

    let initialBackground = "common";
    let initialBody = "common";
    let initialEyes = "common";
    let initialMouth = "common";
    let initialHead = "common";
    let initialHands = "common";

    const { 
        background, body, eyes, mouth, head, hands, 
        handleBackGroundChange, handleBodyChange, handleEyesChange, handleMouthChange, handleHeadChange, handleHandsChange,
        generateRandomArtFromSelections } = props;

    const backGroundChange = (e) => {
        handleBackGroundChange(e);
    };
    const bodyChange = (e) => {
        handleBodyChange(e);
    };
    const eyesChange = (e) => {
        handleEyesChange(e);
    };
    const mouthChange = (e) => {
        handleMouthChange(e);
    };
    const headChange = (e) => {
        handleHeadChange(e);
    };
    const handsChange = (e) => {
        handleHandsChange(e);
    };

    return (

        <div style={floatContainer}>
            <div style={floatChild} >
                <div>
                    <button>BACKGROUND</button>
                </div>
                <div>
                    <select value={background} onChange={backGroundChange}>
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="epic">Epic</option>
                    </select>
                </div>
            </div>
            <div style={floatChild} >
                <div>
                    <button>BODY</button>
                </div>
                <div>
                    <select value={body} onChange={bodyChange}>
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="epic">Epic</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <div>
                    <button>EYES</button>
                </div>
                <div>
                    <select value={eyes} onChange={eyesChange}>
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="epic">Epic</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <div>
                    <button>MOUTH</button>
                </div>
                <div>
                    <select value={mouth} onChange={mouthChange}>
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="epic">Epic</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <div>
                    <button>HEAD</button>
                </div>
                <div>
                    <select value={head} onChange={headChange}>
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="epic">Epic</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <div>
                    <button>HANDS</button>
                </div>
                <div>
                    <select value={hands} onChange={handsChange}>
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="epic">Epic</option>
                    </select>
                </div>
            </div>
            <div style={floatChild}>
                <button
                    onClick={() => { generateRandomArtFromSelections()}}
                    type="submit">
                    Generate Custom Art
                </button>
            </div>
        </div>
        
    )
}


