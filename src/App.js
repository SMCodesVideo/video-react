import React, { useState } from 'react';
import './style.css';
import api from './services/api.js';

function App() {
	var corpo = document.querySelector("#body");
	const [email, setEmail] = useState(''),
		[senha, setSenha] = useState('');
	async function handleSubmit(event) {
		event.preventDefault();
		// alert("Test");
		const enviate = await api.post("/createuser", { email, password: senha });
		console.log(enviate);
		alert("Seu email: "+email+"\nSua senha: "+senha);
		var user = {
			email,
			id: enviate.data.create.user._id
		};
		console.log(enviate.data.create.user);
		localStorage.setItem("user", JSON.stringify(user));
	}
	function load() {
		var user = JSON.parse(localStorage.getItem("user"));
		if(!user) return;
		var te = document.querySelector("#teste");
		te.setAttribute("class", "sumir");
		var log = document.querySelector("#logado");
		log.setAttribute("class", "on");
	}
	corpo.onload = function() {
		load();
	}
	return (
		<>
			<div id="logado" className="off">
				<h1>
					Você está logado
				</h1>
			</div>
			<div id="teste">
				<div id="dashboard">
					<h1 id="title">
						Cadastrar-se
					</h1>
					<form
						id="formulario"
						method="POST"
						autoComplete="off"
						onSubmit={handleSubmit}
					>
						<input
							type="email"
							name="email"
							className="inputText"
							placeholder="Digite seu melhor email"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
						<br/>
						<input
							type="password"
							name="senha"
							className="inputText"
							placeholder="Digite uma senha segura"
							value={senha}
							onChange={event => setSenha(event.target.value)}
						/>
						<br/>
						<input
							type="submit"
							className="inputButton"
							value="Cadastrar-se"
						/>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;