import { EmojiObjects } from "@material-ui/icons";
import React ,{useState,useEffect} from "react";
import {useParams } from "react-router-dom";  
import Receipe from "../components/Receipe";
import {FaHeart} from 'react-icons/fa';

  function Meal()  {
      const tableau=[];
      tableau.push({'name':'assiar','prenom':'nouheila'});
      tableau.map((key,valeur)=> {
          console.log(key['name']);
      });
      const [recette,setRecepie]=useState([]);
    const  {id}=useParams(); 
    var ingred=[];
    useEffect(() => {
        getRecipe();
    },[]);

    const getRecipe=async () => {
        const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data= await response.json();
        setRecepie(data.meals[0]);
        getIngredients();
    };
    const getIngredients=() =>{
        for(let i = 1; i<20; i++) {
            let ing ='strIngredient'+i;
            let mes='strMeasure'+i;
            ingred.push({'ingredient':recette[ing],'measure':recette[mes]});
        }
        return ingred;
    }
    console.log(getIngredients());
    return (
        <div className="rec">
             <div className="img">
                 <img src={recette.strMealThumb} />
             </div>
             <div className="description">
                 <h4>{recette.strMeal}  <FaHeart className='favoirs'/></h4>
                

                 <h6>Ingredients:</h6>
                <ul>
                    {ingred.map((key,value) => (
                    <li key={value}>{key['measure']} {key['ingredient']} </li>
                    ))}
                </ul>
          
             </div>
 
        </div>
       

    )
}
export default Meal;



<div>
<h1>Ingredients</h1>


</div>