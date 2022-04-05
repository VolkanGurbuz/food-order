import classes from './Input.module.css'

const Input = (props) => {
    //three dots in input ensures that all the key value pairs in this input object which we recieve on props
    //input are added as props to input
    //for example {type: 'text'}
    // then this code here would make sure type equals  is being added
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input id={props.input.id} {...props.input}/>
    </div>

};

export default Input;
