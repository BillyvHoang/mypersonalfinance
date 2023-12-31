
function Login(){
    return(
        <div className="flex flex-col h-screen w-screen bg-background sm:flex-row">
            {/* Login  Container*/}
            <div className="container bg-Third h-1/2 sm:h-screen">
                <div className="container h-screen flex justify-center content-center flex-col">
                    <h1 className="text-3xl text-white">Welcome Back</h1>
                    <p className="text-white">We're here to help control your finance</p>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs bg-transparent" />
                    <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs bg-transparent" />
                    <a className="text-white" href="">Forgot password?</a>
                    <button className="btn bg-secondary text-white">Login</button>
                    <button className="btn bg-primary text-white">Sign Up</button>
                </div>
            </div>

            {/* Image Container */}
            <div className="container flex justify-center content-center">
                <img src="/assets/imageDisplay.png" alt="Person Using Phone Sitting in Chair and Money in Air" />
            </div>
        </div>
    )
}


export default Login;