import { IconButton, Tooltip } from '@chakra-ui/react';

const Account = ({ label, link, size = 'md', children }) => (
    <Tooltip label={label} fontSize="sm">
        <IconButton
            as="a"
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            icon={children}
            size={size}
            color="whiteAlpha.800"
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            transition="background 0.2s ease, transform 0.2s ease"
            _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-2px)' }}
            _focusVisible={{ boxShadow: '0 0 0 3px rgba(103, 232, 249, 0.45)' }}
        />
    </Tooltip>
);

export default Account;
