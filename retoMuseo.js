let mysql =  require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "museo"
})
connection.connect(function(err){
    if(err){
        console.log("Error"+err)
    }else{
        console.log("Conexion correcta")
    }
})

//Tabla autor
/*
let author = `CREATE TABLE autores(id_autores INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), last_name VARCHAR(50), dateBirth DATE, dateDeath DATE)`

connection.query(author, function (err, resultado) {
    if (err) throw err;
    console.log("Tabla de datos creada");
});*/

//Tabla tipo coleccion
/*
 let collectionType = `CREATE TABLE collectionType(id_collectionType INT AUTO_INCREMENT PRIMARY KEY, collectionType VARCHAR(50))`
 
connection.query(collectionType, function (err, resultado) {
    if (err) throw err;
    console.log("Tabla de datos creada");
})
*/

//Tabla duenyos

/*let owner = `CREATE TABLE owner (id_ownwer INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(50), telephone VARCHAR(50), adress VARCHAR(140))`

connection.query(owner, function (err, resultado) {
    if (err) throw err;
    console.log("Tabla de datos creada");
})
*/
//Tabla displayCase = exhibidor

/*let displayCase = `CREATE TABLE displayCase (id_displayCase INT AUTO_INCREMENT PRIMARY KEY, displayType VARCHAR(50))` 

connection.query(displayCase, function (err, resultado) {
    if (err) throw err;
    console.log("Tabla de datos creada");
})
*/
//Tabla reg.disposicion
/*let regPosesion = `CREATE TABLE regPosesion (id_regPosesion INT AUTO_INCREMENT PRIMARY KEY, regPosesionType VARCHAR(50))` 

connection.query(regPosesion, function (err, resultado) {
    if (err) throw err;
    console.log("Tabla de datos creada");
})
*/
//Insertar valores en la tabla:

/*let ownerData = `INSERT INTO owner (name, last_name, email, telephone,adress)
VALUES 
('Tita','Thyssen', 'titata@gmail.com', 914782568, 'Calle Velazquez 5, Madrid'),
('Jean','Renno', 'jn@gmail.com', 6458722268, 'Rue Suger 58, Paris'),
('Elisa','Hernando', 'elisahernanco@gmail.com', 9175582266, 'Carrer Rocafort 135, Barcelona'),
('John','Williams', 'johnwilliams@gmail.com', 357452822, 'Wood St 209, Londres'),
('Qing ','Yinglin', 'qingyinglin@hotmail.com', 5447822163, 'Toa Payo 45, Shingapur'),
('Hui','Ka Yan', 'huika@hotmail.com', 5887412533, 'Lian Hua Lu 45, Shingapur'),
('Alice','Walton', 'alicewalton@gmail.com', 648522314, 'Pullen ST, Pine Bluff'),
('Warren','Buffet', 'wb@gmail.com', 455822236, '53rd ST, Nueva York')
`


connection.query(ownerData, function (err, resultado) {
    if (err) throw err;
    console.log("Datos introducidos");
})
*/
/*let authorsData = `INSERT INTO autores (name, last_name, dateBirth, dateDeath)
VALUES 
('Jackson','Pollock', 1912-01-28, 1956-08-11),
('Andy','Warhol', 1928-08-06, 1987-02-28),
('Edward','Hopper', 1882-07-22, 1957-12-05),
('Frida','Kahlo', 1907-07-06, 1954-07-13),
('Tamara','Lempicka', 1898-05-16, 1980-03-18),
('Yayoi','Kusama', 1929-22-03, 00-00-00)
`

connection.query(authorsData, function (err, resultado) {
    if (err) throw err;
    console.log("Datos introducidos");
})*/

/*let remove = `ALTER TABLE piezas DROP COLUMN id_owner`

connection.query(remove, function (err, resultado) {
    if (err) throw err;
    console.log("Datos introducidos");
})*/

/*let agregar = `ALTER TABLE piezas ADD id_owner INT`

connection.query(agregar, function (err, resultado) {
    if (err) throw err;
    console.log("Datos introducidos");
})*/

//QUERIES:
//1
/* que me piden:
listado de objetos que me han prestado.
en que sitio de mi museo estan
cuando acaba su alquiler
info de los propietarios*/


`SELECT piezas.name,displaycase.displayType,piezas_posesion.dateDevolucion,owner.name, owner.last_name, owner.email
FROM piezas
INNER JOIN piezas_posesion ON(piezas_posesion.idPiezas=piezas.idPiezas) 
INNER JOIN localizacionmuseo ON(piezas.idPiezas = localizacionmuseo.idPiezas)
INNER JOIN displaycase ON(displaycase.id_displaycase = localizacionmuseo.id_displaycase)
INNER JOIN owner ON(piezas_posesion.id_ownwer = owner.id_ownwer)

WHERE piezas_posesion.id_regposesion = 4`

//RETO2
`
SELECT localizacionmuseo.id_collectionType, collectiontype.collectionType,COUNT(piezas.idPiezas) totalPiezas
FROM localizacionmuseo
INNER JOIN piezas ON(localizacionmuseo.idPiezas=piezas.idPiezas)
INNER JOIN collectiontype ON(localizacionmuseo.id_collectionType=collectiontype.id_collectionType)
GROUP BY(localizacionmuseo.id_collectionType)
ORDER BY totalPiezas DESC
`



connection.end();
