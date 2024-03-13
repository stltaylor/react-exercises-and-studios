import './styles.css';

function Button() {
   const handleClick = () => {
      alert('Drip Drip water pokemon');
   }
   return ( 
         <button onClick={handleClick}>
            Learn More
         </button>
   );
}

export default Button;