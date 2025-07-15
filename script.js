// --- Productos de ejemplo para vista previa ---
const productosEjemplo = [
  {
    nombre: 'Paquete de Papas',
    precio: 25,
    imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    descripcion: 'Bolsa de papas fritas clásicas 45g',
    cantidad: 20
  },
  {
    nombre: 'Paquete de Doritos',
    precio: 28,
    imagen: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    descripcion: 'Bolsa de Doritos Nacho 50g',
    cantidad: 15
  },
  {
    nombre: 'Paquete de Galletas',
    precio: 18,
    imagen: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80',
    descripcion: 'Paquete de galletas de chocolate 6 piezas',
    cantidad: 30
  }
];

function renderProductosEjemplo() {
  const cont = document.getElementById('productos-ejemplo');
  if (!cont) return;
  cont.innerHTML = '';
  productosEjemplo.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'producto-venta';
    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" style="width:100%;max-width:160px;">
      <strong>${prod.nombre}</strong>
      <span>$${prod.precio}</span>
      <p style="font-size:0.95em;color:#666;">${prod.descripcion}</p>
      <span style="font-size:0.9em;color:#888;">Stock: ${prod.cantidad}</span>
    `;
    cont.appendChild(div);
  });
}

// Mostrar productos de ejemplo si no hay productos reales
function renderProductosVenta() {
  const productos = JSON.parse(localStorage.getItem('productos') || '[]');
  const cont = document.getElementById('productos-venta');
  cont.innerHTML = '';
  if (productos.length === 0) {
    document.getElementById('productos-ejemplo').style.display = '';
    renderProductosEjemplo();
    return;
  } else {
    document.getElementById('productos-ejemplo').style.display = 'none';
  }
  productos.forEach((prod, idx) => {
    // ...código existente para renderizar productos reales...
    const div = document.createElement('div');
    div.className = 'producto-venta';
    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" style="width:100%;max-width:160px;">
      <strong>${prod.nombre}</strong>
      <span>$${prod.precio}</span>
      <p style="font-size:0.95em;color:#666;">${prod.descripcion || ''}</p>
      <span style="font-size:0.9em;color:#888;">Stock: ${prod.cantidad || 0}</span>
      <input type="number" min="1" max="${prod.cantidad || 1}" value="1" id="cantidad-${idx}" style="margin-top:0.5em;">
      <button onclick="agregarAlCarrito(${idx})">Agregar al carrito</button>
    `;
    cont.appendChild(div);
  });
}

// Llamar a renderProductosVenta al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  renderProductosVenta();
});
    // Resaltar botón activo
    const menuBtns = [btnMenuProductos, btnMenuUsuarios, btnMenuPersonalizacion];
    function activarBtnActivo(btnActivo) {
        menuBtns.forEach(btn => btn.classList.remove('active'));
        btnActivo.classList.add('active');
    }
    btnMenuProductos.addEventListener('click', function() {
        activarBtnActivo(btnMenuProductos);
    });
    btnMenuUsuarios.addEventListener('click', function() {
        activarBtnActivo(btnMenuUsuarios);
    });
    btnMenuPersonalizacion.addEventListener('click', function() {
        activarBtnActivo(btnMenuPersonalizacion);
    });
    // Por defecto, activar productos
    activarBtnActivo(btnMenuProductos);
// --- Lógica de menú de la consola admin ---
document.addEventListener('DOMContentLoaded', function() {
    const btnMenuProductos = document.getElementById('btnMenuProductos');
    const btnMenuUsuarios = document.getElementById('btnMenuUsuarios');
    const btnMenuPersonalizacion = document.getElementById('btnMenuPersonalizacion');
    const adminProductos = document.getElementById('adminProductos');
    const adminUsuarios = document.getElementById('adminUsuarios');
    const adminPersonalizacion = document.getElementById('adminPersonalizacion');
    if (btnMenuProductos && btnMenuUsuarios && btnMenuPersonalizacion) {
        btnMenuProductos.addEventListener('click', function() {
            adminProductos.style.display = '';
            adminUsuarios.style.display = 'none';
            adminPersonalizacion.style.display = 'none';
        });
        btnMenuUsuarios.addEventListener('click', function() {
            adminProductos.style.display = 'none';
            adminUsuarios.style.display = '';
            adminPersonalizacion.style.display = 'none';
        });
        btnMenuPersonalizacion.addEventListener('click', function() {
            adminProductos.style.display = 'none';
            adminUsuarios.style.display = 'none';
            adminPersonalizacion.style.display = '';
        });
    }
});
// Hacer que el nombre de la página recargue la vista principal
document.getElementById('logoTienda').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Si hay productos, solo muestra los productos reales
    renderProductosVenta();
    document.getElementById('productos-ejemplo').innerHTML = '';
});

