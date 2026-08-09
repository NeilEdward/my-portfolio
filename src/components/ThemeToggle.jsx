import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;

    return (
        <Tooltip label={label} fontSize="sm">
            <IconButton
                aria-label={label}
                icon={isDark ? <SunIcon /> : <MoonIcon />}
                variant="ghost"
                color="var(--portfolio-text)"
                border="1px solid"
                borderColor="var(--portfolio-border)"
                borderRadius="full"
                onClick={toggleColorMode}
                _hover={{ bg: 'var(--portfolio-hover)', color: 'var(--portfolio-heading)' }}
                _focusVisible={{ boxShadow: '0 0 0 3px rgba(103, 232, 249, 0.45)' }}
            />
        </Tooltip>
    );
};

export default ThemeToggle;
