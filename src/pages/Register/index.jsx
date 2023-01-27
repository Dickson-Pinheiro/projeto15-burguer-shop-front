import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup';
import { Formik, Field } from "formik"
import { ColorRing } from "react-loader-spinner";
import useApi from "../../hooks/useApi"
import { ContainerForm, ContainerRegister, LogoStyle, ContainerInputForm } from "./style"
import { useState } from "react";

export default function Register() {
    const [registerError, setRegisterError] = useState(false)
    const navigate = useNavigate()
    const api = useApi()

    async function submitForm(value) {

        try {
            const result = await api.createUser(value.name, value.email, value.password, value.confirmPassword)
            if (result.success) {
                navigate("/login")
                return
            }
            setRegisterError(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ContainerRegister>
            <LogoStyle>BurguerShop</LogoStyle>

            <Formik
                initialValues={{name: "", email: "", password: "", confirmPassword: ""}}
                onSubmit={submitForm}
                validationSchema={Yup.object({
                    name: Yup.string().required("required"),
                    email: Yup.string().email("Invalid email address").required("required"),
                    password: Yup.string().required('required'),
                    confirmPassword: Yup.string().required("required").oneOf([Yup.ref('password'), null], 'Passwords must match')
                })}
            >

                {
                    formik => (
                        <ContainerForm onSubmit={formik.handleSubmit}>
                            {registerError && <p>email já cadastrado</p>}
                            <ContainerInputForm>
                                <Field
                                    type="text"
                                    placeholder="nome"
                                    name="name"
                                    required
                                />
                                {
                                    formik.touched.name && formik.errors.name ? (
                                        <span>{formik.errors.name}</span>
                                    ) : null
                                }
                            </ContainerInputForm>
                            <ContainerInputForm>
                                <Field
                                    type="email"
                                    placeholder="email"
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
                            <ContainerInputForm>
                                <Field
                                    type="password"
                                    placeholder="confirme a senha"
                                    name="confirmPassword"
                                    required
                                />
                                {
                                    formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <span>{formik.errors.confirmPassword}</span>
                                    ) : null
                                }
                            </ContainerInputForm>
                            <button type="submit">{formik.isSubmitting ? <ColorRing color={["#EF8829", "#ffffff", "#EF8829", "#ffffff", "#EF8829"]} width={30}/>: "Cadastrar"}</button>
                        </ContainerForm>
                    )
                }

            </Formik>
            <Link to="/login">Já possui cadastro? Entrar!</Link>
        </ContainerRegister>
    )
}
