let getPosition = (level, toSearch) => {
    let pos = []; // o = x, 1 = y;
    let foundIt = false;

    level.forEach((value, index) => {
        if (!foundIt) {
            pos[0] = value.findIndex((v, i) => (foundIt = v === toSearch));
            pos[1] = pos[0] != -1 ? index : null;
        
            }
        });
        return pos;
    };

    let getLevelPills = (level, toSearch) =>{
        let pillCouter = 0;
        level.forEach((yElement) => {
            pillCouter += yElement.filter((x) => toSearch.includes(x)).length;
        });
        return pillCouter;
    };

    let cloneArray = (arrayIn) => {
        return JSON.parse(JSON.stringify(arrayIn))
    };

export { getPosition, getLevelPills, cloneArray };


