import './Icon.css'

function Icon(props) {
    const classes = 'icon ' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Icon;