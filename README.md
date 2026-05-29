# Week_3-javascript 

# 📝 Lista de Notas - DOM y Local Storage

Proyecto realizado en JavaScript para practicar manipulación del DOM y almacenamiento de datos con Local Storage.

---

# 🚀 Funcionalidades

✅ Agregar notas
✅ Eliminar notas
✅ Guardar notas en Local Storage
✅ Recuperar notas al recargar la página
✅ Manipulación dinámica del DOM

---

# 📁 Archivos del proyecto

```txt id="p8vowm"
manipulacion_dom.html
```

```txt id="n7ktx6"
app.js
```

---

# 🧩 Elementos utilizados

## HTML

Se utilizó:

* input
* button
* ul
* li

---

## JavaScript

Se utilizaron:

* `getElementById()`
* `querySelector()`
* `appendChild()`
* `removeChild()`
* `textContent`
* `addEventListener()`
* `localStorage`

---

# 💾 Local Storage

Las notas se guardan automáticamente en el navegador usando:

```js id="r26f1i"
localStorage.setItem()
```

Y se recuperan usando:

```js id="0t5ygr"
localStorage.getItem()
```

---

# ✅ Validaciones

El programa verifica:

* que el input no esté vacío
* que las notas se agreguen correctamente
* que las notas se eliminen correctamente

---

# 🎯 Resultado

La aplicación permite:

* agregar notas sin recargar la página
* eliminar notas dinámicamente
* mantener las notas guardadas incluso al actualizar la página
