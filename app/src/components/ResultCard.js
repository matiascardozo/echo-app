import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ResultCard({ result, clearElement }) {
    return (
        <div class={`card ${result.statusCode ? 'border-danger' : 'border-success'} mb-2 border-3`}>
            <div class="card-body text-dark">
                <div class="row no-gutters">
                    <div class="col"><span>{result.message}</span></div>
                    <div class="col-sm-1">
                        <FontAwesomeIcon onClick={clearElement} className="cursor-pointer" icon={faTrash} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;
