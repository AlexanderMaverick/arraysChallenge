const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 1200,
        smoke: true,
        pets: true
      },
      {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 4500,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Palazzo_Dario_Cropped.jpg/1200px-Palazzo_Dario_Cropped.jpg',
        descripcion: 'Lorem ipsum dolor sit amet consectetur',
        ubicacion: 'Lorem ipsum dolor sit amet consectetur',
        habitaciones: 4,
        costo: 9999,
        smoke: true,
        pets: false
      },
      {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://imanquehue.com/content/uploads/casas-estilo-chilenas.jpg',
        descripcion: 'Lorem ipsum dolor sit amet consectetur',
        ubicacion: 'Lorem ipsum dolor sit amet consectetur',
        habitaciones: 1,
        costo: 0,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://i.ytimg.com/vi/M1mJFOJWrKg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBokl0UM5uk4kXieHgj4jJPc7-lLQ',
        descripcion: 'Lorem ipsum dolor sit amet consectetur',
        ubicacion: 'Lorem ipsum dolor sit amet consectetur',
        habitaciones: 3,
        costo: 1699,
        smoke: false,
        pets: false
      },
  ];
  
  const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento está ubicado en el centro de la ciudad',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento está ubicado en el corazón de la ciudad.',
      ubicacion: '456 Main Street, Downtown, CA 91234',
      habitaciones: 2,
      costo: 2200,
      smoke: false,
      pets: true
    },
    {
        nombre: 'Bauhaus Argentina - Casa HAS 187',
        src: 'https://www.portaldearquitectos.com/uploads/prop_properties/estudio-de-arquitectos-bauhaus-casa-has-187-C-0202-001-01.jpg',
        descripcion: 'Esta casa está ubicada en el corazón de la ciudad.',
        ubicacion: 'Lorem ipsum dolor sit amet consectetur.',
        habitaciones: 4,
        costo: 7200,
        smoke: true,
        pets: true
      },
  ];
  
const currentPage = window.location.pathname;

if (currentPage.includes('propiedades_venta.html')) {
  const contenedorVenta = document.getElementById('venta');

  propiedades_venta.forEach((prop, index) => {
    if (index % 3 === 0) {
      contenedorVenta.innerHTML += '<div class="row mb-4"></div>';
    }
    
    const filaActual = contenedorVenta.querySelectorAll('.row')[contenedorVenta.querySelectorAll('.row').length - 1];
    
    filaActual.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}">
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
            <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
              ${prop.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
            </p>
            <p class="${prop.pets ? 'text-success' : 'text-danger'}">
              ${prop.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fas fa-ban"></i> No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
  });
}

if (currentPage.includes('propiedades_alquiler.html')) {
  const contenedorAlquiler = document.getElementById('alquiler');

  propiedades_alquiler.forEach((prop, index) => {
    if (index % 3 === 0) {
      contenedorAlquiler.innerHTML += '<div class="row mb-4"></div>';
    }
    
    const filaActual = contenedorAlquiler.querySelectorAll('.row')[contenedorAlquiler.querySelectorAll('.row').length - 1];
    
    filaActual.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}">
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
            <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
              ${prop.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
            </p>
            <p class="${prop.pets ? 'text-success' : 'text-danger'}">
              ${prop.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fas fa-ban"></i> No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
  });
}
