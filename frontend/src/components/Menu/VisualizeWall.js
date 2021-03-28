const visualizeWall = (wallPath, visSpeed) => {

    let speed;
    switch (visSpeed) {
        case 'Fast':
            speed = 10;
            break;
        case 'Medium':
            speed = 15;
            break;
        case 'Slow':
            speed = 20;
            break;
    }

    for (let i = 0; i < wallPath.length; i++) {
        setTimeout(() => {
            document.getElementById(`${wallPath[i].x}-${wallPath[i].y}`).className = 'node node-wall';
        }, speed * i);
    }
};

export default visualizeWall;