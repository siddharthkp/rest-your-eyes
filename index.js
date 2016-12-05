#!/usr/bin/env node

const brightness = require('brightness');
const syncExec = require('sync-exec');

const command = process.argv.slice(2).join(' ');

let initialBrighness;
brightness.get().then(level => {
    initialBrighness = level;
    brightness.set(0.001);
    syncExec(command, {stdio: [0, 1, 2]});
});

const restoreBrightness = () => {
    brightness.set(initialBrighness);
    process.exit();
};

process.on('exit', restoreBrightness);
process.on('SIGINT', restoreBrightness);
