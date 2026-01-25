function countSheeps(sheep) {
    let sheepNumber = 0;
    sheep.map(item => { if(item == true) sheepNumber++ });
    return sheepNumber;
}