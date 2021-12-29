import React from 'react'

function Index() {

    function Testing () {
        console.log('Hi')
    }

    return (
        <div>
            <button onClick={Testing}>testar</button>
        </div>
    )
}

export default Index
