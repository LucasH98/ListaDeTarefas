import { FaPlus, FaCheck} from 'react-icons/fa';
import PropTypes from 'prop-types';
import './form.css'


export default function Form({handleSubmit,novatarefa,handleChange,index}) {

    return (
        <form className="form" onSubmit={handleSubmit}>
            <section className="input-section">
                <div className="tarefa">
                    <label>Tarefa</label>
                    <input type="text" value={novatarefa.Name} onChange={handleChange} name="Name" />
                    <button type="submit">
                        {index !== -1 ? <FaCheck className="check" /> : <FaPlus />}
                    </button>
                </div>
                <div className="categoria">
                    <label>Categoria</label>
                    <select value={novatarefa.Category} onChange={handleChange} name="Category" >
                        <option value="">Selecione uma Categoria</option>
                        <option value="Profissional">Profissional</option>
                        <option value="Estudo">Estudo</option>
                        <option value="Desenvolvimento Pessoal">Desenvolvimento pessoal</option>
                        <option value="Lazer">Lazer</option>
                    </select>

                </div>
            </section>
        </form>
    )
}

Form.propTypes = {
  handleSubmit:PropTypes.func.isRequired,
  handleChange:PropTypes.func.isRequired,
  novatarefa:PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

