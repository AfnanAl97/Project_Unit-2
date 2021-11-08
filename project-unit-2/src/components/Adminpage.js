import React, {useState} from "react";

function Adminpage() {

    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState();

    return (
        <>
        <div className="admin-page">
         <div className="admin-card">
           <div className="admin-btnn">
              <p className="admin-btn"><a href="#">+</a></p>
           </div>
         </div>
        </div>
        </>

    );
  }
  
  export default Adminpage;
  