import React from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        handleLogin(email, password)
    }

    return (
        <div className='flex h-screen w-full items-center justify-center bg-[#1c1c1c]'>
            <form onSubmit={submitHandler} className='flex w-full max-w-md flex-col gap-5 rounded-xl border-2 border-emerald-600 p-10'>
                <h1 className='mb-2 text-center text-2xl font-semibold text-white'>Employee Management System</h1>
                <input
                    id='email'
                    type='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className='rounded-full border-2 border-emerald-600 bg-transparent px-5 py-3 text-white outline-none'
                    placeholder='Enter your email'
                    required
                />
                <input
                    id='password'
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className='rounded-full border-2 border-emerald-600 bg-transparent px-5 py-3 text-white outline-none'
                    placeholder='Enter your password'
                    required
                />
                <button type='submit' className='mt-2 rounded-full bg-emerald-600 py-3 font-medium text-white hover:bg-emerald-700'>
                    Log in
                </button>
            </form>
        </div>
    )
}

export default Login