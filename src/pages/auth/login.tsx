import {LayoutAuth} from "../../components/layout/layout-auth.tsx";
import {Input} from "../../components/ui/input.tsx";
import {Label} from "../../components/ui/label.tsx";
import {Button} from "../../components/ui/button.tsx";
import {type SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginApi} from "../../api/auth/login.ts";
import {Fragment, useState} from "react";
import {Loader} from "lucide-react";
import type {AppDispatch} from "../../store/store.ts";
import {changeUser} from "../../store/slices/auth-slice.ts";
import {Link, useNavigate} from "react-router";
import {InputError} from "../../components/ui/input-error.tsx";

type LoginType = {
    email: string;
    password: string;
}

export function LoginPage() {
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm<LoginType>()
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        setLoading(true);
        try {
            const response = await loginApi(data.email, data.password)
            if (response.status === 200) {
                dispatch(changeUser({
                    token: response.data.token,
                }))
                navigate("/")
            }
        } catch (error: any) {
            if (error.response.status === 401) {
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
        <LayoutAuth title={'Welcome back'} subtitle={'Sign in to stay on top of your tasks and get things done.'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'!space-y-3'}>
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
                    {errors.email && (<InputError error={errors.email.message || "Email is required"} />)}
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
                    {errors.password && (<InputError error={errors.password.message || "Password is required"} />)}

                </div>
                <Button disabled={loading} className={'w-full'} type={'submit'}>
                    {loading ? (
                        <Fragment>
                            <span>Singing in</span>
                            <Loader className={'animate-spin'}/>
                        </Fragment>
                    ) : ('Sing in')}
                </Button>
                <div className={'text-gray-800 text-sm text-center dark:text-gray-100'}>
                    <span className="mr-1">
                        Don’t have an account?
                    </span>
                    <Link className="text-blue-800 dark:text-blue-400" to="/register">
                        Sign up
                    </Link>
                </div>

            </form>
        </LayoutAuth>
    )
}