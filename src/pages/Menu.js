import React, {useState, useEffect } from "react";
import Receipe from "../components/Receipe";
import { FaSearch } from 'react-icons/fa';
function Menu (){
           const [counter,setCounter]=useState(0);

  const [recepies,setRecepies]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

useEffect(() => {
        getRecipes();
},[query]);
   const getRecipes=async () => {
           const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
           const data= await response.json();
           console.log(data);
           setRecepies(data.meals);
   };
   const updateSearch =e => {
           setSearch(e.target.value);
           console.log(search);
   }
   const getSearch = e => {
          e.preventDefault();
          setQuery(search);
   }

   if(recepies) {
           return(
                <div className="App">
                <form onSubmit={getSearch} className="research">
                       <input type="text" value={search} onChange={updateSearch} placeholder="Search Food" />
                       <button type="submit" className="se">
                               <FaSearch className="icon"/>
                       </button>
                </form>
               <div class="menu-box">
                       <div className="container menu">
                               <div className="row">
                                       <div className="col-lg-12">
                                               <div className="heading-title text-center">
                                                       <h2>Special Menu</h2>
                                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                               </div>
                                       </div>
                               </div>
                                <div className="row">
                                        
                                              {recepies.map(recipe => (
                                               <Receipe 
                                               key ={recipe.idMeal} 
                                               id={recipe.idMeal} 
                                               title={recipe.strMeal}
                                               categorie={recipe.strCategory} 
                                               image={recipe.strMealThumb}
                                               />
                                       ))} 
                                        
                                    
                             
                                </div>
                             
                               
                       </div>
               </div>
 
        </div>


           );
   }else {
           return (    <div className="App">
           <form onSubmit={getSearch} className="research">
                  <input type="text" value={search} onChange={updateSearch} placeholder="Search Food" />
                  <button type="submit" className="se">
                          <FaSearch className="icon"/>
                  </button>
           </form>
          <div class="menu-box">
                  <div className="container menu">
                          <div className="row">
                                  <div className="col-lg-12">
                                          <div className="heading-title text-center">
                                                  <h2 className='noresult'>There are no result</h2>
                                          </div>
                                  </div>
                          </div>                         
                  </div>
          </div>

   </div>);
   }

        
     

   
    


}

export default Menu;



