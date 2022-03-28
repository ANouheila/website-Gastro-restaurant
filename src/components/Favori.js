import React  from "react";
import { FaTrash} from 'react-icons/fa';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const deleteItem=(id)=> {
    let items=localStorage.getObj('favoirs')

    items=items.filter(item => item==id);
    console.log(items);
    localStorage.setObj('favoirs',items);
}
const Favori =({id,title,categorie,image}) =>{
    return (
        <div className="col-lg-4">
            <div className="gallery-single fix ">
                    <img src={image} />
                    <div class="why-text">
                            <h4>{title}</h4>
                            <h5> catégorie:{categorie}</h5>
                    </div>
            </div>
            <button className='favor' onClick={()=>{deleteItem(id)} }>
                <FaTrash className="delete" />
            </button>
        </div>
      
    )
}

export default Favori;
