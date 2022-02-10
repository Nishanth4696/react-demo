import { useState } from 'react';

export function ColorBox() {
 const [color, setColor] = useState("")
  const styles = { backgroundColor: color };
  return (
    <div>
      <input 
          value={color} 
          style={styles} 
          onChange={(event) =>setColor(event.target.value)} 
          placeholder='Enter the Color'
       />
    </div>
  );
}
