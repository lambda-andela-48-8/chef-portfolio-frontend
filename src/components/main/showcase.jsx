import React from 'react';
import { Link } from 'react-router-dom';
   
  const Showcase = () =>{
    return (
        <section id='showcase'>
            <div className="container">
                <h1><span className="highlight">Featured Chef</span></h1>
                <p>Chef Porfolio an online showcasing platform for worldclass chef.</p>
                <p><Link to='/signup'><button className='button_2'>Get started</button></Link></p>
            </div>
        </section>

      )
   }
   export default Showcase;