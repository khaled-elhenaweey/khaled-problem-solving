function nbYear(p0, percent, aug, p, count = 0) {
    let per = Number(percent.toFixed(2)) / 100;
    let incrseAfterYear = Math.floor(p0 + p0 * per + aug);
​
    count++;
​
    if (incrseAfterYear < p) {
        return nbYear(incrseAfterYear, percent, aug, p, count);
    } else {
        return count;
    }
}