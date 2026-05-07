@echo off
title Membuka PowderFlow Dashboard...
echo Sedang menyalakan server... mohon tunggu sebentar.
echo.

:: Menjalankan npm run dev di latar belakang
start /min cmd /c "npm run dev"

:: Menunggu 3 detik agar server siap
timeout /t 3 /nobreak > nul

:: Membuka dashboard di browser bawaan
start http://localhost:5173

echo Dashboard sudah terbuka!
echo Jangan tutup jendela hitam ini jika ingin aplikasi tetap berjalan.
echo Anda bisa me-minimize jendela ini.
timeout /t 5
exit
