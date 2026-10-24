console.log('Loading navbar...');

function initNavbar() {
    const saved = localStorage.getItem('theme');
    const preSet = document.documentElement.getAttribute('data-theme');
    const theme = saved || preSet || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    function syncIcons(theme) {
        console.log(document.getElementById('theme-toggle'));
        console.log(document.getElementById('theme-toggle-mobile'));
        const icon = document.getElementById('theme-icon');
        const iconM = document.getElementById('theme-icon-mobile');
        const symbol = theme === 'dark' ? '☀' : '☾';
        if (icon) icon.textContent = symbol;
        if (iconM) iconM.textContent = symbol;
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        syncIcons(theme);
    }


    syncIcons(theme);

    function toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    document.getElementById('theme-toggle').addEventListener('click', toggle);
    document.getElementById('theme-toggle-mobile').addEventListener('click', toggle);
}
