let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(){
  
}
	
function GiveRating(props) {
   return <h3>{stars[props.rating - 1]}</h3>;
}
























export default RateARecipe;





//conditional to render stars based on a number provided in App.js 


// Inside RateARecipe create a new function, that will also take props.

// Let’s name it GiveRating. This function will return the number of stars passed to RateARecipe.

// GiveRating will use the number passed to RateARecipe to index through the stars array. You will need to apply some math to make the array output match the number of stars rendered.

// Return the rating at least an <h3> level header.

// function GiveRating() {
//    return <h3>{stars[props.rating - 1]}</h3>;
// }
// GiveRating is nested inside RateARecipe and is returning the number of stars. Next, let’s add a conditional to make sure a user only provides a number between 1-5.

// Create a ternary that checks the value of props. If the number is between 1 and 5, then render GiveRating else render null.

// Test this in the App function by updating the value of rating.
