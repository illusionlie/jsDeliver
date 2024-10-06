function getDownloadURL(downloadurl) {
    const proxylist = [
        'tsfcfex.pages.dev',
        'tsfex2.pages.dev',
        'tsfcfex3.pages.dev'
    ];
    const randomProxy = proxylist[Math.floor(Math.random() * proxylist.length)];
	window.open(`https://${randomProxy}/proxy/${downloadurl}`, "_blank");
    showMessagePopup(`正在使用 ${randomProxy} 代理加速 (仅供测试!)\nMade With ❤️ by THESKYFLAME\nPowered by Cloudflare`);
    //window.location.href = "https://" + randomProxy + "/proxy/" + downloadurl;
};

function showMessagePopup(message) {
    const proxypopup = document.createElement('div');
    proxypopup.style.position = 'fixed';
    proxypopup.style.top = '50%';
    proxypopup.style.left = '50%';
    proxypopup.style.transform = 'translate(-50%, -50%)';
    proxypopup.style.backgroundColor = 'white';
    proxypopup.style.border = '1px solid black';
    proxypopup.style.padding = '20px';
    proxypopup.style.zIndex = '1000';
    const lines = message.split('\n');
    lines.forEach(line => {
        const proxypopupText = document.createElement('p');
        proxypopupText.textContent = line;
        proxypopupText.setAttribute('style', 'color: black;');
        proxypopup.appendChild(proxypopupText);
    });
    const popupClose = document.createElement('button');
    popupClose.textContent = 'X';
    popupClose.setAttribute('style', 'color: black;');
    popupClose.style.position = 'absolute';
    popupClose.style.top = '10px';
    popupClose.style.right = '10px';
    popupClose.style.cursor = 'pointer';
    proxypopup.appendChild(popupClose);
    document.body.appendChild(proxypopup);
    popupClose.addEventListener('click', () => {
        document.body.removeChild(proxypopup);
    });
}