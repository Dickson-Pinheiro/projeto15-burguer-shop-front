import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field } from "formik"
import useApi from "../../hooks/useApi.js"
import * as Yup from 'yup';


import { ContainerLogin, LogoStyle, ContainerForm, ContainerInputForm } from "./style";

export default function Login() {
    const api = useApi()
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = useState(false)

    async function submitLogin(values) {

        const loginData = await api.loginUser(values.email, values.password)
        console.log(loginData)
        if (loginData.success) {
            setErrorLogin(false)
            localStorage.setItem("token", loginData.token)
            localStorage.setItem("userId", loginData.id)
            navigate("/")
            return
        }
        setErrorLogin(true)
        values.email = ""
        values.password = ""
    }


    return (
        <ContainerLogin>
            <LogoStyle>BurguerShop</LogoStyle>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={submitLogin}
                validationSchema={Yup.object({
                    email: Yup.string().email("Invalid email address").required('Required'),
                    password: Yup.string().required('Required'),
                })}
            >
                {
                    formik => (
                        <ContainerForm onSubmit={formik.handleSubmit}>
                            {errorLogin && <p>Login ou senha incorretos</p>}
                            <ContainerInputForm>
                                <Field
                                    type="email"
                                    placeholder="e-mail"
                                    name="email"
                                    required
                                />
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <span>{formik.errors.email}</span>
                                    ) : null
                                }

                            </ContainerInputForm>
                            <ContainerInputForm>
                                <Field
                                    type="password"
                                    placeholder="senha"
                                    name="password"
                                    required
                                />
                                {
                                    formik.touched.password && formik.errors.password ? (
                                        <span>{formik.errors.password}</span>
                                    ) : null
                                }

                            </ContainerInputForm>

                            <button type="submit">Entrar</button>
                        </ContainerForm>
                    )
                }
            </Formik>

            <Link to="/cadastro">Não possui uma conta? Cadastre-se!</Link>
        </ContainerLogin>
    )
}