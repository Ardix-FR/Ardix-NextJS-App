import { useUser } from '@auth0/nextjs-auth0';

const NavBar = () => {
    const { user, error, isLoading } = useUser();
 
    if (user) {
        return (
            <div className="nav-bar">
                <img src='https://img.icons8.com/color/344/jira.png' className="logo"/>
                <input type="text" placeholder="What's have in your mind today ?" className="search-bar"/>
                <img src="https://img.icons8.com/ios/2x/search--v5.png" className="search-logo"/>
                <a href="#notif"><i className="gg-bell"></i><div className="notif-round"> d  </div></a>
                <a href="#account"><img src={user.picture} className='avatar'/></a>
                {/* <a href='#package' className='package-icon'><i class="gg-box"></i></a> */}
            </div>
        )
    } else return (
        <div className="nav-bar">
            <img src='https://img.icons8.com/color/344/jira.png' className="logo"/>
            <input type="text" placeholder="What's have in your mind today ?" className="search-bar"/>
            <img src="https://img.icons8.com/ios/2x/search--v5.png" className="search-logo"/>
            <a href="#notif"><i className="gg-bell"></i><div className="notif-round"> d  </div></a>
            <a href="#account"><img src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-espace-r%C3%A9serv%C3%A9-photo-gris-vecteurs-d-illustrations.jpg?ver=6" className='avatar'/></a>
            {/* <a href='#package' className='package-icon'><i class="gg-box"></i></a> */}
        </div> 
    );
} 

export default NavBar;