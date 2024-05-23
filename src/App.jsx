import { useContext } from "react"
import { AppContext } from "./context"

const App = () => {
const {userNames,searchParams,handleClickedList,clickedList,handleSearchParams,filteredSearch} = useContext(AppContext)  
  return (
    <div className='search-container'>
<input type="text" placeholder='enter your search' value={searchParams ? searchParams : clickedList}  onChange={handleSearchParams} />
<ul>
  
  {!searchParams && userNames?.map((name,index)=>
   {
  return (
    <li key={index} onClick={handleClickedList} >
      {name}
    </li>
  )
})}
{filteredSearch.length > 0 ? filteredSearch.map((name,index)=>{

  return (
<li key={index}>
  {name}
</li>
  )
}) : "no item matches your search"}
</ul>
    </div>
  )
}

export default App
