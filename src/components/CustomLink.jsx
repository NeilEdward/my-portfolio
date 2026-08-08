import { Link } from '@chakra-ui/react';

export const CustomNavLink = ({ link, path, onClick, px = 3, py = 2 }) => (
    <Link
        href={path}
        px={px}
        py={py}
        borderRadius="full"
        color="whiteAlpha.700"
        fontSize="sm"
        fontWeight="medium"
        textAlign="center"
        transition="color 0.2s ease, background 0.2s ease"
        _hover={{ bg: 'whiteAlpha.100', color: 'white', textDecoration: 'none' }}
        _focusVisible={{ boxShadow: '0 0 0 3px rgba(103, 232, 249, 0.45)' }}
        onClick={onClick}
    >
        {link}
    </Link>
);
