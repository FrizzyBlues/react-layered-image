import React from 'react'

export default function Generate(props) {

    const { generateRandomArt } = props;
    return (
        <div className="card" >

            <div className="card-body">
                <button
                    onClick={() => { generateRandomArt()}}
                    type="submit">
                    Generate Art
                </button>
            </div>
        </div>
    )
}


