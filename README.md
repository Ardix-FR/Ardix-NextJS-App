<h1>Ardix NextJS App ⚙️</h1>
This repository represents the dynamic app of the Ardix project. Developed in a <code>NextJS</code> environment, it is at the center of the project. The application is composed of a main server which manages the database and its hosting. Then, there is the client side where we find the entry point of the app which other than <code>app.js</code> and its various components which constitute the application.

<h2>To better illustrate all this, here is a summary diagram :</h2>
<img src="https://zupimages.net/up/22/24/inib.png"/>

## Script of DataBase Diagramm :
```mysql
// SERVER SECTION :
Table Main_ARDIX_SERVER {
  IP "172.0.0.2"
  "Base Request URL" "ardix.eth87.app81.com"
  Admin "@Xlator"
  All_DataBases "****"
}

// API & APP Section :
Table AUTH_0_FRAMEWORK {
  "API" "Auth_0 Dashboard URL"
}

Table APP_not_connected {
  "Entry_Point App" "app.js"
  "Components (not connected)" "NavBar.js, Footer.js, etc..." 
  "Sign-in" ".."
}

Table APP_connected {
  "Entry_Point App" "app.js"
  "Components (connected)" "NavBar.js, Footer.js, Account.js etc..." 
  "Sign-out" ".."
}

// General LINKS :
Ref: "Sign-up or Sign-in Function".("form") > AUTH_0_FRAMEWORK.("API")
Ref: Main_ARDIX_SERVER.("All_DataBases") > AUTH_0_FRAMEWORK.("API")
Ref: "Sign-up or Sign-in Function".(submit) > APP_connected.("Entry_Point App")

// Entry_Point LINK :
Ref: Main_ARDIX_SERVER.("Base Request URL") > APP_not_connected.("Entry_Point App")
Ref: Main_ARDIX_SERVER.("All_DataBases") > APP_not_connected.("Entry_Point App")

// Sign-up or Sign-in LINKS :
Table "Sign-up or Sign-in Function" {
  form "username, email, password, etc..."
  media "with Github or Google"
  submit "OK"
}

Ref: APP_not_connected.("Sign-in") > "Sign-up or Sign-in Function".(form)
Ref: AUTH_0_FRAMEWORK.(API) > APP_connected.("Sign-out")
```

# App Authentification 🔑
All the authentication of the app is managed by a framework specially adapted to NextJS: <code>Auth0</code> (https://auth0.com/fr). The latter is equipped with a dashboard that can manage both users but also with which media, you can connect (login or registration): very practical !

The auth0 integration starts with the entry point of the NextJS application (app.js) by enclosing it with a UserProvider tag :
```javascript

// Import balise with framework prerequies download @auth0/..
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  // Return to the basic NextJS app but with enclosing UserProvider tag !
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
```

In any other component, you can import it like this :
```javascript
import { useUser } from '@auth0/nextjs-auth0';
```

Then, we define the different variables that we can find with the auth0 framework in the functions we want. These work like an API (see the Auth0 doc: https://auth0.com/docs/api) and we make a general request to the user, then we can specify what we want by putting a dot before the variable that we want to specify.

```javascript

// We declare the general variable User :
const { user, error, isLoading } = useUser();

// Then, we can associate some functions with specific renders, such as for errors or for loading.
if (error) return <div>ERROR : {error.message}</div>;
if (isLoading) return <div>... Loading</div>;

// Already, we can do an general console.log with all user informations !
console.log(user);

// But if we want one specify information, we must do like this (for the name by example):
console.log(user.name);
```

And lastly, we can check if a user is connected (with a sample if/else). For example, if we want to hide a component from an offline user, we do it like this (it also works for functions) :

```javascript

// Render (if/else) conditions :
if (user) {
  return (
    <Normal_Component/>
    <Secret_Components/>
  ) 
} else {
  return (
    <Normal_Components/>
  )
}
```

That's it !

<div align="center">
  <h2>Contributors & Members of project :</h2>
  
  <a href="https://github.com/Xlator07" target="_blank" title="Xlator07 / Admin"><img width="50px" src="https://avatars.githubusercontent.com/u/104075872?v=4"/></a>&nbsp;
  <a href="https://github.com/SkyX-ID-FR" target="_blank" title="SkyX [ID FR] / Main Develloper"><img width="50px" src="https://avatars.githubusercontent.com/u/89273191?v=4"/></a>&nbsp;
  <a href="https://github.com/Myrmidons-nath" target="_blank" title="Myrmidons-nath / Second Develloper"><img width="50px" src="https://avatars.githubusercontent.com/u/83139087?v=4"/></a>&nbsp;
  <a href="#" target="_blank" title="Antoine AYLT / Video Creator"><img width="50px" src="https://zupimages.net/up/22/21/uzig.jpg"/></a>
  
  <br><h8>All right reserved to Ardix© - Copyright 2022</h8>
</div>
