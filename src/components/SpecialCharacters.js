
const SpecialCharacters = ({special, onDelete}) => {

    return (
        <div>
            <label htmlFor="specialcharacters">Include Special Characters</label>
            <input
            checked={special} onChange={(e) =>onDelete(e.target.checked)}
             type='checkbox' id='incspecialcharacters' name='incpecialcharacters' />
        </div>
    )
  }
export default SpecialCharacters
