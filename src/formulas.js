/**
 * Common brewing formulas
 * @module src/formulas
 */
module.exports = {

  // ==============================
  // Helpers
  // ==============================

  /**
   * Convert a specific gravity to gravity units (GU's)
   * @param {number} SG e.g. 1.052
   * @return {number} e.g. 52 GU
   */
  toGU(SG) {
    return (SG - 1) * 1000;
  },

  // ==============================
  // Calculating the mash bill
  // ==============================

  /**
   * Calculate the total gravity
   * @param {number} finalVolume e.g. 5.5 gallons
   * @param {number} finalGravityGU e.g. 52 GU
   * @return {number} e.g. 286 GU
   */
  totalGravity(finalVolume, finalGravityGU) {
    return finalVolume * finalGravityGU;
  },

  /**
   * Calculate the percentage of total gravity used for each fermentable source
   * @param {number} percentOfGrist e.g. 0.67 (67%)
   * @param {number} totalGravity e.g. 286 GU
   * @return {number} e.g. 191 GU
   */
  gravityPerSource(percentOfGrist, totalGravity) {
    return percentOfGrist * totalGravity;
  },

  /**
   * Calculate how many pounds of an ingredient is required
   * @param {number} ingredientTotalGravity e.g. 191 GU
   * @param {number} ingredientGravityPerPound e.g. 25.84 GU/lb
   * @return {number} e.g. 7.39 lbs
   */
  poundsPerIngredient(ingredientTotalGravity, ingredientGravityPerPound) {
    return ingredientTotalGravity / ingredientGravityPerPound;
  },

  /**
   * Calculate the gravity per pound of an ingredient
   * @param {number} extractPotential value in GU (see Table 5.1), e.g. 38 GU
   * @param {number} mashEfficiency Assumed 0.68 (68%)
   * @return {number} e.g. 25.84 GU/lb
   */
  gravityPerPound(extractPotential, mashEfficiency = 0.68) {
    return extractPotential * mashEfficiency;
  },

  /**
   * Calculate the percentage of total gravity used for each fermentable source
   * @param {number} percentOfGrist e.g. 0.67 (67%)
   * @param {number} totalGravity e.g. 286 GU
   * @return {number} e.g. 191 GU
   */
  gravityPerSource(percentOfGrist, totalGravity) {
    return percentOfGrist * totalGravity;
  },

  /**
   * Calculate how many pounds of an ingredient is required
   * @param {number} ingredientTotalGravity e.g. 191 GU
   * @param {number} ingredientGravityPerPound e.g. 25.84 GU/lb
   * @return {number} e.g. 7.39 lbs
   */
  poundsPerIngredient(ingredientTotalGravity, ingredientGravityPerPound) {
    return ingredientTotalGravity / ingredientGravityPerPound;
  },

  /**
   * Calculate the gravity per pound of an ingredient
   * @param {number} extractPotential value in GU (see Table 5.1), e.g. 38 GU
   * @param {number} mashEfficiency Assumed 0.68 (68%)
   * @return {number} e.g. 25.84 GU/lb
   */
  gravityPerPound(extractPotential, mashEfficiency = 0.68) {
    return extractPotential * mashEfficiency;
  },

  // ==============================
  // TODO: Hitting Target Gravity
  // - Total Gravity Values
  // - Hitting Target Gravity
  // ==============================

  // ==============================
  // TODO: Beer Color
  // - SRM Values, Table 7.1
  // ==============================

  // ==============================
  // Water
  // ==============================

  /**
   * Calculate the total water required for a brew
   * @param {number} finalBoilVolume e.g. 5.5 gallons (assume some lost to trub)
   * @param {number} equipmentLosses e.g. 1 gallon (depends on your setup)
   * @param {number} waterLostToGrain e.g. 1.875 gallons
   * @param {number} evaporationRate e.g. 0.925 (92.5%)
   * @param {number} shrinkageRate e.g. 0.96 (96%)
   */
  totalWaterRequired(finalBoilVolume, equipmentLosses, waterLostToGrain, evaporationRate, shrinkageRate = 0.96) {
    return (finalBoilVolume / evaporationRate / shrinkageRate) + equipmentLosses + waterLostToGrain;
  },

  /**
   * Calculate the amount of water retained by the grains
   * @param {number} poundsOfGrain e.g. 9.375 lbs
   * @return {number} e.g. 1.875 gallons
   */
  gallonsRetainedByGrain(poundsOfGrain) {
    return poundsOfGrain * 0.2;
  },

  /**
   * Calculate the rate of evaporation for a boil
   * @param {number} evaporationPerHour estimated rate, default of 5%
   * @param {number} boilHours e.g. 1.5 hours
   * @return {number} e.g. 0.925
   */
  evaporationRate(boilHours = 1, evaporationPerHour = 0.05) {
    return 1 - (evaporationPerHour * boilHours);
  },

  // TODO - pH correction

  // ==============================
  // Hops and Bitterness
  // ==============================

  /**
   * Calculate the IBU contribution by a kind of hop
   * @param {number} ouncesOfHops e.g. 1 ounce
   * @param {number} alphaAcidLevel e.g. 0.125 (12.5%)
   * @param {number} hopUtilization e.g. 0.24 (24%) (see Table 9.3)
   * @param {number} gallonsVolume e.g. 6 gallons
   * @param {number} gravityCorrection e.g. 1
   * @return {number} e.g. 37.4 IBU
   */
  calculateIBU(ouncesOfHops, alphaAcidLevel, hopUtilization, gallonsVolume, gravityCorrection = 1) {
    return (ouncesOfHops * hopUtilization * alphaAcidLevel * 7489) / (gallonsVolume * gravityCorrection);
  },

  /**
   * Calculate the weight of hops required to reach a certain IBU
   * @param {number} desiredIBU e.g. 37.4 IBU
   * @param {number} alphaAcidLevel e.g. 0.125 (12.5%)
   * @param {number} hopUtilization e.g. 0.24 (24%) (see Table 9.3)
   * @param {number} gallonsVolume e.g. 6 gallons
   * @param {number} gravityCorrection e.g. 1
   * @return {number} e.g. 1 ounce
   */
  calculateOuncesOfHops(desiredIBU, alphaAcidLevel, hopUtilization, gallonsVolume, gravityCorrection = 1) {
    return (gallonsVolume * gravityCorrection * IBU) / (hopUtilization * alphaAcidLevel * 7489);
  },

  /**
   * Calculate the gravity correction for beers with OG > 1.050
   * @param {number} boilGravity OG of the beer, e.g. 1.054
   * @return {number} e.g. 1.002
   */
  gravityCorrection(boilGravity) {
    if (boilGravity < 1.050) return 1;
    return 1 + ((boilGravity - 1.050) / 2);
  }

};
