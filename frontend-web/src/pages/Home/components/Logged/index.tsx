import { saveSessionData } from "core/utils/auth";
import { makeLogin } from "core/utils/request";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";



const Logged = () => (
    <div className="card-base home-login card-base-center">
        <Link className="btn btn-primary button-base btn-login" to="/movies">Veja os nossos filmes!</Link>
    </div>
)


export default Logged;