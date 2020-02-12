function solve() {
    const request = require('request');
    request.get('https://pastebin.com/raw/pv5A08gh', function (error, response, body) {
        const wires = body.split('\n').map((wire) => {
            return wire
                .split(',')
                .map((instruction) => {
                    return {
                        dir: instruction[0],
                        dist: Number(instruction.slice(1)),
                    };
                });
        });
        const positions1 = calculatePositions(wires[0]);
        const positions2 = [...calculatePositions(wires[1])];
        let answer = positions2
            .filter((position) => positions1.has(position))
            .map((position) => position.split(',').map(Number))
            .map(([x, y]) => Math.abs(x) + Math.abs(y))
            .sort((a, b) => a - b)[0];
        console.log("ANSWER", answer);
    });
}

const calculatePositions = (wire) => {
    const positions = new Set();
    const position = {x: 0, y: 0};
    for (let i = 0; i < wire.length; i++) {
        const {dir, dist} = wire[i];
        for (let step = 1; step <= dist; step++) {
            position.x += dir === 'L' ? -1 : dir === 'R' ? 1 : 0;
            position.y += dir === 'U' ? -1 : dir === 'D' ? 1 : 0;
            positions.add(`${position.x},${position.y}`);
        }
    }
    return positions;
};

solve();
