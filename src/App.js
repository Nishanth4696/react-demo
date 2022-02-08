import './App.css';

function App() {
  const profile= [
    {
      name:"Thor",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6TnOXptuSCI6lHxBgtoBNs4d4TZI6SC44w&usqp=CAU"
    },
    {
      name:"Captain Marvel",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzdrJ6cmasekbTbZ5vFpa-JdF3QA9feGVAg&usqp=CAU"
    },
    {
      name:"Tony Stark",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVL8gWjOJsouwIF1LbmUXbctLt8L4ngXYTg&usqp=CAU"
    },
    {
      name:"Captain America",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02Sz_woyndNHJlpAzoNzyUnkb2uWdXk_94g&usqp=CAU"
    },
    {
      name:"SpiderMan",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuRoLbHntRnJ73oN3GW7ABW22WEIbhcGzhA&usqp=CAU"
    },
    {
      name:"Hulk",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3RWWT5EyRCnEajOkZnmi3Oc7OLh_Q0x9zQ&usqp=CAU"
    }
  ]
  return (
    <div className="App">
      {/* <Msg />
      <Msg />
      <Msg /> */}
      <Movie />
      

       {/* {profile.map((nm) => <Msg name={nm.name} pic={nm.picture}/>)} */}
       
      
    </div>
  );
}

// function Msg(props){
   
//   return(
//   <div>
// <h1>Hello {props.name}!!!!😎</h1>
//   </div>
//   );
// }


function Msg({name, pic}){
   
  return(
  <div className="user-name">
    <img  className="profile-pic" src={pic} alt={name} />
   <h1> {name}!!!!😎</h1>
  </div>
  );
}


function Movie(){
  return (
    <div className="movie-container">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXob6Q6DLH_AQob9tQ3TQXELP7VfO2P1Uy1Q&usqp=CAU" 
        alt="The Avengers" 
        className="movie-poster"/>
      
      <h3 className="movie-name">The Avengers</h3>
      <p className="movie-rating">⭐8 </p>
      <p className="">The Avengers are a fictional team of superheroes and the protagonists of the Marvel Cinematic Universe (MCU) media franchise, based on the Marvel Comics team of the same name created by Stan Lee and Jack Kirby in 1963</p> 
      

    </div>
  );
}

export default App;
