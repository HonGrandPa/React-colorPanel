const ColorBox = ({ input }) => {
  return (
   
      <h1 className="panel" style={{backgroundColor: input }}>{input === "" ? "Empty" : input}</h1>
    
  );
};

export default ColorBox;
