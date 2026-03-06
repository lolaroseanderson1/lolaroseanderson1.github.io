/**
 * Main JavaScript for Lola Anderson Portfolio
 * Handles theme toggling and mobile navigation
 */

(function() {
    'use strict';

    /**
     * Toggle between light and dark color modes
     * Updates toggle button icon and chevron icon (on homepage)
     */
    function toggleLightMode() {
        var body = document.body;
        var toggleBtn = document.getElementById('toggle');
        var chevronIcon = document.getElementById('next');

        var isLightMode = body.classList.toggle('light-mode');

        if (toggleBtn) {
            if (isLightMode) {
                toggleBtn.src = 'icons_and_such/icons8-dark-mode-50.png';
                toggleBtn.style.width = '35px';
            } else {
                toggleBtn.src = 'icons_and_such/icons8-light-mode-78.png';
                toggleBtn.style.width = '45px';
            }
        }

        if (chevronIcon) {
            chevronIcon.src = isLightMode
                ? 'icons_and_such/icons8-chevron-down-black.png'
                : 'icons_and_such/icons8-chevron-down-white.png';
        }
    }

    /**
     * Toggle mobile navigation menu visibility
     */
    function toggleMobileNav() {
        var nav = document.getElementById('myTopnav');
        if (nav) {
            nav.classList.toggle('responsive');
        }
    }

    // Expose functions globally for onclick handlers
    window.toggleLightMode = toggleLightMode;
    window.toggleMobileNav = toggleMobileNav;
})();
