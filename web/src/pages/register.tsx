import React from "react";
import {Form, Formik} from "formik";
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {Wrapper} from "../components/Wrapper";
import {InputField} from "../components/InputField";

interface registerProps {
}

const Register: React.FC<registerProps> = ({}) => {
    return (
        <Wrapper variant={'small'}>
        <Formik initialValues={{username: "", password: ""}} onSubmit={console.log}>
            {({ isSubmitting }) => (
                <Form>
                    <InputField name={"username"} placeholder={"username"} label={"Username"} />
                    <Box mt={4}>
                    <InputField name={"password"} placeholder={"password"} label={"Password"} type={"password"} />
                    </Box>
                    <Button type={"submit"}
                            colorScheme={"teal"}
                            isLoading={isSubmitting}
                            mt={4}
                    >
                        Register
                    </Button>
                </Form>
            )}
        </Formik>
        </Wrapper>
    )
};

export default Register;