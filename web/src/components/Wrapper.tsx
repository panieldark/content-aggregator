import {Box} from "@chakra-ui/react";
import React from "react";

interface WrapperProps {
    children: React.ReactNode ,
    variant?: 'small' | 'regular';
}

export const Wrapper: React.FC<WrapperProps> = ({children, variant='regular'}) => {
    return <Box mx="auto" mt={8} maxW={"800px"} w={"100%"}>{children}</Box>;
}