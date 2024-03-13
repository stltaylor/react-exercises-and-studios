import './styles.css';
import Button from './Button';
import oceans from './oceans.json'

function Profile()
{
    const listItem = oceans.map(ocean =>
      <div key={ocean.id} className={`${ocean.fishCheck === 'true' ? 'isAFish' : 'profile'}`} >
         <h1 name='h1'>{ocean.name}</h1>
         <ol>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         </ol>
         <Button />
         <img src={ocean.image} alt={ocean.name} className="img"/>
      </div>
   );
   
   
   return(
      <>
         <ul>{listItem}</ul>
         
      </>  
   );
}

export default Profile;


// Each profile object will have an emoji to represent it.

// We will use map to help us iterate through the image values in the JSON file.
// Declare a variable called listItem and instantiate it equal to oceans.map().
// Set the callback parameter of listItem to ocean =>.
// The map function should return ocean which will include all elements required to create a profile object.
// Each profile will be contained in its own <div>. To keep each <div> unique, we will need to add a key which is set to the id property of each JSON object. We are working with JSON objects, so you will need curly braces.
// Using an image tag, set the src attribute equal to the image’s url. This is stored in the JSON file. The alt attribute should be set to the name property.
// The starter code contains some CSS styling for the image called img. Apply the styling to the image by using the className attribute.
// Make sure we have all the correct closing tags.
// The Profile function needs to return an list of listItems and the <Button />.