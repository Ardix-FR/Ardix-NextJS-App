const Account_comp_not_connected = () => {
    return (
        <>
            <a href='#add-post'><button className='add-post-button'>+</button></a>

            <div id="add-post" className="popup-container">
            <div class="popup-content">
            <a href="#" class="close"><i class="gg-close"></i></a>

            <img src='https://zupimages.net/up/22/23/enav.png'/>
            
            <div class="card">
                <div class="card-body">
                    
                    <p>Currently you cannot post a message or post because you are not logged in !</p>
                    <a href="/api/auth/login"><button className="btn btn-primary">Go to Login !</button></a>
                    </div>
                </div>
            </div>
            </div> 
        </>
    )
} 

export default Account_comp_not_connected;