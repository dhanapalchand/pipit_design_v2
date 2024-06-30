function Topbar(props){
    // console.log("hh",props.categories)

const handleSelect=(e)=>{
    props.setselectCat(e.target.value);
    }


    return(<>
    <div className="row my-3 mx-5">
        <h3 className="mx-2">Categrory</h3>
     <select onChange={handleSelect}>
        <option value="">select....</option>
        {props.categories.map((c)=><option value={c} key={c}>{c}</option>)}
     </select>
     </div>
    </>
    )
}
export default Topbar;