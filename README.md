# Api-Backend-Prisma-Digital

Url principal para el Consumo de los Servicio

https://prisma-digital-bills.herokuapp.com/api/v1

Api - Prisma Digital - User Bills

Tecnologias Utilizadas: - Node.js - Express.js - PosgreSQL - ORM Sequelize 

Arquitectura --> MVC

Deploy en Heroku

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

AUTH

    -> Servicios Encargado de Crear usuarios y logearlo

POST - Login

https://prisma-digital-bills.herokuapp.com/api/v1/auth/login

Body raw (json)

{
"username":"Frank",
"pass":"pass1234"
}

---

POST - Create User

https://prisma-digital-bills.herokuapp.com/api/v1/auth

Bodyraw (json)

{
"username": "usuario",
"email": "usuario@gmail.com",
"pass": "pass1234"
}

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

USER

    -> Servicio encargado de obtener a todos los usuarios, Eliminar usuario y actualizar usuario

GET - Get All Users

https://prisma-digital-bills.herokuapp.com/api/v1/users

---

DELETE - Deleted User

https://prisma-digital-bills.herokuapp.com/api/v1/users/:id

Authorization - Bearer Token

Path Variables - /:id - corresponde al id del usuario en sesion

---

PUT - Update User

https://prisma-digital-bills.herokuapp.com/api/v1/users/:id

Authorization - Bearer Token

Path Variables - /:id - corresponde al id del usuario en sesion

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

Bills

    -> Servicio encargado crear, obtener todos los bills, eliminar bills u actualizar bills,
        del usuario en sesion.

POST - Create Bills

https://prisma-digital-bills.herokuapp.com/api/v1/bills

Authorization - Bearer Token

Body raw (json)

{
"value": "3500",
"type": "2",
"observation": "Gasto Transporte"
}

---

GET - Get All Bills By User

https://prisma-digital-bills.herokuapp.com/api/v1/bills/bills

---

DELETE - Deleted Bills By User

https://prisma-digital-bills.herokuapp.com/api/v1/bills/:id

Authorization - Bearer Token

Path Variables -> /:id corresponde al id del bill

---

PUT - Update Bills By User

https://prisma-digital-bills.herokuapp.com/api/v1/bills/:id

Authorization - Bearer Token

Path Variables -> /:id corresponde al id del bill

Body raw (json)

{
"value": "8000",
"type": "1",
"observation": "Venta Producto"
}
