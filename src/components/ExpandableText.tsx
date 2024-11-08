import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

interface Props {
    children: string
}
function ExpandableText({ children }: Props) {
    const limit = 300;
    const [expandad, setExpanded] = useState(false);

    if (children.length <= limit) return <Text>children</Text>

    const summary = expandad ? children : children.substring(0, limit) + '...'

    return <>
        {summary}
        <Button size="xs" fontWeight="bold" colorScheme='yellow' marginLeft="1" onClick={() => setExpanded(!expandad)} >{expandad ? 'Show Less' : 'Load More'}</Button>
    </>
}

export default ExpandableText