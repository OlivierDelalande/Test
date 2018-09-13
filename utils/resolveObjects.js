'use strict';

const _ = require('lodash');

class GenerateOutput {

    generateOutput(Obj) {
        let entries = this.getObjectEntries(Obj);
        this.removeLastEntry(Obj, entries[0]);
        let newEntryKey = entries[0].split('.');
        this.addNewEntry(Obj, newEntryKey, entries[1]);
        console.log(Obj);
        return Obj;
    }

    getObjectEntries (Obj) {
        let entries =  Object.entries(Obj);
        return entries[entries.length-1];
    }

    removeLastEntry(Obj, lastEntry) {
        delete Obj[lastEntry];
        return Obj;
    }

    addNewEntry(Obj, newEntryKey, newEntryValue) {
        _.set(Obj, newEntryKey, newEntryValue);
        return Obj;
    }
}

module.exports = new GenerateOutput();

    


