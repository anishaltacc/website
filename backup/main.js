// Three.js is loaded via CDN script tag in HTML

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const iconSun = document.querySelector('.icon-sun');
    const iconMoon = document.querySelector('.icon-moon');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            // Toggle icons
            if (body.classList.contains('light-mode')) {
                iconSun.style.display = 'block';
                iconMoon.style.display = 'none';
            } else {
                iconSun.style.display = 'none';
                iconMoon.style.display = 'block';
            }
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            // Simple animation for hamburger
            const spans = mobileBtn.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                navList.style.display = 'flex';
                navList.style.position = 'absolute';
                navList.style.top = '100%';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.background = '#0a0a0a';
                navList.style.flexDirection = 'column';
                navList.style.padding = '2rem';
                navList.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            } else {
                navList.style.display = '';
            }
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .work-item, .about-content, .contact-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Scroll Animation for Reveal Text
    const revealElements = document.querySelectorAll('.reveal-text');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Add class for animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Initialize 3D Scenes
    // Initialize Three.js Hero Visual - Prism Background
    function initThreeJS() {
        const container = document.querySelector('.hero-visual');
        if (!container) return;

        container.innerHTML = '';

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);

        // Create Prism shapes with vibrant colors
        const prisms = [];
        const colors = [
            0xff006e, // Pink
            0x8338ec, // Purple
            0x3a86ff, // Blue
            0x06ffa5, // Cyan
            0xffbe0b, // Yellow
            0xfb5607  // Orange
        ];

        // Create multiple rotating prisms
        for (let i = 0; i < 6; i++) {
            const geometry = new THREE.OctahedronGeometry(0.8, 0);
            const material = new THREE.MeshPhysicalMaterial({
                color: colors[i],
                metalness: 0.3,
                roughness: 0.2,
                transparent: true,
                opacity: 0.8,
                emissive: colors[i],
                emissiveIntensity: 0.2
            });

            const prism = new THREE.Mesh(geometry, material);

            // Position prisms in a circular pattern
            const angle = (i / 6) * Math.PI * 2;
            const radius = 3;
            prism.position.x = Math.cos(angle) * radius;
            prism.position.y = Math.sin(angle) * radius * 0.5;
            prism.position.z = -2 + (i * 0.5);

            prism.rotation.x = Math.random() * Math.PI;
            prism.rotation.y = Math.random() * Math.PI;

            scene.add(prism);
            prisms.push({
                mesh: prism,
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.01,
                    y: (Math.random() - 0.5) * 0.01,
                    z: (Math.random() - 0.5) * 0.01
                },
                floatSpeed: Math.random() * 0.5 + 0.5,
                floatOffset: Math.random() * Math.PI * 2
            });
        }

        camera.position.z = 5;

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // Animation
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            prisms.forEach((item, index) => {
                // Rotate prisms
                item.mesh.rotation.x += item.rotationSpeed.x;
                item.mesh.rotation.y += item.rotationSpeed.y;
                item.mesh.rotation.z += item.rotationSpeed.z;

                // Float animation
                item.mesh.position.y += Math.sin(time * item.floatSpeed + item.floatOffset) * 0.001;

                // Mouse parallax
                item.mesh.position.x += (mouseX * 0.5 - item.mesh.position.x) * 0.01;
                item.mesh.position.y += (mouseY * 0.5 - item.mesh.position.y) * 0.01;
            });

            // Gentle camera movement
            camera.position.x = mouseX * 0.5;
            camera.position.y = mouseY * 0.5;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }

        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    }

    // Three.js hero visual removed per user request
    // initThreeJS();
});
