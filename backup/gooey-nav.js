// Gooey Nav Effect
class GooeyNav {
    constructor() {
        this.nav = document.querySelector('.nav-list');
        this.navItems = document.querySelectorAll('.nav-link');
        this.blob = null;
        this.currentIndex = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.targetWidth = 0;
        this.currentWidth = 0;

        this.init();
    }

    init() {
        if (!this.nav || this.navItems.length === 0) return;

        // Create blob element
        this.createBlob();

        // Add event listeners
        this.navItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => this.onHover(item, index));
        });

        this.nav.addEventListener('mouseleave', () => this.onLeave());

        // Set initial position
        this.setInitialPosition();

        // Start animation loop
        this.animate();
    }

    createBlob() {
        this.blob = document.createElement('div');
        this.blob.className = 'gooey-blob';
        this.nav.appendChild(this.blob);
    }

    setInitialPosition() {
        // Find active link or use first item
        const activeLink = document.querySelector('.nav-link.active') || this.navItems[0];
        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            const navRect = this.nav.getBoundingClientRect();

            this.targetX = this.currentX = rect.left - navRect.left;
            this.targetY = this.currentY = rect.top - navRect.top;
            this.targetWidth = this.currentWidth = rect.width;

            this.updateBlobPosition(true);
        }
    }

    onHover(item, index) {
        this.currentIndex = index;
        const rect = item.getBoundingClientRect();
        const navRect = this.nav.getBoundingClientRect();

        this.targetX = rect.left - navRect.left;
        this.targetY = rect.top - navRect.top;
        this.targetWidth = rect.width;

        this.blob.style.opacity = '1';
    }

    onLeave() {
        // Return to active item or hide
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            const navRect = this.nav.getBoundingClientRect();

            this.targetX = rect.left - navRect.left;
            this.targetY = rect.top - navRect.top;
            this.targetWidth = rect.width;
        } else {
            this.blob.style.opacity = '0';
        }
    }

    updateBlobPosition(instant = false) {
        if (instant) {
            this.blob.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;
            this.blob.style.width = `${this.currentWidth}px`;
        } else {
            this.blob.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;
            this.blob.style.width = `${this.currentWidth}px`;
        }
    }

    animate() {
        // Smooth lerp animation
        const lerp = (start, end, factor) => start + (end - start) * factor;
        const smoothing = 0.15;

        this.currentX = lerp(this.currentX, this.targetX, smoothing);
        this.currentY = lerp(this.currentY, this.targetY, smoothing);
        this.currentWidth = lerp(this.currentWidth, this.targetWidth, smoothing);

        this.updateBlobPosition();

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new GooeyNav();
    });
} else {
    new GooeyNav();
}
