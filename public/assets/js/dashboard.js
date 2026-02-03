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
// ฟังก์ชันสำหรับซ่อน Loader
    const hideLoader = () => {
        if (loader) {
            // เพิ่ม class 'hidden' เพื่อสั่งให้ CSS ทำการ fade out
            loader.classList.add('hidden');
            
            // (Optional) ลบ element ทิ้งไปเลยหลังจาก fade out เสร็จ (0.5s)
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    };

    // ดักจับ Event เมื่อ iframe โหลดเสร็จ
    if (iframe) {
        iframe.onload = hideLoader;
    }

    // อัปเดตฟังก์ชันรีเฟรช: ให้แสดง Loader กลับมาก่อนรีเฟรช
    window.refreshReport = () => {
        if (iframe && loader) {
            loader.classList.remove('hidden');
            loader.style.display = 'flex';
            // ใช้ setTimeout เล็กน้อยเพื่อให้ Browser ทันวาดตัว Loader ก่อนจะสั่งรีเฟรชจริง
            setTimeout(() => {
                 iframe.src = iframe.src;
            }, 100);
        }
    };
});