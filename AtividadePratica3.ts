// // Exercício 1

// const desafio1asRosasNaoFalam = () => {
//     const geraIntervaloAleatório = () => Math.floor(Math.random() * 3 * 1000);

//     const queixoMeAsRosas = (callback) => {
//         setTimeout(() => {
//             console.log('Queixo-me às rosas');
//             callback()
//         }, geraIntervaloAleatório());
//     };

//     const masQueBobagem = (callback) => {
//         setTimeout(() => {
//             console.log('Mas que bobagem');
//             callback()
//         }, geraIntervaloAleatório());
//     };

//     const asRosasNaoFalam = (callback) => {
//         setTimeout(() => {
//             console.log('As rosas não falam');
//             callback()
//         }, geraIntervaloAleatório());
//     };

//     const simplesmenteAsRosasExalam = (callback) => {
//         setTimeout(() => {
//             console.log('Simplesmente as rosas exalam');
//             callback()
//         }, geraIntervaloAleatório());
//     };

//     const oPerfumeQueRoubamDeTi = (callback) => {
//         setTimeout(() => {
//             console.log('O perfume que roubam de ti, ai');
//             callback()
//         }, geraIntervaloAleatório());
//     };

//     queixoMeAsRosas(
//         () => {
//             masQueBobagem(() => {
//                 asRosasNaoFalam(() => {
//                     simplesmenteAsRosasExalam(() => {
//                         oPerfumeQueRoubamDeTi(() => { })
//                     })
//                 }
//             )})
//         })
// }

// desafio1asRosasNaoFalam();

// Exercício 2

const despertador = (intervalo:Number) => {
    setInterval(() => {
        console.log('vou tocar a cada 1 segundo')
    }, 1000);
}

const relogio = () => {
    const now = new Date();
    setInterval(() => {
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
  };
