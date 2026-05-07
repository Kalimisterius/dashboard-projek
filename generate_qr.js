import QRCode from 'qrcode';
import path from 'path';
import process from 'node:process';

const url = 'https://ccc069be2f21362e-45-251-4-235.serveousercontent.com';
const outputPath = path.join(process.cwd(), 'public', 'dashboard_qr.png');

QRCode.toFile(outputPath, url, {
  color: {
    dark: '#000000',
    light: '#ffffff'
  },
  width: 400
}, function (err) {
  if (err) throw err;
  console.log('QR Code generated at: ' + outputPath);
});
