import React from 'react'

export default function Save(props) {

    const { art } = props;
    return (
        <div className="card" >

            <div className="card-body">
                <button
                    onClick={() => { console.log(`art: ${JSON.stringify(art)}`)}}
                    type="submit">
                    Save Art
                </button>
            </div>
        </div>
    )
}


