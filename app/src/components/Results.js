import React from 'react';
import ResultCard from './ResultCard';

function Results({ results, clearElement }) {
    return results.map((result, index) => <ResultCard key={index} index={index} result={result} clearElement={clearElement} />);
}

export default Results;
