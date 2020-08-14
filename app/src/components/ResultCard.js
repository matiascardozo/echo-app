import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ResultCard({ result, clearElement, index }) {
    return (
        <div class={`card ${result.statusCode ? 'border-danger' : 'border-success'} mb-2`}>
            <div class="card-body">
                <div class="row no-gutters">
                    <div class="col">{result.message}</div>
                    <div class="col-sm-1">
                        <FontAwesomeIcon onClick={() => clearElement(index)} className="cursor-pointer" icon={faTrash} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;
