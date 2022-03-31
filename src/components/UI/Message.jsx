import './Message.css'

function Message ({type, msg}) {

    return (
        <p className="msg">{msg}</p>
    )
}

export default Message;