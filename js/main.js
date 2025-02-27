//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

//Variaveis de rolagem de dado
var penalidade = 0;



//variável de controle do item
var item = false;

//função que retorna dados das escolhas
function getStory() {
	return {

		currentScene: "AtoI",

		AtoI: {
			title: "Inicio da jornada",
			story: `
			<h1>Ato I</h1>
			<h2>O Chamado da Caverna</h2>
			`,
			choices: [
				{
					choice: "Iniciar jornada",
					destination: "introducao"
				}
			]
		},

		introducao: {
			title: "O Inicio",
			image: "",
			story: `<h3>O frio úmido da caverna rastejava pela pele de Thaynara como dedos invisíveis, e cada passo que ela dava era acompanhado pelo eco surdo de suas botas contra a pedra antiga. O ar cheirava a terra molhada, com um leve toque de ferrugem – ou talvez fosse sangue. Seus olhos, abençoados por sua linhagem élfica, mal conseguem enxergar na escuridão opressora ao seu redor, e sombras dançavam nas paredes irregulares como criaturas espectrais espreitando das fendas</h3>
			<h3>O silêncio era absoluto… demasiado absoluto. Não havia o som de água pingando, nem o farfalhar de pequenos animais. Apenas o ressoar de sua própria respiração e o leve sussurro do vento, como se a própria caverna estivesse sussurrando segredos esquecidos. À sua frente, o caminho se bifurcava em duas direções:</h3>
			<h3>À esquerda, uma escadaria escavada na pedra, seus degraus gastos e cobertos de poeira milenar. Gravadas ao longo das paredes e corrimãos, inscrições rúnicas brilhavam fracamente em um tom esverdeado, pulsando como um batimento cardíaco. Um conhecimento ancestral e proibido parecia exalar delas, chamando por aqueles curiosos – ou tolos – o suficiente para tocá-las.</h3>
			<h3>À direita, um salão de pedra, vasto e escuro como a boca de um leviatã. O espaço era amplo, seus limites ocultos pela penumbra profunda. O cheiro era diferente ali, mais denso, como se algo tivesse apodrecido há muito, muito tempo. Havia marcas no chão, como se algo grande tivesse sido arrastado recentemente, mas sem pegadas para indicar quem – ou o que – o fizera.<h3></h3>
			<h2>Para onde seguir?</h2>
			`,
			choices: [
				{
					choice: "Examinar a escadaria com inscrições rúnicas",
					destination: 'ExaminarEscada'
				},
				{
					choice: "Passagem que leva a um salão de pedra",
					destination: 'ExplorarSalao'
				}
			]
		},

		ExaminarEscada: {
			title: "Examinar a Escadaria com Inscrições Rúnicas",
			image: "img/imagem01.webp",
			story: `<h3>A cada degrau que descia, Thaynara sentia o ar se tornar mais pesado, como se a própria caverna se fechasse ao seu redor. A umidade das paredes trazia um frio pegajoso, que parecia se prender à sua pele e escorrer por sua espinha em arrepios involuntários. A luz fraca de seu feitiço tremulava, lutando contra as sombras, e por um instante ela teve a impressão de que a escuridão ao redor não era apenas a ausência de luz, mas algo vivo, algo que observava.</h3>
					<h3>As runas esculpidas na pedra brilhavam de forma irregular, em tons esverdeados que lembravam o brilho fosforescente de musgo venenoso. Elas pareciam pulsar, como se carregassem um ritmo próprio, lento e pesado, semelhante a uma respiração sufocada. Thaynara fixou os olhos nelas, tentando identificar os símbolos e sua origem, mas quanto mais tentava compreendê-los, mais sua visão se tornava turva, como se as formas se retorcessem sutilmente diante dela.</h3>
					<h3>O silêncio da caverna não era natural. Era um vazio denso, opressor, como se sugasse qualquer som, qualquer vestígio de vida. Não havia vento, nem o eco de gotas d'água, apenas aquela pulsação leve, quase imperceptível, das runas. Um zunido baixo ressoava em sua mente, distante e persistente, como um murmúrio sem origem, uma voz que não podia ser ouvida, apenas sentida.</h3>
					<h3>Thaynara estreitou os olhos. Algo estava errado ali.</h3>`,
			choices: [
				{
					choice: "Usar Detectar Magia para analisar as runas.",
					destination: 'rolardado_DetectarMagia'
				},
				{
					choice: "Continuar descendo a escadaria",
					destination: 'ContinuarEscada'
				}
			]
		},

		sucesso_DetectarMagia: {
			title: "Sucesso no Teste",
			image: "img/imagem01.webp",
			story: `<h1>Sucesso!</h1>
					<h3>Aos poucos, os símbolos começaram a fazer sentido. Eram antigos, muito mais antigos do que qualquer encantamento que Thaynara já havia estudado. A energia que pulsava das runas não era comum, nem natural. Ela percebeu que aquilo não era um simples feitiço de proteção ou selamento. Aquelas inscrições estavam impregnadas com algo sombrio, algo que se alimentava do que passava por ali.</h3>
					<h3>Seu estômago se revirou ao compreender a verdade. As runas pareciam ecoar vida, mas não estavam vivas... estavam famintas. Famintas por energia vital. Necromancia.</h3>
					`,
			choices: [
				{
					choice: "Continuar",
					destination: 'ContinuarEscada'
				}
			]
		},

		falha_DetectarMagia: {
			title: "Falha no Teste",
			image: "img/imagem01.webp",
			story: `<h1>Falha!</h1>
					<h3>O brilho pulsante das runas se intensificou de repente, e uma onda de energia invisível percorreu o ar como um trovão abafado. Um arrepio cortante percorreu a espinha de Thaynara, e antes que pudesse reagir, sentiu um impacto repentino em sua mente, como se mãos gélidas tentassem puxá-la para dentro da pedra.</h3>
					<h3>A visão se distorceu. As paredes pareciam se aproximar, as sombras se tornaram mais densas. O ar ficou pesado como chumbo, e por um instante, ela não sabia dizer se ainda estava de pé ou se a caverna havia engolido sua existência. Com um esforço tremendo, forçou sua mente de volta ao controle e cambaleou para trás, arfando. Um zumbido persistia em sua cabeça, seus pensamentos mais lentos, como se algo tivesse drenado parte de sua clareza.</h3>
					<h4>penalidade de -2 em qualquer teste futuro</h4> 
					<h3>Ainda tonta, sem outra escolha, Thaynara continuou descendo a escadaria.</h3>
					`,
			choices: [
				{
					choice: "Continuar",
					destination: 'ContinuarEscada'
				}
			]
		},

		ContinuarEscada: {
			title: "Continuar descendo a Escadaria",
			image: "",
			story: `<h3>Os últimos degraus da escadaria levavam a uma câmara ampla e silenciosa. O teto era baixo, sustentado por colunas desgastadas, e o ar carregava um cheiro metálico e espesso. No chão de pedra irregular, espalhadas por toda a superfície, estavam dezenas de moedas de ouro. Elas refletiam a luz de forma estranha, um brilho opaco e irregular que contrastava com seu valor aparente. Algumas estavam sujas de poeira e ferrugem, mas outras... outras estavam cobertas por uma fina camada de sangue seco.</h3>
					<h3>No centro da sala, um corpo jaz imóvel. A pele acinzentada e a posição retorcida do cadáver denunciavam que sua morte não havia sido rápida ou misericordiosa. A armadura rasgada indicava que fora um aventureiro, talvez outro membro da Guilda que viera em busca de glória e riquezas, apenas para encontrar um fim sem testemunhas. O odor pútrido do corpo, misturado com algo a mais - algum tipo de essência, talvez? - impregna totalmente a pequena sala, se infiltrando nas narinas de Thaynara como uma praga.</h3>
					<h3>À frente do cadáver, um baú de madeira reforçada repousa contra a parede. Diferente do restante da sala, parecia estar intacto, sem sinais de envelhecimento ou danos. Sua presença ali, cercada pelo ouro manchado de sangue e pelo corpo abandonado, destoava do cenário de desolação. Algo parece estranho.</h3>
					<h3>A caverna estava silenciosa, mas a sensação de que algo a observava não deixava Thaynara em paz. Aquele lugar era um túmulo... e talvez não fosse apenas para o aventureiro caído.</h3>
					`,
			choices: [
				{
					choice: "Ir até o báu",
					destination: 'VerBau'
				},
				{
					choice: "Ir até o corpo",
					destination: 'VerCorpo'
				}
			]
		},

		VerBau: {
			title: "Ir até o Baú",
			story: `<h3>Thaynara se aproxima do baú com cautela, seus passos ressoando levemente no piso de pedra irregular. O baú continua exatamente onde estava, encostado contra a parede, imóvel como um predador paciente à espreita. Algo nele a incomoda. Agora, tão perto, sua aparência parece… perfeita demais. A madeira polida contrasta com o ambiente arruinado, como se nunca tivesse sentido o peso do tempo. Um arrepio percorre sua espinha. Um presságio?</h3>
					<h3>A fechadura está claramente danificada, como se tivesse sido arrombada à força. O ferro retorcido brilha sob a luz trêmula da tocha, e marcas profundas ao redor indicam tentativas desesperadas de acesso. Teria sido obra do aventureiro caído do outro lado da sala? O pobre infeliz jaz em uma posição contorcida, os dedos crispados como se tentassem agarrar algo no último momento. Seu rosto, parcialmente oculto pelas sombras, parece congelado em um misto de surpresa e agonia.</h3>
					<h3>Thaynara nota algo a mais. Há manchas carmesim nas bordas do baú, como respingos de sangue seco. Sua mente lhe prega uma peça: por um instante, ela quase pode ver uma língua gananciosa lambendo a madeira, como se limpasse os beiços após uma refeição. Ela pisca, afastando o pensamento. Estranho.</h3>
					<h3>Seria fácil simplesmente abrir o baú e saquear seu conteúdo. Ouro, joias, talvez até pergaminhos mágicos? Seu coração acelera ao imaginar os artefatos esquecidos que poderiam repousar ali, relíquias de eras antigas esperando por alguém para reivindicá-las. A promessa de tesouros é tentadora, mas a sensação de perigo não a abandona.</h3>
					<h3>Algo não está certo. Parece fácil demais. O corpo no chão é um aviso silencioso, um lembrete de que a ganância pode ser uma armadilha mortal. O baú parece chamar por ela, quase desafiando-a a arriscar-se.</h3>
					<h2>O que fazer?</h2>
			
					`,
			choices: [
				{
					choice: "Abrir o baú",
					destination: "AbrirBau"
				},
				{
					choice: "Inspecionar o baú",
					destination: "InspecionarBau"
				}
			]
		},

		AbrirBau: {
			title: "Abrir o baú",
			story: `<h3>Subitamente, um desejo irracional de se aproximar do baú toma conta de Thaynara, como se uma força maior a controlasse. O baú, ainda encostado inocentemente contra a parede rochosa, parece encará-la de volta, imóvel, à espera.</h3>
					<h3>O ar ao redor está pesado, denso como se impregnado por algo antigo e faminto. O cheiro metálico do sangue seco deveria ser um aviso suficiente, assim como a fechadura arrombada e as manchas carmesim que decoram a madeira. Mas Thaynara ignora tudo isso. Seus dedos tremem ligeiramente quando finalmente tocam a superfície do baú - esperando encontrar madeira fria e envelhecida.</h3>
					<h3>Mas não está fria. Está quente. Um calor pulsante, quase febril, vibra sob seus dedos, como se houvesse algo vivo ali dentro. Seu corpo se enrijece. Então, antes que possa reagir, sente um estremecer sob suas mãos. Um arrepio sobe por sua espinha. A madeira se deforma.</h3>
					<h3>Com um estalo grotesco, fendas se abrem na superfície do baú, revelando um interior úmido e pulsante. A coisa que antes parecia inanimada agora se retorce e se desfaz em uma forma hedionda. Dentes - uma infinidade deles, afiados como lâminas e cobertos de baba viscosa - tremulam, famintos por carne fresca. Uma língua escura e bifurcada desliza entre as fileiras irregulares de presas, saboreando o momento. Antes que Thaynara possa recuar, a criatura investe.</h3>
					<h3>Um rosnado gutural ecoa pela sala quando a mandíbula monstruosa se fecha ao redor de seu antebraço. A dor explode em seu cérebro como um trovão. Seu osso se parte como um galho seco, a carne é rasgada, e o sangue jorra em um jato quente e pulsante. O grito que escapa de sua garganta se mistura ao som nauseante da mastigação do monstro.</h3>
					<h3>Cambaleando para trás, Thaynara cai pesadamente contra o chão de pedra. O frio da superfície parece distante, irrelevante diante do tormento lancinante que consome seu corpo. Seus olhos marejados descem para o que sobrou de seu braço - outrora forte e hábil, agora não passa de um pedaço de carne destroçado e irreconhecível. A bile sobe em sua garganta, e um desespero primitivo se apodera dela. Mas é tarde demais.</h3>
					<h3>O mímico avança novamente, sua bocarra grotesca abrindo-se para o golpe final. Ela mal tem forças para levantar a outra mão em um gesto inútil de defesa. Talvez, em outra vida, Thaynara escolha com mais sabedoria.</h3>
			
					`,
			choices: [
				{
					choice: "Continuar",
					destination: "FinalRuim_mimico"
				}
			]
		},

		InspecionarBau: {
			title: "Inspecionar o baú",
			story: `<h3>Thaynara avançou cautelosamente, os olhos fixos no baú que repousava à sua frente. O brilho metálico das ferragens refletia umidade, e algo na madeira escura parecia anormal, como se estivesse... pulsando. Seu instinto gritou antes mesmo que sua mente compreendesse o perigo.</h3>
					<h3>O baú não estava simplesmente ali, esquecido pelo tempo. Não havia poeira acumulada sobre ele, nem sinais de deterioração, como se fosse mantido em um estado de conservação perfeito. Mas o que fez sua respiração prender foi o leve movimento quase imperceptível da superfície.O baú... respirava.</h3>
					<h3>Ela conteve o ímpeto de recuar bruscamente. Em vez disso, deu um passo para trás com cautela, sem fazer barulho, enquanto seu olhar analisava melhor a criatura adormecida à sua frente. A madeira ondulava em intervalos irregulares, acompanhando uma respiração lenta e doentia. As ferragens, antes inofensivas, agora pareciam presas afiadas disfarçadas. Uma trilha viscosa escorria de uma fresta na lateral, refletindo um brilho levemente esverdeado na penumbra.</h3>
					<h3>Saliva. Seu coração acelerou ao perceber quão perto estivera de um erro fatal. Se tivesse tocado naquele baú, não teria sequer tempo para reagir antes de ser engolida viva. O baú era um mímico.</h3>
					<h3>O silêncio da câmara pesava sobre ela como uma presença invisível, algo que sussurrava nas frestas das pedras. O corpo do aventureiro caído ao lado do baú parecia gritar uma advertência muda. Quantos haviam sido atraídos pelo brilho dourado das moedas espalhadas pelo chão? Quantos haviam se curvado diante da promessa de um tesouro fácil, apenas para serem devorados no instante seguinte?</h3>
					<h4>A criatura não se movia, mas Thaynara sentia que estava sendo observada.</h4>
					<h3>Foi então que percebeu a escadaria no fundo da sala, escondida na penumbra. Diferente da primeira, esta descia ainda mais, mergulhando em uma escuridão mais profunda e densa. A abertura parecia um portal para um abismo desconhecido, uma passagem para algo que não deveria ser despertado.</h3>
					<h3>Por um momento, considerou suas opções. Permanecer ali significava testar a paciência do monstro adormecido, e voltar atrás não era uma escolha viável. O único caminho era para baixo. Com um último olhar para o baú vivo, Thaynara virou-se e avançou para a nova escadaria, descendo sem olhar para trás.</h3>
			
					`,
			choices: [
				{
					choice: "Continuar",
					destination: "AvançarEscadaria"
				}
			]
		},

		VerCorpo: {
			title: "Ir até o corpo",
			story: `<h3>O cheiro pútrido da morte se tornava mais forte conforme Thaynara se aproximava do corpo. Era espesso, pesado, prendia-se à garganta como um vapor oleoso e metálico. Não era apenas o odor da decomposição. Havia algo mais profundo ali, algo impregnado no ar daquela câmara, algo que fazia sua pele se arrepiar com um desconforto instintivo.</h3>
			<h3>O aventureiro jazia sobre um tapete de moedas sujas de sangue ressecado, sua armadura rasgada e retorcida como se mãos impiedosas a tivessem forçado para longe da carne. Seu rosto era uma máscara de desespero, os olhos arregalados, a boca entreaberta, como se seu último fôlego tivesse sido um grito que nunca ecoou. A pele estava pálida e arroxeada, afundada contra os ossos, e os membros faltantes indicavam que sua morte não havia sido rápida. Não havia cortes limpos. As lacerações eram irregulares, cruas, como se tivessem sido arrancadas de maneira bruta.</h3>
			<h3>Thaynara sentiu o estômago revirar. Já havia visto a morte antes, estudado corpos em ruínas antigas, testemunhado o resultado de emboscadas e ferimentos fatais. Mas aquilo... aquilo era diferente.</h3>
			<h3>Seu instinto lhe dizia para se afastar, para não olhar por muito tempo, para não pensar no que aquele homem sentira nos últimos segundos de vida. Foi então que ela sentiu.</h3>
			<h3>O ar ao redor do cadáver estava diferente. Mais frio. Mais pesado. A mesma sensação incômoda que sentira na escadaria, ao passar pelas runas. Aquela pressão invisível que parecia envolvê-la, apertando seu peito, tornando a respiração mais difícil. Como se algo permanecesse ali, algo que não deveria existir.</h3>
			<h3>Apenas após se afastar levemente do corpo que Thaynara nota a escadaria ao fundo da sala, mergulhando ainda mais fundo na escuridão. Uma oportunidade de seguir em frente.</h3>
			<h4>Ela precisa decidir o que fazer.</h4>
			`,
			choices: [
				{
					choice: "Inspecionar o cadáver",
					destination: "InspecionarCorpo"
				},
				{
					choice: "Avançar pela nova escadaria",
					destination: "AvançarEscadaria"
				}
			]
		},

		InspecionarCorpo: {
			title: "Inspecionar o cadáver",
			story: `
			<h3>O cheiro era pior de perto. Thaynara sentiu o estômago se revirar conforme se ajoelhava ao lado do cadáver, forçando-se a não desviar o olhar. A carne pálida e arroxeada parecia ter secado sobre os ossos, os olhos arregalados estavam turvos e afundados nas órbitas, a boca entreaberta como se sua última tentativa de gritar houvesse ficado presa no vazio.</h3>
			<h3>Ela engoliu em seco, o nojo subindo à garganta junto com um desconforto mais profundo. Aquilo não era uma morte comum. Não era o descanso final de um guerreiro tombado em batalha. Era algo... errado.</h3>
			<h3>Os membros faltantes haviam sido arrancados de forma bruta, sem qualquer sinal de cortes limpos. A carne dilacerada lembrava um pedaço de caça mal devorado, como se quem – ou o que – o tivesse matado não tivesse apenas o desejo de matá-lo, mas de consumi-lo, de destruí-lo completamente.</h3>
			<h3>A poeira e o sangue ressecado misturados às moedas sob o cadáver tornavam a cena ainda mais grotesca. O ouro espalhado ali era um testemunho amargo da ironia daquele lugar. Quantos haviam entrado em busca de glória e riquezas apenas para acabar assim? Thaynara cerrou os dentes e estendeu os dedos sobre a pele fria, reprimindo o impulso de recuar. Ela precisava saber o que havia acontecido.</h3>
			<h4>Realize um Teste de Arcanismo.</h4>
			
			`,
			choices: [
				{
					choice: "Rolar Dado",
					destination: "rolardado_Arcanismo"
				},

			]
		},

		sucesso_Arcanismo: {
			title: "Sucesso no Teste",
			image: "img/imagem01.webp",
			story: `<h1>Sucesso!</h1>
					<h3>Um arrepio percorreu sua espinha assim que tocou o cadáver. Era como mergulhar as mãos em um lago de águas paradas, estagnadas há séculos. Algo persistia ali, algo invisível e faminto.</h3>
					<h4>Então, ela entendeu. Esse frio vinha de dentro.</h4>
					<h3>Era um vazio absoluto, um buraco negro no tecido da realidade. A vida parecia se encolher diante dele, fugindo, implorando para não ser tragada. Era como estar à beira de um abismo que não levava a lugar nenhum, apenas a uma ausência completa.</h3>
					<h3>O cadáver não era apenas um corpo sem vida. Algo havia sido arrancado dali, algo essencial, algo que fazia dele mais do que apenas carne e ossos. Sua própria alma. Magia negra, necromântica impregna seus sentidos, Essa caverna não apenas matava. Ela devora.</h3>
					<h3>Thaynara sentiu a mente vacilar. Seus pulmões pareciam incapazes de puxar o ar direito, seu coração batia em um ritmo descompassado. Ela precisava sair dali. O cadáver não podia mais ser ajudado. Mas ela ainda podia se salvar.</h3>
					<h3>Seu olhar encontrou a escadaria ao fundo da sala, mergulhando ainda mais fundo na caverna. Havia algo mais lá embaixo. Algo pior. Sem olhar para trás, seguiu em direção à escuridão.</h3>
					`,
			choices: [
				{
					choice: "Continuar",
					destination: 'AvançarEscadaria'
				}
			]
		},

		falha_Arcanismo: {
			title: "Falha no teste",
			image: "img/imagem01.webp",
			story: `<h1>Falha!</h1>
					<h3>O ar ao redor pareceu mudar, mas não da forma que esperava. Ao invés de um fluxo de energia clara e decifrável, Thaynara sentiu apenas uma presença opaca e difusa, como uma neblina densa que não permitia que seus sentidos arcanos penetrassem além da superfície.</h3>
					<h3>Ela tentou se concentrar, forçando-se a tocar no cadáver moribundo. Thaynara retirou a mão do cadáver quase no mesmo instante em que a encostou na pele fria. Uma onda de repulsa subiu por sua garganta, misturada ao gosto metálico do ar pesado. Algo no corpo parecia... impregnado de alguma coisa. Algo que ela não conseguia identificar.</h3>
					<h3>Ela se forçou a respirar fundo, afastando a sensação. Talvez estivesse apenas impressionada pelo estado do cadáver, pelos cortes brutos e irregulares, pelo cheiro que se entranhava na pele. Não precisava de magia para ver que aquele aventureiro pereceu em agonia.</h3>
					<h3>Ela ergueu o olhar e percebeu o baú no canto da sala. Por um instante, achou ter visto um leve estremecimento na madeira, como se algo dentro dele tivesse se movido ao lembrar do gosto de carne fresca. Como se ainda estivesse faminto.</h3>
					<h3>Seu peito se apertou, e ela se afastou do cadáver, sentindo um arrepio de asco se espalhar por seu corpo. Esse lugar era um túmulo. Se ficasse ali por muito tempo, tornaria-se parte dele. A escadaria ao fundo da sala era a única saída.</h3>
					<h4>Virando-se, Thaynara seguiu para as profundezas.</h4>
					`,
			choices: [
				{
					choice: "Continuar",
					destination: 'AvançarEscadaria'
				}
			]
		},

		ExplorarSalao: {
			title: "Passagem que leva a um salão de pedra",
			image: "",
			story: `<h3>Thaynara seguiu pela passagem estreita, sentindo o espaço se abrir conforme avançava. O teto da caverna se expandia para um vazio cada vez mais profundo, e o ar se tornava mais denso, mais frio. Seu passo firme ecoava levemente contra a pedra nua, mas o som parecia engolido pela escuridão crescente.</h3>
					<h3>A princípio, sua visão meio-élfica foi suficiente para guiá-la. Ela podia distinguir as paredes irregulares e os relevos naturais do chão. Mas conforme mergulhava mais fundo no salão, algo mudou. A penumbra se adensou de maneira anormal, uma escuridão espessa e sem reflexo, que não deveria ser possível. Não era apenas a falta de luz. Era como se aquele lugar rejeitasse qualquer forma de claridade.</h3>
					<h3>Ela franziu o cenho e estreitou os olhos, tentando distinguir o que havia à sua frente, mas tudo ao seu redor se dissolvia em um manto de trevas. Seu corpo ficou tenso. Até onde sabia, nem mesmo a noite mais profunda era capaz de apagar completamente sua visão.</h3>
					<h3>Seus olhos baixaram para baixo instintivamente, procurando por qualquer sinal para se guiar. Por um momento, percebeu marcas tênues na poeira fina que cobria o chão de pedra. Rastros, leves demais para serem imediatamente notados. Quase apagados, como se algo ou alguém tivesse passado por ali há pouco tempo.</h3>
					<h4>Pegadas?<h4>
					<h3>Um calafrio subiu por sua espinha. Não conseguia distinguir suas formas, nem saber se pertenciam a uma criatura ou a um humano. A única certeza era que não estava sozinha naquele salão.<h3>

					`,
			choices: [
				{
					choice: "Usar luz (invocação) para iluminar o caminho.",
					destination: 'UsarLuz'
				},
				{
					choice: "Continuar furtivamente",
					destination: 'ContinuarFurtiva'
				}
			]
		},

		UsarLuz: {
			title: "Usar luz (invocação) para iluminar o caminho.",
			story: `<h3>Thaynara ergueu a mão e murmurou as palavras da invocação. Um brilho dourado surgiu em sua palma e rapidamente se espalhou, afastando a escuridão sufocante ao seu redor. As sombras se retorceram momentaneamente, como se relutassem em ceder espaço à luz, mas foram forçadas a recuar.</h3>
			<h4>Então, os olhos surgiram.</h4>
			<h3>Primeiro, foram apenas pontos brilhantes na escuridão, reflexos amarelados e avermelhados que piscavam como brasas famintas. Movimentos sutis arranharam a pedra, garras tilintando contra o chão. Um grasnar agudo ecoou pela câmara, seguido de sons abafados de passos apressados.</h3>
			<h4>Thaynara apertou o punho. Kobolds.</h4>
			<h3>Criaturas baixas e esguias emergiram das sombras, seus corpos cobertos por escamas irregulares e sujas. Tinham focinhos longos, cheios de dentes pequenos e afiados, e olhos esbugalhados que reluziam com uma malícia quase infantil. Vestiam trapos e pedaços de armadura improvisada, amarrados com couro velho e cordas encardidas. Cada um carregava uma arma desgastada – lanças tortas, lâminas enferrujadas e estilingues primitivos.</h3>
			<h4>Mas entre eles, algo maior se moveu.</h4>
			<h3>O líder do bando avançou com mais confiança, empurrando os menores para o lado. Sua pele era de um verde profundo, repleta de cicatrizes que denunciavam batalhas passadas. Diferente dos demais, sua armadura era mais robusta, feita de placas de metal grosseiramente encaixadas. O machado que segurava parecia ainda maior que seu corpo já imenso. O kobold arrasta a lâmina pesada contra a pedra, produzindo um som cortante e ameaçador.</h3>
			<h3>Os menores trocavam olhares furtivos entre si, seus rabos longos chicoteando o ar, como se aguardassem uma ordem. O líder soltou um rosnado grave.</h3>
			<h3>Thaynara sentiu a magia vibrar em seus dedos. Não havia dúvida: eles não estavam interessados em conversar.</h3>
			`,
			choices: [
				{
					choice: "Engajar em batalha.",
					destination: "EngajarBatalha"
				},
				{
					choice: "Tentar escapar.",
					destination: "TentarEscapar"
				}
			]
		},

		EngajarBatalha: {
			title: "Engajar em batalha",
			story: `<h3>Thaynara recuou com passos rápidos, sentindo a parede fria da caverna se aproximar demais de suas costas. O espaço era apertado, e os kobolds menores se espalhavam pelos lados, olhos brilhando na penumbra, suas armas rústicas tremendo entre garras finas. O clarão do primeiro feitiço queimava em seus olhos arregalados, e seus grasnados agudos denunciavam a incerteza. Eles hesitaram, assustados com a demonstração do arcano.</h3>
			<h3>Mas o líder não hesitou. O kobold maior avançou, cada passo pesado ecoando contra a pedra. Ele não se importava com a magia, com a ameaça cintilante que girava em torno das mãos de Thaynara. Seus músculos, duros como cordas tensionadas, se retesaram quando ele ergueu o machado acima da cabeça. A lâmina gasta brilhou sob a luz fraca, marcada por cortes e ferrugem, mas ainda afiada o bastante para despedaçar os ossos com a força bruta do impacto.</h3>
			<h3>Thaynara viu o golpe antes mesmo que ele começasse a cair. Um golpe brutal, amplo, desprovido de técnica, mas carregado de força e intenção letal. O peso do machado fazia a arma tremer no ar por um instante antes da descida violenta.</h4>
			<h4>Seu coração disparou. O espaço era pequeno demais para uma esquiva limpa. Ela precisava agir, e rápido.</h3>
			`,
			choices: [
				{
					choice: "Tentar se proteger",
					destination: "TentarProteger"
				},
				{
					choice: "Aproveitar a guarda aberta para esfaqueá-lo",
					destination: "EsfaquearKobold"
				}
			]
		},

		TentarEscapar: {
			title: "Tentar escapar",
			story: `<h3>O coração de Thaynara martelava contra o peito. O líder kobold ergueu o machado para outro golpe, e os menores avançavam, fechando cada vez mais o cerco. Ela não podia lutar ali. O espaço estreito trabalhava contra ela, e uma única falha poderia selar seu destino. Sem pensar duas vezes, girou sobre os calcanhares e correu.</h3>
			<h3>O machado do kobold desceu, estilhaçando a pedra onde Thaynara estivera um segundo antes. Thaynara disparou sem olhar para trás, os pulmões já ardendo antes mesmo de completar a primeira curva.</h3>
			<h3>Um grasnado agudo ressoou atrás dela, seguido pelo barulho frenético de garras contra a pedra. Os kobolds estavam em seu encalço, rápidos e implacáveis. O som de sua corrida ecoava como uma onda crescente de caos, os chiados ansiosos dos menores misturados ao rosnado gutural do líder. Sua única esperança era ser mais rápida do que eles.</h3>
			<h4>Realize um Teste de Destreza</h4>
			`,
			choices: [
				{
					choice: "Rolar dado",
					destination: "rolardado_Destreza"
				},
			]
		},

		sucesso_Destreza: {
			title: "Sucesso na Destreza",
			story: `
			<h1>Sucesso!</h1>
			<h3>A adrenalina impulsionava seus músculos. Seu corpo reagia por instinto, desviando de estalactites e pedras soltas sem hesitação. Cada curva do túnel era um risco, mas ela não diminuía o ritmo. O calor da perseguição se fazia presente atrás dela, os grunhidos dos kobolds cada vez mais próximos.</h3>
			<h3>Seu coração ameaçou saltar pela boca quando sentiu uma garra roçar de leve sua capa. Mas ela não parou</h3>
			<h3>Com um último impulso, girou para dentro de uma passagem estreita e seguiu por um caminho lateral. Os kobolds viraram atrás dela, mas hesitaram por um instante, confusos com as múltiplas bifurcações à frente.</h3>
			<h4>Era o suficiente.</h4>
			<h3>Ela continuou correndo por mais alguns metros, até que o som dos perseguidores começou a se dissipar. Suas pernas tremiam e seus pulmões ardiam, mas ela havia conseguido.</h3>
			<h3>A caverna se abriu novamente diante dela, levando-a a um espaço maior e mais amplo. Um salão de pedra.</h3>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "SalaodePedra"
				}
			]
		},

		falha_Destreza: {
			title: "Falha na Destreza",
			story: `<h1>Falha!</h1>
			<h4>O túnel parecia mais longo do que deveria ser.</h4>
			<h3>A cada passo, Thaynara sentia os kobolds se aproximando. O chiado agudo de suas vozes vibrava no ar, empurrando-a para frente com puro instinto de sobrevivência. Sua mente gritava para não parar, para correr, para viver.</h3>
			<h3>Foi então que aconteceu. Seu pé encontrou algo pequeno, quase insignificante – uma pedra menor que deveria ser menor que seu polegar. Uma pequena pedra que selaria seu destino.</h3>
			<h4>O mundo girou.</h4>
			<h3>Ela caiu com força, os joelhos raspando contra a pedra áspera, os cotovelos batendo com um impacto seco. O ar fugiu de seus pulmões em um solavanco, e a dor explodiu em sua pele em cortes e arranhões profundos.</h3>
			<h4>Não houve tempo para se levantar.</h4>
			<h3>O som das garras arranhando as rochas frias e desgastadas da caverna tilintou como um sino contra seus ouvidos.</h3>
			<h3>Ela ergueu o olhar, os pulmões ainda lutando por ar, e viu as silhuetas dos kobolds se aproximando. Os menores vieram primeiro, olhos brilhando de excitação, dentes à mostra em sorrisos famintos. O líder veio logo depois, arrastando seu machado pelo chão, cada passo marcado por uma lentidão deliberada.</h3>
			<h4>Thaynara sentiu bile subindo por sua garganta. Tinha gosto de medo.</h4>
			<h4>Não havia mais para onde correr.</h4>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "TentarProteger"
				}
			]
		},

		TentarProteger: {
			title: "Tentar se proteger",
			story: `<h4>O instinto tomou conta.</h4>
			<h3>Antes mesmo que sua mente pudesse raciocinar o que estava acontecendo, Thaynara ergueu as mãos em um reflexo desesperado e conjurou uma Armadura Arcana. Um brilho azulado envolveu seu corpo em um escudo etéreo, cintilando com traços mágicos que flutuaram ao seu redor por um breve instante.</h3>
			<h3>Mas ela já sabia que a barreira não a salvaria. O líder kobold soltou um grunhido baixo. O machado reluziu no ar antes de descer. O golpe rasgou o escudo mágico como se fosse feito de vidro, a energia dissipando-se em fagulhas inofensivas. A lâmina cortou fundo no ombro de Thaynara, atravessando carne e músculos até estalar contra o osso com um ruído seco e doentio.</h3>
			<h3>A dor explodiu em seu corpo como fogo líquido, arrancando um grito involuntário de sua garganta. A força do impacto a afundou contra o chão, e ela sentiu o gosto metálico de sangue encher sua boca. Seus dedos se contorceram espasmodicamente, tentando reagir, conjurar qualquer coisa, mas os nervos estavam em choque, recusando-se a obedecer. Seu braço atingido tremia descontroladamente, e quando tentou movê-lo, uma dor cortante percorreu seu corpo.</h3>
			<h3>Os kobolds menores se aproximaram, os olhos arregalados de euforia, suas línguas finas passando pelos dentes afiados. Ela quis se mover. Quis levantar. Quis gritar. Mas o líder já preparava o segundo golpe.</h3>
			<h3>O machado subiu mais uma vez e, por um instante, Thaynara viu o próprio reflexo na lâmina encharcada de vermelho. O golpe final veio com um som úmido e terrível.</h3>
			<h3>A lâmina partiu sua clavícula e afundou em seu peito, quebrando ossos e cortando pulmões. O mundo girou. O ar escapou de sua garganta em um gorgolejo sufocado, e sua visão começou a escurecer enquanto seu corpo se recusava a continuar lutando.</h3>
			<h4>Ela não sentia mais dor.</h4>
			<h4>Apenas um frio profundo, tomando tudo. E então, nada.</h4>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "FinalRuim_machado"
				}
			]
		},

		EsfaquearKobold: {
			title: "Aproveitar a guarda aberta para esfaquea-lo",
			story: `
			<h3>Thaynara não pensou. Seu corpo reagiu antes mesmo que sua mente acompanhasse. Em um movimento fluido e desesperado, sua mão deslizou para a lateral do cinto, puxando a pequena adaga que sempre carregava consigo.</h3>
			<h3>Ela não gostava de lutar com armas. Mas não havia espaço para conjurações agora. Só havia espaço para o instinto. Para a sobrevivência</h3>
			<h3>O líder kobold estava exposto. Seu golpe vinha com força e brutalidade, mas, ao erguer os braços para desferi-lo, seu torso ficou desprotegido. Um erro fatal. Thaynara se lançou para frente, deslizando sob o ataque com precisão. Seu corpo se curvou, e a lâmina da adaga encontrou seu alvo.</h3>
			<h3>O fio frio da arma perfurou a carne escamosa bem abaixo do esterno, penetrando sob as costelas e afundando nos órgãos internos. O impacto foi imediato. O líder kobold soltou um engasgo rouco, os olhos esbugalhando de choque. Suas garras tremeram ao redor do cabo do machado, mas a força em seus braços esvaiu-se. A arma pesada deslizou de seus dedos, caindo no chão com um baque seco e metálico.</h3>
			<h3>O kobold tropeçou para trás, os joelhos falhando, o sangue escuro borbulhando pela boca em um gorgolejo sufocado. Seus olhos encontraram os de Thaynara por um breve momento, um lampejo de incredulidade e ódio ainda pulsando neles antes de se apagarem para sempre. Seu corpo tombou para frente, espirrando sangue sobre a pedra fria.</h3>
			<h3>Os kobolds menores ficaram imóveis por um instante. O silêncio foi tão profundo que Thaynara conseguia ouvir sua própria respiração ofegante, o sangue latejando em seus ouvidos. Então, o pânico se instaurou.</h3>
			<h3>Os três pequenos draconídeos soltaram guinchos agudos e dispararam para longe, suas patas escamosas raspando pelo chão enquanto corriam de volta para a escuridão. Sem seu líder, não havia mais razão para lutar.</h3>
			<h3>Thaynara permaneceu imóvel por alguns segundos, o coração martelando no peito, os músculos ainda tensos pela adrenalina. Seu punho se fechava ao redor do cabo da adaga, os nós dos dedos esbranquiçados.</h3>
			<h3>Ela limpou a lâmina ensanguentada contra suas vestes, guardando a adaga de volta no cinto antes de olhar ao redor. O caminho à frente estava livre.</h3>
			<h3>Ainda sentindo o gosto metálico da adrenalina na boca, seguiu em frente, atravessando a passagem e adentrando o salão de pedra.</h3>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "SalaodePedra"
				}
			]
		},

		ContinuarFurtiva: {
			title: "Continuar furtivamente",
			story: `<h3>Thaynara se move silenciosamente pela escuridão, mantendo-se próxima às paredes da caverna. O frio da pedra áspera roçava sua pele conforme ela deslizava pelas sombras, evitando qualquer ruído desnecessário. Seus olhos permanecem no chão rochoso, procurando por quaisquer outros rastros.</h3>
			<h3>As pegadas no chão ainda eram levemente visíveis, mesmo sem luz direta. Eram marcas irregulares, raspões sutis contra a poeira fina da passagem. Mais de uma criatura passara por ali recentemente, e sua experiência dizia que não eram rastros humanos.</h3>
			<h4>Ela continuou, os sentidos atentos a qualquer movimento.</h4>
			<h3>Após alguns metros, avistou silhuetas baixas reunidas em um canto da passagem mais amplo à frente. Pequenas sombras escamosas se agrupavam ao redor do que parecia ser um amontoado de ossos e restos de comida. Três pequenas criaturas e uma maior e mais robusta. Kobolds.</h3>
			<h3>Thaynara apertou os lábios. Eles estavam desavisados, suas caudas se movendo distraidamente enquanto grasnavam baixinho entre si. Seria fácil emboscá-los. Um ataque rápido poderia eliminar boa parte do grupo antes que tivessem tempo de reagir, poupando-lhe um combate prolongado. Mas isso significava gastar energia, arriscar-se em uma luta desnecessária e possivelmente alertar outros inimigos na caverna.</h3>
			<h3>Outra opção, mais segura, passa por sua mente. Ela conhecia bem o feitiço de Invisibilidade. Poderia conjurá-lo e atravessar a área sem ser notada, continuando sua jornada sem chamar atenção. No entanto, os kobolds poderiam lhe dar mais pistas do que exatamente estava errado com essa caverna.</h3>
			<h4>A escolha estava em suas mãos.</h4>
			`,
			choices: [
				{
					choice: "Emboscar os kobolds",
					destination: "EmboscarKobolds"
				},
				{
					choice: "Usar Invisibilidade para passar despercebida",
					destination: "UsarInvisibilidade"
				}
			]
		},

		EmboscarKobolds: {
			title: "Emboscar os kobolds",
			story: `<h4>Thaynara não hesitou.</h4>
			<h3>Os kobolds continuavam distraídos, os chiados de suas vozes misturando-se ao som distante da caverna viva. Não notaram a presença dela, não tiveram tempo para reagir quando a magia se formou em suas mãos.</h3>
			<h3>O ar ao redor resfriou num instante. O feitiço surgiu antes mesmo que os primeiros estalos de gelo se propagassem, e então, num lampejo azulado, a magia explodiu. Um raio de gelo cortou o espaço entre ela e suas presas, o impacto atingindo-os em cheio. Os kobolds grasnaram em surpresa, seus corpos se enrijecendo sob a geada que os envolveu. Eles tentaram se mover, mas já era tarde.</h3>
			<h3>Thaynara recuou um passo e ergueu a outra mão, sentindo o calor familiar pulsar através de seus dedos. A resposta veio em uma labareda incandescente que se propagou pelo gelo, um choque de temperaturas extremas que resultou em uma explosão de fogo frio. A caverna se iluminou por um breve instante antes de tudo voltar à penumbra, restando apenas o cheiro de carne queimada e o som crepitante de corpos consumidos pelas chamas.</h3>
			<h4>Silêncio.</h4>
			<h3>A respiração dela estava pesada, o coração ainda acelerado pelo breve combate. Só então Thaynara se permitiu se aproximar dos corpos caídos.</h3>
			<h3>O cheiro de queimado ainda impregnava o ar, mas havia algo mais ali. Algo errado. Ela esperava ver os restos retorcidos de criaturas vivas queimada até os ossos, mas ao se aproximar, seu olhar captou detalhes estranhos.</h3>
			<h3>As escamas carbonizadas não se desfaziam como deveriam. O tecido chamuscado da pele não revelava carne fresca, mas sim algo seco, enegrecido de uma maneira que não era natural. Um dos kobolds caídos havia perdido parte do braço no impacto, e o corte revelava não músculo, mas carne endurecida, ressequida como couro velho. E eles cheiravam a… decomposição…?</h3>
			<h4>Thaynara franziu o cenho.</h4>
			<h3>Seus olhos percorreram rapidamente os corpos, agora com mais atenção. As articulações de alguns estavam rígidas demais, como se seus movimentos não fossem completamente naturais. Os olhos... os olhos pareciam errados. Mesmo queimados, vazios, não tinham o brilho de criaturas vivas, mas sim um vazio perturbador.</h3>
			<h3>Ela sentiu a bile subir na garganta quando finalmente percebeu.</h3>
			<h4>Não eram apenas kobolds.</h4>
			<h4>Eram mortos-vivos.</h4>
			<h3>Thaynara deu um passo para trás, o coração martelando contra o peito. Aquilo era obra de magia negra. Magia necromante. Alguém, ou algo, os havia re-animado para este estado antinatural. O poder profano era o que os mantinha de pé, antes de Thaynara os enviar para o outro lado novamente.</h3>
			<h3>O desconforto que sentira na caverna, o frio estranho que percorria o ar, tudo começava a fazer sentido. Essa não era apenas uma caverna comum. Algo maior, algo muito mais sombrio estava acontecendo ali. Ela apertou os punhos, tentando reprimir o asco que subia por seu corpo. Não havia nada mais que pudesse ser feito por aquelas criaturas. Apenas seguir em frente.</h3>
			<h3>Com um último olhar para os corpos retorcidos, Thaynara respirou fundo e caminhou para dentro do salão de pedra.</h3>

			`,
			choices: [
				{
					choice: "Continuar",
					destination: "SalaodePedra"
				}

			]
		},

		UsarInvisibilidade: {
			title: "Usar Invisibilidade para passar despercebida",
			story: `<h3>Thaynara observa os kobolds com atenção. Eles estavam agitados, mas desavisados. Pequenos, ágeis, armados com lanças improvisadas e lâminas tortas, mas em número suficiente para torná-los uma ameaça. Ela decide não lutar.</h3>
			<h3>Ela murmura as palavras do encantamento em voz baixa, e seu corpo começou a desaparecer. O efeito era instantâneo, a magia envolvendo-a como um manto invisível, apagando sua presença do olhar curioso das criaturas. Mas ainda assim, não podia relaxar. Invisível não significava intangível.</h3>
			<h3>Prendeu a respiração e começou a se mover. Cada passo era medido, calculado. Seu corpo parecia mais leve, mas cada pequeno som ecoava em sua mente como um trovão distante. O farfalhar da capa ao roçar na parede, a leve batida de uma bota contra uma pedra solta... qualquer ruído poderia ser sua ruína.</h3>
			<h3>Os kobolds continuavam conversando entre si, mas a tensão em seus músculos não diminuía. Um deles parou abruptamente e ergueu o focinho no ar, farejando.</h3>
			<h4>Thaynara congelou. O coração martelava contra o peito.</h4>
			<h3>Ela sentia a própria pulsação nos dedos, no pescoço, no fundo dos ouvidos. Permaneceu imóvel, contando os segundos, esperando que a criatura perdesse o interesse. Os olhos do kobold percorreram o túnel vazio por um momento antes de ele bufar e voltar à sua vigília.</h3>
			<h4>Thaynara forçou-se a respirar devagar.</h4>
			<h3>Continuou seu caminho, cada passo cuidadoso, cada movimento feito com uma precisão absoluta. Foi apenas quando alcançou o final da passagem que se permitiu relaxar, seu corpo tremendo ligeiramente com o resquício da tensão que a havia mantido rígida por tanto tempo.</h3>
			<h4>Então, sentiu novamente. O frio.</h4>
			<h3>Não o frio do vento, nem o da umidade presa nas paredes da caverna. Era outro tipo de frio. Um que parecia se infiltrar sob a pele, deslizar pelos ossos e se prender ao fundo da mente como uma presença indesejada.</h3>
			<h3>Ela olhou ao redor, mas não havia nada. Ainda assim, não conseguia se livrar da sensação de que a escuridão a observava.</h3>
			<h3>Engolindo em seco, seguiu em frente para o salão de pedra.</h3>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "SalaodePedra"
				},

			]
		},

		SalaodePedra: {
			title: "O salão de pedra",
			story: `
			<h3>O salão se abria diante de Thaynara como a boca de uma criatura antiga, imensa e vazia, esperando para devorar aqueles que ousassem entrar. As paredes eram repletas de rachaduras que se estendiam como cicatrizes profundas. O teto se perdia na escuridão, como se a própria caverna não tivesse fim.</h3>
			<h3>O frio era pior ali. Não o frio comum de uma caverna úmida, mas algo mais fundo, mais insidioso. Uma sensação que se enroscava ao redor da pele e se infiltrava pelos ossos, sugando o calor do corpo de forma quase sutil. O ar parecia denso, difícil de respirar, como se cada inspiração fosse um esforço para não ser esmagada por uma presença invisível.</h3>
			<h3>Os sussurros começam. Fracos, longínquos, deslizando pelas pedras como um vento que não deveria existir. No início, pareciam apenas ruídos da caverna, mas conforme ela avançava, os sussurros ganhavam forma. Vozes. Baixas, distorcidas, murmurando palavras que se dissolviam antes que pudessem ser compreendidas.</h3>
			<h3>Thaynara parou. Sentiu um arrepio percorrer sua espinha quando um dos sussurros pareceu mais próximo. Quase um lamento. Uma súplica. Virou-se rapidamente. Nada. O salão estava vazio.</h3>
			<h4>Mas ainda assim, sentia-se observada.</h4>
			<h3>Seus olhos percorreram o chão. As manchas escuras que se espalhavam pelo salão não eram simples sombras. Eram marcas de sangue seco, resquícios de lutas antigas. Algumas pegadas estavam manchadas, como se alguém tivesse tentado correr, fugindo de algo. Outras marcas, mais profundas, sugeriam que corpos haviam sido arrastados para longe, para um destino desconhecido. O peso da opressão ao seu redor aumentava a cada segundo.</h3>
			<h3>O salão terminava em um buraco abismal, um vazio negro e insondável que sugava toda a luz. Sua visão élfica não conseguia atravessar a escuridão abaixo. Apenas um nada sem fim, uma promessa de que qualquer um que descesse talvez jamais retornasse. Os sussurros se intensificaram. Mais vozes, mais lamentos.</h3>
			<h3>Por um instante, Thaynara sentiu que, se ficasse ali por muito tempo, também se tornaria um sussurro naquela caverna sem nome. Ela precisava seguir em frente.</h3>
			
			`,
			choices: [
				{
					choice: "Usar Queda Lenta para descender",
					destination: "UsarQuedaLenta"
				},
				{
					choice: "Tentar escalar para baixo",
					destination: "EscalarBaixo"
				}
			]
		},

		UsarQuedaLenta: {
			title: "Usar Queda lenta para descender",
			story: `
			<h3>Thaynara inspirou profundamente, sentindo o frio do abismo rastejar por sua pele. O vazio à sua frente parecia chamá-la, silencioso e interminável. A pedra sob seus pés era firme, mas o peso da decisão tornava-a estranhamente instável.</h3>
			<h3>Murmurando as palavras do encantamento, sentiu a magia envolver seu corpo como uma brisa sutil. Seus músculos relaxaram ligeiramente, e a gravidade perdeu parte de seu domínio sobre ela. Então, deu um passo à frente.</h3>
			<h3>O ar cortava ao redor de seu corpo conforme Thaynara descia, mas sua queda era suave, lenta, como se estivesse sendo carregada por mãos invisíveis. A escuridão do abismo a engoliu, o silêncio tornando-se quase absoluto, exceto pelos ecos distantes de gotas caindo em água desconhecida.</h3>
			<h3>Seus pés tocaram a superfície da água fria. A magia a manteve flutuando por um instante antes de permitir que pousasse suavemente no pequeno lago subterrâneo. A água escura subiu até seus tornozelos, gelada como a morte.</h3>
			<h4>O ambiente ao seu redor se revelou aos poucos.</h4>
			<h3>A poucos metros de onde estava, erguiam-se paredes de pedra moldada, diferentes das formações naturais da caverna. Blocos grandes e pesados, cobertos de musgo e umidade, formavam um corredor estreito que se estendia para a frente. Não havia portas visíveis, apenas uma abertura que levava para dentro do que parecia ser um calabouço antigo.</h3>
			<h3>O silêncio ali era diferente. Não era apenas ausência de som, mas uma ausência de vida.</h3>
			<h3>O ar carregava um cheiro de mofo e tempo esquecido, misturado com algo metálico e distante – um cheiro que Thaynara reconheceu antes mesmo de precisar refletir sobre ele.</h3>
			<h4>Sangue.</h4>
			<h3>Engolindo em seco, ela seguiu em frente, cuidadosa, a mão pairando perto de seu querido foco mágico, pronta para o que quer que estivesse à sua espera.</h3>

			`,
			choices: [
				{
					choice: "Continuar",
					destination: "AtoII"
				}
			]
		},

		EscalarBaixo: {
			title: "Tentar escalar para baixo",
			story: `
			<h3>Thaynara se aproximou da borda do abismo e olhou para baixo. A escuridão se estendia como uma garganta faminta, o fundo invisível mesmo para seus olhos élficos. Um frio profundo emanava das profundezas, carregado pelo cheiro de pedra úmida e algo mais... algo que ela não queria nomear.</h3>
			<h4>Ela inspirou fundo.</h4>
			<h3>Poderia simplesmente conjurar Queda Lenta, mas escolhera preservar sua magia para o que quer que estivesse à espreita no subsolo. Melhor poupar seus recursos. Melhor descer da forma tradicional.</h3>
			<h3>Colocou uma mão na pedra áspera e sentiu a umidade fria se agarrar à sua pele. O musgo tornava a superfície escorregadia, e o formato irregular das rochas tornava a descida ainda mais difícil.</h3>
			<h4>Força física nunca fora seu ponto forte. Mas agora, não tinha escolha.</h4>

			`,
			choices: [
				{
					choice: "Rolar dado",
					destination: "rolardado_Atletismo"
				}
			]
		},

		sucesso_Atletismo: {
			title: "Sucesso no teste de atletismo",
			story: `
			<h1>Sucesso!</h1>
			<h3>Cada movimento exigia esforço, cada pegada precisava ser calculada com precisão. Seus músculos tremiam, acostumados a conjurações e não a escaladas perigosas, mas Thaynara se obrigou a continuar.</h3>
			<h3>A rocha cortava seus dedos conforme se apoiava, a umidade escorria pelo cabo de sua capa, e a brisa fria que emanava do abismo fazia sua pele arrepiar. Seus pés encontravam saliências traiçoeiras, mas, por algum milagre, não escorregavam.</h3>
			<h3>Com um último esforço, seus pés tocaram a água fria do fundo do abismo. O impacto não foi brusco, mas a sensação gélida a fez estremecer. Ela respirou pesadamente, seus braços e pernas ardendo de exaustão, cada músculo reclamando o esforço inesperado.</h3>
			<h4>Mas ela estava inteira.</h4>
			<h3>As rochas brutas e irregulares da caverna davam lugar a algo... construído. Blocos de pedra moldada emergiam da escuridão à sua frente, formando um arco de entrada para um corredor estreito. O tempo e a umidade haviam coberto as paredes com musgo e infiltrações.</h3>
			<h4>Aquele lugar não era natural.</h4>
			<h3>O silêncio era diferente. Não o silêncio comum da caverna, mas uma ausência de som forçada, sufocante. Como se o próprio ambiente segurasse a respiração, esperando.</h3>
			<h4>Engolindo em seco, Thaynara avançou.</h4>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "AtoII"
				}
			]
		},

		falha_Atletismo: {
			title: "falha no teste de atletismo",
			story: `
			<h1>Falha!</h1>
			<h3>O vento soprou de dentro do abismo, úmido e opressor, e o frio fez seus dedos endurecerem por um instante. O suficiente para que seu pé escorregasse.</h3>
			<h3>Seu corpo perdeu o equilíbrio, e, antes que pudesse corrigir o movimento, seu pé deslizou de uma rocha molhada. O mundo girou por um instante antes que seu corpo despencasse.</h3>
			<h3>O impacto veio rápido. Seu corpo bateu contra a água com força, o líquido frio rasgando seu fôlego. A dor veio logo em seguida. Cada arranhão e corte em sua pele queimava com a água gelada, mas foi apenas quando tentou se levantar que percebeu o pior.</h3>
			<h3>Uma pontada aguda no tornozelo. Thaynara cerrou os dentes, xingando entre respirações ofegantes. Não estava quebrado, mas definitivamente torcido. Colocou o peso sobre a perna e sentiu a dor latejar pela articulação, obrigando-a a mancar.</h3>
			<h4>Penalidade de -2 em qualquer teste futuro</h4>
			<h3>Foi então que percebeu onde estava.</h3>
			<h3>A sua frente, as rochas da caverna davam lugar a algo muito mais sinistro. Paredes construídas por mãos humanas ou... algo parecido. Blocos grandes, desgastados pelo tempo, formando um corredor estreito que mergulhava na escuridão.</h3>
			<h4>O silêncio era sufocante.</h4>
			<h3>Thaynara sentia o peso invisível do ambiente, um frio diferente do que havia sentido antes. Não era apenas umidade ou vento. Era algo mais profundo. Algo que parecia observar.</h3>
			<h3>Com um arrepio percorrendo sua espinha, ela seguiu adiante, mancando ligeiramente, mas determinada a continuar.</h3>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "AtoII"
				}
			]
		},

		AvançarEscadaria: {
			title: "Avançar pela nova escadaria",
			story: `
			<h3>Os passos de Thaynara ecoavam pela escadaria estreita, cada degrau de pedra afundando-a ainda mais na escuridão da caverna. O ar ficava mais frio a cada metro descido, um frio que não vinha apenas da profundidade ou da umidade das paredes, mas de algo mais... denso.</h3>
			<h3>A opressão invisível que a acompanhava desde sua chegada à caverna agora era esmagadora. Não era apenas a sensação de estar sendo observada – era como se estivesse atravessando um véu invisível, um limiar entre o mundo dos vivos e algo além.</h3>
			<h3>Os sussurros começaram antes mesmo que ela chegasse ao final da descida. Baixos, distantes, dissolvendo-se no silêncio assim que tentava focar neles. Não eram ecos de sua própria presença, não eram o vento. Eram... vozes.</h3>
			<h4>Ela finalmente chegou ao fim da escadaria.</h4>
			<h3>À sua frente, o caminho se abria em um espaço maior. O chão de pedra lisa era irregular, coberto de marcas antigas. As paredes eram feitas de blocos de pedra, repletas de rachaduras e musgo - claramente maltratadas pelo tempo. A sua esquerda, um corredor levava para algo maior – um calabouço.</h3>
			<h3>Antes de seguir, seu olhar foi atraído para o outro lado.</h3>
			<h3>Ali, um pequeno corpo de água refletia a pouca luz do ambiente, sua superfície imóvel como um espelho sombrio. Acima dele, um abismo profundo, tão escuro que nem sua visão élfica conseguia enxergar o topo. Era impossível dizer onde terminava. Ela sentiu um arrepio. Aquele buraco... algo lhe dizia que havia mais de um caminho para chegar ali, além das escadarias.</h3>
			<h4>Mas não havia tempo para pensar nos “e se”.</h4>
			<h3>Virando-se novamente, avançou pelo corredor, onde as sombras pareciam mais densas e os sussurros nunca cessavam.</h3>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "AtoII"
				}
			]
		},

		AtoII: {
			title: "Inicio da jornada",
			story: `
			<h1>Ato II</h1>
			<h2>A Princesa</h2>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "IntroAtoII"
				}
			]
		},

		IntroAtoII: {
			title: "A princesa",
			story: `
			<h3>O ar dentro do calabouço era denso, quase sufocante. O cheiro de pedra úmida e ferrugem misturava-se ao fedor de algo muito mais antigo, um resquício de morte impregnado nas paredes, impossível de dissipar. A cada passo, Thaynara sentia a umidade do chão frio se infiltrando em suas botas, tornando sua presença ainda mais silenciosa naquele corredor onde o tempo parecia ter parado.</h3>
			<h3>Correntes pendiam das paredes e do teto, algumas balançando levemente, rangendo em um lamento mecânico. Outras estavam enrijecidas pela ferrugem, mas ainda assim, exibiam manchas escuras que o tempo não conseguiu apagar. Sangue seco, espalhado como vestígios de uma dor esquecida. As celas parecem ter sido amplamente utilizadas em um passado distante - tortura, sua mente evocou.</h3>
			<h3>Thaynara se distancia do pensamento, sua saliva subitamente amarga demais. O peso invisível que a acompanhava desde sua entrada na caverna parecia ainda mais forte ali. Era como se algo rastejasse pelo próprio ar, se entranhasse em seus pulmões e pesasse sobre seus ombros. A cada passo que dava, a sensação de que não deveria estar ali se intensificava.</h3>
			<h3>Um pequeno som reverbera pelas paredes de pedra.  Um choro, baixo e trêmulo, cortando o silêncio como um fio de lâmina fria.</h3>
			<h3>A princípio, era apenas um som indistinto ao fundo, mas conforme ela avançava, os soluços tornavam-se mais nítidos. Era uma voz feminina, delicada, mas carregada de um desespero esmagador. Cada lamento parecia carregado de medo e dor, um pedido mudo de socorro vindo das profundezas daquele lugar amaldiçoado.</h3>
			<h3>haynara sentiu um arrepio subir por sua espinha. O choro ecoava nas paredes de pedra, repetindo-se em tons sutilmente distorcidos, como se o próprio calabouço absorvesse aquele lamento e o devolvesse de maneira errada, quebrada.</h3>
			<h4>Algo dentro dela hesitou.</h4>
			<h3>Ali, naquele lugar onde a própria magia parecia errada, onde tudo parecia devorado por uma presença invisível, onde ninguém nunca retornou para contar a história... algo a fazia se perguntar se aquela voz era realmente o que aparentava ser. Tudo nesta caverna parece querê-la morta, afinal.</h3>
			<h3>Ao mesmo tempo, a voz continha um desespero que parecia muito real. Poderia ser de fato um sobrevivente clamando por ajuda.</h3>
			`,
			choices: [
				{
					choice: "Seguir o choro furtivamente",
					destination: "SeguirFurtiva"
				},
				{
					choice: "Perguntar pela voz",
					destination: "PerguntarVoz"
				}
			]
		},

		SeguirFurtiva: {
			title: "Seguir o choro furtivamente",
			story: `
			<h3>O senso de autopreservação falou mais alto. Thaynara permaneceu em silêncio, controlando sua respiração enquanto avançava pelas sombras do calabouço. Seus passos eram leves, cuidadosos, mal tocando o chão úmido de pedra. Tudo naquela caverna tentou matá-la até agora. Não cometeria o erro de se expor tão facilmente.</h3>
			<h3>O choro continuava. Cada soluço parecia cuidadosamente medido, oscilando entre desespero e resignação. Mas conforme se aproximava, algo incomodava Thaynara. O eco do som era estranho, como se não pertencesse inteiramente àquele lugar. Como se não fosse... natural.</h3>
			<h3>A cela ficava no final do corredor, separada das demais. A pedra ao redor estava ainda mais desgastada que o restante do calabouço, como se o tempo ali tivesse sido mais cruel, como se algo dentro daquela cela houvesse permanecido por muito mais tempo do que qualquer outra coisa naquele lugar.</h3>
			<h4>E o frio era pior ali.</h4>
			<h3>O ar parecia mais denso, mais sufocante. A mesma sensação que parecia afundá-la desde que colocou os pés na caverna.. Era um frio que vinha de dentro, que arranhava a pele como dedos invisíveis e se entranhava nos ossos.</h3>
			<h3>Thaynara se aproximou devagar, encontrando uma pequena fresta entre as rochas quebradas da parede da cela. Espiou pelo espaço estreito, tentando manter-se fora do alcance do que quer que estivesse ali dentro.</h3>
			<h3>No interior escuro, uma figura pequena e feminina estava sentada sobre o chão de pedra, ambos os braços acorrentados às paredes. A iluminação fraca e a posição da mulher dificultavam ver seu rosto por completo, mas seus ombros tremiam suavemente, acompanhando os soluços abafados. Seu vestido rasgado e sujo indicava dias, talvez semanas, de cativeiro.</h3>
			<h4>Ela parecia frágil. Perdida. Mas algo não estava certo.</h4>
			<h3>Os tremores de seu corpo eram meticulosos demais. O ritmo dos soluços, constante demais. Seguiam quase um ritmo, um… padrão. O desespero em sua voz, no entanto, parecia real.</h3>
			<h3>Thaynara franziu o cenho. Seu instinto gritou em advertência.</h3>
			<h6>— Q-Quem está aí?</h6>
			<h4>A voz suave e aterrorizada perguntou. Sua presença foi percebida.</h4>
			
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "AdentrarCela"
				}
			]
		},

		PerguntarVoz: {
			title: "Perguntar pela voz",
			story: `
			<h3>Thaynara parou por um instante, os olhos percorrendo as paredes escuras do calabouço. O choro ainda ecoava pelo ambiente, os soluços reverberando pelas pedras frias como se fossem parte do próprio local.</h3>
			<h3>Ela sentiu um arrepio percorrer sua espinha. Algo dentro dela dizia para manter-se em silêncio, para não atrair atenção. Mas e se fosse realmente uma sobrevivente? Se houvesse alguém ali, alguém que precisasse de ajuda?</h3>
			<h4>Respirou fundo e ergueu a voz.</h4>
			<h6>— Olá! Você não está mais sozinha. Onde você está?</h6>
			<h3>Por um instante, apenas o eco de sua própria voz retornou. Depois, um soluço cortou o silêncio.</h3>
			<h6>— Pelos deuses, alguém veio me salvar! — <em> a voz trêmula respondeu, carregada de desespero. </em> — Por favor, ajude-me!</h6>
			<h4>A súplica parecia verdadeira. Parecia... humana.</h4>
			<h3>Thaynara não hesitou mais. Seus passos aceleraram enquanto seguia o som da voz pelo corredor estreito. O frio ficou ainda pior conforme se aproximava, e a sensação opressora que a acompanhava desde que entrara naquele calabouço crescia como um peso invisível sobre seus ombros.</h3>
			<h3>Ao final do corredor, encontrou a origem do chamado. Uma cela isolada.</h3>
			<h3>O tempo fora cruel com aquela parte do calabouço. As pedras ao redor estavam mais desgastadas, como se algo ali dentro tivesse existido por muito mais tempo do que deveria. O cheiro de mofo e ferrugem se misturava ao ar pesado e imóvel.</h3>
			<h4>O frio era pior ali.</h4>
			<h3>O ar parecia mais denso, mais sufocante. A mesma sensação que parecia afundá-la desde que colocou os pés na caverna.. Era um frio que vinha de dentro, que arranhava a pele como dedos invisíveis e se entranhava nos ossos.</h3>
			<h4>Thaynara não perdeu mais tempo e rapidamente adentrou a cela.</h4>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: "AdentrarCela"
				}
			]
		},

		AdentrarCela: {
			title: "Adentrar a cela",
			story: `
			<h3>A cela era ainda pior por dentro. O cheiro de mofo e ferrugem se intensificava, misturado a um odor quase imperceptível, algo doce demais para pertencer a um lugar como aquele. As paredes estavam cobertas de arranhões antigos, alguns profundos, como se unhas desesperadas tivessem tentado se cravar na pedra. O chão era irregular e frio, com um líquido carmesim acumulado em poças escuras que se espalhavam pelo espaço claustrofóbico.</h3>
			<h4>No centro da sala, ajoelhada sobre a pedra gelada, estava a origem da voz.</h4>
			<h3>A jovem mulher era deslumbrante, mesmo coberta por trapos rasgados e sujos. Sua pele tinha um tom de porcelana impecável, intocada pelo ambiente hostil ao seu redor. Seus cabelos desciam em ondas suaves, emoldurando um rosto digno da realeza, e seus olhos brilhavam com um misto de alívio e esperança.</h3>
			<h4>O mais estranho, no entanto, eram as correntes.</h4>
			<h3>Cada um de seus pulsos estava preso a uma parede oposta, os braços estendidos, mas sem demonstrar qualquer sinal de esforço ou dor. As correntes pareciam cravar em seus pulsos, mas sua pele continuava intocada, sem hematomas ou marcas. Nem seus joelhos, rudemente em atrito com as rochas ásperas, detinham qualquer ferimento.</h3>
			<h3>Assim que seus olhos encontraram os de Thaynara, seu rosto se iluminou.</h3>
			<h3>Um sorriso suave e aliviado tomou conta de sua expressão, realçando ainda mais sua beleza. Sua voz, agora sem os soluços de antes, era ainda mais encantadora de perto, melódica e envolvente, como uma canção sussurrada entre as paredes de pedra.</h3>
			<h6>— Oh, minha heroína! — <em> exclamou, os olhos brilhando de emoção.</em> — Não acredito que alguém veio me salvar!</h6>
			<h3>Ela inclina-se levemente para frente, como se cada fibra de seu corpo quisesse se aproximar de sua salvadora. As correntes tilintam, cravando ainda mais em seus pulsos, e seus joelhos se arrastam contra o chão. A mulher sequer hesita.</h3>
			<h6>— Por favor, ajude-me a livrar-me destas correntes!</h6>
			<h4>O pedido soou sincero, quase irresistível. Sua voz soava quase… animada.</h4>
			
			`,
			choices: [
				{
					choice: "Aproximar-se e investigar as algemas",
					destination: "InvestigarAlgema"
				},
				{
					choice: "Questioná-la",
					destination: "Questionar"
				}
			]
		},

		InvestigarAlgema: {
			title: "Aproximar-se e investigar as algemas",
			story: `
			<h3>Thaynara se aproximou lentamente, seus passos ecoando pelo chão de pedra fria. A jovem continuava ajoelhada, ainda sem demonstrar qualquer tipo de desconforto. De perto, as algemas pareciam ainda mais estranhas. Elas eram de metal escuro, lisas e sem adornos, mas não havia sinal de fechaduras, travas ou qualquer mecanismo que permitisse sua remoção. Como alguém poderia ser aprisionado ali sem um meio físico de soltura?</h3>
			<h4>Realize um Teste de Investigação</h4>
			`,
			choices: [
				{
					choice: "Rolar o Dado",
					destination: "rolardado_Investigacao"
				}
			]
		},

		sucesso_Investigacao: {
			title: "sucesso investigação",
			story: `
			<h1>Sucesso!</h1>
			<h3>Thaynara fechou os olhos por um instante e estendeu a mão, deixando a ponta dos dedos roçar suavemente sobre a superfície metálica. Uma leve pulsação percorreu sua pele – uma sensação sutil, quase imperceptível, mas que ela reconheceu imediatamente. Magia.</h3>
			<h3>Algo ou alguém havia tentado mascará-la, ocultando sua presença de olhos desatentos. Mas agora que estava focada, Thaynara conseguia sentir sua textura invisível, como uma fina camada de energia arcana aderida ao metal.</h3>
			<h3>Um arrepio percorreu sua espinha. A pressão na caverna se intensificou ao redor dela. O ar tornou-se mais denso, mais pesado, como se algo estivesse... atento.</h3>
			<h3>A energia que emanava das algemas era incômoda, aquele mesmo frio estranho que parecia rastejar sob a pele, um sussurro silencioso ecoando no fundo da mente. Então, a percepção a atingiu como um soco no estômago. As algemas continham traços de magia negra.</h3>
			<h3>Magia necromante não era apenas destrutiva, era corruptora. Qualquer contato direto com sua essência era prejudicial para um ser vivo, mesmo em pequenas quantidades. Não deveria ser possível tocá-la sem sentir sua influência, sem que a pele absorvesse parte de seu fardo vil.</h3>
			<h3>E, ainda assim, os pulsos da jovem princesa continuavam perfeitos.</h3>
			<h3>Sem ferimentos. Sem marcas. Como se nunca tivessem sido tocados pela energia sombria que envolvia suas correntes. A respiração de Thaynara se acelerou.</h3>
			`,
			choices: [
				{
					choice: "Questioná-la",
					destination: "Questionar"
				},
				{
					choice: "Libertá-la",
					destination: ""
				}
			]
		},

		falha_Investigacao: {
			title: "Falha na investigação",
			story: `
			<h1>Falha!</h1>
			<h3>Thaynara passou os dedos pelas algemas, tentando sentir qualquer irregularidade, qualquer traço de um mecanismo oculto que pudesse libertar a jovem. Mas quanto mais tentava focar, mais a opressão ao seu redor se intensificava.</h3>
			<h3>O frio era sufocante, pressionando seus ombros como mãos invisíveis. O peso da caverna parecia dobrar sobre si mesma, como se não quisesse que ela descobrisse algo que não devia.</h3>
			<h3>Seu olhar deslizou novamente para a pedra úmida do chão, depois para os grilhões que prendiam a garota. O metal era liso, sem fechaduras visíveis. Por mais que tentasse encontrar um padrão, uma explicação, tudo parecia... errado.</h3>
			<h3>A respiração de Thaynara vacilou. Talvez estivesse cansada demais. Talvez a tensão acumulada estivesse começando a nublar seu julgamento.</h3>
			<h3>Ela fechou os olhos por um instante, massageando as têmporas. Agora não era hora de hesitar. Ela precisava focar nas prioridades. Seu olhar voltou para a jovem ajoelhada diante dela.</h3>
			<h3>Ela parecia tão frágil, tão delicada, e sua voz carregava tanto alívio. Thaynara sentiu um aperto no peito ao vê-la naquela situação. Era a única sobrevivente que encontrara. Não importava o que aquela caverna escondia – era desumano deixá-la acorrentada por mais um segundo sequer.</h3>
			<h6>— Eu vou tirar você daqui.</h6>
			<h3>A jovem apenas abriu seu sorriso ainda mais. Sua voz parecia pingar mel.</h3>
			<h6>— Muito obrigada, minha heroína! Acho que um feitiço deve ser suficiente para quebrar essas correntes.</h6>
			<h3>Thaynara assentiu e se preparou para finalmente libertá-la.</h3>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: ""
				}
			]
		},

		Questionar: {
			title: "Questioná-la",
			story: `
			<h3>Thaynara manteve uma expressão cautelosa enquanto analisava a jovem à sua frente. Algo nela não fazia sentido. O ambiente ao redor era opressor, frio e carregado de morte. As correntes presas às paredes indicavam anos de sofrimento, marcas de dor antigas ainda manchavam as pedras do chão.</h3>
			<h3>E, no entanto, ali estava ela. <h4>Linda, intocada, serena<h/4></h3>
			<h3>A maga ajoelhou-se em frente à jovem, seu olhar focado na figura delicada. Ela inclina levemente a cabeça antes de perguntar:</h3>
			<h6>— Qual seu nome?</h6>
			<h3>A jovem ergueu os olhos para ela, seu rosto suavizando com um alívio quase genuíno</h3>
			<h6>— Eu sou uma princesa — <em>disse, sua voz delicada, carregada de gratidão.</em></h6>
			<h3>Thaynara estreitou os olhos. Que resposta… intrigante. Sua confusão parece alertar a princesa, que piscou, os lábios entreabrindo-se por um instante, como se procurasse as palavras certas. Seu olhar vacilou levemente antes de voltar à suavidade usual.</h3>
			<h6>— Sinto muito. Eu... não me lembro do meu nome. — <em> respondeu, sua voz oscilando entre hesitação e doçura.</em> — Minhas lembranças estão confusas... tudo o que sei é que sou uma princesa.</h6>
			<h3>Thaynara permaneceu em silêncio por alguns segundos, avaliando sua resposta. O sorriso da jovem permaneceu tranquilo.</h3>
			<h6>— Há quanto tempo você está aqui?</h6>
			<h3>A princesa inclinou levemente a cabeça para o lado, pensativa.</h3>
			<h6>— Eu... não tenho certeza. Sem a luz do sol, sem a lua ou as estrelas... o tempo simplesmente passa.</h6>
			<h3>Havia uma naturalidade perturbadora em sua resposta. Nenhuma angústia. Nenhuma hesitação verdadeira. Ao mesmo tempo, ela não demonstrava</h3>
			<h4>O silêncio pesou entre elas.</h4>
			<h3>Aquele sorriso era encantador. Natural. Tranquilo. Mas algo nele soava... errado.</h3>
			<h3>E, ainda assim, não havia nada de explicitamente ameaçador nela. Se era uma farsa, era a mais bem-feita que Thaynara já havia visto</h3>
			<h3>A jovem inclinou-se levemente para frente, suas correntes chacoalhando com o movimento, o metal cravando ainda mais em sua pele. Nenhum dano visível, novamente.</h3>
			<h6>— Eu entendo sua hesitação. Mas, por favor, me ajude. Se me libertar, prometo recompensá-la generosamente. Qualquer coisa que desejar.</h6>
			<h3>A promessa foi dita com uma confiança inabalável. O sorriso não saiu do rosto da princesa por sequer um momento. Thaynara sente um arrepio atravessar seu corpo, o frio sobrenatural infiltrando em seus ossos. Algo definitivamente parece errado.</h3>
			
			`,
			choices: [
				{
					choice: "Continuar questionando-a",
					destination: "ContinuarQuestionando"
				},
				{
					choice: "Confiar na princesa",
					destination: ""
				}
			]
		},

		ContinuarQuestionando: {
			title: "Continuar Questionando-a",
			story: `
			<h3>O silêncio entre as duas se prolongou, pesado e desconfortável. Thaynara sentia o frio da caverna se entranhar cada vez mais em sua pele, mas não era apenas isso que fazia sua espinha se arrepiar. Algo na presença daquela mulher – algo invisível, mas presente – fazia cada fibra de seu ser gritar em alerta.</h3>
			<h3>Seus olhos percorreram a figura ajoelhada diante dela. A postura da princesa era impecável, como se mesmo em cativeiro sua dignidade permanecesse intocada. Seu rosto mantinha a doçura e a fragilidade de alguém que havia sofrido, mas seus olhos… seus olhos não carregavam o peso da angústia que sua voz transmitia.</h3>
			<h3>Era como se sua boca e seu corpo falassem línguas diferentes. Thaynara respirou fundo antes de continuar</h3>
			<h6>— Você não lembra do seu nome, nem de onde veio <em>começou, mantendo a voz neutra.</em> — Mas se lembra de ser uma princesa. Como?</h6>
			<h3>A princesa piscou, hesitando por um instante.</h3>
			<h6>— Como eu já disse... minhas memórias estão confusas. Mas tenho certeza disso. Eu sei que sou alguém importante.</h6>
			<h3>Thaynara apertou os lábios. A princesa piscou algumas vezes, estudando seu rosto.  Sua expressão mudou sutilmente. Menos paciente. Quase… irritada. Thaynara não recuou.</h3>
			<h6>— Você também não tem nenhum ferimento — <em>disse, apontando a cabeça em direção aos pulsos algemados da princesa.</em> — Essas correntes estão cravadas em seus pulsos. Qualquer um esperaria cortes ou arranhões. Sua pele, no entanto, parece intocada.</h6>
			<h3>O sorriso da princesa tremeu, por um instante.</h3>
			<h3><span> — Você questiona demais, Thaynara.</span></h3>
			<h4>O ar pareceu congelar.</h4>
			<h3>O coração de Thaynara acelerou imediatamente. Suor frio escorre por seu pescoço. Sua respiração falha por um instante. Ela nunca havia dito seu nome.</h3>
			<h3>A princesa alargou seu sorriso, agora mostrando os dentes. Sua expressão não era mais suave. Não, agora beirava a algo sinistro. Predatório.</h3>
			<h6>— Como sabe meu nome? <em> a voz de Thaynara saiu baixa, tensa.</em></h6>
			<h3>A princesa fez uma pausa, como se reconhecesse seu deslize. No entanto, nem meio segundo depois, sorriu novamente como se nada houvesse ocorrido. Sua voz pingava uma doçura incabível no ar tenso entre as duas.</h3>
			<h6>— Eu... Ah. — <em>Ela inclinou levemente a cabeça, e seu sorriso cresceu um pouco mais.</em> — Eu devo tê-lo ouvido de alguma forma. Sua presença é forte, Thaynara.</h6>
			<h3>A princesa inclinou-se um pouco para frente, suas correntes tilintando. Seus olhos se arregalam em uma demonstração de mágoa, apesar do sorriso permanecer inalterado em seu rosto.</h3>
			<h6>— Você desconfia de mim, minha heroína?</h6>
			<h3>A princesa franziu os lábios em uma tentativa de fazer beicinho.</h3>
			<h3>— Eu entendo sua hesitação <em> disse ela, e sua voz era um sussurro melódico.</em> — Mas você veio até aqui, não veio? Se me libertar, prometo recompensá-la generosamente, como já disse. Tudo o que você precisa fazer é soltar essas correntes.</h3>
			<h3>Agora, não havia mais dúvida: ela estava impaciente. Irritada, até. Thaynara precisava fazer sua escolha.</h3>
			
			`,
			choices: [
				{
					choice: "Confiar na Princesa",
					destination: ""
				},
				{
					choice: "Não confiar na Princesa",
					destination: ""
				}
			]
		},

		teste: {
			title: "",
			story: ``,
			choices: [
				{
					choice: "",
					destination: ""
				},
				{
					choice: "",
					destination: ""
				}
			]
		},
		//trecho de rolagem de dados
		rolardado_DetectarMagia: {
			title: "",
			story: "",
			choices: [
				{
					choice: "",
					destination: ""
				}
			]
		},

		rolardado_Arcanismo: {
			title: "",
			story: "",
			choices: [
				{
					choice: "",
					destination: ""
				}
			]
		},

		rolardado_Destreza: {
			title: "",
			story: "",
			choices: [
				{
					choice: "",
					destination: ""
				}
			]
		},

		rolardado_Atletismo: {
			title: "",
			story: "",
			choices: [
				{
					choice: "",
					destination: ""
				}
			]
		},

		rolardado_Investigacao: {
			title: "",
			story: "",
			choices: [
				{
					choice: "",
					destination: ""
				}
			]
		},

		//trechos de finais 
		FinalRuim_mimico: {
			title: "Final Ruim: O Baú Mímico",
			story: `<h2>Final Ruim: O Baú Mímico</h2>
			<h3>Thaynara é devorada por um mímico, sua jornada encerrada de forma brutal. Seu corpo nunca é encontrado—apenas mais uma vítima da caverna insaciável.</h3>
			
			`,
			choices: [
				{
					choice: "Voltar ao inicio",
					destination: "introducao"
				}
			]
		},

		FinalRuim_machado: {
			title: "Final Ruim: Entre uma Rocha e um Machado",
			story: `<h2>Final Ruim: Entre uma Rocha e um Machado</h2>
			<h3>Thaynara encontra um fim prematuro e doloroso nas mãos de um bando de kobolds. Às vezes, evitar conflitos é a melhor escolha</h3>`,
			choices: [
				{
					choice: "Voltar ao inicio",
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
			story: "'<p><b>Autor:</b> (colocar seu nome aqui) <p><b>Programação:</b> (colocar seu nome aqui) e Leonardo Antônio de Andrade</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='https://www.jamendo.com/track/1273567/espionage' target='blank' class='classe1'>Trecho da Faixa Espionage, de FOX & MEW</a></h3>",
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
document.addEventListener('DOMContentLoaded', function () {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');
	button0.addEventListener('click', function () {
		story = getStory();
		renderScene();
	})
	button1.addEventListener('click', function () {
		if (cont == 0) {
			window.open("http://narrativas-interativas.ufscar.br", '_blank');
		}
		else {
			story = getStory();
			renderScene();
		}
	})
	button2.addEventListener('click', function () {
		if (cont == 0) {
			instrucoes = true;
		}
		story = getStory();
		renderScene();
	})
	button3.addEventListener('click', function () {
		if (cont == 0) {
			creditos = true;
		}
		story = getStory();
		renderScene();
	})
})

function rolarDado(bonus) {
	let dado = Math.floor(Math.random() * 20) + 1;

	let resultado = dado + bonus + penalidade;
	console.log(`dado = ${dado} / bonus = ${bonus} / penalidade ${penalidade} / Resultado = ${resultado}`);
	return resultado;
}
//função de renderização de conteúdo
function renderScene() {
	//console.log(cont);
	var image = "";
	var titulo = "";

	if (instrucoes) {
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos) {
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	if (!story[story.currentScene].image) {
		image = "<img></img>";
	}


	if (story[story.currentScene].title === "A Caverna da Perdição") {
		titulo = story[story.currentScene].title;
	}

	switch (story.currentScene) {
		case ('introducao'):
			item = false;
			break;

		case ('rolardado_DetectarMagia'):
			var resultado = rolarDado(3);
			if (resultado >= 13) {
				story.currentScene = 'sucesso_DetectarMagia';
				swal(`Valor obtido: ${resultado} - Sucesso!`);
			} else {
				story.currentScene = 'falha_DetectarMagia';
				penalidade = -2;
				swal(`Valor obtido: ${resultado} - Falha!`);
			}
			break;

		case ('rolardado_Arcanismo'):
			var resultado = rolarDado(5);
			if (resultado >= 16) {
				story.currentScene = 'sucesso_Arcanismo';
				swal(`Valor obtido: ${resultado} - Sucesso!`);
			} else {
				story.currentScene = 'falha_Arcanismo';
				penalidade = -2;
				swal(`Valor obtido: ${resultado} - Falha!`);
			}
			break;

		case ('rolardado_Destreza'):
			var resultado = rolarDado(0);
			if (resultado >= 15) {
				story.currentScene = 'sucesso_Destreza';
				swal(`Valor obtido: ${resultado} - Sucesso!`);
			} else {
				story.currentScene = 'falha_Destreza';
				swal(`Valor obtido: ${resultado} - Falha!`);
			}
			break;

		case ('rolardado_Atletismo'):
			var resultado = rolarDado(-1);
			if (resultado >= 17) {
				story.currentScene = 'sucesso_Atletismo';
				swal(`Valor obtido: ${resultado} - Sucesso!`);
			} else {
				story.currentScene = 'falha_Atletismo';
				penalidade = penalidade + (-2);
				console.log("penalidade = " + penalidade);
				swal(`Valor obtido: ${resultado} - Falha!`);
			}
			break;


		case ('rolardado_Investigacao'):
			var resultado = rolarDado(5);
			if (resultado >= 15) {
				story.currentScene = 'sucesso_Investigacao';
				swal(`Valor obtido: ${resultado} - Sucesso!`);
			} else {
				story.currentScene = 'falha_Investigacao';
				console.log("penalidade = " + penalidade);
				swal(`Valor obtido: ${resultado} - Falha!`);
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

	button0.addEventListener('click', function () {
		cont++;
		getInputValue(0);
	})

	if (button1 != null) {
		button1.addEventListener('click', function () {
			cont++;
			if (cont == 1 && master) {
				master = false;
				window.location.href = 'index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null) {
		button2.addEventListener('click', function () {
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null) {
		button3.addEventListener('click', function () {
			cont++;
			getInputValue(3);
		})
	}
}

function getInputValue(x) {
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

function getInputs() {
	var input = ""
	if (!story[story.currentScene].choices) {
		return ""
	}
	for (var i = 0; i < story[story.currentScene].choices.length; i++) {
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}
