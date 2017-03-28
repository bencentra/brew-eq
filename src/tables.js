/**
 * Tables of useful brewing info
 * @module src/tables
 */
module.exports = {

  // ==============================
  // Calculating the mash bill
  // ==============================

  /**
   * 5.1 - Extract Potential of Fermentable Materials (in GU)
   */
  EXTRACT_POTENTIALS: {
    standard: {
      'chocolate/black/roast': {
        low: 25,
        high: 30
      },
      'crystal/cara': {
        low: 33,
        high: 35
      },
      'munich/vienna/mild/biscuit': {
        low: 35,
        high: 36
      },
      'pale/pilsener': {
        low: 35,
        high: 37
      }
    },
    other: {
      'corn': {
        low: 37,
        high: 39
      },
      'oats': 33,
      'rye (malted)': 29,
      'wheat (malted)': {
        low: 37,
        high: 40
      },
      'wheat/rye (unmalted)': 36
    },
    kettle: {
      'cane sugar': 46,
      'corn sugar': 37,
      'dry extract': 45,
      'honey': {
        low: 30,
        high: 35
      },
      'liquid extract': {
        low: 37,
        high: 39
      },
      'maple syrup': 30,
      'molasses': 36
    }
  },

  // ==============================
  // Beer Color
  // ==============================

  /**
   * 7.1 - SRM Values and Beer Color
   */
  BEER_COLOR: {
    'very pale': {
      low: 2,
      high: 3
    },
    'pale': {
      low: 3,
      high: 4
    },
    'gold': {
      low: 5,
      high: 6
    },
    'amber': {
      low: 6,
      high: 9
    },
    'deep amber/light copper': {
      low: 10,
      high: 14
    },
    'copper': {
      low: 14,
      high: 17
    },
    'deep copper/light brown': {
      low: 17,
      high: 18
    },
    'brown': {
      low: 19,
      high: 22
    },
    'dark brown': {
      low: 22,
      high: 30
    },
    'very dark brown': {
      low: 30,
      high: 35
    },
    'black': {
      low: 30,
      high: 40
    },
    'black (opaque)': {
      low: 40,
      high: 50
    }
  }

};
