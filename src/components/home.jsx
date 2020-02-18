
import React, { Component } from 'react';

export default class Home extends Component {

  render() {
return(
<div>

    <main class="wrapper">
   <nav class="nav ">
    <ul class="menu">
      <li class="item"><a href="http://localhost:3000/home">Home</a></li>
      <li class="item"><a href="http://localhost:3000/co">Coffee</a></li>
      <li class="item"><a href="http://localhost:3000/">Login</a></li>
    </ul>
  </nav>
 
    <header>
    <div class="container">
        <div class="intro-text">
<div class="text-center text">

 <p>Coffee: the favorite drink of the civilized world.

</p>
<h1>Thomas Jefferson</h1>

        </div>
        </div>

        
    </div>
   
  
</header>

    <section class="section parallax bg1">
        
      <h1>Even bad coffee is better than no coffee at all.</h1>
 
    </section>
    
    <section class="section static  ">
  
    <p>Coffee is the best medicine.</p>

    </section>
  
  
    <section class="section parallax bg2">
      <h1>There's nothing sweeter than a cup of bitter coffee</h1>
     
    </section>
  </main>
</div>
);
}
}