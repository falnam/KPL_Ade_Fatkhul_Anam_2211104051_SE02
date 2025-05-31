const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

// Inisialisasi subject
const subject = new Subject();

// Inisialisasi observers
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

// Menambahkan observer ke subject
subject.attach(observer1);
subject.attach(observer2);

// Notifikasi ke semua observer
console.log("\n=== Notifikasi 1 ===");
subject.notify("Update terbaru: Versi 1.0");

console.log("\n=== Notifikasi 2 ===");
subject.notify("Update terbaru: Versi 1.1");

console.log("\n=== Notifikasi 3 ===");
subject.notify("Update terbaru: Versi 2.0");
// Setelah notifikasi ketiga, observer akan unsubscribe secara otomatis

console.log("\n=== Notifikasi 4 ===");
subject.notify("Update terbaru: Versi 2.1");
// Observer yang sudah unsubscribe tidak akan menerima notifikasi ini
