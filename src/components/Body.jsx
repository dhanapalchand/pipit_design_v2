
function Body(props) {
  console.log(props);

  return (<>
    <h1>Body componenet</h1>
    <p>name : {props.name}</p>
    <p>age : {props.age}</p>
    <p>department : {props.deparment}</p>
    <p>weight : {props.weight + props.age}</p>
    
  </>
  )
}
export default Body;