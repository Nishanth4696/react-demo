import { useState } from 'react';

export function AddColor() {
 const [color, setColor] = useState("");
  const styles = { backgroundColor: color };
  // const colors=['teal', 'orange', 'lavender']

  const [colors, setColors] = useState(['teal', 'orange', 'lavender']);
  return (
    <div>
      <input 
          value={color} 
          style={styles} 
          onChange={(event) =>setColor(event.target.value)} 
          placeholder='Enter the Color'
       />
       <button onClick={() => setColors([...colors, color])}>AddColor</button>
       {colors.map((clr) =>( <ColorBox color={clr} /> ))}
      
    </div>
  );
}

function ColorBox({color}){
  const styles={backgroundColor:color , height:'25px', width:'200px',marginTop:'10px'}
  return(
    <div style={styles}></div>
  );
}
