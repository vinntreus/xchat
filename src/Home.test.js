import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('Home', () => {
  describe('Messages', () => {
    it('keep current written message in state', () => {
      const div = document.createElement('div');
      let c = ReactDOM.render(<Home />, div);
      let input = div.getElementsByClassName('Message-input')[0];
      expect(input.value).toBe('');
      // manually setting state should set input value
      c.setState({message: 'a'});
      expect(input.value).toBe('a');
      // when user types should also set input value
      input.value='b';
      ReactTestUtils.Simulate.change(input);
      expect(c.state.message).toBe('b');
    });
    it('display messages that are sent and clear input', () => {
      const div = document.createElement('div');
      let c = ReactDOM.render(<Home />, div);
      c.sendMessage = (m) => 1; // mock away actual sending
      c.setState({message: 'a'});
      let messages = div.getElementsByClassName('Message-list')[0].children;
      expect(messages.length).toBe(0);
      let input = div.getElementsByClassName('Message-input')[0];
      ReactTestUtils.Simulate.keyDown(input, {key: 'Enter', keyCode: 13, which: 13});
      // one message is output with highlight of sending
      expect(messages.length).toBe(1);
      expect(messages[0].textContent).toBe('a');
      expect(messages[0].classList).toContain('sending');
      // clears input
      expect(c.state.message).toBe('');
      // simulate message was successfully sent
      c.messageSent(c.state.messages[0]);
      expect(messages[0].classList).not.toContain('sending');
    });
  });
});
