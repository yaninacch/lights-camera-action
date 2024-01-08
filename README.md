Movie Challenge

Índice

[1. Definición del Producto](#1-definición-del-producto)

[2. Prototipo de baja fidelidad](#2-prototipo-de-baja-fidelidad)

[3. Prototipo de alta fidelidad](#3-prototipo-de-alta-fidelidad)

[4. Historias de usuarios](#4-historias-de-usuarios)

[5. Funcionalidades](#5-funcionalidades)

[6. Pruebas unitarias](#6-pruebas-unitarias)

[7. Despliegue en Vercel](#7-despliegue-en-vercel)

## 1. Definición del Producto

Es una SPA (Single Page Aplication) realizada con React, en la cual se puede visualizar un catálogo de películas. Cada película cuenta con una imagen y el año de lanzamiento.
También se visualiza una paginación para ver las determinadas películas que se encuentran en cada página.
Esta SPA cuenta con un filtro por género, se puede ordenar por más popular y menos popular, así como también por las que obtubieron mayor y menor ganancia.
Al hacer click sobre cada película, se pueder ver el detalle. Un breve resumen de la película, año de lanzamiento, géneros, promedio de votación y total de votos.

## 2. Prototipo de baja fidelidad

![Imagen Home](/src/components/img/bajafid1.png)
![Imagen Details](/src/components/img/bajafid2.png)

## 3. Prototipo de alta fidelidad

![Imagen Home](/src/components/img/Movie-Challenge.png)
![Imagen Detalis](/src/components/img/Movie-Challenge1%20(2).png)

## 4. Historias de usuarios

Historia de usuario 1
Listado de películas

Yo como usuaria quiero visualizar en un tabla (filas y columnas) el catálogo de películas

Criterios de aceptación:
Se debe usar el endpoint /discover/movie.
La aplicación cuenta con una paginación para explorar el catálogo por páginas.
Para cada película se debe mostrar como mínimo: poster, título original y año de lanzamiento.


Historia de usuario 2
Filtro y ordenamiento

Yo como usuaria quiero filtrar y ordenar el catálogo de películas usando los criterios soportados por TheMovie Database API V3

Criterios de aceptación:
Para filtrar se debe usar el endpoint /discover/movie, y alguno de sus parámetros como por ejemplo with_genres.
Para ordenar se debe usar el endpoint /discover/movie, y alguno de sus parámetros como por ejemplo sort_by.
La paginación debe conservar el filtro y ordenamiento
Para cada película se debe mostrar como mínimo: poster, título original y año de lanzamiento.

Historia de usuario 3
Detalle de una película

Yo como usuaria quiero consultar los detalles de una película

Criterios de aceptación:
Se debe usar el endpoint /movie/{movie_id}.
Para la película se debe mostrar como mínimo: poster, título original, año de lanzamiento, géneros, promedio de votación y total de votos.
La interfaz debe permitir retornar al listado de películas conservando el filtro y ordenamiento.

## 5. Funcionalidades

Las funcionalidades que este proyecto requiere son implementar el uso de una api para renderizar un catálogo de películas, filtrar por género y que cuente con un tipo de ordenamiento.

## 6. Pruebas unitarias

Se realizaron pruebas unitarias de cada componente: Header, NavBarMenu, MovieCards, PaginationButtons, useFetch y Details.

## 7. Despliegue en Vercel