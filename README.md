# Amigo Secreto

Amigo Secreto es una aplicación web sencilla que permite a los usuarios ingresar los nombres de sus amigos y, posteriormente, sortear de manera aleatoria un "amigo secreto". La aplicación está desarrollada con **HTML**, **CSS** y **JavaScript**.

## Características

- **Agregar Amigos:** Permite al usuario ingresar nombres de amigos y agregarlos a una lista.
- **Validación de Entrada:** Se valida que el campo no esté vacío y que los nombres contengan únicamente letras (se excluyen números y símbolos).
- **Actualización Dinámica:** La lista de amigos se refresca utilizando `innerHTML` para evitar duplicados.
- **Sorteo Aleatorio:** Utiliza `Math.random()` y `Math.floor()` para seleccionar de manera aleatoria uno de los nombres ingresados como amigo secreto.

## Estructura del Proyecto

- `index.html` – Contiene la estructura básica de la aplicación.
- `style.css` – Define el estilo y la apariencia de la interfaz.
- `app.js` – Incluye la lógica para agregar amigos, actualizar la lista y sortear un amigo secreto.
- `assets/` – Carpeta que almacena imágenes e íconos (por ejemplo, `amigo-secreto.png` y `play_circle_outline.png`).

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/moniquin19/amigoSecreto.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd amigoSecreto
    ```
3. Abre el archivo `index.html` en tu navegador web para ver la aplicación en funcionamiento.

## Uso

1. Ingresa el nombre de un amigo en el campo de texto.
2. Haz clic en el botón **"Añadir"** para agregar el nombre a la lista.
3. La lista se actualizará y mostrará todos los nombres ingresados.
4. Para sortear el amigo secreto, haz clic en el botón **"Sortear amigo"** y se mostrará el resultado en pantalla.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

---

¡Disfruta usando Amigo Secreto!