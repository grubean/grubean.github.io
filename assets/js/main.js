document.addEventListener('DOMContentLoaded', () => {

    // 1. 获取当天日期 (格式: 2025-12-19)
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const year = now.getFullYear();
        // 月份+1，并补0
        const month = String(now.getMonth() + 1).padStart(2, '0');
        // 日期补0
        const day = String(now.getDate()).padStart(2, '0');

        dateElement.textContent = `${year}-${month}-${day}`;
    }

    // 2. 暗黑模式切换
    const toggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = toggleBtn.querySelector('span');

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