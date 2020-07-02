// survey field contains logic to render single label or text

import React from 'react';

//if touched is true and error contains a string that string will be returned 
export default ({ input , label , meta : {  error , touched }}) => {
  
    return (
        <div>
            <label>
               {label} 
            </label>
            <input  {...input} style={{ marginBottom : '5px'}} />
            <div className="red-text" style={{ marginBottom : '20px'}}>
                  { touched && error }
            </div>
            
            
        </div>
    );
};