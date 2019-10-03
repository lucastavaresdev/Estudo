const brasil = ['São Paulo', 'Belo Horizonte', 'Aracaju']


const cidademoro = brasil.filter(name => name === 'São Paulo').map(name => `eu moro em ${name}`);

console.log(cidademoro);
