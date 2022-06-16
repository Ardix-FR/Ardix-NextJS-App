import { useUser } from '@auth0/nextjs-auth0';

const Account_comp_connected = () => {
    const { user, error, isLoading } = useUser();

    return (
        <div id="account" className="popup-container">
        <div className="popup-content">
            <a href="#" class="close"><i class="gg-close"></i></a>

            <div className='account-infos'>
                <h1>Your informations :</h1><hr/>
                
                <p>
                    <b>FisrtName :</b> <i>{user.given_name}</i><br/>
                    <b>FamilyName :</b> <i>{user.family_name}</i><br/><br/>

                    <b>Username :</b> <i>{user.nickname}</i><br/>
                    <b>Email :</b> <i>{user.email}</i><br/>                        
                    <b>Sign-up :</b> <i>{user.updated_at}</i>
                </p>

                <br/>
                {/* <h1>General settings :</h1><hr/>
                TODO */}
            </div>

            <div className="profile-view">
                <img className='user-picture' src={user.picture}/>
                <p className='pseudo'>{user.nickname}</p>
                <p className='email'>{user.email}</p>
                <a href="/api/auth/logout"><i class="gg-log-in"></i></a>
            </div>

            <p className='app-version'><span className='label'><b>Version ALPHA 1.0</b></span></p>
        </div>
        </div> 
    );
} 

export default Account_comp_connected;