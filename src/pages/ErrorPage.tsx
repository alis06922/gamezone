import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Layout from './Layout';

function ErrorPage() {
    const error = useRouteError();
    return <>
        <Layout />
        <Box padding={5}>
            <Heading>Oops</Heading>
            <Text>{isRouteErrorResponse(error) ? "This page does not exist" : "An unexoected error occured."} </Text>
        </Box>

    </>
}

export default ErrorPage