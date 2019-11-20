import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../../components/counter/counter';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing our counter component', () => {
  it('Counter changes state on up click', () => {
    let app = mount(<Counter />);
    let button = app.find('.up');
    expect(app.state('count')).toBe(0);
    button.simulate('click');
    expect(app.state('count')).toBe(1);
  });
  it('Counter changes state on a down click', () => {
    let app = mount(<Counter />);
    let button = app.find('.down');
    expect(app.state('count')).toBe(0);
    button.simulate('click');
    expect(app.state('count')).toBe(-1);
  });
  it('State is being transferred to the DOM', () => {
    let app = mount(<Counter />);
    let span = app.find('.count');
    expect(span).toBeDefined();
  });
  it('render correctly', () => {
    const renderTree = renderer.create(<Counter />).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});