// Mostrar productos de ejemplo si no hay productos cargados
function renderProductosEjemplo() {
    const ejemplo = [
        {
            nombre: 'Camiseta Camaleón',
            precio: 199.99,
            imagen: 'https://ejemplo.com/camisa.jpg',
            descripcion: 'Camiseta de algodón con logo camaleón'
        },
        {
            nombre: 'Taza Camaleón',
            precio: 89.50,
            imagen: 'https://ejemplo.com/taza.jpg',
            descripcion: 'Taza cerámica personalizada'
        },
        {
            nombre: 'Gorra Camaleón',
            precio: 120.00,
            imagen: 'https://ejemplo.com/gorra.jpg',
            descripcion: 'Gorra ajustable con bordado'
        }
    ];
    const cont = document.getElementById('productos-ejemplo');
    cont.innerHTML = '';
    ejemplo.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'producto-venta';
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" width="80" style="vertical-align:middle;">
            <strong>${prod.nombre}</strong> - $${prod.precio}
            <div style='font-size:0.95em; color:#555; margin:0.5em 0 0.2em 0;'>${prod.descripcion}</div>
            <button disabled style='opacity:0.6;cursor:not-allowed;'>Vista preliminar</button>
        `;
        cont.appendChild(div);
    });
}
// Carga masiva de productos por CSV
document.getElementById('cargaMasiva').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(evt) {
        const lines = evt.target.result.split(/\r?\n/).filter(Boolean);
        for (let i = 0; i < lines.length; i++) {
            const [nombre, cantidad, precio, descripcion, imagen] = lines[i].split(',');
            if (!nombre || !precio) continue;
            productos.push({
                nombre: nombre.trim(),
                precio: parseFloat(precio.trim()),
                imagen: imagen ? imagen.trim() : '',
                cantidad: cantidad ? parseInt(cantidad.trim()) : 1,
                descripcion: descripcion ? descripcion.trim() : ''
            });
        }
        renderProductos();
        renderProductosVenta();
        alert('Productos cargados correctamente.');
    };
    reader.readAsText(file);
});
// Guardar configuración en localStorage
document.getElementById('guardarConfig').addEventListener('click', function() {
    const config = {
        colorPrincipal: document.getElementById('colorPrincipal').value,
        colorFondo: document.getElementById('colorFondo').value,
        colorBoton: document.getElementById('colorBoton').value,
        urlFondo: document.getElementById('urlFondo').value,
        infoAdicional: document.getElementById('infoAdicional').value,
        urlMusica: document.getElementById('urlMusica').value
    };
    localStorage.setItem('configTiendaCamaleon', JSON.stringify(config));
    alert('¡Configuración guardada!');
});

// Cargar configuración al iniciar
window.addEventListener('DOMContentLoaded', function() {
    const config = localStorage.getItem('configTiendaCamaleon');
    if (config) {
        const data = JSON.parse(config);
        document.getElementById('colorPrincipal').value = data.colorPrincipal || '#4CAF50';
        document.getElementById('colorFondo').value = data.colorFondo || '#f4f4f4';
        document.getElementById('colorBoton').value = data.colorBoton || '#388E3C';
        document.getElementById('urlFondo').value = data.urlFondo || '';
        document.getElementById('infoAdicional').value = data.infoAdicional || '';
        document.getElementById('urlMusica').value = data.urlMusica || '';
        // Aplicar automáticamente
        document.getElementById('formPersonalizacion').dispatchEvent(new Event('submit'));
    }
});
// Personalización del sitio desde consola admin
document.getElementById('formPersonalizacion').addEventListener('submit', function(e) {
    e.preventDefault();
    // Colores
    document.documentElement.style.setProperty('--color-principal', document.getElementById('colorPrincipal').value);
    document.body.style.background = document.getElementById('colorFondo').value;
    document.documentElement.style.setProperty('--color-boton', document.getElementById('colorBoton').value);
    // Fondo
    const urlFondo = document.getElementById('urlFondo').value;
    if (urlFondo) {
        document.body.style.backgroundImage = `url('${urlFondo}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    } else {
        document.body.style.backgroundImage = '';
    }
    // Información adicional
    const info = document.getElementById('infoAdicional').value;
    document.getElementById('infoAdicionalVista').innerText = info;
    // Música
    const urlMusica = document.getElementById('urlMusica').value;
    const audio = document.getElementById('musicaFondo');
    if (urlMusica) {
        audio.src = urlMusica;
        audio.style.display = 'block';
        audio.play();
    } else {
        audio.pause();
        audio.style.display = 'none';
    }
});
// Aplicar colores personalizados a header y botones
const observer = new MutationObserver(() => {
    const colorPrincipal = getComputedStyle(document.documentElement).getPropertyValue('--color-principal') || '#4CAF50';
    const colorBoton = getComputedStyle(document.documentElement).getPropertyValue('--color-boton') || '#388E3C';
    document.querySelector('header').style.background = colorPrincipal;
    document.querySelector('footer').style.background = colorPrincipal;
    document.querySelectorAll('button, .icon-btn').forEach(btn => {
        if (!btn.classList.contains('icon-btn')) btn.style.background = colorBoton;
    });
});
observer.observe(document.body, { attributes: true, childList: true, subtree: true });
// Mostrar login admin al hacer clic en el enlace del footer
document.getElementById('enlaceAdmin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('admin-login').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('btnSaludo').addEventListener('click', function() {
    document.getElementById('mensaje').textContent = '¡Hola! Gracias por visitar el sitio web.';
});

