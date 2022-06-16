const Account_comp_not_connected = () => {
    return (
        <div id="account" className="popup-container">
        <div class="popup-content">
            <a href="#" class="close"><i class="gg-close"></i></a>
            <img width="350" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1654893809~exp=1654894409~hmac=90fcb057230791a27f397c06417ddb105121b46b481373de26a09dc0e26868f9"/><br/>
            <div class="card">
                <div class="card-body">
                    <p className="not-connected-text">To access many other features, please log-in or create an account !</p>
                    <a href="/api/auth/login"><button className="btn btn-primary">Go to Login !</button></a>
                </div>
            </div>
        </div>
        </div> 
    );
} 

export default Account_comp_not_connected;