// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = toggleBtn.querySelector('span');

    // 检查本地存储中是否有用户之前保存的主题设置
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    // 点击按钮切换主题
    toggleBtn.addEventListener('click', () => {
        let theme = htmlElement.getAttribute('data-theme');
        // 如果是浅色就切深色，反之亦然
        let newTheme = theme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // 保存设置到本地
        updateIcon(newTheme);
    });

    // 更新按钮图标
    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.textContent = '🌙'; // 月亮图标
        } else {
            icon.textContent = '☀️'; // 太阳图标
        }
    }
});