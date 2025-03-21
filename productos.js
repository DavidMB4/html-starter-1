const producto1 = {
    nombre:"Album: Babymons7er",
    precio:244.52,
    fecha:"2024-04-01"
};

const producto2 = {
    nombre:"Album: Drip",
    precio:204.69,
    fecha:"2024-11-01"
};

const producto3 = {
    nombre:"Sencillo digital: FOREVER",
    precion:150.69,
    fecha:"2024-07-01"
};

const producto4 = {
    nombre:"Sencillo digital: Stuck In The Middle",
    precio:150.69,
    fecha:"2024-02-01"
};

const producto5 = {
    nombre:"Sencillo digital: BATTER UP",
    precio:150.69,
    fecha:"2023-11-27"
};

const productos = [producto1, producto2, producto3];

const contenedor_product = document.getElementById('Productos');
productos.forEach(producto =>{
 const div = document.createElement('div');
 div.innerHTML=` 
 <h2>${producto.nombre}</h2>
 <p>$${producto.precio}</p>
 `;
 contenedor_product.appendChild(div);
}

)