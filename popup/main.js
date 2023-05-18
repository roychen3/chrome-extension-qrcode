const getCurrent = async () => {
  return new Promise((resolve) => {
    chrome.tabs.query(
      { active: true, currentWindow: true }, (tabs) => {
        const currentUrl = tabs[0].url;
        resolve(currentUrl)
      });
  })
}

const generateQRcode = (url) => {
  const qrcode = new QRCode("qrcode");
  qrcode.makeCode(url);
}

const main = async () => {
  const currentUrl = await getCurrent();
  generateQRcode(currentUrl);
}

main();