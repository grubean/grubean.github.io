document.addEventListener('DOMContentLoaded', () => {

    // 1. 获取当天日期
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        dateElement.textContent = `${year}-${month}-${day}`;
    }

    // 2. 暗黑模式切换
    const toggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = toggleBtn.querySelector('span');

    // 初始化主题
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

    // 3. 代码块复制功能 (新增)
    // 找到所有的代码块容器
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((block) => {
        // 创建按钮
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copy';

        // 按钮点击事件
        copyButton.addEventListener('click', async () => {
            const code = block.querySelector('code') ? block.querySelector('code').innerText : block.innerText;
            try {
                await navigator.clipboard.writeText(code);
                copyButton.textContent = 'Copied!';
                copyButton.classList.add('copied');
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy!', err);
                copyButton.textContent = 'Error';
            }
        });

        // 将按钮插入到 pre 块中 (确保 pre 是 relative 定位)
        // 有些 Jekyll 主题会包裹一层 div.highlight，这里我们直接插在 pre 里最稳妥
        if (block.parentNode.classList.contains('highlight')) {
            // 如果有外层 wrapper，建议插在 wrapper 里，但插在 pre 里通用性更强
            block.appendChild(copyButton);
        } else {
            block.appendChild(copyButton);
        }
    });
});