
const LowerCase = ({lower, onDelete}) => {
    
    return (
        <div>
            <label htmlFor="lowercase">Include LowerCase Characters</label>
          <input
          checked={lower} onChange={(e) =>onDelete(e.target.checked)}
           type='checkbox' id='lowercase' name='lowercase' />
        </div>
    )
}

export default LowerCase
