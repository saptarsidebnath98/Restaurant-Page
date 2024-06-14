const Navbar = ({filterItem , menuList}) => {
  return (
    <>
     <nav className="navbar">
            <div className="btn-group">
              {
                menuList.map((currentElem) => {
                  return(
                    <button key={currentElem} className="btn-group-item" onClick={()=> filterItem(currentElem)}>{currentElem}</button>
                  )
                })
              }
            </div>
        </nav>
    </>
  )
}

export default Navbar;