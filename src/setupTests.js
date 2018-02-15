//fix to avoid getting console.warn about requestAnimationFrame
global.requestAnimationFrame = function (cb) {
    return setTimeout(cb, 0);
};
