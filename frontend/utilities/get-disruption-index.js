const getDisruptionIndex = () => {
    const delayProbability = Math.random();
    const cancellationProbability = Math.random();

    // Calculate the disruption index based on the probabilities
    const disruptionIndex = Math.round((delayProbability + cancellationProbability) / 2 * 100);

    return disruptionIndex;
};

export {
    getDisruptionIndex
}