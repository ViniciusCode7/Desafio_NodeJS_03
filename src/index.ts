/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { notEqual } from "assert";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async() => {
	console.log(`Listening on port ${PORT}`);	

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS

	const readline = require('readline');
	const r1 = readline.createInterface({
		input: process.stdin,
		output: process.stdout

	});

		// R01,
	const question = (str: string) => new Promise((resolve) => r1.question(str, resolve));

	let alunos = Number(await question("Qual a quantidade de alunos "));

		// R02 
	console.log('Quantidade de alunos', alunos)

		// R03 
	let alunosArray = []
	for (let i = 0; i < alunos; i++) {

	    let alunoNome = await question('Qual o nome do aluno? ');
	    console.log(alunoNome);

		let notaNome = await question('Qual a nota do aluno? ');
		console.log(notaNome);

	    alunosArray.push(notaNome); }
	   
		// R04
		const a = 0;
		const b = 1;
        alunosArray.sort((a: any, b: any) => b[0] - a[0]);
		console.log('A maior nota é: ', alunosArray[0]);
});
