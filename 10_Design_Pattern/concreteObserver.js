const Observer = require('./observer');

class ConcreteObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
        this.notificationCount = 0;
        this.maxNotifications = 3; // Batas notifikasi sebelum unsubscribe
    }

    update(data) {
        this.notificationCount++;
        console.log(`${this.name} menerima data: ${data} (Notifikasi ke-${this.notificationCount})`);
        
        if (this.notificationCount >= this.maxNotifications) {
            console.log(`${this.name} telah menerima ${this.maxNotifications} notifikasi dan akan berhenti berlangganan.`);
        }
    }
    
    // Metode untuk memeriksa apakah observer ini harus unsubscribe
    shouldUnsubscribe() {
        return this.notificationCount >= this.maxNotifications;
    }
}

module.exports = ConcreteObserver;