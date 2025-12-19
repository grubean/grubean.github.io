document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = toggleBtn.querySelector('span');

    // 读取本地存储
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    toggleBtn.addEventListener('click', () => {
        let theme = htmlElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
});