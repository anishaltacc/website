export const content = {
    hero: {
        title: "I Design",
        highlight: "Awesome Experiences",
        subtitle: "Graphic Designer crafting memorable brand identities and digital experiences",
        ctaPrimary: "View Work",
        ctaSecondary: "Get in Touch"
    },
    nav: [
        {
            label: 'Work',
            bgColor: '#1bb986',
            links: [
                { label: 'Nepal Tea Collective', href: '/project/nepal-tea-collective' },
                { label: 'MOCO', href: '/project/moco' },
                { label: 'All Projects', href: '/projects' }
            ]
        },
        {
            label: 'Contact',
            bgColor: '#8338ec',
            links: [
                { label: 'Get in Touch', href: '/contact' },
                { label: 'Email', href: 'mailto:anishaltacc@gmail.com' },
                { label: 'Socials', href: '#footer' }
            ]
        }
    ],
    intro: {
        text: "Crafting digital experiences that blend creativity with purpose. Specializing in brand identity, UI/UX design, and visual storytelling.",
        marquee: "BRAND IDENTITY ✦ UI/UX DESIGN ✦ DIGITAL ART ✦ CREATIVE DIRECTION ✦"
    },
    work: {
        title: "Selected Work",
        viewAll: "View All Projects"
    },
    projectsPage: {
        title: "Projects"
    },
    projects: [
        {
            id: 'nepal-tea-collective',
            slug: 'nepal-tea-collective',
            title: 'Nepal Tea Collective',
            category: 'Branding & Packaging',
            year: '2024',
            image: '/assets/nepal-tea-cover.jpg',
            heroImage: '/assets/NTC/Cover.png',
            tags: ['Branding', 'Packaging', 'Web Design', 'Social Media', 'Email Design', 'Illustrations'],
            description: 'A comprehensive visual identity and packaging system for Nepal Tea Collective, covering social media, email design, illustrations, print media, packaging, and website assets.',
            details: {
                industry: 'F&B E-Commerce & Wholesale',
                scope: 'Social Media, Email Design, Illustrations, Print Media, Packaging, Website Assets'
            },
            content: [
                {
                    type: 'image',
                    src: '/assets/NTC/Banneee.png',
                    alt: 'Project Banner'
                },
                {
                    type: 'twoColumn',
                    left: {
                        type: 'text',
                        heading: 'Packaging Design',
                        body: 'We created a packaging system that highlights the origin and unique characteristics of each tea variety, using vibrant colors and illustrations to tell the story of the farmers and the land.'
                    },
                    right: {
                        type: 'image',
                        src: '/assets/NTC/Teabag.png',
                        alt: 'Tea Bag Packaging'
                    }
                },
                {
                    type: 'imageGrid',
                    images: [
                        { src: '/assets/NTC/Menu Design.png', alt: 'Menu Design' },
                        { src: '/assets/NTC/types of tea.png', alt: 'Types of Tea' }
                    ]
                }
            ],
            featured: true
        },
        {
            id: 'moco',
            slug: 'moco',
            title: 'MOCO',
            category: 'Fintech UI/UX',
            year: '2023',
            image: '/assets/project-2.png',
            heroImage: '/assets/project-2.png',
            tags: ['UI/UX', 'Fintech', 'App Design'],
            description: 'Streamlining financial management for the next generation. MOCO provides a seamless interface for tracking expenses, investing, and managing personal finances.',
            details: {
                industry: 'Fintech',
                scope: 'Mobile App Design, Branding, Design System'
            },
            content: [
                {
                    type: 'image',
                    src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop',
                    alt: 'MOCO Interface'
                }
            ],
            featured: true
        },
        {
            id: 'weplay',
            slug: 'weplay',
            title: 'WePlay',
            category: 'Sports Tech Branding',
            year: '2023',
            image: '/assets/project-1.png',
            heroImage: '/assets/project-1.png',
            tags: ['Branding', 'Sports Tech'],
            description: 'Empowering athletes and sports enthusiasts through a unified platform for discovery, booking, and community building.',
            details: {
                industry: 'Sports & Entertainment',
                scope: 'Brand Identity, App Design'
            },
            content: [
                {
                    type: 'image',
                    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2670&auto=format&fit=crop',
                    alt: 'WePlay App'
                }
            ],
            featured: true
        },
        {
            id: 'yamaha-music-nepal',
            slug: 'yamaha-music-nepal',
            title: 'Yamaha Music Nepal',
            category: 'Social Media & Print',
            year: '2023',
            image: '/assets/project-3.png',
            heroImage: '/assets/project-3.png',
            tags: ['Social Media', 'Print Design'],
            description: 'Creative campaigns and visual communication for Yamaha Music Nepal, focusing on engagement and brand awareness within the local music community.',
            details: {
                industry: 'Music & Retail',
                scope: 'Social Media Management, Print Collaterals'
            },
            content: [],
            featured: true
        },
        {
            id: 'wwf',
            slug: 'wwf',
            title: 'WWF',
            category: 'Illustration & Print',
            year: '2023',
            image: '/assets/project-4.png',
            heroImage: '/assets/project-4.png',
            tags: ['Illustration', 'Print Design', 'Conservation'],
            description: 'Visual storytelling for WWF initiatives, using custom illustrations and print materials to raise awareness for environmental conservation.',
            details: {
                industry: 'Non-Profit',
                scope: 'Illustration, Print Design'
            },
            content: [],
            featured: false
        },
        {
            id: 'scholarport',
            slug: 'scholarport',
            title: 'ScholarPort',
            category: 'Brand Identity',
            year: '2022',
            image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop',
            heroImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop',
            tags: ['Education', 'Branding'],
            description: 'Connecting students with global education opportunities through a clear and trustworthy brand identity.',
            details: {
                industry: 'Education',
                scope: 'Brand Strategy, Visual Identity'
            },
            content: [],
            featured: false
        },
        {
            id: 'us-embassy-nepal',
            slug: 'us-embassy-nepal',
            title: 'U.S. Embassy Nepal',
            category: 'Editorial Design',
            year: '2022',
            image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop',
            heroImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop',
            tags: ['Editorial', 'Layout Design'],
            description: 'Designing annual reports and impact stories for the U.S. Embassy in Nepal, focusing on readability and visual impact.',
            details: {
                industry: 'Government',
                scope: 'Editorial Design, Data Visualization'
            },
            content: [],
            featured: false
        },
        {
            id: 'one-house-solution',
            slug: 'one-house-solution',
            title: 'One House Solution',
            category: 'Print Media',
            year: '2022',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
            heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
            tags: ['Real Estate', 'Print Design'],
            description: 'Marketing collateral and signage for a real estate solutions provider, ensuring a professional and accessible brand presence.',
            details: {
                industry: 'Real Estate',
                scope: 'Brochure Design, Signage'
            },
            content: [],
            featured: false
        },
        {
            id: 'fitbar',
            slug: 'fitbar',
            title: 'FitBar',
            category: 'Packaging Design',
            year: '2022',
            image: 'https://images.unsplash.com/photo-1623341214823-67e283090365?q=80&w=2670&auto=format&fit=crop',
            heroImage: 'https://images.unsplash.com/photo-1623341214823-67e283090365?q=80&w=2670&auto=format&fit=crop',
            tags: ['F&B', 'Packaging'],
            description: 'Vibrant and energetic packaging for a health-focused snack bar, designed to stand out on shelves.',
            details: {
                industry: 'F&B',
                scope: 'Packaging Design'
            },
            content: [],
            featured: false
        }
    ],
    footer: {
        tagline: "Graphic Designer crafting memorable brand identities",
        links: {
            work: [
                { label: "Nepal Tea Collective", url: "/project/nepal-tea-collective" },
                { label: "MOCO", url: "/project/moco" },
                { label: "All Projects", url: "/projects" }
            ],
            support: [
                { label: "Contact", url: "/contact" },
                { label: "Email", url: "mailto:anishaltacc@gmail.com" },
                { label: "Feedback", url: "#feedback" }
            ],
            more: [
                { label: "Pricing", url: "#pricing" },
                { label: "Terms", url: "#terms" },
                { label: "Privacy", url: "#privacy" }
            ],
            social: [
                { label: "Discord", url: "https://discord.com" },
                { label: "LinkedIn", url: "https://linkedin.com" }
            ]
        },
        copyright: "© 2024 Anish Design. All rights reserved."
    },
    contact: {
        title: "Have Questions?",
        faqs: [
            {
                question: "01. What is your current role?",
                answer: "I am currently working as a freelance Graphic Designer and UI/UX Specialist, helping brands build their identity."
            },
            {
                question: "02. How much does it cost for a high performing website?",
                answer: "Pricing depends on the scope and complexity of the project. I offer tailored packages to meet your specific needs."
            },
            {
                question: "03. How long will the work take from start to finish?",
                answer: "Timeline varies by project. A typical brand identity project takes 2-4 weeks, while a full website can take 4-8 weeks."
            },
            {
                question: "04. Are you available to join as full time?",
                answer: "I am currently open to discussing full-time opportunities that align with my skills and values."
            }
        ],
        emailPrompt: "Prefer email?",
        emailAddress: "anishaltacc@gmail.com"
    }
};
