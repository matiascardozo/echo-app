import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ResultCard from './components/ResultCard';
import renderer from 'react-test-renderer';
import Results from './components/Results';
import InputForm from './components/InputForm';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Echo App/i);
    expect(linkElement).toBeInTheDocument();
});

describe('Result card', () => {
    const handleRemoveItem = jest.fn();
    let component;
    const result = { message: 'Hello world' };

    beforeEach(() => {
        component = renderer.create(
            <ResultCard result={result} clearElement={() => handleRemoveItem(1)} />,
        );
    });

    it('renders the message', () => {
        // console.log(component.root.findByType('p'))
        expect(component.root.findByType('span').props.children).toEqual('Hello world');
    });

    it('calls clearElement on icon click', () => {
        component.root.findByType('svg').props.onClick();
        expect(handleRemoveItem).toHaveBeenCalledTimes(1);
        expect(handleRemoveItem).toHaveBeenCalledWith(1);
    });
});

describe('Result List', () => {
    const resultList = [{ message: 'Hello world' }, { message: 'Bye bye!' }];
    it('renders two items', () => {
        const component = renderer.create(<Results results={resultList} />);
        expect(component.root.findAllByType(ResultCard).length).toEqual(2);
    });
});

describe('Intput Form', () => {
    const inputFormProps = {
        message: 'Hello world',
        onInputChange: jest.fn(),
        onSubmit: jest.fn(),
    };
    let component;
    beforeEach(() => {
        component = renderer.create(<InputForm {...inputFormProps} />);
    });
    it('renders the input field with its value', () => {
        const value = component.root.findByType('input').props.value;
        expect(value).toEqual('Hello world');
    });

    it('changes the input field', () => {
        const pseudoEvent = { target: 'Test' };
        component.root.findByType('input').props.onChange(pseudoEvent);
        expect(inputFormProps.onInputChange).toHaveBeenCalledTimes(1);
        expect(inputFormProps.onInputChange).toHaveBeenCalledWith(pseudoEvent);
    });
    it('submits the form', () => {
        const pseudoEvent = {};
        component.root.findByType('form').props.onSubmit(pseudoEvent);
        expect(inputFormProps.onSubmit).toHaveBeenCalledTimes(1);
        expect(inputFormProps.onSubmit).toHaveBeenCalledWith(pseudoEvent);
    });

    it('disables the button and prevents submit', () => {
        component.update(<InputForm {...inputFormProps} loading={true} />);
        expect(component.root.findByType('button').props.disabled).toBeTruthy();
    });

    test('renders snapshot', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
