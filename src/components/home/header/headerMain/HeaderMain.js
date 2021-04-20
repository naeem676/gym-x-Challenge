import React from 'react';
import { useHistory } from 'react-router';
import video from "../../../../180419_Boxing_07_07.mp4";

const HeaderMain = () => {
    const history = useHistory()
    const handleHire = ()=>{
          history.push('/pricing')
    }
    return (
        <div>
            <div className="container mt-3 p-3">
                <div className="row">
                    <div className="col-md-6 text-white">
                        <h1>THE BEST FITNESS <br/> STUDIO IN TOWN</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius
                         cupiditate rerum et laborum aut unde consequatur animi nemo in.
                         cupiditate rerum et laborum aut unde consequatur animi nemo in.</p>
                        <button type="button" onClick={handleHire} class="btn btn-warning">HIRE US</button>

                    </div>
                    <div className="col-md-6">
                    <video src={video} width="550" height="300" controls>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;