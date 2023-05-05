const Form = ({len, onDelete}) => {
    return (
        <div>
            <label htmlFor="password length">Password Length</label>
            <input defaultValue={len} onChange={(e) => onDelete(e.target.value)}
            type='number' id='password length' name='password length' max='15' min='10'/>
        </div>
    )
  }

export default Form
