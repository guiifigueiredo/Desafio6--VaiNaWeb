const sobreMim = {
    sobreMim: 'Guilherme',
    idade: '19',
    cidade: 'Manaus'
}

sobreMim.sobresobreMim = 'Figueiredo'
delete sobreMim.idade

console.log(sobreMim);

const cadastro = [
    {
        nome: 'Ricardo',
        idade: '30',
        telefone: 901313413,
        amigos: ['José', 'Neide']
    },

    {
        nome: 'Luiza',
        idade: '20',
        telefone: 14514534522,
        amigos: ['Marcos', 'Paulo']
    },

    {
        nome: 'Ofélia',
        idade: '17',
        telefone: 635634563,
        amigos: ['Ana', 'Carla']
    },

    {
        nome: 'Josivaldo',
        idade: '50',
        telefone: 23452345234,
        amigos: ['Nelson', 'Jorfe']
    },

    {
        nome: 'Lucas',
        idade: '15',
        telefone: 901313413,
        amigos: ['Kamilla', 'Yasmin']
    }
]

for(i = 0; i <= 4; i++){
    console.log(cadastro[i].amigos[0]);
}