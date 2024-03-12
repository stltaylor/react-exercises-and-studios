import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = 'https://barefeetinthekitchen.com/scrambled-egg-and-sausage-stacked/';
    let authorPhoto = 'https://barefeetinthekitchen.com/wp-content/uploads/2020/09/Mary-Younkin.jpg';
    let authorName = 'Mary Younkin';

    return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "A face" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Barefeet in the Kitchen</a> 
      </div>
   </div>
);
}





class RecipeDescription extends React.Component {
    render() {

        return (
            <div> 
   <div>
      <h1>Breakfast Enchilada</h1>
      <p>Enchilada's but for breakfast</p>
   </div>
   <RecipeAuthor />
    </div>
        )

   }
}
export default RecipeDescription;

