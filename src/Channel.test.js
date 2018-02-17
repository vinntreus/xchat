import Channel from './Channel';

describe('Channel', () => {
    test('send message', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.sendMessage({id: 1, text: 'a', from: 2, sent: new Date(2017, 0, 1)});
        expect(logMock.mock.calls.length).toBe(1);
        expect(logMock.mock.calls[0]).toEqual([{
            type: 'messageSent',
            data: {
                id: 1,
                text: 'a',
                from: 2,
                sent: new Date(2017, 0, 1)
            }
        }]);
    });

    test('send message needs id', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.sendMessage({id: null, text: 'a', from: 1, sent: new Date(2017, 0, 1)});
        expect(logMock.mock.calls.length).toBe(0);
    });

    test('send message needs text', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.sendMessage({id: 1, text: '', from: 2, sent: new Date(2017, 0, 1)});
        expect(logMock.mock.calls.length).toBe(0);
    });

    test('send message needs from', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.sendMessage({id: 1, text: 'a', from: null, sent: new Date(2017, 0, 1)});
        expect(logMock.mock.calls.length).toBe(0);
    });

    test('send message needs sent', () => {
        let logMock = jest.fn();
        let c = new Channel(logMock);
        c.sendMessage({id: 1, text: 'a', from: 2, sent: null});
        expect(logMock.mock.calls.length).toBe(0);
    });
})
