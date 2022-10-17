import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider'
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue()

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
  
    if ({}.length !== 0) {
      navigate("/search");
    }

  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" onClick={search}/>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} type="submit" varient="outlined">
            Google Search
          </Button>
          <Button varient="outlined">I'm Feeling lucky</Button>
        </div>
      ) : null}
    </form>
  );
};

export default Search;
