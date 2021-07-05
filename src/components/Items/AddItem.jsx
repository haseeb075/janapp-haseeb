import React, { useState } from 'react';
import Totalitem from './TotalItem';


function AddItem(props) {
    // const [additem, setAddItem] = useState([
    //     {name : ""},
    //     {email : ""},
    // ]);

    
    const items = [
        {
            id : '1',
            name: 'pencil',
            price: '10'
        },
        {
            id : '2',
            name: 'rubber',
            price: '20'
        },
        {
            id : '3',
            name: 'sharpener',
            price: '30'
        }
    ]

    console.log("parent renders");
    
    return (
        <div className='container'>
            <div className='row'>

              
            <form className='ui form'>
                <h3 className="">Add Contact Form</h3>
                <div className='form-group row'>
                    <label className='col-md-2 col-form-label'>Name</label>
                    <div className="col-md-10">
                    <input type='text' placeholder='name'  />
                    {/* <input type='text' placeholder='name' value={name} onChange={ (e)=> setAddItem(name: e.target.value)} /> */}
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-md-2 col-form-label'>Password</label>
                    <div className='col-md-10'>

                    <input type='text' placeholder='password'/>
                    </div>
                </div>
                {/* <input type='button' className='btn btn-primary' value='add'/> */}

                <button type='button' >add</button>
           </form> 
            </div>
         

           <div className='row'>
                <div className="col-md-12">
                    <Totalitem  totalitems={items} />
                </div>
           </div>
        </div>
    );
}

export default AddItem;