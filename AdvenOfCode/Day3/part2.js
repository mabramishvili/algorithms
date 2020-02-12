function solve() {
    const request = require('request');
    const actualUrl = 'https://pastebin.com/raw/pv5A08gh';
    const testUrl = 'https://pastebin.com/raw/AQjcaxmS';
    let weights = [];
    request.get(actualUrl, function (error, response, body) {
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
        let intersections = positions2
            .filter((position) => positions1.has(position));

        //console.log("intersections", intersections);

        for(let intersection of intersections){
            const position = {x: 0, y: 0};
            let stepCounter = 0;
            for (let i = 0; i < wires[0].length; i++) {
                const {dir, dist} = wires[0][i];
                for (let step = 1; step <= dist; step++) {
                    stepCounter++;
                    position.x += dir === 'L' ? -1 : dir === 'R' ? 1 : 0;
                    position.y += dir === 'U' ? -1 : dir === 'D' ? 1 : 0;
                    if(`${position.x},${position.y}`===intersection){
                        weights.push({
                            intersection: intersection,
                            wire: 1,
                            weight: stepCounter
                        });
                    }
                    //console.log(`${position.x},${position.y}`);
                }
            }
        }


        for(let intersection of intersections){
            const position = {x: 0, y: 0};
            let stepCounter = 0;
            for (let i = 0; i < wires[1].length; i++) {
                const {dir, dist} = wires[1][i];
                for (let step = 1; step <= dist; step++) {
                    stepCounter++;
                    position.x += dir === 'L' ? -1 : dir === 'R' ? 1 : 0;
                    position.y += dir === 'U' ? -1 : dir === 'D' ? 1 : 0;
                    if(`${position.x},${position.y}`===intersection){


                        let firstWeightIndex = weights.findIndex(x=>x.intersection==intersection);

                        weights[firstWeightIndex]['weight'] = parseInt(weights[firstWeightIndex]['weight'])+stepCounter;

                    }

                }
            }
        }

        weights.sort((a,b)=>a.weight-b.weight);

        console.log(weights[0]);

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
            //console.log(`${position.x},${position.y}`);
        }
    }
    return positions;
};

solve();
