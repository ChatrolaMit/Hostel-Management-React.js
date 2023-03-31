import { Component } from "react";

import './card.style.css';

class Card extends Component{

    render(){
        // console.log(this.props.monster )
        const {name,email,id} = this.props.monster 
        let roomNo = 2103;
        let hostel = 'H1';
        let floor = 3;
        return(
            <div className="card-container" key={id}>
                        {/* <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/> */}
                        <h2>{roomNo}</h2>
                        <p>{"Hostel: "+hostel}</p>
                        <p>{"Floor: "+floor}</p>

            </div>
        )
    }

}
export default Card;