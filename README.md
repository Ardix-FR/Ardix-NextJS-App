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

<div align="center">
  <h2>Contributors & Members of project :</h2>
  
  <a href="#" target="_blank" title="test"><img width="50px" src="https://avatars.githubusercontent.com/u/89273191?v=4"/></a>
  <a href="#" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/89273191?v=4"/></a>
</div>
