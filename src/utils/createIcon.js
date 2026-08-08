import { createIcon } from '@chakra-ui/icons';

const createNewIcon = (name, viewbox, d) => {
    const icon = createIcon({ displayName: name, viewBox: viewbox, d: d });
    return icon;
};

export default createNewIcon;
