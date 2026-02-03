document.addEventListener('DOMContentLoaded', () => {
    // แสดงวันที่ปัจจุบัน
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.innerText = new Date().toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // ฟังก์ชันรีเฟรช Iframe
    window.refreshReport = () => {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.src; 
        }
    };
});