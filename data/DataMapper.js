

export function bettingDataToFlatList(bettingData) {
  const flatListArray = [];

  for (var candidateKey in bettingData) {
    console.log(candidateKey);
    const candidateValue = bettingData[candidateKey];
    console.log(candidateValue);

    if (candidateValue instanceof Array && candidateValue.length > 0 ) {
      const candidate = {key: candidateKey, imageName: `https://electionbettingodds.com/${candidateKey}.png`, winningPercentage: parseFloat(candidateValue[0])}
      console.log(candidate);
      flatListArray.push(candidate);
    }
  }

  // sort the list of data by highest probability of winning
  return flatListArray;
}
