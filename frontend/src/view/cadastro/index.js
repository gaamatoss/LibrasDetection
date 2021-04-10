import React, { useContext } from 'react';
import Cadastro from '../../components/cadastro';
import Navbar from '../../components/navbar';
import { postUser } from '../../api';
import { login } from '../../auth';
import { AuthContext } from '../../context/auth';

const Cadastrar = (props) => {
  const [, setAuth] = useContext(AuthContext);
  const sendUser = async (user) => {
    const { data: response } = await postUser(user);
    login(response);
    setAuth(response);
    props.history.push('/');
  };
  return (
    <div className="container">
      <Navbar/>
      <Cadastro onClickButton={sendUser}/>
    </div>
  );
};

export default Cadastrar;