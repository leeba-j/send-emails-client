import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_USER_AND_SEND_EMAIL } from '../../GQL/Mutation-Strings';
import formCss from '../form/form.css';
import { ALL_USERS } from '../../GQL/Query-Strings'

const Form = () => {
    const { handleSubmit, register } = useForm();
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER_AND_SEND_EMAIL);

    const onSubmit = ({ name, email, height, weight }) => {
        createUser({
            variables: { userDetails: { name, email, height: parseFloat(height), weight: parseFloat(weight) } },
            refetchQueries: [{ query: ALL_USERS }]
        });
    };

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Your name' {...register("name", { required: true })} />

        <input placeholder='Your email' {...register("email", { required: true })} />

        <input placeholder='Weight (/kg)'  {...register("weight", { required: true })} />

        <input placeholder='Height (/m)' {...register("height", { required: true })} />
        <input type="submit" value={'Submit'} />
    </form>);
}

export default Form;