import Conversations from "./Conversations.jsx"
import LogoutBtn from "./LogoutBtn.jsx"
import SearchInput from "./SearchInput.jsx"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput/>
      <div className="divider px-3"></div>
       <Conversations/>
      <LogoutBtn/>  
    </div>
  )
}

export default Sidebar


// Starter code of Sidebar
// import Conversations from "./Conversations.jsx"
// import SearchInput from "./SearchInput.jsx"

// const Sidebar = () => {
//   return (
//     <div>
//       <SearchInput/>
//       <div className="divider px-3"></div>
//        <Conversations/>
//       <Logutbutton/>  
//     </div>
//   )
// }

// export default Sidebar
