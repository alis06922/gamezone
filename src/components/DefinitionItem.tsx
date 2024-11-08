import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface Props {
    terms: string;
    children: ReactNode | ReactNode[]
}

function DefinitionItem({ terms, children }: Props) {
    return <>
        <Box marginY={5}>
            <Heading as="dt" fontSize="md" color='gray.600'>{terms}</Heading>
            <dd>{children}</dd>
        </Box>
    </>
}

export default DefinitionItem