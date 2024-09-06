"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface FormValues {
    email: string;
    password: string;
}


const validationSchema = Yup.object({
    email: Yup.string()
        .email('Email inválido!')
        .required('Email do usuário é obrigatório!'),
    password: Yup.string()
        .min(8, 'Senha precisa ter pelo menos 8 caracteres!')
        .required('Senha é obrigatória!')
});

const LoginForm = () => {
    const router = useRouter()
    const handleSubmit = async (
        values: FormValues,
        { setSubmitting, setStatus }: FormikHelpers<FormValues>
    ) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password
        })

        if (result?.error) {
            console.error('Erro ao fazer login:', result.error);
            setStatus(result.error);
        } else {
            // alert('Login efetuado com sucesso!');
            router.refresh();
            router.push('/admin')
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, status }) => (
                <Form>
                    <Typography variant="h4">Entrar</Typography>

                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        helperText={<ErrorMessage name="email" />}
                    />

                    <Field
                        as={TextField}
                        name="password"
                        label="Senha"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        helperText={<ErrorMessage name="password" />}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Entrando...' : 'Entrar'}
                    </Button>

                    {status && <div style={{ color: 'red' }}>{status}</div>}

                    <p>Não tem uma conta? <Link href='/register' className="link-register">Registre-se</Link>.</p>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;