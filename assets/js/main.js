document.addEventListener('DOMContentLoaded', () => {
    // 1. 锁屏解锁逻辑 (Unlock Logic)
    const lockScreen = document.querySelector('.lock-screen-layer');
    const contentLayer = document.querySelector('.content-layer-fixed');
    let isLocked = true;

    function unlock() {
        if (!isLocked) return;
        isLocked = false;
        // 添加 class 让 CSS 处理动画
        lockScreen.classList.add('unlocked');
        // 解锁后允许文章层滚动
        contentLayer.style.overflowY = 'auto';
    }

    function lock() {
        // 如果需要重新锁屏（可选功能，目前设计为解锁后就保持解锁）
        // isLocked = true;
        // lockScreen.classList.remove('unlocked');
    }

    // 监听滚轮 (PC)
    window.addEventListener('wheel', (e) => {
        if (isLocked && e.deltaY > 0) {
            unlock();
        }
    });

    // 监听触摸 (手机)
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, {passive: true});

    window.addEventListener('touchmove', (e) => {
        if (isLocked) {
            const touchEndY = e.touches[0].clientY;
            // 如果向上滑动超过 50px
            if (touchStartY - touchEndY > 50) {
                unlock();
            }
        }
    }, {passive: true});

    // 点击箭头也能解锁
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if(scrollIndicator) {
        scrollIndicator.addEventListener('click', unlock);
    }


    // 2. 暗黑模式逻辑 (Dark Mode)
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