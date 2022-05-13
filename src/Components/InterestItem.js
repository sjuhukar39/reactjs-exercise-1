import React from "react";

const InterestItem = (props) => {
    return (
        <div>
            <input type="checkbox" id={props.interest.value} name={props.interest.value} value={props.interest.value} />
            <label for={props.interest.value}> {props.interest.value}</label><br/>
        </div>
    );
}

export default InterestItem;