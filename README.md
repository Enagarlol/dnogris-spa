# D'Nogris Spa

Sitio web de D'Nogris Spa, estudio de belleza en Tapachula, Chiapas.

**En línea:** https://dnogris-spa.pages.dev

Sitio estático (HTML + CSS + JS, sin dependencias).

## Cómo correrlo

```
python -m http.server 5173
```

Abrir http://localhost:5173

## Dónde se cambia cada cosa

- **Servicios y precios, paquetes:** `data.js`
- **Textos, contacto, horario y mapa:** `index.html`
- **Fotos, video y logo:** carpeta `img/`

## Publicación

Está en **Cloudflare Pages**, conectado a este repositorio: cada push a `main` se publica solo en uno o dos minutos.
No tiene comando de compilación; el directorio de salida es `/`.
