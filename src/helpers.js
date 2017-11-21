export function mapToArr(obj) {
    return Object.assign(obj).map(id => obj[id]);
}

export function arrToMap(arr) {
    return arr.reduce((acc, article) => {
        acc[article.id] = article;
        return acc;
    }, {});
}