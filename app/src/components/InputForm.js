import React from 'react';

function InputForm({message, onInputChange, onSubmit}) {
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control-sm my-1 mr-sm-2"
                    id="messageInput"
                    aria-describedby="emailHelp"
                    value={message}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-sm my-1">
                Submit
            </button>
        </form>
    );
}

export default InputForm;
