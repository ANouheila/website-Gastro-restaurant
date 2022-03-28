import React ,{useState,useEffect} from 'react';
import Favori from '../components/Favori';
import Receipe from "../components/Receipe";
import { FaTrash} from 'react-icons/fa';

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
function Favorite() {
    const [recepies,setRecepies]=useState([]);
   let items=localStorage.getObj('favoirs');
   //afin de supprimer les doublons
   items=Array.from(new Set(items));
   const tableau=[];

    useEffect(() => {
        getRecipes(items);

},[items]);

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const deleteItem=(id)=> {
    items=items.filter(item => item!=id);
    localStorage.setObj('favoirs',items);

}

    const getRecipes=async (items) => {
        for(let i=0;i<items.length;i++) {
            const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${items[i]}`);
            const data= await response.json();
            tableau.push(data.meals[0]);
        }
        setRecepies(tableau);

           
    };
    return (
        <div className="favorites"> 
    {recepies.map(element => (
        
             <div className="col-lg-4">
             <div className="gallery-single fix ">
                     <img src={element.strMealThumb} />
                     <div class="why-text">
                             <h4>{element.strMeal}</h4>
                             <h5> catégorie:{element.strCategory}</h5>
                     </div>
             </div>
             <button className='favor' onClick={()=>{deleteItem(element.idMeal)}}>
                 <FaTrash className="delete" />
             </button>
         </div>
               ))}
            
      </div>

    )
}
export default Favorite;

