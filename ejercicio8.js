let perfil = {
    nombre: "Maria",
    apellido: "López",
    edad: 28,
    profesion: "Diseñadora",
    ciudad: "Medellin"
    
};



console.log(perfil); // Imprime el objeto completo

console.log(`Nombre: ${perfil.nombre}`);

console.log(`Apellido: ${perfil['apellido']}`);

perfil.edad = 29; // Actualiza la edad

console.log(`Edad actualizada: ${perfil.edad}`);
//perfil['edad'] = 30; // Otra forma de actualizar la edad

perfil.hobby = "Fotografía"; // agregar hobby

delete perfil.ciudad; // eliminar ciudad

console.log(perfil);

