# language: es
Funcionalidad: Navegación principal
  Como visitante de pablofm.com
  Quiero poder navegar fácilmente por el sitio
  Para encontrar la información que busco

  Escenario: Visitante navega desde el hero a proyectos
    Dado que estoy en la página principal
    Cuando hago clic en "Ver proyectos"
    Entonces veo la página de proyectos
    Y veo el proyecto "Numen Games" como primero en la lista

  Escenario: Numen Games aparece como proyecto activo
    Dado que estoy en la página de proyectos
    Entonces veo el proyecto "Numen Games"
    Y tiene el estado "Activo"
    Y tiene el enlace a "https://numinia.com"

  Escenario: Navegación mobile funciona correctamente
    Dado que accedo desde un dispositivo móvil
    Cuando hago clic en el botón del menú hamburger
    Entonces se despliega el menú de navegación
    Y puedo ver los enlaces "Proyectos", "Sobre mí" y "Contacto"

  Escenario: Logo lleva a la página principal
    Dado que estoy en cualquier página del sitio
    Cuando hago clic en "Pablo FM" en la navegación
    Entonces vuelvo a la página principal
