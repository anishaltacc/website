const projectsData = [
    {
        id: 'nepal-tea-collective',
        slug: 'nepal-tea-collective',
        title: 'Nepal Tea Collective',
        category: 'Branding & Packaging',
        tags: ['Branding', 'Packaging', 'Web Design', 'Social Media', 'Email Design', 'Illustrations'],
        description: 'A comprehensive visual identity and packaging system for Nepal Tea Collective, covering social media, email design, illustrations, print media, packaging, and website assets.',
        heroImage: '/assets/NTC/Cover.png',
        heroBgColor: '#0a0a0a',
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
        ]
    }
];

export default projectsData;
