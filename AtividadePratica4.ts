
function timeout(timeToWait:number) {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(resolve);
        },timeToWait);
    });
}
async function musica(){
    await timeout(1000);
    console.log('Queixo me as rosas');
    await timeout(800);
    console.log('Mas que bobagem as rosas não falam');
    await timeout(400);
    console.log('Simplesmente as rosas exalam');
    await timeout(200);
    console.log('O perfume que roubam de ti, ai');
}

musica();
