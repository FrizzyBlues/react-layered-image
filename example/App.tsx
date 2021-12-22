import React, { Component } from 'react'
import { LayeredImage } from '../lib';
import { background, body, nose, eyes, hair, cap, shirtColor, shirtDesign, mouth } from './layersDB';
import Generate from './Generate';
import Save from './Save';

// import Home from "./Home";

export default class App extends Component {
    generateRandomNum = (arr) => {
        return Math.floor(Math.random() * arr.length)
    }
    //state
    state = { layers: [
        // background[Math.floor(Math.random() * background.length)], 
        // body[Math.floor(Math.random() * body.length)], 
        // nose[Math.floor(Math.random() * nose.length)], 
        // eyes[Math.floor(Math.random() * eyes.length)], 
        // hair[Math.floor(Math.random() * hair.length)], 
        // cap[Math.floor(Math.random() * cap.length)], 
        // shirtColor[Math.floor(Math.random() * shirtColor.length)], 
        // shirtDesign[Math.floor(Math.random() * shirtDesign.length)], 
        // mouth[Math.floor(Math.random() * mouth.length)],
        background[this.generateRandomNum(background)], 
        body[this.generateRandomNum(body)], 
        nose[this.generateRandomNum(nose)], 
        eyes[this.generateRandomNum(eyes)], 
        hair[this.generateRandomNum(hair)], 
        cap[this.generateRandomNum(cap)], 
        shirtColor[this.generateRandomNum(shirtColor)], 
        shirtDesign[this.generateRandomNum(shirtDesign)], 
        mouth[this.generateRandomNum(mouth)],
    ]}

    style: React.CSSProperties = {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e1e8ed" 
    }

    //generate diffrent quote function
    generateRandomArt = () => {
        //get random numbers
        let newArt = [
            background[this.generateRandomNum(background)], 
            body[this.generateRandomNum(body)], 
            nose[this.generateRandomNum(nose)], 
            eyes[this.generateRandomNum(eyes)], 
            hair[this.generateRandomNum(hair)], 
            cap[this.generateRandomNum(cap)], 
            shirtColor[this.generateRandomNum(shirtColor)], 
            shirtDesign[this.generateRandomNum(shirtDesign)], 
            mouth[this.generateRandomNum(mouth)],
        ]

        //update state
        this.setState({layers: newArt})

        this.shuffleQuotes(background)
        this.shuffleQuotes(body)
        this.shuffleQuotes(nose)
        this.shuffleQuotes(eyes)
        this.shuffleQuotes(hair)
        this.shuffleQuotes(cap)
        this.shuffleQuotes(shirtColor)
        this.shuffleQuotes(shirtDesign)
        this.shuffleQuotes(mouth)
    }

    //shuufle quotes function
    shuffleQuotes = (arr) => {
        return arr.sort(function () { return 0.5 - Math.random() });
    }

    

    render() {
        return (
            <div>
                <div>
                    <Generate
                        generateRandomArt={this.generateRandomArt}
                    />
                </div>
                <div>
                    <LayeredImage 
                        aspectRatio={1600/1600}
                        layers={this.state.layers} 
                        style={{ width: 256 }} 
                    />
                </div>
                <div>
                    <Save
                        art={this.state}
                    />
                </div>
            </div>
            
        );
    }
};

