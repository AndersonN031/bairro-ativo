"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';

interface FormValues {
    nome: string;
    email: string;
    password: string;
}

// Definindo o esquema de validação com Yup
const validationSchema = Yup.object({
    nome: Yup.string()
        .min(1, 'Nome do usuário é obrigatório!')
        .max(255, 'Nome do usuário é muito longo!')
        .required('Nome do usuário é obrigatório!'),
    email: Yup.string()
        .email('Email inválido!')
        .required('Email do usuário é obrigatório!'),
    password: Yup.string()
        .min(8, 'Senha precisa ter pelo menos 8 caracteres!')
        .required('Senha é obrigatória!')
});

const RegisterForm = () => {
    const handleSubmit = async (
        values: FormValues,
        { setSubmitting, setStatus }: FormikHelpers<FormValues>
    ) => {
        try {
            await axios.post('/api/users', values);
            alert('Usuário criado com sucesso!');
        } catch (error) {
            console.error('Error creating user:', error);
            setStatus('Erro ao criar usuário');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ nome: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Typography variant="h4">Registrar Usuário</Typography>

                    <Field
                        as={TextField}
                        name="nome"
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        helperText={<ErrorMessage name="nome" />}

                    />

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
                        {isSubmitting ? 'Enviando...' : 'Registrar'}
                    </Button>

                    <ErrorMessage name="submit" component="div" />

                    <p>Se você já tem uma conta, por favor <Link href='/login' className="link-login">Entre</Link>.</p>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
