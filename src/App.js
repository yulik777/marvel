import React from 'react';
import logo from './logo.svg';
import './App.css';


import Marvel from './components/Marvel';

const marvels = [{
  url: "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/batman-comic-i4516.jpg",
  name: "Batman",
  universe : "DC Comics" ,
  occupation: "crime fighter, philanthropist, billionaire",
  superpowers: "intelligence, vast knowledge"
}, {
  url: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/68/Superman01.jpg/227px-Superman01.jpg",
  name: "Superman",
  universe: "DC Comics" ,
  occupation: "fighter for justice",
  superpowers: "impenetrability, super strength, flight, self-healing, super vision and super hearing"
}, {
  url: "https://i.pinimg.com/550x/f2/ed/94/f2ed941ca2afa71eb6798d10e26b9cb4.jpg",
  name: "Halk",
  universe: "Marvel Comics" ,
  occupation: "superhero, justice fighter, biochemist",
  superpowers: "superhuman strength and speed, stamina, flight"
},{
  url: "https://image.api.playstation.com/vulcan/img/rnd/202010/2122/19xis9VT5XfnXsLSMkxUjvVd.png?w=440",
  name: "Spiderman",
  universe: "Marvel Comics" ,
  occupation: "justice fighter, student, photographer",
  superpowers: "superhuman reflexes, ability to stick to solid surfaces, web production"
},{
    url: "https://i.guim.co.uk/img/media/0fafd28d4c0d967ad2022cd8e0a3360240e4beba/0_395_1200_719/master/1200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ffcbd2eb779151f2d17f7c753f07c285",
    name: "Wonder Woman",
    universe: "DC Comics",
    occupation: "superheroine, secretary-referent",
    superpowers: "superhuman strength and speed, endurance, flight"
  }]

class App extends React.Component { 
  render() {
  return (
    <div className="App"> 
    {
      marvels.map((marvel) =>
      <Marvel name={marvel.name} url={marvel.url} universe={marvel.universe} occupation={marvel.occupation} superpowers={marvel.superpowers}></Marvel>
      )
    }
    </div> 
  );
}
}
export default App;
