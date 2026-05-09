import type { MetadataRoute } from 'next';

const BASE_URL = 'https://bestivfcentreinkolkata.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/admin', '/api/internal', '/api/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/admin', '/api/internal'],
                crawlDelay: 1,
            },
            {
                userAgent: 'Googlebot-Image',
                allow: ['/', '/images/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/admin', '/api/internal'],
                crawlDelay: 2,
            },
            // AI crawlers — allow so the brand surfaces in ChatGPT, Perplexity, Claude, Gemini answers
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'OAI-SearchBot', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'anthropic-ai', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'Claude-Web', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'Applebot', allow: '/' },
            { userAgent: 'Applebot-Extended', allow: '/' },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
