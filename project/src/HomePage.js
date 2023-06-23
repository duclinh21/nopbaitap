const Homepage = () => {
    return (
      <div className="container">
        <div className ="mainHp">
        <div className="logohp">
          <p>Shop App</p>
          <img src="./Vector.png" className="logoimg"/>
        </div>
        <div className="login">
            <p>Welcome to Shop App</p>
            <form className="login-form">
                    <div className="form">
                        <input type="text" className="form-item" name="userName" placeholder="User Name" />
                    </div>
                    <div className="form">
                        <input type="email" className="form-item" name="email" placeholder="Email@gmail.com" />
                    </div>
                    <div className="form">
                        <input type="password" className="form-item" name="password" placeholder="Password" />
                    </div>
                    <div className="form">
                        <input type="password" className="form-item" name="confirmPassword" placeholder="Confirm Password" />
                    </div>
                    <button className="register" type="submit" >Register</button>
                </form>
                <a href="#">Login</a>
        </div>
      </div>
      </div>
    );
  };
  export default Homepage;