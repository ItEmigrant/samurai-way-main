import React from 'react';
import {create} from 'react-test-renderer'
import {ProfileStatus} from "./ProfileStatus";
import {render, fireEvent} from '@testing-library/react';


describe('ProfileStatusComponent', () => {
    test('status from props should be in the state', () => {
        const component = create(<  ProfileStatus status={'Bogdan the beast'} updateStatus={() => '03'}/>);
        const instance = component.getInstance();
        expect(instance?.props.status).toBe('Bogdan the beast')
    });
    test('after create span should be displayed ', () => {
        const component = create(<  ProfileStatus status={'Bogdan the beast'} updateStatus={() => ''}/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children.length).toBe(1)
        expect(span).not.toBeNull()


    });
    test('after create <span> should be with correct status', () => {
        const component = create(<  ProfileStatus status={'Bogdan the beast'} updateStatus={() => ''}/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.type).toBe('span')
        expect(span.children[0]).toBe('Bogdan the beast')
    })

    test('after create input do not displayed', () => {
        const component = create(<  ProfileStatus status={'Bogdan the beast'} updateStatus={() => ''}/>);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow()
    })

    test('input should be displayed in edite mode instead of span', () => {
        const component = create(<  ProfileStatus status={'Bogdan the beast'} updateStatus={() => ''}/>);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        expect(input.type).toBe('input')
        expect(input.props.value).toBe('Bogdan the beast')
    })


    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const {getByRole} = render(<ProfileStatus status={'Bogdan the beast'} updateStatus={mockCallback}/>);
        fireEvent.doubleClick(getByRole('status'));
        fireEvent.blur(getByRole('textbox'));
        expect(mockCallback.mock.calls.length).toBe(1);
    });

})
