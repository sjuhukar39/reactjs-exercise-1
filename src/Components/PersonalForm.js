import React, { useState } from 'react';
import OutputForm from './OutputForm';
import InterestItem from './InterestItem';

const PersonalForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredProfession, setEnteredProfession] = useState('');
    const [enteredBio, setEnteredBio] = useState('');
    const [displayOutput, setDisplayOutput] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if ((enteredName.length === 0) || (enteredProfession.length === 0) || (enteredBio.length === 0)) {
            alert("Please make sure you input all the text fields");
            return;
        }
        const checkedValues = [];
        for (let input of event.target) {
            if (input.type === "checkbox" && input.checked) {
                checkedValues.push(input.name);
            }
        }
        let displayString = `My name is ${enteredName}. By profession I am a ${enteredProfession}. Something I would love to share about me - ${enteredBio}\n`;
        if (checkedValues.length > 0) {
            displayString = displayString + '\nMy interests are\n';
        }
        for(let index in checkedValues) {
            displayString = displayString + `\n${parseInt(index)+1})${checkedValues[index]}`;
        }
        setDisplayOutput(displayString);
        setEnteredName('');
        setEnteredProfession('');
        setEnteredBio('');
    }

    const onClearHandler = () => {
        setDisplayOutput('');
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const professionChangeHandler = (event) => {
        setEnteredProfession(event.target.value);
    }

    const bioChangeHandler = (event) => {
        setEnteredBio(event.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        Name
                        <input 
                            type="text" 
                            name="name"
                            value={enteredName}
                            onChange={nameChangeHandler}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Profession
                        <input 
                            type="text" 
                            name="profession"
                            value={enteredProfession}
                            onChange={professionChangeHandler}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Bio
                        <textarea 
                            name="bio" 
                            rows="5" 
                            cols="20"
                            value={enteredBio}
                            onChange={bioChangeHandler}
                        ></textarea>
                    </label>
                </div>
                {props.interests.map((interestItem) => (
                    <InterestItem 
                    interest={interestItem} 
                />
                ))}
                <input type="submit" value="Submit" />
                <button type="button" onClick={onClearHandler}>Clear</button>
            </form>
            <div>
                 {/* <textarea name="output" rows="10" cols="40" value={displayOutput}></textarea> */}
                 <OutputForm output={displayOutput} />
            </div>
        </div>
    );
}

export default PersonalForm;