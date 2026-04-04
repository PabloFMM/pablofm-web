# language: es
Funcionalidad: Página Sobre mí
  Como visitante de pablofm.com
  Quiero conocer la trayectoria de Pablo FM
  Para evaluar si es la persona adecuada para colaborar

  Escenario: Visitante lee la trayectoria completa
    Dado que estoy en la página "Sobre mí"
    Entonces veo la sección "El camino hasta aquí"
    Y veo los hitos en orden cronológico
    Y el último hito es "Construyendo lo siguiente"

  Escenario: Visitante descubre los valores de Pablo
    Dado que estoy en la página "Sobre mí"
    Entonces veo la sección "En lo que creo"
    Y veo el valor "Construir antes que teorizar"

  Escenario: CTA de contacto está visible al final
    Dado que estoy en la página "Sobre mí"
    Cuando llego al final de la página
    Entonces veo el botón "Hablamos"
    Y al hacer clic me lleva a la página de contacto
