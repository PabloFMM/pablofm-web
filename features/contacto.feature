# language: es
Funcionalidad: Página de contacto
  Como visitante de pablofm.com
  Quiero poder contactar con Pablo FM
  Para explorar una colaboración, proyecto o simplemente charlar

  Escenario: Visitante accede a la página de contacto
    Dado que estoy en la página principal
    Cuando hago clic en "Contacto" en la navegación
    Entonces veo la página de contacto
    Y veo el botón "Reservar llamada"
    Y veo el email "fmmpablo@gmail.com"

  Escenario: Visitante reserva una llamada
    Dado que estoy en la página de contacto
    Cuando hago clic en "Reservar llamada"
    Entonces se abre Cal.com en una nueva pestaña
    Y puedo seleccionar un horario disponible

  Escenario: Visitante prefiere escribir un email
    Dado que estoy en la página de contacto
    Cuando hago clic en "fmmpablo@gmail.com"
    Entonces se abre el cliente de correo con el destinatario "fmmpablo@gmail.com"
