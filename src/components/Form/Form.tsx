import { withForm } from '../../hocs';
import * as S from './Form.styled';

interface FormProps {
  formValues: any;
  changeHandler: () => void;
  submitHandler: () => void;
}
const Form = ({ formValues, changeHandler, submitHandler }: FormProps) => {
  return (
    <S.Form onSubmit={submitHandler}>
      <S.Input
        placeholder='Username'
        name='username'
        type='text'
        value={formValues.username}
        onChange={changeHandler}
      />
      <S.Input
        placeholder='Password'
        name='password'
        type='password'
        value={formValues.password}
        onChange={changeHandler}
      />
      <S.Submit>Acceder</S.Submit>
    </S.Form>
  );
};

export default withForm(Form, { username: '', password: '' });
