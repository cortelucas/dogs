import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Form/Button'
import Input from '../../Components/Form/Input'
import Error from '../../Components/Helper/Error'
import { UserContext } from '../../Context/UserContext'
import useForm from '../../Hooks/useForm'
import styles from './LoginForm.module.css'
import stylesBtn from '../../Components/Form/Button.module.css'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='container animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}

        <Error error={error} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>Redefinir Senha</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm
