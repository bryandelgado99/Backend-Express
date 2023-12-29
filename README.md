# Backend-Express - Register/Login/Cloudinary

El siguiente proyecto presenta el desarrollo de una portafolio web, mediante Express.JS, Handlebars; admeás de contar con el manejo de rutas, controladores y renders. Además, en estea rama se presenta el uso de Cloduinary para la subida de imágenes web, se incorpora el registro del usuario y su respectibo login de sesión. 

## Árbol de Trabajo
```
└── 📁Backend-Express
    └── package-lock.json
    └── package.json
    └── README.md
    └── 📁src
        └── 📁controllers
            └── index.controllers.js
            └── portfolio.controller.js
        └── database.js
        └── doble.jpg
        └── index.js
        └── 📁models
            └── Portfolio.js
            └── User.js
        └── 📁public
            └── 📁assets
                └── favicon.ico
                └── 📁img
                    └── avataaars.svg
                    └── 📁portfolio
                        └── cabin.png
                        └── cake.png
                        └── circus.png
                        └── game.png
                        └── safe.png
                        └── submarine.png
            └── 📁css
                └── main.css
                └── styles.css
            └── 📁js
                └── scripts.js
        └── server.js
        └── triple.docx
        └── 📁views
            └── index.hbs
            └── login.hbs
            └── 📁partials
                └── navigation.hbs
            └── 📁portafolio
                └── allPortfolios.hbs
                └── newFormPortafolio.hbs
```

## Instalación
Para acceder al proyecto, se debe realizar la clonación del repositorio mediante:
~~~
git clone https://github.com/bryandelgado99/Backend-Express.git
~~~
> [!IMPORTANT]
> Una vez clonado el repositorio se debe correr, por terminal, el comando *__npm i__* para poder instalar las dependencias correspondientes al proyecto.

## Iniciar el proyecto
Para iniciar el proyceto se debe correr el comando en producción:
~~~
npm start
~~~

Si se quiere correr el mismo como proyecto de desarrollo, se usa el comando:
~~~
npm run dev
~~~

## Vistas previas del proyecto
### Ruta Raíz "/"
![](https://github.com/bryandelgado99/Backend-Express/blob/d18646c77b32a0b02208802c4ce19f70fb7b467c/images/home.png)

### Ruta Login "/login"
![](https://github.com/bryandelgado99/Backend-Express/blob/a8e4ba9490d12b4e127a9dff32591d42e0af4785/images/login.png)

### Ruta Nuevo Portafolio "portafolio/add"
![](https://github.com/bryandelgado99/Backend-Express/blob/c0686430a1fe1b5b20c2c33da8ac8c14ca0ed1b5/images/new_folio.png)

---

## Nuevas incorporaciones prácticas al proyecto

> [!NOTE]
> Cada usuario posee su respectivo login y a este se vincula cada portafolio creado, mediante el UserID.

### Acceso al login
![](https://github.com/bryandelgado99/Backend-Express/blob/77913dc477713f2d6043d8ca67d75ec7a7cb4bb1/images/log_b.png)
![](https://github.com/bryandelgado99/Backend-Express/blob/77913dc477713f2d6043d8ca67d75ec7a7cb4bb1/images/home_b.png)

### Acceso al registro
![](https://github.com/bryandelgado99/Backend-Express/blob/77913dc477713f2d6043d8ca67d75ec7a7cb4bb1/images/reg_b.png)

### Creación de portafolios
![](https://github.com/bryandelgado99/Backend-Express/blob/77913dc477713f2d6043d8ca67d75ec7a7cb4bb1/images/new_folio.png)
![](https://github.com/bryandelgado99/Backend-Express/blob/77913dc477713f2d6043d8ca67d75ec7a7cb4bb1/images/port_b.png)

### Presentación en MongoDB
- Portafolio
    ![](https://github.com/bryandelgado99/Backend-Express/blob/77913dc477713f2d6043d8ca67d75ec7a7cb4bb1/images/port_db.png)
- Usuario
  ![](https://github.com/bryandelgado99/Backend-Express/blob/77913dc477713f2d6043d8ca67d75ec7a7cb4bb1/images/user_db.png)

### Presentación en Cloudinary
![](https://github.com/bryandelgado99/Backend-Express/blob/77913dc477713f2d6043d8ca67d75ec7a7cb4bb1/images/cloudy_b.png)

---

### Envio de Correo de confirmación
![]()

### Listado de portafolios
![]()

### Envio de correo en contacto
![]()