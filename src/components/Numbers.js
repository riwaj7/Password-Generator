const Numbers = ({num, onDelete}) => {
    return (
        <div>
            <label htmlFor="includenumbers">Include Numbers</label>
            <input
            checked={num} onChange={(e) =>onDelete(e.target.checked)}
             type='checkbox' id='includenumbers' name='includenumbers'/>
        </div>
    )
  }

export default Numbers
