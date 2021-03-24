const visualizeWall = (wallPath) => {
    for (let i = 0; i < wallPath.length; i++) {
        setTimeout(() => {
            // console.log(wallPath[i]);
            document.getElementById(`${wallPath[i].x}-${wallPath[i].y}`).className = 'node node-wall';
        }, 50 * i);
    }
};

export default visualizeWall;