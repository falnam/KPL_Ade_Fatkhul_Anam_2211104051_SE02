const BankTransferApp = require('./app/BankTransferApp');
 
const app = new BankTransferApp();
app.run();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askTransferAmount() {
    readline.question('Masukkan jumlah transfer: ', (amount) => {
        if (isNaN(amount) || amount.trim() === '') {
            console.log('Input tidak valid, harus angka. Coba lagi.');
            askTransferAmount(); // Ulang lagi
        } else {
            console.log(`Jumlah yang akan ditransfer: Rp${amount}`);
            chooseTransferMethod();
        }
    });
}

function chooseTransferMethod() {
    console.log('Pilih metode transfer:');
    console.log('1. RTO (real-time)');
    console.log('2. SKN');
    console.log('3. RTGS');
    console.log('4. BI FAST');
    console.log('5. Bank Transfer');
    console.log('6. Credit Card');
    console.log('7. QRIS');
    console.log('8. E-Wallet');

    readline.question('Pilih metode (tekan Enter setelah): ', (method) => {
        console.log(`Metode yang dipilih: ${method}`);
        confirmTransfer();
    });
}

function confirmTransfer() {
    readline.question('Ketik "ya" untuk mengkonfirmasi transaksi: ', (confirm) => {
        if (confirm.toLowerCase() === 'ya') {
            console.log('Transaksi berhasil dikonfirmasi!');
        } else {
            console.log('Transaksi dibatalkan.');
        }
        readline.close(); // Tutup input
    });
}

// Start program
askTransferAmount();
