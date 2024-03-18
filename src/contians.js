import React from 'react';
import './App.css';
import  booklis from'./show.js'

import footer from './footer.json'

function Container() {
    return(
  <>
    <main className="container">
        {footer.slice(0.4).map(footer=>(

            <show key={footer.id}{...footer}/>
        ))}
    

  
  </main>
 
  
 
    

  
  
  <article className="container">
    {footer.slice(4.7).map(footer=>(

        <show key={footer.id}{...footer}/>
    ))}

    
  </article>
  </>
    )
}

export default Container;