const mongoose = require ('mongoose');
const { buscarCoordenadas } = require('../services/opencageService.js');

const lojaSchema = new mongoose.Schema({
    nome: String,
    endereco: {
        cep: String,
        rua: String,
        numero: String,
        cidade: String,
        estado: String,
    },
    coordenadas: {
        lat: Number,
        lng: Number,
    }
});

//insertion test
const Loja  = mongoose.model('Loja', lojaSchema);

async function criarLoja(nome, endereco) {
    try {
        const { lat, lng } = await buscarCoordenadas(endereco.cep);

        const novaLoja = new Loja({
            nome,
            endereco,
            coordenadas: {
                lat,
                lng
            }
        });

        await novaLoja.save();
        console.log('Loja salva com sucesso');
    } catch (error) {
        console.log('Erro ao salvar loja: ', error);
    }
}

const lojas = [
    {
    nome: "Renner - Manaíra",
    endereco: {
        cep: "58310-000",
        rua: "Av. Gov. Flávio Ribeiro Coutinho",
        numero: "220",
        cidade: "João Pessoa",
        estado: "PB"
        }
    },
    {
    nome: "Renner - Catolé",
    endereco: {
        cep: "58410-185",
        rua: "Av. Pref. Severino Bezerra Cabral",
        numero: "1050",
        cidade: "Campina Grande",
        estado: "PB"
        }
    },
    {
    nome: "Renner - Shopping Tacaruna",
    endereco: {
        cep: "50110-000",
        rua: "Av. Governador Agamenon Magalhães",
        numero: "153",
        cidade: "Recife",
        estado: "PE"
        }
    },
    {
    nome: "Renner - Shopping Guararapes",
    endereco: {
        cep: "54410-902",
        rua: "Av. Barreto de Menezes",
        numero: "800",
        cidade: "Jaboatão dos Guararapes",
        estado: "PE"
    }
    },
    {
    nome: "Renner - Tirol",
    endereco: {
        cep: "59015-900",
        rua: "Av. Nevaldo Rocha",
        numero: "3775",
        cidade: "Natal",
        estado: "RN"
    }
    },
    {
    nome: "Renner - Itaquera",
    endereco: {
        cep: "08220-000",
        rua: "Av. José Pinheiro Borges",
        numero: "S/N",
        cidade: "São Paulo",
        estado: "SP"
    }
    },
    {
    nome: "Renner - Taboão da Serra",
    endereco: {
        cep: "06768-200",
        rua: "Rod. Régis Bittencourt",
        numero: "2643",
        cidade: "Taboão da Serra",
        estado: "SP"
    }
    },
    {
    nome: "Renner - Tietê Plaza Shopping",
    endereco: {
        cep: "05145-000",
        rua: "Avenida Raimundo Pereira de Magalhães",
        numero: "1465",
        cidade: "São Paulo",
        estado: "SP"
    }
    },
    {
    nome: "Renner - São Bernardo do Campo",
    endereco: {
        cep: "09750-700",
        rua: "Praça Samuel Sabatini",
        numero: "200",
        cidade: "São Bernardo do Campo",
        estado: "SP"
    }
    },
    {
    nome: "Renner - Campinas",
    endereco: {
        cep: "13010-061",
        rua: "Rua Dr. Costa Aguiar",
        numero: "500",
        cidade: "Campinas",
        estado: "SP"
    }
    },
    {
    nome: "Renner - Bourbon Shopping Wallig",
    endereco: {
        cep: "91010-006",
        rua: "Rua Avenida Assis Brasil",
        numero: "2611",
        cidade: "Porto Alegre",
        estado: "RS"
    }
    },
    {
    nome: "Renner - Santa Maria",
    endereco: {
        cep: "97015-004",
        rua: "Rua Dr. Bozano",
        numero: "1233",
        cidade: "Santa Maria",
        estado: "RS"
    }
    },
    {
    nome: "Renner - Florianópolis",
    endereco: {
        cep: "88010-001",
        rua: "Rua Felipe Schmidt",
        numero: "376",
        cidade: "Florianópolis",
        estado: "SC"
    } 
    },
    {
    nome: "Renner - Continente Shopping",
    endereco: {
        cep: "88104-800",
        rua: "BR-101, KM 210",
        numero: "S/N",
        cidade: "São José",
        estado: "SC"
    } 
    },
    {
    nome: "Renner - Chapecó",
    endereco: {
        cep: "89805-203",
        rua: "Avenida Fernando Machado",
        numero: "4000",
        cidade: "Chapecó",
        estado: "SC"
    } 
    },
    {
    nome: "Renner - Shopping Curitiba",
    endereco: {
        cep: "80250-030",
        rua: "R. Brg. Franco",
        numero: "2300",
        cidade: "Curitiba",
        estado: "PR"
    } 
    },
    {
    nome: "Renner - Ponta Grossa",
    endereco: {
        cep: "84035-000",
        rua: "R. Ermelino de Leão",
        numero: "703",
        cidade: "Ponta Grossa",
        estado: "PR"
    } 
    },
    {
    nome: "Renner - Rio de Janeiro Centro",
    endereco: {
        cep: "20050-006",
        rua: "R. Sete de Setembro",
        numero: "111",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    } 
    },
    {
    nome: "Renner - Américas Shopping",
    endereco: {
        cep: "22790-703",
        rua: "Avenida das Américas",
        numero: "15500",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    } 
    },
    {
    nome: "Renner - Nova Iguaçu",
    endereco: {
        cep: "26255-155",
        rua: "Av. Abílio Augusto Távora",
        numero: "1061",
        cidade: "Nova Iguaçu",
        estado: "RJ"
    } 
    },
    {
    nome: "Renner - Linhares",
    endereco: {
        cep: "29906-014",
        rua: "Av. Cerejeira",
        numero: "300",
        cidade: "Linhares",
        estado: "ES"
    } 
    },
    {
    nome: "Renner - Vila Velha",
    endereco: {
        cep: "29107-900",
        rua: "Av. Luciano das Neves",
        numero: "2418",
        cidade: "Vila Velha",
        estado: "ES"
    } 
    },
    {
    nome: "Renner - Belo Horizonte",
    endereco: {
        cep: "31250-010",
        rua: "Av. Presidente Carlos Luz",
        numero: "3001",
        cidade: "Belo Horizonte",
        estado: "MG"
    } 
    },
    {
    nome: "Renner - Contagem",
    endereco: {
        cep: "32210-110",
        rua: "Av. General David Sarnoff",
        numero: "5160",
        cidade: "Contagem",
        estado: "MG"
    } 
    },
    {
    nome: "Renner - Uberlândia",
    endereco: {
        cep: "38408-100",
        rua: "Av. João Naves de Ávila",
        numero: "1331",
        cidade: "Uberlândia",
        estado: "MG"
    } 
    },
    {
    nome: "Renner - Brasília",
    endereco: {
        cep: "70655-775",
        rua: "Octogonal",
        numero: "S/N",
        cidade: "Brasília",
        estado: "DF"
    } 
    },
    {
    nome: "Renner - Goiânia",
    endereco: {
        cep: "74223-060",
        rua: "Av. T-10",
        numero: "1300",
        cidade: "Goiânia",
        estado: "GO"
    } 
    },
    {
    nome: "Renner - Campo Grande",
    endereco: {
        cep: "79080-105",
        rua: "Av. Pres. Ernesto Geisel",
        numero: "2300",
        cidade: "Campo Grande",
        estado: "MS"
    } 
    },
    {
    nome: "Renner - Várzea Grande",
    endereco: {
        cep: "78125-100",
        rua: "Av. Presidente Artur Bernardes",
        numero: "43",
        cidade: "Várzea Grande",
        estado: "MT"
    } 
    },
    {
    nome: "Renner - Cacoal",
    endereco: {
        cep: "76965-740",
        rua: "Rua Antonio Deodato Durce",
        numero: "3500",
        cidade: "Cacoal",
        estado: "RO"
    } 
    },
    {
    nome: "Renner - Rio Branco",
    endereco: {
        cep: "69906-383",
        rua: "Estr. da Floresta",
        numero: "1707",
        cidade: "Rio Branco",
        estado: "AC"
    } 
    },
    {
    nome: "Renner - Manaus",
    endereco: {
        cep: "69090-000",
        rua: "Av. Noel Nutels",
        numero: "1762",
        cidade: "Manaus",
        estado: "AM"
    } 
    },
    {
    nome: "Renner - Boa Vista",
    endereco: {
        cep: "69310-065",
        rua: "R. João de Alencar",
        numero: "2181",
        cidade: "Boa Vista",
        estado: "RR"
    } 
    },
    {
    nome: "Renner - Santarém",
    endereco: {
        cep: "68035-000",
        rua: "Av. Eng. Fernando Guilhon",
        numero: "S/N",
        cidade: "Santarém",
        estado: "PA"
    } 
    },
    {
    nome: "Renner - Belém",
    endereco: {
        cep: "66645-900",
        rua: "Rodovia BR 316",
        numero: "KM 01, S/N°",
        cidade: "Castanheira",
        estado: "PA"
    } 
    },
    {
    nome: "Renner - Macapá",
    endereco: {
        cep: "68901-971",
        rua: "R. Leopoldo Machado",
        numero: "2334",
        cidade: "Macapá",
        estado: "AP"
    } 
    },
    {
    nome: "Renner - São José de Ribamar",
    endereco: {
        cep: "65100-000",
        rua: "5 MA-201, Rua Saramanta",
        numero: "S/N",
        cidade: "São José de Ribamar",
        estado: "MA"
    } 
    },
    {
    nome: "Renner - Palmas",
    endereco: {
        cep: "77001-080",
        rua: "Q. 107 Norte Avenida NS 5",
        numero: "SN",
        cidade: "Palmas",
        estado: "TO"
    } 
    },
    {
    nome: "Renner - Teresina",
    endereco: {
        cep: "64000-810",
        rua: "Av. Mar. Castelo Branco",
        numero: "911",
        cidade: "Teresina",
        estado: "PI"
    } 
    },
    {
    nome: "Renner - Parnaíba",
    endereco: {
        cep: "64204-035",
        rua: "Av. São Sebastião",
        numero: "3429",
        cidade: "Parnaíba",
        estado: "PI"
    } 
    },
    {
    nome: "Renner - Juazeiro do Norte",
    endereco: {
        cep: "63041-145",
        rua: "Av. Padre Cícero",
        numero: "2555",
        cidade: "Juazeiro do Norte",
        estado: "CE"
    } 
    },
    {
    nome: "Renner - Fortaleza",
    endereco: {
        cep: "60325-902",
        rua: "Av. Bezerra de Menezes",
        numero: "2450",
        cidade: "Fortaleza",
        estado: "CE"
    }
    },
    {
    nome: "Renner - Maceió",
    endereco: {
        cep: "57038-000",
        rua: "Av. Comendador Gustavo Paiva",
        numero: "5945",
        cidade: "Maceió",
        estado: "AL"
    }
    },
    {
    nome: "Renner - Aracaju",
    endereco: {
        cep: "49035-500",
        rua: "Av. Delmiro Gouveia",
        numero: "400",
        cidade: "Aracaju",
        estado: "SE"
    }
    },
    {
    nome: "Renner - Salvador",
    endereco: {
        cep: "40140-902",
        rua: "Av. Centenário",
        numero: "2992",
        cidade: "Salvador",
        estado: "BA"
    }
    },
    {
    nome: "Renner - Vitória da Conquista",
    endereco: {
        cep: "45055-900",
        rua: "Av. Juracy Magalhães",
        numero: "3340",
        cidade: "Vitória da Conquista",
        estado: "BA"
    }
    },
];

(async () => {
    for (const loja of lojas) {
        await criarLoja(loja.nome, loja.endereco);
    }
})();

module.exports = Loja