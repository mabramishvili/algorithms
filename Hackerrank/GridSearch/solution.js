function gridSearch(G, P) {
    for (let i = 0; i < G.length; i++) {
        for (let j = 0; j < G[0].length; j++) {
            if (G[i][j] === P[0][0]) {
                let found = true;
                for (let k = 0; k < P.length; k++) {
                    if (!found) {
                        break;
                    }
                    for (let z = 0; z < P[0].length; z++) {
                        if (!G[i + k] || G[i + k][j + z] !== P[k][z]) {
                            found = false;
                            break;
                        }
                    }
                }
                if (found) {
                    return 'YES';
                }
            }
        }
    }
    return 'NO';
}

let G = [
    '1234567890',
    '0987654321',
    '1111111111',
    '1111111111',
    '2222222222'
];

let P = [
    '876543',
    '111111',
    '111111'
];

console.log(gridSearch(G, P));