import Channel from './Channel';

describe('Channel', () => {
    test('write message', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.writeMessage({id: 1, text: 'a', from: 2, sent: new Date(2017, 0, 1)});
        expect(logMock.mock.calls.length).toBe(1);
        expect(logMock.mock.calls[0]).toEqual([{
            type: 'writeMessage',
            data: {
                id: 1,
                text: 'a',
                from: 2,
                sent: new Date(2017, 0, 1)
            }
        }]);
    });

    test('write message needs id', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.writeMessage({id: null, text: 'a', from: 1, sent: new Date(2017, 0, 1)});
        expect(logMock.mock.calls.length).toBe(0);
    });

    test('write message needs text', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.writeMessage({id: 1, text: '', from: 2, sent: new Date(2017, 0, 1)});
        expect(logMock.mock.calls.length).toBe(0);
    });

    test('write message needs from', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.writeMessage({id: 1, text: 'a', from: null, sent: new Date(2017, 0, 1)});
        expect(logMock.mock.calls.length).toBe(0);
    });

    test('write message needs sent', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.writeMessage({id: 1, text: 'a', from: 2, sent: null});
        expect(logMock.mock.calls.length).toBe(0);
    });
})
