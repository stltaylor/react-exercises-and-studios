import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         'label':'To Try',
         'value':'Love It'
      },
      {
         'label':'Love It',
         'value':''
      },
      {
         'label':'Cookies',
         'value':''
      }
   ];

   const handleChange = (event) => { 
      if (index < boards.value.length-1)
   {
      setIndex(index + 1);
   }
   else 
   {
      setIndex(0);
   }
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>

      <select <option>value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
