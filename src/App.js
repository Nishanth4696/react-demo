import './App.css';

function App() {
  const profile= [
    {
      name:"kewal",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPBq-wpgBW4Wx9pZunhixV-QVnTcsJycO3A&usqp=CAU"
    },
    {
      name:"Vinay",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"
    },
    {
      name:"Vijay",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"
    },
    {
      name:"Raj",
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&usqp=CAU"
    }
  ]
  return (
    <div className="App">
      {/* <Msg />
      <Msg />
      <Msg /> */}
      

       {profile.map((nm) => <Msg name={nm.name} pic={nm.picture}/>)}
       
      
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
   <h1>Hello {name}!!!!😎</h1>
  </div>
  );
}

export default App;
