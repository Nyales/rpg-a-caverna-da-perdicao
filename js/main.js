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

		currentScene: "introducao",
		introducao: {
			title: "A Caverna da Perdição",
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
					destination: "FinalRuim_Mimico"
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
					choice: "",
					destination: ""
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
					destination: ""
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
					destination: ''
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
					destination: ''
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
					destination: 'opcao01'
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
					destination: ""
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
			story: `<h3>A adrenalina impulsionava seus músculos. Seu corpo reagia por instinto, desviando de estalactites e pedras soltas sem hesitação. Cada curva do túnel era um risco, mas ela não diminuía o ritmo. O calor da perseguição se fazia presente atrás dela, os grunhidos dos kobolds cada vez mais próximos.</h3>
			<h3>Seu coração ameaçou saltar pela boca quando sentiu uma garra roçar de leve sua capa. Mas ela não parou</h3>
			<h3>Com um último impulso, girou para dentro de uma passagem estreita e seguiu por um caminho lateral. Os kobolds viraram atrás dela, mas hesitaram por um instante, confusos com as múltiplas bifurcações à frente.</h3>
			<h4>Era o suficiente.</h4>
			<h3>Ela continuou correndo por mais alguns metros, até que o som dos perseguidores começou a se dissipar. Suas pernas tremiam e seus pulmões ardiam, mas ela havia conseguido.</h3>
			<h3>A caverna se abriu novamente diante dela, levando-a a um espaço maior e mais amplo. Um salão de pedra.</h3>
			`,
			choices: [
				{
					choice: "Continuar",
					destination: ""
				}
			]
		},

		falha_Destreza: {
			title: "Falha na Destreza",
			story: `<h4>O túnel parecia mais longo do que deveria ser.</h4>
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
					destination: ""
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

		
		//trecho em branco para criar testes onde rola dados
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

		//trechos de finais aqui
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
	console.log(dado)
	console.log(bonus)
	console.log(penalidade)
	// Rolando o dado (1-20)
	let resultado = dado + bonus + penalidade;
	console.log(resultado)     // Somando o bônus e a penalidade
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
