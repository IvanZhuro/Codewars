const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump - mpg *  fuelLeft) > 0 ? false : true
  };