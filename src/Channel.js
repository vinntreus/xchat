class Channel {
    constructor(applyFn){
        this.apply = applyFn;
    }

    sendMessage({id=null, text='', from=0, sent=null}){
        if(!id || !text || !from || !sent){ return; }
        this.apply({
            type: 'messageSent',
            data: {
                id: id,
                text: text,
                from: from,
                sent: sent
            }
        });
    }
}

export default Channel;
