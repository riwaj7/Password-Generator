

const UpperCase = ({upper, onDelete}) => {
    
    return (
        <div>
           <label htmlFor="uppercase">Include UpperCase Characters</label>
          <input checked={upper} onChange={(e) => onDelete(e.target.checked)}
          type='checkbox' id='uppercase' name='uppercase' />
        </div>
    )
}

export default UpperCase
