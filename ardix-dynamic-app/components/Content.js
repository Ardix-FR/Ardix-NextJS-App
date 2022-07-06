import { useUser } from '@auth0/nextjs-auth0';

const Content = () => {
    const { user, error, isLoading } = useUser();
    
    return (
        <>
            <div className='content-card'>
                <p>coucou</p>
            </div>
        </>
    )
} 
export default Content;