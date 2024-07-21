AOS.init();
const oscarTS = new Date("Mar 2, 2025 21:00:00").getTime();
setInterval(function() {
    const nowTS = new Date().getTime();
    const timeDiff = oscarTS - nowTS;
    const days = Math.floor(timeDiff / 86400000);
    const hours = Math.floor(timeDiff % 86400000 / 3600000);
    const minutes = Math.floor(timeDiff % 3600000 / 60000);
    const seconds = Math.floor(timeDiff % 60000 / 1000);
    document.getElementById("counter").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
