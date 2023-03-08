import React from "react";
import { Link } from "react-router-dom";
import About from './about';
const HomePage=()=>{
    return(
        <div>
            <div className="but">
            <h1 className="hi">STOCKED GROCER</h1>
            <About/>
            <Link to="/post"><button className="button">POST</button></Link>
            <Link to="/get"><button className="button">GET</button></Link>
            <Link to="/grocery"><button className="button">PUT</button></Link>
            <Link to="/delete"><button className="button">DELETE</button></Link>
            </div>
        </div>
    )
};
export default HomePage;













// import React from "react";
// import {Link} from "react-router-dom";

// import '../src/Home.css'
// function Boutique() {
//       return (
//         <div className="boutique">
//               <br></br>
//               <br></br>
//               <Link to="/Get">
//               <button className="b">GET </button>
//               </Link>
//               <br /><br />
//               <br/>
//               <Link to="/post">
//               <button className="b">POST</button>
//               </Link>
//               <br /><br /><br/>
//               <Link to="/Put">
//               <button className="b">PUT</button>
//               </Link>
//               <br /><br />
//               <Link to="/Delete">
//               <button className="b">DELETE</button>
//               </Link>
            
   
//         </div>
//       );
//     }
// export default Boutique;