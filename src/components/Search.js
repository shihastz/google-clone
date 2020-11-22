import {React, useState} from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStatevalue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButton = false}) {
    const [{term}, dispatch] = useStatevalue();

    const [input, setInput] = useState('');
    const history = useHistory();
    const search = e => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('./search')
    }
    return (
        <form className="search">
            
          <div className="search__input">
          
             <SearchIcon className="search__inputIcon"/>
             
             <input className="search__inputField" value={input} onChange={e => setInput(e.target.value)} />
             <MicIcon/>
          </div>  
          {!hideButton ? (
              <div className="search__buttons">
              <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
              <Button variant="outlined">I'am Feeling Lucky</Button>
          </div> 
          ): (
            <div className="search__buttons">
                <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="search__buttonsHidden" variant="outlined">I'am Feeling Lucky</Button>
            </div> 
          )} 
          
        </form>
        
    )
}

export default Search
