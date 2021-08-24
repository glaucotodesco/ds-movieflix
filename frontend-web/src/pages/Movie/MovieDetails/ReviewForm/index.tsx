import { makePrivateRequest } from 'core/utils/request';
import { useForm } from 'react-hook-form';
import './styles.scss';

type FormState = {
    text: string;
    movieId: number;
}

type Props = {
    movieId: string;
    parentCallBack: any;
}

const ReviewForm = ({ movieId, parentCallBack }: Props) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormState>();

    const onSubmit = (formData: FormState) => {

        const data = { ...formData, movieId: movieId }

        makePrivateRequest({
            url: '/reviews/',
            method: 'POST',
            data
        })
            .then(() => {
                parentCallBack();
                reset();
            })
            .catch(() => {
                console.log('Erro ao cadastrar um review');
            });
    }

    return (

        <div className="movie-avaliation">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center">
                    <input className="form-control input-avaliation input-base"

                        {...register("text", {
                            required: "Campo Obrigatório",
                        })}

                        name="text"
                        type="text"
                        placeholder="Deixe a sua avaliação aqui"
                        autoComplete="off"


                    >
                    </input>

                    {errors.text && (
                        <div className="d-block">
                            {errors.text.message}
                        </div>
                    )}
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary button-base btn-salvar-avaliation">
                        SALVAR AVALIAÇÃO
                    </button>
                </div>
            </form>
        </div>


    )
}

export default ReviewForm;