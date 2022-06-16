const Content = () => {
    var post_title = localStorage.getItem('post_title');
    
    return (
        <>
            {post_title}
        </>
    );
} 
export default Content;