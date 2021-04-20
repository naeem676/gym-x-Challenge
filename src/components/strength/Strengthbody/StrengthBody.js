import React from 'react';
import strength from "../../../Image/john-fornander-FIu48iuo_4g-unsplash.jpg";
import ClassSchedule from '../../classSchedule/ClassSchedule';
import Join from '../../join/Join';

const StrengthBody = () => {
    return (
        <div>
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <img className="w-100" src={strength} alt="" srcset=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque provident quaerat numquam consectetur perferendis excepturi earum voluptate veniam repellendus fugit asperiores odit pariatur aliquam nulla doloremque, maxime sequi a.
                Maiores deserunt aliquid ipsum magnam, earum aut necessitatibus quas quo, id iste tenetur dicta modi consequuntur aspernatur odio. Quisquam repellat cupiditate autem sint enim quam, placeat suscipit saepe labore libero.
                Iure, labore cumque impedit sint ex rem? Tempore, qui. Minus, iste! Et ducimus vero, maxime nesciunt fugit asperiores architecto dolorum aspernatur? Molestiae consequatur, repudiandae assumenda ratione reprehenderit eaque eos quaerat.</p>
            </div>
            <div className="col-md-6">
            <ClassSchedule></ClassSchedule>
            </div>
        </div>
    </div>
    <div className="container">
       <Join></Join>
    </div>
    </div>
    );
};

export default StrengthBody;