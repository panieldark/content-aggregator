import React from "react";
import {Form, Formik} from "formik";
import {Box, Button} from "@chakra-ui/react";
import {Wrapper} from "../components/Wrapper";
import {InputField} from "../components/InputField";
import {useLoginMutation, useRegisterMutation} from "../generated/graphql";
import {toErrorMap} from "../utils/toErrorMap";
import {useRouter} from "next/router";


const Login: React.FC<{}> = ({}) => {
    const router = useRouter();
    const [, loginMutation] = useLoginMutation();
    return (
        <Wrapper variant={'small'}>
            <Formik initialValues={{username: "", password: ""}}
                    onSubmit={async (values, {setErrors}) => {
                        const response = await loginMutation({options: values});
                        if (response.data?.login.errors) {
                            setErrors(toErrorMap(response.data.login.errors))
                        } else if (response.data?.login.user) {
                            await router.push("/");
                        }
                    }}>
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
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
};

export default Login;