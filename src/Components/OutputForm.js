import React from "react";

const OutputForm = (props) => {

    return (
        <textarea name="output" rows="10" cols="40" readOnly value={props.output}></textarea>
    );
}

export default OutputForm;