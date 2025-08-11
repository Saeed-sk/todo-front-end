import {LayoutAuth} from "../../components/layout/layout-auth.tsx";
import {Input} from "../../components/ui/input.tsx";
import {Label} from "../../components/ui/label.tsx";
import {Button} from "../../components/ui/button.tsx";
import {type SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Fragment, useState} from "react";
import {Loader} from "lucide-react";
import type {AppDispatch} from "../../store/store.ts";
import {changeUser} from "../../store/slices/auth-slice.ts";
import {Link, useNavigate} from "react-router";
import {InputError} from "../../components/ui/input-error.tsx";
import {registerApi} from "../../api/auth/register.ts";

type RegisterType = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export function RegisterPage() {
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm<RegisterType>()
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const onSubmit: SubmitHandler<RegisterType> = async (data) => {
        setLoading(true);
        try {
            const response = await registerApi(data.name, data.email, data.password, data.password_confirmation)
            if (response?.status === 201) {
                dispatch(changeUser({
                    token: response.data.token,
                }))
                navigate("/")
            }
        } catch (error: any) {
            if (error.response.status === 422) {
                const serverErrors = error.response.data;
                Object.keys(serverErrors).forEach((key) => {
                    setError(key as keyof RegisterType, {
                        type: 'server',
                        message: serverErrors[key][0],
                    });
                });
            } else if (error.response.status === 401) {
                setError('email', {message: 'the provided credentials are incorrect.'})
            } else if (error.response.status === 429) {
                setError('email', {message: 'Too many requests. Please try again later.'})
            } else {
                setError('email', {message: 'Something went wrong. Please try again.'})
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <LayoutAuth title={'Get started'} subtitle={'Create an account and take control of your productivity.'} >
            <form onSubmit={handleSubmit(onSubmit)} className={'!space-y-3'}>
                <div className={'w-full'}>
                    <Label htmlFor={'name'}>
                        Name
                    </Label>
                    <Input
                        {...register('name', {required: true})}
                        className={'mt-2'}
                        name={'name'}
                        aria-invalid={Boolean(errors.name)}
                        placeholder={'example@example.com'}
                    />
                    {errors.name && (<InputError error={errors.name.message || "name is required"}/>)}
                </div>
                <div className={'w-full'}>
                    <Label htmlFor={'email'}>
                        Email
                    </Label>
                    <Input
                        {...register('email', {required: true})}
                        className={'mt-2'}
                        name={'email'}
                        aria-invalid={Boolean(errors.email)}
                        placeholder={'example@example.com'}
                    />
                    {errors.email && (<InputError error={errors.email.message || "email is required"}/>)}
                </div>
                <div className={'w-full'}>
                    <Label htmlFor={'email'}>
                        Password
                    </Label>
                    <Input
                        {...register('password', {required: true})}
                        className={'mt-2'}
                        id={'password'}
                        name={'password'}
                        aria-invalid={Boolean(errors.password)}
                        placeholder={'*********'}
                    />
                    {errors.password && (<InputError error={errors.password.message || "password is required"}/>)}
                </div>
                <div className={'w-full'}>
                    <Label htmlFor={'password_confirmation'}>
                        confirm password
                    </Label>
                    <Input
                        {...register('password_confirmation', {required: true})}
                        className={'mt-2'}
                        id={'password_confirmation'}
                        name={'password_confirmation'}
                        aria-invalid={Boolean(errors.password_confirmation)}
                        placeholder={'*********'}
                    />
                    {errors.password_confirmation && (
                        <InputError error={errors.password_confirmation.message || "password confirm is required"}/>)}
                </div>
                <Button disabled={loading} className={'w-full'} type={'submit'}>
                    {loading ? (
                        <Fragment>
                            <span>Singing Up</span>
                            <Loader className={'animate-spin'}/>
                        </Fragment>
                    ) : ('Sing up')}
                </Button>
                <div className={'text-gray-800 text-sm text-center dark:text-gray-100'}>
                    <span className={'mr-1'}>
                        Already have an account?
                    </span>
                    <Link className={'text-blue-800 dark:text-blue-400'} to={'/login'}>
                        Sing in
                    </Link>
                </div>
            </form>
        </LayoutAuth>
    )
}