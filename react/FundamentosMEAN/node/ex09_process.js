process.stdout.write('digite uma frase')
process.stdin.on('data', function(data){
    process.stdout.write(`Sua resposta ${data.toString()}`)
    process.exit()
})