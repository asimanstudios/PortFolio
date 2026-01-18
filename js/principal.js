document.addEventListener('DOMContentLoaded', () => {
    /* --- Carrusel de Proyectos --- */
    const carrusel = document.getElementById('carrusel-proyectos');
    const tarjetas = document.querySelectorAll('.proyecto-tarjeta');
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');

    if (carrusel && tarjetas.length > 0 && botonAnterior && botonSiguiente) {
        let indiceActual = 0;
        const itemsPorVista = () => window.innerWidth > 768 ? 3 : 1;

        const actualizarCarrusel = () => {
            const anchoTarjeta = tarjetas[0].offsetWidth + 30;
            carrusel.style.transform = `translateX(-${indiceActual * anchoTarjeta}px)`;
        };

        botonSiguiente.addEventListener('click', () => {
            const limite = tarjetas.length - itemsPorVista();
            if (indiceActual < limite) {
                indiceActual++;
            } else {
                indiceActual = 0;
            }
            actualizarCarrusel();
        });

        botonAnterior.addEventListener('click', () => {
            if (indiceActual > 0) {
                indiceActual--;
            } else {
                indiceActual = tarjetas.length - itemsPorVista();
            }
            actualizarCarrusel();
        });
    }

    /* --- Manejo del Modal --- */
    const modal = document.getElementById('modal-proyecto');
    const modalInfo = document.getElementById('modal-info');
    const cerrarModal = document.querySelector('.cerrar-modal');

    const datosProyectos = {
        '1': {
            titulo: 'Republic Asteroids',
            descripcion: 'Juego inspirado en el clásico Asteroids, con una ambientación más 3D basada en Star Wars. Incluye diferentes tipos de enemigos como tricazas o Vulture, además de un jefe final que aparece al alcanzar los 5000 puntos, siendo este una Providence. Incorpora mecánicas como recuperación de vidas a los 10000 puntos, combate contra el jefe y registro de récords, ofreciendo una experiencia frenética y clásica donde el jugador debe esquivar o destruir asteroides y eliminar enemigos para sobrevivir.',
            media: '<img src="recursos/imagenes/work-in-progress.svg" alt="Republic Asteroids">',
            especificaciones: 'Unity, C#, Star Wars Theme'
        },
        '2': {
            titulo: 'Scape from Randy',
            descripcion: 'Juego fanmade de terror inspirado en Slenderman, donde encarnas a un campista que debe escapar de un bosque habitado por Randy, un ser oscuro que aparece la noche de Halloween y comienza a cazar a sus presas. El objetivo es recolectar 10 caramelos robados por Randy para poder escapar en tu vehículo; si te atrapa antes, te conviertes en su próxima víctima. Fue desarrollado en Unity, con mecánicas clásicas, ambientación de bosque y estética low poly.',
            media: '<img src="recursos/imagenes/work-in-progress.svg" alt="Scape from Randy">',
            especificaciones: 'Unity, Low Poly, Horror Game'
        },
        '3': {
            titulo: 'Otter Worlds',
            descripcion: 'Videojuego 2D de plataformas tipo endless runner en el que el jugador controla una nutria que busca salvar su hogar recolectando espíritus de peces ancestrales. El juego se basa en esquivar obstáculos mientras se recogen power-ups y peces que ayudan a superar el recorrido, teniendo como objetivo principal recolectar la mayor cantidad de peces posible.',
            media: '<img src="recursos/imagenes/work-in-progress.svg" alt="Otter Worlds">',
            especificaciones: 'Unity Engine, 2D Platformer, Endless Runner'
        },
        '4': {
            titulo: 'Amura',
            descripcion: 'Proyecto ganador del 1.º Premio del Hackathon Fitmakers, consistente en una aplicación móvil enfocada en fomentar el ejercicio en personas mayores mediante la gamificación. Cuenta con un diseño simple e intuitivo, historias que se desbloquean al completar rutinas fomentando también la lectura, un asistente de IA llamado Gertrudis para consultas internas y un panel para cuidadores o familiares que permite monitorizar el progreso del usuario. Está desarrollada en Kotlin con Android Studio y utiliza Firebase como base de datos.',
            media: '<video controls autoplay muted><source src="recursos/videos/amura.mp4" type="video/mp4"></video>',
            especificaciones: 'Kotlin, Android Studio, Firebase, IA'
        },
        '5': {
            titulo: 'Repositorios Maven',
            descripcion: 'Proyecto que unifica, bajo una estructura Modelo Vista Controlador, Servicio y Repositorio, distintos sistemas de almacenamiento de datos como MySQL, JSON, XML, MongoDB y PostgreSQL. Permite realizar operaciones CRUD sobre datos de películas, así como transferir la información entre diferentes repositorios. Además, cuenta con una función de backup que permite guardar versiones y estados de los datos para su posterior restauración.',
            media: '<video controls autoplay muted><source src="recursos/videos/repositorios.mp4" type="video/mp4"></video>',
            especificaciones: 'Java, Maven, MVC, Multi-DB'
        },
        '6': {
            titulo: 'JDBC',
            descripcion: 'Proyecto que utiliza la librería JDBC en Java siguiendo el patrón Modelo Vista Controlador (MVC) para generar cuestionarios aleatorios a partir de la lectura de un documento .txt, almacenando las preguntas en una base de datos MySQL. Según el valor ingresado por el usuario, se genera un cuestionario aleatorio con las preguntas guardadas en la base de datos y cuenta con comprobación de errores en las respuestas de tipo test.',
            media: '<video controls autoplay muted><source src="recursos/videos/jdbc.mp4" type="video/mp4"></video>',
            especificaciones: 'Java, MySQL, JDBC, MVC Pattern'
        },
        '7': {
            titulo: 'Galería de Imágenes',
            descripcion: 'Aplicación desarrollada en Python utilizando PySide6 (Qt) que permite cargar y mostrar imágenes del sistema, así como imprimirlas utilizando el sistema de impresión del propio sistema operativo.',
            media: '<video controls autoplay muted><source src="recursos/videos/carrusel.mp4" type="video/mp4"></video>',
            especificaciones: 'Python, PySide6, Qt Framework'
        }
    };

    if (modal && modalInfo && tarjetas.length > 0) {
        tarjetas.forEach(tarjeta => {
            tarjeta.addEventListener('click', () => {
                const id = tarjeta.getAttribute('data-proyecto');
                const data = datosProyectos[id];

                modalInfo.innerHTML = `
                    <div class="modal-header">
                        <h2>${data.titulo}</h2>
                        <p>${data.especificaciones}</p>
                    </div>
                    ${data.media}
                    <div class="modal-body">
                        <p>${data.descripcion}</p>
                    </div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        if (cerrarModal) {
            cerrarModal.addEventListener('click', () => {
                modal.style.display = 'none';
                modalInfo.innerHTML = '';
                document.body.style.overflow = 'auto';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
                modalInfo.innerHTML = '';
                document.body.style.overflow = 'auto';
            }
        });
    }

    /* --- Efecto Scroll Cabecera --- */
    const cabecera = document.getElementById('cabecera');
    if (cabecera) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                cabecera.style.padding = '10px 0';
                cabecera.style.background = 'rgba(0, 0, 0, 0.8)';
            } else {
                cabecera.style.padding = '20px 0';
                cabecera.style.background = 'rgba(0, 0, 0, 0.5)';
            }
        });
    }

    /* --- Animación de Aparición al Scroll --- */
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animar-entrada').forEach(elemento => {
        observador.observe(elemento);
    });

    /* --- Envío de Formulario Pro (Fetch API) --- */
    const formulario = document.getElementById('formulario-contacto');
    if (formulario) {
        formulario.addEventListener('submit', async function (e) {
            e.preventDefault();
            const boton = formulario.querySelector('button');
            const textoOriginal = boton.textContent;

            boton.textContent = 'Enviando...';
            boton.disabled = true;

            const datos = new FormData(this);

            try {
                const respuesta = await fetch(this.action, {
                    method: this.method,
                    body: datos,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (respuesta.ok) {
                    alert('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
                    formulario.reset();
                } else {
                    alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                alert('No se pudo establecer conexión con el servidor.');
            } finally {
                boton.textContent = textoOriginal;
                boton.disabled = false;
            }
        });
    }
});
