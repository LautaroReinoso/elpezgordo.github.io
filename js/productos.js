 //productos
const reels = [
    {
      src: '../img/reel/SPARTAN104L_01.jpg',
      src2: '../img/reel/SPARTAN104L_01.jpg',
      alt: 'SPARTAN104L.jpg',
      nombre: 'CASTER Spartan 104L',
      subtitulo: 'Huevito CASTER Spartan 104L Bait Casting 4 RulemanesArtículo 1',
      descripción: " 3 + 1 RULEMANES blindados de acero inoxidable MaxiDur™ Lado de la manija: izquierda • Radio de giro de alta velocidad: 6.3:1  • Capacidad mm/m: multifilamento 0.16/100 - monofilamento 0.30/100 • Peso: 210 gramos • Max Drag: 10 libras • Freno multidisco con alto poder de arrastre • Freno magnético regulable externamente • Sistema de desarme rápido de tapa lateral Pull&Turn™ • Cuerpo de bajo perfil construido en grafito de alta resistencia GraphMax™ • Carretel de aluminio CNC forjado y alivianado • Manija doble de aluminio CNC reforzada y alivianada • Devanador automático sincronizado"
    },
    {
      src: '../img/reel/CAYMAN2001.jpg',
      src2: '../img/reel/CAYMAN2001_1.jpg',
      alt: 'CAYMAN2001',
      nombre: 'CAYMAN2001',
      subtitulo: 'Huevito CASTER Spartan 104L Bait Casting 4 RulemanesArtículo 1',
      descripción:" 3 + 1 RULEMANES blindados de acero inoxidable MaxiDur™ Lado de la manija: izquierda • Radio de giro de alta velocidad: 6.3:1 • Capacidad mm/m: multifilamento 0.16/100 - monofilamento 0.30/100 • Peso: 210 gramos • Max Drag: 10 libras • Freno multidisco con alto poder de arrastre • Freno magnético regulable externamente • Sistema de desarme rápido de tapa lateral Pull&Turn™ • Cuerpo de bajo perfil construido en grafito de alta resistencia GraphMax™ • Carretel de aluminio CNC forjado y alivianado • Manija doble de aluminio CNC reforzada y alivianada • Devanador automático sincronizado",
      
    },
    {
      src: '../img/reel/ADVANCE6003.jpg',
      alt: 'ADVANCE6003',
      nombre: 'Artículo 3',
      precio: 99
    },
    {
      src: '../img/reel/ADVANCE6003.jpg',
      alt: 'ADVANCE6003',
      nombre: 'Saranga',
      precio: 99
    },
  ];



renderizar('galeriaCañas', reels);
renderizar('galeriaReels', reels);
renderizar('galeriaAnzuelos', reels);




function renderizar (id, data) {
  lugarDominioVentana = document.getElementById('ventana')
  lugarDominio = document.getElementById(id);
    data.forEach((info, index) => {
      const producto = document.createElement('div');
      producto.classList.add ('card', 'col-12', 'col-md-6', 'col-lg-3', 'm-1', 'producto');

      const imagen = document.createElement('img');
      imagen.classList.add('img-product','img-fluid');
      imagen.setAttribute('src', info.src);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const titulo = document.createElement ('h5');
      titulo.classList.add('card-title');
      titulo.textContent = info.nombre;

      const subtitulo = document.createElement ('p');
      subtitulo.classList.add ('card-subtitle', 'mb-2');
      subtitulo.textContent = info.subtitulo;


      producto.appendChild(imagen);
      producto.appendChild(titulo);
      producto.appendChild(subtitulo);
      producto.appendChild(cardBody);
      lugarDominio.appendChild(producto);
      
      // VENTANA modal CLICK

      producto.addEventListener('click', () => {


        //close
      const divClose = document.createElement('div');
     
      const imgClose = document.getElementById('close');
        
      imgClose.style.visibility = "visible";

      imgClose.addEventListener('click',() => {

           ventanaFlotante.style.visibility = "hidden";
           imgClose.style.visibility = "hidden";
        })

    
 
        console.log('click');
        
        lugarDominioVentana.classList.add('bg-dark')


        const ventanaFlotante = document.createElement('div');
        ventanaFlotante.classList.add (  'ventanaModal' )
                
        const ventanaModal = document.createElement('div');
        ventanaModal.classList.add ('positionProduct' , 'bg-primary', 'rounded', 'm-0',  'p-md-0', 'm-md-5',  )
     


        //div titulo
        const divTitulo = document.createElement('div');
        divTitulo.classList.add ('row', 'd-flex', 'justify-content-center', 'align-items-center', 'p-3','pe-5','m-md-1','p-md-2', )

        const titulo = document.createElement ('h3');
        titulo.classList.add('card-title', 'd-flex', 'text-white');
        titulo.textContent = info.subtitulo;

        //div descripción e imagen
        const divDescImagen = document.createElement('div');
        divDescImagen.classList.add('positionDI', 'd-flex', 'flex-column', 'flex-md-row', 'overflow-auto' )

        //div descripción
        const divDescripción = document.createElement('div');
        divDescripción.classList.add('positionD', 'col', 'font-weight-normal',  'text-left', 'm-0','p-2', 'px-4', 'm-md-2' ,'p-md-3', 'text-white'   )


        //for each item descripción
        descripción = info.descripción.split('•');
        console.log(descripción);
        descripción.forEach(pDesc)
        function pDesc (item, index, arr) {
          const p = document.createElement('p');
          p.classList.add('m-0', 'p-0')

          console.log(p);
          p.textContent = "•" + arr[index];
          divDescripción.appendChild(p)
        }
  



        //imagen
        const divImagen = document.createElement('div');
        divImagen.classList.add('positionI',  'col',  'p-2' )

        const imagen = document.createElement('img');
        imagen.classList.add('img-fluid', 'd-flex','rounded');
        imagen.setAttribute('src', info.src2);
        console.log(imagen)


        
        ventanaModal.appendChild(divClose)
       
        divClose.appendChild(imgClose);

        divTitulo.appendChild(titulo);

        ventanaModal.appendChild(divTitulo);

        divImagen.appendChild(imagen)

        divDescImagen.appendChild(divDescripción);

        divDescImagen.appendChild(divImagen);


       

        ventanaModal.appendChild(divDescImagen)

        ventanaFlotante.appendChild(ventanaModal)
        lugarDominioVentana.append(ventanaFlotante);



      })
    })
};

