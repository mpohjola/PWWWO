let laskuri = 0;

const edellinen = () => {
    return --laskuri;
};

exports.seuraava = () => {
    return ++laskuri;
};

/*
export function seuraava(){
    return ++laskuri;
}
*/