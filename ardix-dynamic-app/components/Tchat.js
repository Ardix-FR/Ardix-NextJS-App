import { useUser } from '@auth0/nextjs-auth0';

const Tchat = () => {
    const { user, error, isLoading } = useUser();

    return (
        <>
            <a href='#tchat'><button className='tchat-button'><i class='far fa-comment-alt'></i></button></a>

            <div id="tchat" className="popup-container">
                <div class="popup-content-tchat">
                    <a href="#" class="close"><i class="gg-close"></i></a>
                    Tchat
                </div> 
            </div>
        </>
    )
} 

export default Tchat;