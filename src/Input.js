const Input = ({input,  setInput}) => {

    return (

            <input 
                type="text"
                placeholder="Enter..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
  
    )
}

export default Input;