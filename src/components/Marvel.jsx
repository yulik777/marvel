import'./Marvel.css';

function Marvel(props) { 
   
    return (

      <div className="App">     
        <div class="container">
        <div id="marvels_cards"></div>
        <img src={props.url}></img>
        <div className="marvels-name">{props.name}</div>
          <div className="marvels-universe">{props.universe} </div>
          <div className="marvels-occupation">Occupation: {props.occupation}</div>
          <div className="marvels-superpowers"> Superpowers: {props.superpowers}</div>
        <div class="rating"></div>
          
    </div>
    </div>
    );
  }
  
  export default Marvel;