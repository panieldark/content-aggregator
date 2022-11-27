import React from "react";
import {Form, Formik} from "formik";
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {Wrapper} from "../components/Wrapper";
import {InputField} from "../components/InputField";
import {useRegisterMutation} from "../generated/graphql";
import {toErrorMap} from "../utils/toErrorMap";
import {useRouter} from "next/router";

interface registerProps {
}

const Register: React.FC<registerProps> = ({}) => {
    const router = useRouter();
    const [, registerMutation] = useRegisterMutation();
    return (
        <Wrapper variant={'small'}>
        <Formik initialValues={{username: "", password: ""}}
                onSubmit={async (values, {setErrors}) => {
            const response = await registerMutation(values);
            if (response.data?.register.errors) {
                setErrors(toErrorMap(response.data.register.errors))
            } else if (response.data?.register.user) {
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
                        Register
                    </Button>
                </Form>
            )}
        </Formik>
        </Wrapper>
    )
};

export default Register;