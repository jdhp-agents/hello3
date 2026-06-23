/**
 * Navigation bar component.
 * Creates a responsive Bootstrap navbar and injects it into the HTML pages.
 * @module navbar
 */

/**
 * Navigation items configuration.
 * @type {Array<{href: string, label: string, icon: string}>}
 */
const NAV_ITEMS = [
    { href: 'index.html', label: 'Home', icon: 'bi-house' },
    { href: 'info.html', label: 'Info', icon: 'bi-info-circle' },
    { href: 'settings.html', label: 'Settings', icon: 'bi-gear' }
];

/**
 * Determine if the provided href should be marked as active.
 * @param {string} href - The href of the nav item to check.
 * @returns {boolean} True if the item matches the current page.
 */
function isActivePage(href) {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    return currentPage === href;
}

/**
 * Creates the navbar HTML string.
 * @returns {string} The navbar HTML.
 */
function createNavbar() {
    const navItems = NAV_ITEMS.map(item => {
        const activeClass = isActivePage(item.href) ? ' active' : '';
        const ariaCurrent = isActivePage(item.href) ? ' aria-current="page"' : '';
        return `
            <li class="nav-item">
                <a class="nav-link${activeClass}" href="${item.href}"${ariaCurrent}>
                    <i class="${item.icon} me-1"></i>${item.label}
                </a>
            </li>`;
    }).join('');

    return `
        <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-4">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <i class="bi bi-rocket-fill me-2"></i>Hello3
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarMain" aria-controls="navbarMain" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMain">
                    <ul class="navbar-nav ms-auto">
                        ${navItems}
                    </ul>
                </div>
            </div>
        </nav>`;
}

/**
 * Initializes and injects the navbar into the page.
 * Must be called after DOM is ready.
 */
function initNavbar() {
    const navbarHtml = createNavbar();
    document.body.insertAdjacentHTML('afterbegin', navbarHtml);
}

// Initialize navbar when DOM is ready
document.addEventListener('DOMContentLoaded', initNavbar);
