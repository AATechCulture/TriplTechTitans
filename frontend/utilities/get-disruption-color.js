const getDisruptionColor = (disruptionIndex) => {
    if (disruptionIndex > 75) return "red";
    if (disruptionIndex > 50) return "orange";
    if (disruptionIndex > 25) return "yellow";
    return "green";
};

export {
    getDisruptionColor
}