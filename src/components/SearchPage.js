import React from 'react';
import './SearchPage.css';
import { useStatevalue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
//import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';

import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';

function SearchPage() {
    const [{ term }, dispatch] = useStatevalue();
    const { data } = useGoogleSearch(term);

   //const data = Response;
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
               <Link to="/">
                   <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
               </Link>
               <div className="searchPage__headerBody">
                    <Search hideButton value={term} />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option active">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon/>
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon/>
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon/>
                                <Link to="/all">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon/>
                                <Link to="/all">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/all">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/all">Tools</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            {data?<div className="searchPage__results">
                <div className="searchPage__resultCount">
                    <p>About {data?.searchInformation.formattedTotalResults} results ({(data?.searchInformation.formattedSearchTime)}) for {term}</p>
                </div>
                    {data.items.map(item => (
                            <div className="searchPage__result" key={item.cacheId}>
                                {
                                    item.pagemap.cse_thumbnail?<img className="searchPage__resultImage" src={item.pagemap.cse_thumbnail[0].src}/>:''
                                }
                                <a className="searchPage__resultLink" href={item.link}>{ item.displayLink}</a>
                                <a className="searchPage__resultTitle" href={item.link}><h3>{ item.title}</h3></a>
                                <p className="searchPage__resultSnippet">{item.snippet}</p>
                            </div>
                    ))}
                
            </div>:''
            }
            
        </div>
    )
}

export default SearchPage

//to get key
//ink - https:developers.google.com/custom-search/v1/introduction
//----------get key button


//to get search engine id(CONTEXT_API - which search engine we use)
// type www.ggogle.com 
// - create
// - edit search engine - setup
//- toggle ntire web
//- copy search engine id
