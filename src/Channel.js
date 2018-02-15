class Channel {
    constructor(applyFn){
        this.apply = applyFn;
    }

    writeMessage({text='', from=0, sent=null}){
        if(!text || !from || !sent){ return; }
        this.apply({
            type: 'writeMessage',
            data: {
                text: text,
                from: from,
                sent: sent
            }
        });
    }
}

export default Channel;
