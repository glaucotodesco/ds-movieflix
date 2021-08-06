import { SubmitHandler, useForm } from "react-hook-form";

type FormState = {
    username: string,
    password: string,
};


const Login = () => {


    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();

    const onSubmit: SubmitHandler<FormState> = data => {
        console.log(data);
    }

    return (
        <div className="card-base home-login">
            <div className="home-login-text">
                LOGIN
            </div>
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
                {errors.password&& (
                    <div className="d-block">
                        {errors.password.message}
                    </div>
                )}
                <button className="btn btn-primary button-base btn-login">
                    FAZER LOGIN
                </button>
            </form>
        </div>
    )
}

export default Login;