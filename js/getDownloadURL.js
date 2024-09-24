function getDownloadURL(downloadurl) {
    const proxylist = [
        'tsfcfex.pages.dev',
        'tsfex2.pages.dev',
        'tsfcfex3.pages.dev'
    ];
    const randomProxy = proxylist[Math.floor(Math.random() * proxylist.length)];
	window.open(`https://${randomProxy}/proxy/${downloadurl}`, "_blank");
    // window.location.href = "https://" + randomProxy + "/proxy/" + downloadurl;
};