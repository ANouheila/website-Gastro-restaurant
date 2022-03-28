import React ,{ Component ,useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import { FaHeart} from 'react-icons/fa';
let favoirs=[];

const getRecipes=async (id) => {
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data= await response.json();
    //data contient les info about  a meal

}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
const Receipe =({id,title,categorie,image}) => {
    const [favorite,setFavorite]=useState([]);
    let aimer=false;
    useEffect(() => {
       // sessionStorage.setItem('favoirs',favorite);
   
         localStorage.setObj('favoirs',favoirs);
        //sessionStrorage.setItem('favoirs',favorite);
      //  localStorage.removeItem('myData');
     // console.log(localStorage.getItem('favoirs'));
    },[favorite]);

    const actualiserListe=(id) => {
       let elem=document.getElementById('favourite'+id);
       elem.classList.toggle("color",!aimer);
       aimer=!aimer;
       if(aimer) {
        favoirs.push(id);

       } else {
           favoirs=favoirs.filter(item => item!=id);
       }
       console.log(favoirs);

     setFavorite(favoirs);

    }

    var idName='favourite'+id;
    return (
        <div className="col-lg-4">
            <div className="gallery-single fix ">
                    <img src={image} onClick={()=>getRecipes(id)}/>
                    <div class="why-text">
                            <h4>{title}</h4>
                            <h5> catégorie:{categorie}</h5>
                    </div>
            </div>
            <Link to={"/meal/"+id}><button className='detail'>View details</button></Link>
            <button className='favor' onClick={()=>{ actualiserListe(id) } }>
                <FaHeart className='favourite' id={idName}/>
            </button>
        </div>
      
    )
}
export default Receipe;


{/* <div>
<h1>{title}</h1>
<p>{categorie}</p>
<img src={image} onClick={()=>getRecipes(id)}/>
<Link to={"/meal/"+id}><button>View details</button></Link>
<button onClick={()=>{ actualiserListe(id) } }>ajouter aux favoirs</button>
</div>
 */}