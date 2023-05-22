import Modal from "../Components9/Modal";
import "./Header.css";
import { Fragment, useState } from "react";
function Header() {
  const [searchbar, setSearchbar] = useState(false);

  const handleSearch = () => {
    setSearchbar((prevState) => !prevState);
  };

  return (
    <Fragment>
      {searchbar && <Modal />}
      <header className="header">
        <div className="header-component">
          <div className="title">
            <p>🌟 Redefine Status</p>
          </div>
          <div className="search" onClick={handleSearch}>
            <i className="fa fa-search"></i>
            <p>search</p>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
