# Evaluación módulo 3 Adalab

Aquí os presento mi proyecto de evalución del módulo 3

## ¿Qué es?

Se trata de una aplicación web de búsqueda de personajes de la serie Rick y Morty realizada con React con componentes

## ¿Cómo es?

Tenemos un header con el título de la página y un main que incluye:

-   Formulario para la búsqueda de personajes
-   Sección para listar los personajes por defecto obtenidos mediante la API [Rick and Morty Api](https://rickandmortyapi.com/documentation/#get-all-characters) maquetada con GRID con diseño responsive

## ¿Cómo funciona?

**Filtrado**

En el campo de texto podemos escribir el personaje buscado. Mientras escribimos nos aparecerá la tarjeta del personaje que coincida con nuestra búsqueda.

-   Si encontramos el personaje: Nos aparecerá su tarjeta sobre la que podemos pasar con el ratón y nos cambiará los estilos.

-   Si no lo encontramos: Nos aparecerá otra página que nos indique que No hay ningún personaje que coincida con la palabra y que refresquemos la página

**Detalle de personajes**

Si queremos más información sobre algún personaje podemos pinchar en la tarjeta y nos llevará auna página en la que se nos darán más datos sobre el mismo y un botón con la posibilidad de volver al inicio

**Página no encontrada**

En el caso de que el usuario navegue a una URL inexistente se muestra un mensaje "El personaje que buscas no existe". Pero podemos volver al inicio pulsando en la imagen.

**URL compartible**
La URL del detalle de personaje es compartible, es decir, que
si visitamos esa URL directamente en el navegador se verá el detalle del personaje

---

## ¿Qué teconologías tiene?

He podido aplicar el temario del curso con las siguientes tecnologías:

-   HTML5, CSS3 (Sass, Flexbox, Grid, variables, mixins y MediaQueries)
-   React con React Router con hooks como useEffect, useState.
-   GitHub (branches y pages).
-   JavaScript.
-   API externa utilizada con AJAX.
-   Papel y lapiz para los bocetos.

## ¿Cómo se ejecuta?

1. Descarga este repositorio en zip o clonalo tu dispositivo con el comando `git clone`
2. Abre una terminal en la carpeta Master.
3. Instala dependencias locales con `npm install`
4. Arranca el proyecto con `npm start`
