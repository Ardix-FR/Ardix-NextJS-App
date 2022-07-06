import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';

import NavBar from '/components/NavBar';
import Content from '/components/Content';
import Nofifications_comp from '/components/Nofifications_comp';
import Tchat from '/components/Tchat';
import Footer from '/components/Footer';

import Account_comp_connected from '/components/account/Account_comp_connected';
import Account_comp_not_connected from '/components/account/Account_comp_not_connected';

import AddPostButton_connected from '/components/add-post/AddPostButton_connected';
import AddPostButton_not_connected from '/components/add-post/AddPostButton_not_connected';

import Package from '/components/Package';

const HeadProfile = () => {
  return (
    <>
      <Head>
        <title>Ardix App</title>
        <meta name="description" content="Ardix© is a project sharing platform aimed at the Arduino's world, but the latter also brings together a website, a web application and an API." />
        <link rel="icon" href="https://img.icons8.com/color/344/jira.png" />
        <link href='https://css.gg/log-in.css' rel='stylesheet'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>

        <link href="https://cdn.jsdelivr.net/npm/@weavy/dropin-js/dist/weavy-dropin.css" rel="stylesheet" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/@weavy/dropin-js/dist/weavy-dropin.js"></script>

        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
    </>
  );
}

// call();

/* function call(user, context, callback){
  user.user_metadata = user.user_metadata || {};
  // update the user_metadata that will be part of the response
  user.user_metadata.preferences = user.user_metadata.preferences || {};
  user.user_metadata.preferences.fontSize = 12;

  // persist the user_metadata update
  auth0.users.updateUserMetadata(user.user_id, user.user_metadata)
    .then(function(){
      callback(null, user, context);
    })
    .catch(function(err){
      callback(err);
    });
} */

export default function Home() {
  const { user, error, isLoading } = useUser();
  // console.log(user);

  if (error) return <div>ERROR : {error.message}</div>;
  if (isLoading) return <div>... Loading</div>;

  if (user) {
    return ( 
      <>
        <HeadProfile/>  
        <NavBar/>  

        <Nofifications_comp/> 
        <Account_comp_connected/>
        <Package/>

        <Content/>
        <AddPostButton_connected/>
        <Tchat/>
        <Footer/>
      </>
    ) } else return (
      <>
        <HeadProfile/>  
        <NavBar/>  

        <Nofifications_comp/> 
        <Account_comp_not_connected/>
        <Package/>
        
        <Content/>
        <AddPostButton_not_connected/>
        {/* <Tchat/> */}
        <Footer/>
      </>
  )
}

