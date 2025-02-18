//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

//variável de controle do item
var item = false;

//função que retorna dados das escolhas
function getStory () {
	return{

	currentScene: "introducao", 
	introducao: {
		title: "Primeiro Dia",
		image: "img/imagem01.webp",
		story: "<h3>Este é o primeiro texto da narrativa interativa. Aqui você deve apresentar o cenário e o personagem.</h3><h3>Abaixo estão as duas escolhas possíveis:</h3>",
		choices: [
	 	{
			choice: "Opção 1",
			destination: 'opcao01'
	 	},
		{
			choice: "Opção 2",
			destination: 'opcao02'
	 	}
	 	]
	},

	opcao01: {
		title: "Primeira Opção",
		image: "img/imagem02.webp",
		story: "<h3>Neste trecho é exemplificado como realizar um teste envolvendo rolar 2D6 e comparar com um número.</h3><h3>Como exemplo, será verificado se o valor da soma de 2D6 é menor ou igual a sete. Isso envolve a criação de um trecho em branco nesta função getstory()</h3>",
		choices: [
	 	{
			choice: "Rolar Dados",
			destination: 'rolardados01'
	 	}
	 	]
	},

	opcao02: {
		title: "Segunda Opção",
		image: "img/imagem02.webp",
		story: "<h3>Esta opção está aqui apenas para exemplificação. Você será redirecionado para o uso de rolar de dados.</h3>",
		choices: [
	 	{
			choice: "Veja como fazer um teste",
			destination: 'opcao01'
		}
	 	]
	},

	//trecho em branco para criar testes onde rola-se 2D6
	rolardados01: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessorolar01: {
		title: "Sucesso no Teste",
		image: "img/imagem01.webp",
		story: "<h3>Você teve sucesso no teste!</h3><h3>Agora temos um trecho com 3 opções:</h3>",
		choices: [
	 	{
			choice: "Introdução",
			destination: 'intro'
		},
		{
			choice: "Pegar um item",
			destination: 'pegaritem'
		},
		{
			choice: "Não pegar um item",
			destination: 'naopegaritem'
		}
	 	]
	},

	falharolar01: {
		title: "Falha no Teste",
		image: "img/imagem01.webp",
		story: "<h3>Você não teve sucesso no teste!</h3><h3>Recomece a aventura.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'introducao'
		}
	 	]
	},

	pegaritem: {
		title: "Pegar Item",
		image: "img/imagem01.webp",
		story: "<h3 >Você pegou um item; para isso ver validado, é necessário mudar o valor da variável [item] no código, na função renderScene().</h3>",
		choices: [
		{
			choice: "Seguir Adiante",
			destination: "testaritem"
		}
		]
	},

	naopegaritem: {
		title: "Não Pegar Item",
		image: "img/imagem01.webp",
		story: "<h3 >Você não pegou um item; nada precisa ser alterado no código.</h3>",
		choices: [
		{
			choice: "Seguir Adiante",
			destination: "testaritem"
		}
		]
	},

	//trecho em branco para criar se o item está no inventário
	testaritem: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	finalbom: {
		title: "Final Bom",
		image: "img/imagem01.webp",
		story: "<h3 >Você pegou o item e concluiu sua aventura!</h3>",
		choices: [
		{
			choice: "Introdução",
			destination: "introducao"
		}
		]
	},

	finalruim: {
		title: "Final Ruim",
		image: "img/imagem02.webp",
		story: "<h3 >Você não pegou o item... Tente novamente!</h3>",
		choices: [
		{
			choice: "Introdução",
			destination: "introducao"
		}
		]
	},

	instrucoes: {
		title: "Instruções",
		story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções de escolha da narrativa, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "introducao"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},

	creditos: {
		title: "Créditos",
		story: "<p><b>Autor:</b> (colocar seu nome aqui) <p><b>Programação:</b> (colocar seu nome aqui) e Leonardo Antônio de Andrade</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='https://www.jamendo.com/track/1273567/espionage' target='blank' class='classe1'>Trecho da Faixa Espionage, de FOX & MEW</a></h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "introducao"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},
	
	inicio: {
		title: "Inicio",
		story: "<h3></h3>",
		choices: [
		{
			choice: ".",
			destination: "inicio"
		}
		]
	}
	
	}
}

//função para programação dos botões
document.addEventListener ('DOMContentLoaded', function() {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');
	button0.addEventListener('click', function() {
		story = getStory ();
		renderScene ();
	})
	button1.addEventListener('click', function() {
		if (cont == 0)
		{
			window.open("http://narrativas-interativas.ufscar.br", '_blank');
		}
		else
		{
			story = getStory ();
			renderScene ();
		}
	})
	button2.addEventListener('click', function() {
		if (cont == 0)
		{
			instrucoes = true;
		}
		story = getStory ();
		renderScene ();
	})
	button3.addEventListener('click', function() {
		if (cont == 0)
		{
			creditos = true;
		}
		story = getStory ();
		renderScene ();
	})
})

//função de renderização de conteúdo
function renderScene()
{
	//console.log(cont);
	var image = "";
	var titulo = "";

	if (instrucoes)
	{
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos)
	{
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	if (!story[story.currentScene].image)
	{
		image = "<img></img>";
	}

	if (story[story.currentScene].title == "Primeiro Dia")
	{
		titulo = story[story.currentScene].title;
	}

	//variaveis que controlam os dados (2D6)
	dado1 = Math.floor(Math.random() * 6 + 1);
	dado2 = Math.floor(Math.random() * 6 + 1);
	dados = dado1 + dado2;

	switch (story.currentScene)
	{
		case ('introducao'):
			item = false;
		break;

		case ('rolardados01'):
			if (dados <= 7)
			{
				story.currentScene = 'sucessorolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)');
			}
			else
			{
				story.currentScene = 'falharolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)');
			}
		break;

		case ('pegaritem'):
			item = true;
		break;

		case ('testaritem'):
			if (item)
				story.currentScene = 'finalbom';
			else
				story.currentScene = 'finalruim';
		break;
	}

	//trecho de renderização do framework - não mexer
	document.getElementById("content").innerHTML = `
	<center><h1>${titulo}</h1></center>
	<p>${story[story.currentScene].story}</p>
	${image}
	${getInputs()}
	`
	if (story[story.currentScene].image) {
		document.querySelector("img").src = `${story[story.currentScene].image}`
	}
	var button0 = document.querySelector("#button0");
	var button1 = document.querySelector("#button1");
	var button2 = document.querySelector("#button2");
	var button3 = document.querySelector("#button3");

	//console.log(story.currentScene);
	
	button0.addEventListener('click', function (){
		cont++;
		getInputValue(0);
	})

	if (button1 != null)
	{
		button1.addEventListener('click', function (){
			cont++;
			if (cont == 1 && master)
			{
				master = false;
				window.location.href='index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null)
	{
		button2.addEventListener('click', function (){
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null)
	{
		button3.addEventListener('click', function (){
			cont++;
			getInputValue(3);
		})
	}
}

function getInputValue (x)
{
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

function getInputs()
{
	var input = ""
	if (!story[story.currentScene].choices){
		return ""
	}
	for(var i = 0; i < story[story.currentScene].choices.length; i++)
	{
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}
