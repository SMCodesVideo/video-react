import React, { useState } from 'react';
import './style.css';

function App() {
	const [email, setEmail] = useState(''),
		[senha, setSenha] = useState('');
	function handleSubmit(event) {
		event.preventDefault();
		// alert("Test");
		alert("Seu email: "+email+"\nSua senha: "+senha);
	}
	return (
		<div>
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
	);
}

export default App;