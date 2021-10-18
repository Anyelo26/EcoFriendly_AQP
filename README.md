# EcoFriendly_AQP
Aplicacion web que fomenta el reciclaje en los ciudadanos arequipeños

# Consideraciones
1. A nivel de la carpeta app, hay 3 carpetas, uno de componentes, otro de modelos y otro de servicios , en modelos se crean las clases de acuerdo a un Diagrama de clases, en servicios 
se colocaran las funciones que se comunicaran con la api.
2. En De momento hay dos ambientes: admin que es el administrador, dentro de este puede  considerarse el super admin, este tiene la carpeta dynamic que tiene componentes que cambian
en la pagina, estos pueden ser los modulos CRUD, tambien tiene la carpeta static, que son componentes que son fijos, ejemplo footer o header, tanto dynamic y static son module a 
nivel de angular, lo mismo pasa con el segundo ambiente customer, que no tendra las mismas vistas que admin, pero tambien tiene dos carpetas: static y dynamic.
Finalmente se tiene la carpeta de session, donde solo se considerara el login, este no es propiamente un ambiente.
3. segun angular, deberia crearse una carpeta de shared para crear solo interfaces (no GUI), esto podemos considerarlo en el futuro.
