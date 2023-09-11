const jokes = [
"¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
"¿Qué hace una abeja en el baño? ¡Miiiiiiiiiel!",
"¿Qué le dijo el semáforo al coche? ¡No me mires, me estoy cambiando!",
"¿Cómo se dice pelo sucio en japonés? ¡Shampoo!",
"¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!",
"¿Cómo se llama el campeón de buceo japonés? ¡Tokofondo!",
"¿Qué le dice una iguana a su hermana gemela? ¡Somos iguanitas!",
"¿Cómo se llama el campeón de limpieza de ventanas? ¡Cristalín!",
"¿Qué le dice una impresora a otra? ¡Esa hoja es mía!",
"¿Por qué los esqueletos no pelean entre ellos? ¡Porque no tienen agallas!",
"¿Cómo se llama el campeón de escondidas en China? ¡Juan Pérez!",
"¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
"¿Sabes cuál es la diferencia entre un volcán y un terremoto? Que el terremoto ensucia y el volcán lava.",

];

function generateJoke() {
    const jokeElement = document.getElementById("joke");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateJoke);

generateJoke();