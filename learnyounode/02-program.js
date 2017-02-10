// Lire des paramètres passés en ligne de commande

let total = 0;

for (var i = 2; i < process.argv.length; i++) {
	total += parseInt(process.argv[i], 10);
}

console.log(total);