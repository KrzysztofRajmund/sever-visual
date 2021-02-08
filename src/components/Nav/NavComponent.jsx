import React,{useState} from "react";
import Burger from "../../assets/burger.png";
import XIcon from "../../assets/x-icon.png";
import NavModal from "./NavModal";

const NavComponent = () => {

    const [modal, setModal] = useState(false);

    const openModal = () =>{
        setModal(!modal);
    }
  return (
    <React.Fragment>
      <div onClick={openModal} className="nav-component">
        <img src={modal ? XIcon : Burger} alt="nav-icon" />
      </div>
      {modal ? <NavModal/> : ""}
    </React.Fragment>
  );
};

export default NavComponent;
