import './Stack.css'

function Stack({stack}) {
    return (
        <div className='stack-badges'>
            <div className="stack-badge">
                {stack} 
            </div>
        </div>
    )
}

export default Stack;