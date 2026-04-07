let isOpen = false;

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (!isOpen) {
        sidebar.style.left = "0";
        overlay.style.display = "block";
        isOpen = true;
    } else {
        sidebar.style.left = "-250px";
        overlay.style.display = "none";
        isOpen = false;
    }
}