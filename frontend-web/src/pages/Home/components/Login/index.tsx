import { saveSessionData } from "core/utils/auth";
import { makeLogin } from "core/utils/request";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import './styles.scss';

type FormState = {
    username: string,
    password: string,
};



const Login = () => {

    const [hasError, setHasError] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();
    const history = useHistory();

    const onSubmit: SubmitHandler<FormState> = data => {
        makeLogin(data)
            .then(response => {
                saveSessionData(response.data);
                history.push('/movies');
                setHasError(false);
            })
            .catch(() =>
                setHasError(true)
            )
    }

    return (
        <div className="card-base home-card">
            <div className="home-login-text">
                LOGIN
            </div>

            {hasError && (
                <div className="home-error-login">
                    Usuário ou senha inválidos!
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    type="email"
                    {...register("username", {
                        required: "Campo obrigatório",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email inválido"
                        }
                    })}
                    className="form-control input-base"
                    placeholder="Email"
                />
                {errors.username && (
                    <div className="d-block">
                        {errors.username.message}
                    </div>
                )}

                <input
                    type="password"
                    {...register("password", {
                        required: "Campo Obrigatório"
                    })}
                    className="form-control input-base"
                    placeholder="Senha"
                />
                {errors.password && (
                    <div className="d-block">
                        {errors.password.message}
                    </div>
                )}

                <button className="btn btn-primary button-base margin">
                    FAZER LOGIN
                </button>

            </form>
        </div>
    )
}

export default Login;