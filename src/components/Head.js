import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const [searchQuery, setSearchQuery ] = useState("");
  const [suggestions, setSuggestions ] = useState([]);
  const [showSuggestions, setShowSuggestions ] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  

  useEffect(() => {

    // make an API call after every key press
    // but if the difference between 2 APi calls < 200ms
    // decline the API call

    const timer = setTimeout(() => {
        if (searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        } else {
            getSearchSuggestions();
        }
    }, 200);

    return () => {
        clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
        cacheResults({
            [searchQuery]: json[1],
            // iphone: [1,2,3],
        })
    );
  };
    

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
        <div className="relative py-2 px-20 col-span-10">
            <div>
                <input 
                    className="w-1/2 border border-gray-400 p-2 px-5 rounded-l-full" 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    
                />
                <button className="px-5 py-2 border border-gray-400 rounded-r-full bg-gray-100">
                        Search
                </button>
            </div>
            {showSuggestions && (
                <div className="absolute bg-white py-2 px-2 w-[37rem] rounded-lg shadow-lg border-gray-100">
                    <ul>
                        {suggestions.map((s) => (
                            <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
                        ))}
                    </ul>
                </div>
            )}
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