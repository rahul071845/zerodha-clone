import ".//WatchList.css";
import { watchlist } from "../../data/data";
import WatchListItem from "./WatchListItem";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      {watchlist.length === 0 ? (
        <p className="empty-state">No stocks in your watchlist</p>
      ) : (
        <ul className="list">
          {watchlist.map((stock, idx) => (
            <WatchListItem key={idx} stock={stock} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default WatchList;
