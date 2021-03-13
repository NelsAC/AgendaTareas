import { useForm } from '../../hooks/useForm'
import './form.css';
const FormWithCustomHook = () => {

    const [values, handleChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    autoComplete="off"
                    placeholder="Your Name..."
                    onChange={ handleChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="off"
                    placeholder="mail@gmail.com"
                    onChange={ handleChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="off"
                    placeholder="Your Password..."
                    onChange={ handleChange }
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}

export default FormWithCustomHook
