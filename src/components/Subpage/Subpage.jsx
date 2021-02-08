import React from "react";
//react-router
import {Link} from "react-router-dom";

const Subpage = () => {
  return (
    <div className="subpage">
        <Link to="/sever/digital/still"><div className="subpage__card"><h1>still</h1></div></Link>
        <Link><div className="subpage__card"><h1>motion</h1></div></Link>
        <Link><div className="subpage__card"><h1>3d</h1></div></Link>
        <Link><div className="subpage__card"><h1>art</h1></div></Link>
    </div>
  );
};

export default Subpage;
