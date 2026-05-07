@echo off
title Membuka Dashboard PowderFlow...
echo Sedang menyiapkan dashboard, mohon tunggu sebentar...

:: Membuka browser ke alamat dashboard
start http://localhost:5173

:: Menjalankan server aplikasi
npm run dev

pause
