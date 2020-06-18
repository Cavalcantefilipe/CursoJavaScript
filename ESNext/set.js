//não aceita repetiçao/não idexada

const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Santos')
times.add('Corinthias')
times.add('Vasco')
times.add('Flamengo')

console.log(times)
console.log(times.size)

times.delete('Vasco')
console.log(times)