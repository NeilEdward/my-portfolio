import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'Space Grotesk', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    styles: {
        global: (props) => {
            const isDark = props.colorMode === 'dark';

            return {
                ':root': {
                    '--portfolio-bg': isDark ? '#050816' : '#f7fbff',
                    '--portfolio-heading': isDark ? '#ffffff' : '#0f172a',
                    '--portfolio-text': isDark ? 'rgba(255, 255, 255, 0.86)' : '#243244',
                    '--portfolio-muted': isDark ? 'rgba(255, 255, 255, 0.68)' : '#475569',
                    '--portfolio-soft': isDark ? 'rgba(255, 255, 255, 0.5)' : '#64748b',
                    '--portfolio-faint': isDark ? 'rgba(255, 255, 255, 0.38)' : '#8290a3',
                    '--portfolio-border': isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(15, 23, 42, 0.14)',
                    '--portfolio-border-soft': isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.09)',
                    '--portfolio-border-strong': isDark ? 'rgba(255, 255, 255, 0.28)' : 'rgba(15, 23, 42, 0.24)',
                    '--portfolio-surface': isDark ? 'rgba(255, 255, 255, 0.045)' : 'rgba(255, 255, 255, 0.72)',
                    '--portfolio-surface-strong': isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.88)',
                    '--portfolio-chip': isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.66)',
                    '--portfolio-hover': isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.06)',
                    '--portfolio-header': isDark ? 'rgba(5, 8, 22, 0.72)' : 'rgba(248, 250, 252, 0.78)',
                    '--portfolio-drawer': isDark ? 'rgba(5, 8, 22, 0.96)' : 'rgba(248, 250, 252, 0.96)',
                    '--portfolio-field-bg': isDark ? 'rgba(0, 0, 0, 0.24)' : 'rgba(255, 255, 255, 0.82)',
                    '--portfolio-cyan-text': isDark ? '#a5f3fc' : '#0e7490',
                    '--portfolio-purple-text': isDark ? '#ddd6fe' : '#6d28d9',
                    '--portfolio-shadow': isDark ? '0 32px 100px rgba(0, 0, 0, 0.28)' : '0 28px 80px rgba(15, 23, 42, 0.1)',
                },
                body: {
                    bg: 'var(--portfolio-bg)',
                    color: 'var(--portfolio-text)',
                },
                '::selection': {
                    bg: 'cyan.300',
                    color: 'gray.900',
                },
            };
        },
    },
});

export default theme;
