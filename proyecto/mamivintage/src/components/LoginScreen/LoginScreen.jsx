import { useState } from "react"

// const [values, setValues] = useState({
//     email: '',
//     password: ''

// })
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
}

const LoginScreen = () => {
    return (
        <>
            <section className="max-w-full h-full flex flex-col m-auto">
                <h2>Login</h2>
                <article className="max-w-6xl max-h-full flex flex-col m-auto">
                    <form className="flex flex-col m-auto">
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder="email" name="email"></input>
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder="*****" name="password"></input>
                        <button type="submit" className="border border-blue-900" onSubmit={handleSubmit}>Ingresar</button>
                    </form>
                </article>
            </section>
        </>
    )
}
export default LoginScreen