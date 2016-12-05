#!/usr/bin/env node

const brightness = require('brightness');
const syncExec = require('sync-exec');

let initialBrighness = 1;
const command = process.argv.slice(2).join(' ');
brightness.get().then(level => {
    initialBrighness = level;
    brightness.set(0.005);
    syncExec(command, {stdio: [0, 1, 2]});
    restoreBrightness();
});

const restoreBrightness = () => {
    brightness.set(initialBrighness);
    process.exit();
};

process.on('SIGINT', restoreBrightness);
process.on('uncaughtException', restoreBrightness);
