import React, { Component, useState } from 'react'
import { LayeredImage } from '../lib';
import { background, body, eyes, mouth, head, hands } from './layersDB';
import Generate from './Generate';
import Save from './Save';
import Categories from './Categories';


export default class App extends Component {
    generateRandomNum = (arr) => {
        return Math.floor(Math.random() * arr.length)
    }
    //state
    state = { 
        layers: { 
            background: background.common[this.generateRandomNum(background.common)], 
            body: body.common[this.generateRandomNum(body.common)], 
            eyes: eyes.common[this.generateRandomNum(eyes.common)], 
            mouth: mouth.common[this.generateRandomNum(mouth.common)],
            head: head.common[this.generateRandomNum(head.common)], 
            hands: hands.common[this.generateRandomNum(hands.common)],         
        }, 
        categories: {
            background: "common", 
            body: "common",
            eyes: "common",
            mouth: "common",
            head: "common",
            hands: "common",
        }
    }

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
        let newArt = {
            background: background.common[this.generateRandomNum(background.common)], 
            body: body.common[this.generateRandomNum(body.common)], 
            eyes: eyes.common[this.generateRandomNum(eyes.common)], 
            mouth: mouth.common[this.generateRandomNum(mouth.common)],
            head: head.common[this.generateRandomNum(head.common)], 
            hands: hands.common[this.generateRandomNum(hands.common)],  
        }

        let newCategories = {
            background: "common", 
            body: "common",
            eyes: "common",
            mouth: "common",
            head: "common",
            hands: "common",
        }

        //update state
        this.setState({
            layers: newArt, 
            categories: newCategories,
        })

        // this.shuffleQuotes(background)
        // this.shuffleQuotes(body)
        // this.shuffleQuotes(eyes)
        // this.shuffleQuotes(mouth)
        // this.shuffleQuotes(head)
        // this.shuffleQuotes(hands)
    }

    generateRandomArtFromSelections = () => {
        
        let newCustomArt = {
            background: background[this.state.categories.background][this.generateRandomNum(background[this.state.categories.background])], 
            body: body[this.state.categories.body][this.generateRandomNum(body[this.state.categories.body])], 
            eyes: eyes[this.state.categories.eyes][this.generateRandomNum(eyes[this.state.categories.eyes])], 
            mouth: mouth[this.state.categories.mouth][this.generateRandomNum(mouth[this.state.categories.mouth])],
            head: head[this.state.categories.head][this.generateRandomNum(head[this.state.categories.head])], 
            hands: hands[this.state.categories.hands][this.generateRandomNum(hands[this.state.categories.hands])],  
        }



        //update state
        this.setState({
            layers: newCustomArt, 
        })

        this.shuffleQuotes(background.common)
        this.shuffleQuotes(background.rare)
        this.shuffleQuotes(background.epic)
        this.shuffleQuotes(body.common)
        this.shuffleQuotes(body.rare)
        this.shuffleQuotes(body.epic)
        this.shuffleQuotes(eyes.common)
        this.shuffleQuotes(eyes.rare)
        this.shuffleQuotes(eyes.epic)
        this.shuffleQuotes(mouth.common)
        this.shuffleQuotes(mouth.rare)
        this.shuffleQuotes(mouth.epic)
        this.shuffleQuotes(head.common)
        this.shuffleQuotes(head.rare)
        this.shuffleQuotes(head.epic)
        this.shuffleQuotes(hands.common)
        this.shuffleQuotes(hands.rare)
        this.shuffleQuotes(hands.epic)
    }

    getUpdateLayers = () => {
        const layers = [
            this.state.layers.background, 
            this.state.layers.body, 
            this.state.layers.eyes, 
            this.state.layers.mouth, 
            this.state.layers.head, 
            this.state.layers.hands, 
        ]
        return layers;
    }

    handleBackGroundChange = (e) => {
        this.setState({categories: {
            background: e.target.value,
            body: this.state.categories.body,
            eyes: this.state.categories.eyes,
            mouth: this.state.categories.mouth,
            head: this.state.categories.head,
            hands: this.state.categories.hands,
        }})
    }

    handleBodyChange = (e) => {
        this.setState({categories: {
            background: this.state.categories.background,
            body: e.target.value,
            eyes: this.state.categories.eyes,
            mouth: this.state.categories.mouth,
            head: this.state.categories.head,
            hands: this.state.categories.hands,
        }})
    };
    handleEyesChange = (e) => {
        this.setState({categories: {
            background: this.state.categories.background,
            body: this.state.categories.body,
            eyes: e.target.value,
            mouth: this.state.categories.mouth,
            head: this.state.categories.head,
            hands: this.state.categories.hands,
        }})
    };
    handleMouthChange = (e) => {
        this.setState({categories: {
            background: this.state.categories.background,
            body: this.state.categories.body,
            eyes: this.state.categories.eyes,
            mouth: e.target.value,
            head: this.state.categories.head,
            hands: this.state.categories.hands,
        }})
    };
    handleHeadChange = (e) => {
        this.setState({categories: {
            background: this.state.categories.background,
            body: this.state.categories.body,
            eyes: this.state.categories.eyes,
            mouth: this.state.categories.mouth,
            head: e.target.value,
            hands: this.state.categories.hands,
        }})
    };
    handleHandsChange = (e) => {
        this.setState({categories: {
            background: this.state.categories.background,
            body: this.state.categories.body,
            eyes: this.state.categories.eyes,
            mouth: this.state.categories.mouth,
            head: this.state.categories.head,
            hands: e.target.value,
        }})
    };

    //shuufle quotes function
    shuffleQuotes = (arr) => {
        return arr.sort(function () { return 0.5 - Math.random() });
    }

    render() {
        return (
            <div>
                <div>
                    <Categories
                        background={this.state.categories.background}
                        body={this.state.categories.body} 
                        eyes={this.state.categories.eyes} 
                        mouth={this.state.categories.mouth} 
                        head={this.state.categories.head} 
                        hands={this.state.categories.hands} 
                        handleBackGroundChange={this.handleBackGroundChange}
                        handleBodyChange={this.handleBodyChange}
                        handleEyesChange={this.handleEyesChange}
                        handleMouthChange={this.handleMouthChange}
                        handleHeadChange={this.handleHeadChange}
                        handleHandsChange={this.handleHandsChange}
                        generateRandomArtFromSelections={this.generateRandomArtFromSelections}
                    />
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div>
                    <LayeredImage 
                        aspectRatio={1600/1600}
                        layers={this.getUpdateLayers()} 
                        style={{ width: 256 }} 
                    />
                </div>
                <div>
                    <br />
                    <br />
                    <br />
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

