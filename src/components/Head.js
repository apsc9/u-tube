import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice"

const Head = () => {

  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img 
                className="h-12 cursor-pointer"
                onClick={() => toggleMenuHandler()}
                alt="menu"
                src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"    
            />
            <a href="/">
                <img className="mx-2 my-2 h-8"
                    alt="youtube-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                />
            </a>
        </div>
        <div className="py-2 px-20 col-span-10">
            <input 
                className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
                type="text" 
            />
            <button className="px-5 py-2 border border-gray-400 rounded-r-full bg-gray-100">
                    Search
            </button>
        </div>
        <div>
            <img className="h-12"
                alt="user icon"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
        </div>
    </div>
  )
}

export default Head