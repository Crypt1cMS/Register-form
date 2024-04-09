import './App.css'

function App() {

  return (
    <>
      <main>
        <div className="register-container">
          <div className="register-bg-card">

            <div className="register-card-content">

              <div className="wrapper">

                <div className="register-header-text">
                  <h1>Join the community</h1>
                  <p>Take your art to the next level. Get it seen by millions of people</p>

                  <button type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill='white' width="30px" height="30px"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                    <p>Join with Facebook</p>
                  </button>
                  
                  <div className="OR">
                    <p>Or</p>
                  </div>
                </div>

                  <form action="URL">

                    <div className="register-form-full-name">
                      <input type="text" placeholder='First name' required/>
                      <input type="text" placeholder='Last name' required/>
                    </div>

                    <input type="email" placeholder='Email' required/>
                    <input type="password" placeholder='Password' required/>

                    <button type='submit'>
                      <p>Create a New Account</p>
                    </button>

                  </form>

                  <footer>
                    <p>By joining, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
                  </footer>

              </div>
            
            </div>
          
          </div>
        </div>
      </main>
    </>
  )
}

export default App
