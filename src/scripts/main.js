AOS.init();

const oscarTS = (new Date("Mar 2, 2025 21:00:00")).getTime();

setInterval(function() {
    const nowTS = (new Date()).getTime();
    const timeDiff = oscarTS - nowTS;


    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeDiff % (1000 * 60) / 1000);

    document.getElementById('counter').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

}, 1000)