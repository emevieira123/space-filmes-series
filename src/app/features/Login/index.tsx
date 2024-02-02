import { Button, Card, CardBody, Flex, FormControl, Icon, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/hooks/useAuth";
import { path } from "../../../infra/path";
import { Logo } from "../../../shared/Icons/Logo";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface SignInType {
  email: string;
  password: string;
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<SignInType>();
  const auth = useAuth();
  const navigate = useNavigate();

  async function signIn(data: SignInType) {
    try {
      setIsLoading(!isLoading);
      await auth.authenticated(data.email, data.password);
      navigate(path.ADMIN_HOME);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <Flex bg="blackAlpha.900" color="white" h="100vh" align="center" justify="center">
      <Card bg="transparent" border="1px" borderColor="gray" height="20rem">
        <CardBody>
          <Flex h="100%" align="center" justify="center" flexDirection="column">
            <Flex mb="2rem" align="center" gap={3}>
              <Icon as={Logo} fontSize={54} />
              <Text color="white" fontSize={24} fontWeight="bold">Space - Login</Text>
            </Flex>
            <form onSubmit={handleSubmit(signIn)}>
              <FormControl w="25rem">
                <Input
                  id="input-email"
                  placeholder="E-mail"
                  {...register("email")}
                  h="3rem"
                  borderColor="gray"
                  borderBottomLeftRadius={0}
                  borderBottomRightRadius={0}
                  color="white"
                  focusBorderColor="green.500"
                />
                <InputGroup>
                  <Input
                    id="input-password"
                    placeholder="Senha"
                    {...register("password")}
                    h="3rem"
                    borderColor="gray"
                    borderTop={0}
                    borderTopLeftRadius={0}
                    borderTopRightRadius={0}
                    color="white"
                    type={showPassword ? "text" : "password"}
                    focusBorderColor="green.500"
                  />
                  <InputRightElement width="2.5rem" h="100%">
                    <Icon
                      fontSize="1.5rem"
                      color="gray.600"
                      cursor="pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      as={showPassword ? MdVisibilityOff : MdVisibility}
                      aria-label="Ativar ou desativar visualização de senha"
                    />
                  </InputRightElement>
                </InputGroup>
                <Button
                  mt="2rem"
                  w="100%"
                  h="3rem"
                  colorScheme="green"
                  type="submit"
                  isLoading={isLoading}
                >
                  Entrar
                </Button>
              </FormControl>
            </form>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}
