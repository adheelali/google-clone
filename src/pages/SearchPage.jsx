import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@mui/icons-material";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // Live API call
  const { data }  = UseGoogleSearch(term)

  // mock API call
  // const data = Response;
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">ALL</Link>
              </div>
              <div className="searchPage__option">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <Room />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} result (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__resultLink">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                      className="searchPage__resultImage"
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchpage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
