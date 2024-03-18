import React from 'react';
import './App.css';

  function FooterFunction () {
    const scrollTotop =()=>{


      window.scrollTo({

        top:0,
        behavior:'smooth',
      })
    }


  
    return(
      <footer className="footer">
        <section className="content inf">
        <h3>media contect</h3>



        <nav>
        <ul>
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
          <li><a href="#">Option 4</a></li>
        </ul>
      </nav>
      </section>
      <section>

<botton className="scroll-to-top" onClick={scrollTotop}></botton>
      </section>
      </footer>
    
    );
  

}
export default FooterFunction;


  