import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import axios from 'axios';
import Results from './components/Results';

function App() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [responses, setResponses] = useState([]);

    const onInputChange = (evt) => {
        setMessage(evt.target.value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        axios
            .post('', { message })
            .then((response) => setResponses((prevReponses) => [...prevReponses, response.data]))
            .catch((e) => {
                if (e.response) {
                    setResponses((prevReponses) => [...prevReponses, e.response.data]);
                } else {
                    setError('Unexpected error');
                }
            });
    };

    const clearElement = (index) => {
      setResponses((prevReponses) => prevReponses.filter((_,i) => i != index))
    }

    return (
        <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column align-center App">
            <header className="masthead mb-auto"></header>
            <main role="main" className="inner cover">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <InputForm
                            message={message}
                            onInputChange={onInputChange}
                            onSubmit={onSubmit}
                        />
                    </div>
                    <div className="col-md-6">
                        <Results results={responses}  clearElement={clearElement} />
                    </div>
                </div>
            </main>
            <footer className="mastfoot mt-auto"></footer>
        </div>
    );
}

export default App;
