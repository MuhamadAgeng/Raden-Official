# Panduan Rename Folder Project

## Cara Aman Rename Folder:

### 1. Stop Development Server
```bash
# Tekan Ctrl + C di terminal untuk stop server
```

### 2. Close VS Code
- Save semua file yang terbuka
- Close VS Code completely

### 3. Rename Folder
- Buka File Explorer
- Navigate ke: `e:\Raden&Partner\Proyek\`
- Rename `partner-portal-main` menjadi nama baru yang diinginkan

### 4. Buka Kembali di VS Code
- File → Open Folder
- Pilih folder yang sudah di-rename

### 5. Restart Development Server
```bash
# Di terminal baru:
bun run dev
```

### 6. Hard Refresh Browser
- Tekan `Ctrl + Shift + R`
- Atau buka http://localhost:3000

## Nama Folder yang Direkomendasikan:
- `raden-official`
- `raden-partner-website`
- `partner-portal-v2`
- `raden-partner-website`

## Yang Tidak Perlu Diubah:
- ✅ Semua import statements (tetap berfungsi)
- ✅ Package.json
- ✅ Vite config
- ✅ File dalam folder

## Catatan:
- Git tracking akan tetap berfungsi
- Tidak akan ada error
- Semua fitur tetap normal
