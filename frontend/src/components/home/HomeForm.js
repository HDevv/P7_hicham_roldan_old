import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import '../home/HomeForm.scss';


const HomeForm = () => {
    const url ="http://localhost:5000/api/post"
    const [data, setData] = useState({
        name: "",
        date: "",
        idUser: ""
    })

    function submit(e){
        e.preventDefault();
       const token = '';
        Axios.post(url,{
            name: data.name,
            date: data.date,
            idUser: parseInt(data.idUser)
            }, 
            {
                headers: {'Authorization': 'bearer ' + token}  
            }
            )
            .then(res=>{
                console.log(res.data);
            })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return (
        <div>
            <form className='home_form' onSubmit={(e) => submit(e)}>
                <input className='homeform_input' onChange={(e)=>handle(e)} id="name" value={data.name}
                placeholder='Name' type="text" />
                <button className='homeform_button' >Poster</button>
            </form>
        </div>
    );
};

export default HomeForm;
