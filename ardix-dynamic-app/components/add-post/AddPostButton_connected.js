const AddPostButton_connected = () => {    
    return (
        <>
            <a href='#add-post'><button className='add-post-button'>+</button></a>

            <div id="add-post" className="popup-container">
            <div class="popup-content">
                <a href="#" class="close"><i class="gg-close"></i></a>

                <h3>Add a post :</h3><hr/>
                <form onSubmit={handleSubmit}>
                    <input className='connected-input form-control' id="post-title" type="text" placeholder="Enter here the title of your post.."/>
                    <textarea className='connected-input form-control' id="post-description" type="text" placeholder="Enter here the description of your post.."/>
                    <textarea className='connected-input form-control' id="post-requirements" type="text" placeholder="Enter here the requirements of your post (optional).."/>

                    <br/>
                    <button type="submit" className='btn btn-primary'>Post your message !</button>
                </form>
            </div>
            </div> 
        </>
    )

    function handleSubmit(e) {
        e.preventDefault();
        console.log(document.getElementById("post-title").value);
        console.log(document.getElementById("post-description").value);
        console.log(document.getElementById("post-requirements").value);
    }
} 

export default AddPostButton_connected;