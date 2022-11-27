import {Box, Button, Flex, Link} from "@chakra-ui/react";
import NextLink from "next/link";
import {useMeQuery} from "../generated/graphql";

export const Navbar: React.FC<{}> = ({}) => {
    const [{data, fetching}] = useMeQuery()
    let body = null;
    if (fetching) {}
    else if (!data?.me) {
        body = (<>
            <NextLink href={"/login"} legacyBehavior passHref>
                <Link mr={2}>Login</Link>
            </NextLink>
            <NextLink href={"/register"} legacyBehavior passHref>
                <Link>Register</Link>
            </NextLink>
        </>)
    } else {
        body = (
            <Flex>
                <Box mr={2}>
                    {data.me.user.username}
                </Box>
                <Button variant={"link"}>Log out</Button>
            </Flex>
        )
    }
    return (
        <Flex bg={'tomato'} p={4}>
            <Box ml={'auto'}>
                {body}
            </Box>
        </Flex>
    )
}