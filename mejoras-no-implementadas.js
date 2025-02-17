//editar
const editar = document.createElement("i");
editar.classList.add("bi", "bi-pencil", "icono-editar");
iconos.appendChild(editar);

editar.addEventListener("click", () => {
  const textoActual = p.textContent;
  const inputEditar = document.createElement("input");
  inputEditar.type = "text";
  inputEditar.value = textoActual;
  li.replaceChild(inputEditar, p);

  inputEditar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      p.textContent = inputEditar.value;
      li.replaceChild(p, inputEditar);
    }
  });
});

//tramsiciones
li {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

li.completada {
  text-decoration: line-through;
  color: red;
  transform: translateX(-10px);
}

li.eliminando {
  opacity: 0;
  transform: translateY(-20px);
}

//botones claro oscuro
const botonTema = document.createElement("button");
botonTema.textContent = "Cambiar Tema";
document.body.appendChild(botonTema);

botonTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

body.dark-mode .contenedor {
  border-color: #ffffff;
}

//notificaines
Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    new Notification("Recuerda completar tus tareas pendientes!");
  }
});
//establecer prioridades
const prioridad = document.createElement("select");
prioridad.innerHTML = `
  <option value="alta">Alta</option>
  <option value="media">Media</option>
  <option value="baja">Baja</option>
`;
li.appendChild(prioridad);

prioridad.addEventListener("change", () => {
  li.style.borderColor = prioridad.value === "alta" ? "red" :
                          prioridad.value === "media" ? "orange" : "green";
});


//estadisticas 
<div class="estadisticas">
  <p>Total: <span id="total-tareas">0</span></p>
  <p>Completadas: <span id="tareas-completadas">0</span></p>
  <p>Pendientes: <span id="tareas-pendientes">0</span></p>
</div>

function actualizarEstadisticas() {
  const total = ul.children.length;
  const completadas = Array.from(ul.children).filter(li =>
    li.querySelector("p").classList.contains("completa")
  ).length;
  const pendientes = total - completadas;

  document.getElementById("total-tareas").textContent = total;
  document.getElementById("tareas-completadas").textContent = completadas;
  document.getElementById("tareas-pendientes").textContent = pendientes;
}