// Mostrar/ocultar registro usuario y carrito flotante
document.getElementById('btnLogin').addEventListener('click', function() {
    const reg = document.getElementById('registro-usuarios');
    reg.style.display = reg.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('btnCarrito').addEventListener('click', function() {
    const carrito = document.getElementById('carritoFlotante');
    carrito.style.display = carrito.style.display === 'none' ? 'block' : 'none';
});

// --- Login de administrador ---
const adminUser = 'admin';
const adminPass = 'admin123';

document.getElementById('formAdminLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;
    if (user === adminUser && pass === adminPass) {
        document.getElementById('admin-consola').style.display = 'block';
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('mensajeAdminLogin').textContent = '';
    } else {
        document.getElementById('mensajeAdminLogin').textContent = 'Usuario o contraseña incorrectos.';
    }
});

document.getElementById('cerrarAdmin').addEventListener('click', function() {
    document.getElementById('admin-consola').style.display = 'none';
    document.getElementById('admin-login').style.display = 'block';
    document.getElementById('formAdminLogin').reset();
});

// --- Administración de productos ---
let productos = [];

function renderProductos() {
    const lista = document.getElementById('listaProductos');
    lista.innerHTML = '';
    productos.forEach((prod, idx) => {
        const div = document.createElement('div');
        div.className = 'producto-item';
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" width="80" style="vertical-align:middle;">
            <strong>${prod.nombre}</strong> - $${prod.precio}
            <button onclick="editarProducto(${idx})">Editar</button>
            <button onclick="eliminarProducto(${idx})">Eliminar</button>
        `;
        lista.appendChild(div);
    });
}

window.editarProducto = function(idx) {
    const prod = productos[idx];
    document.getElementById('nombreProducto').value = prod.nombre;
    document.getElementById('precioProducto').value = prod.precio;
    document.getElementById('imagenProducto').value = prod.imagen;
    document.getElementById('formProducto').setAttribute('data-edit', idx);
}

window.eliminarProducto = function(idx) {
    productos.splice(idx, 1);
    renderProductos();
    document.getElementById('formProducto').removeAttribute('data-edit');
    document.getElementById('formProducto').reset();
}

document.getElementById('formProducto').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreProducto').value;
    const precio = parseFloat(document.getElementById('precioProducto').value);
    const imagen = document.getElementById('imagenProducto').value;
    const editIdx = this.getAttribute('data-edit');
    if (editIdx !== null) {
        productos[editIdx] = { nombre, precio, imagen };
        this.removeAttribute('data-edit');
    } else {
        productos.push({ nombre, precio, imagen });
    }
    this.reset();
    renderProductos();
});

// --- Registro de usuarios ---
let usuarios = [];
document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const password = document.getElementById('passwordUsuario').value;
    if (usuarios.find(u => u.email === email)) {
        document.getElementById('mensajeRegistro').textContent = 'El correo ya está registrado.';
        return;
    }
    usuarios.push({ nombre, email, password });
    document.getElementById('mensajeRegistro').textContent = 'Usuario registrado correctamente.';
    this.reset();
});

// --- Productos en venta y carrito ---
let carrito = [];

function renderProductosVenta() {
    const cont = document.getElementById('productos-venta');
    cont.innerHTML = '';
    document.getElementById('productos-ejemplo').innerHTML = '';
    if (productos.length === 0) {
        cont.innerHTML = '<p>No hay productos disponibles.</p>';
        renderProductosEjemplo();
        return;
    }
    productos.forEach((prod, idx) => {
        const div = document.createElement('div');
        div.className = 'producto-venta';
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" width="80" style="vertical-align:middle;">
            <strong>${prod.nombre}</strong> - $${prod.precio}
            <input type="number" id="cantidad_${idx}" min="1" value="1" style="width:60px; margin-left:1em;">
            <button onclick="agregarAlCarrito(${idx})">Agregar al carrito</button>
        `;
        cont.appendChild(div);
    });
}

function renderCarrito() {
    const cont = document.getElementById('carrito');
    cont.innerHTML = '';
    if (carrito.length === 0) {
        cont.innerHTML = '<p>El carrito está vacío.</p>';
        document.getElementById('finalizarCompra').style.display = 'none';
        return;
    }
    let total = 0;
    carrito.forEach((item, idx) => {
        total += item.precio * item.cantidad;
        const div = document.createElement('div');
        div.className = 'carrito-item';
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" width="50">
            <strong>${item.nombre}</strong> - $${item.precio} x 
            <input type="number" min="1" value="${item.cantidad}" style="width:50px;" onchange="cambiarCantidadCarrito(${idx}, this.value)">
            = $${item.precio * item.cantidad}
            <button onclick="eliminarDelCarrito(${idx})">Eliminar</button>
        `;
        cont.appendChild(div);
    });
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: $${total}</strong>`;
    cont.appendChild(totalDiv);
    document.getElementById('finalizarCompra').style.display = 'inline-block';
}

window.agregarAlCarrito = function(idx) {
    const cantidad = parseInt(document.getElementById('cantidad_' + idx).value) || 1;
    const prod = productos[idx];
    const existe = carrito.findIndex(item => item.nombre === prod.nombre);
    if (existe >= 0) {
        carrito[existe].cantidad += cantidad;
    } else {
        carrito.push({ ...prod, cantidad });
    }
    renderCarrito();
};

window.eliminarDelCarrito = function(idx) {
    carrito.splice(idx, 1);
    renderCarrito();
};

window.cambiarCantidadCarrito = function(idx, nuevaCantidad) {
    const cant = parseInt(nuevaCantidad) || 1;
    carrito[idx].cantidad = cant;
    renderCarrito();
};

document.getElementById('finalizarCompra').addEventListener('click', function() {
    if (carrito.length === 0) return;
    document.getElementById('mensajeCompra').textContent = '¡Compra finalizada! Gracias por tu pedido.';
    carrito = [];
    renderCarrito();
    setTimeout(() => {
        document.getElementById('mensajeCompra').textContent = '';
    }, 3000);
});

// Render inicial de productos y carrito
renderProductosVenta();
renderCarrito();
