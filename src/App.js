import people from './JSON/people.json'
import UserCard from './components/UserCard/UserCard.jsx'

const style = {
  containerPadre:{
  display:'flex',
  flexWrap:'wrap'
  }
}

export default function App() {

  return (
   <div style={style.containerPadre}>
      {people.map(person => {
        return (
          <UserCard person={person} key={person.name}/>
        )
      })}
   </div>
  )
}


