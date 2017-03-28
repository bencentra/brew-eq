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
   * 7.1 - SRM Values and Beer Color (in SRM)
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
  },

  // ==============================
  // Hops and Hops Bitterness
  // ==============================

  /**
   * 9.2 - Common Hop Varieties and Their Typical Alpha Acid Levels (in percent)
   */
  ALPHA_ACID: {
    'crystal': {
      low: 2,
      high: 4.5,
    },
    'czech saaz':{
      low: 3,
      high: 4.5
    },
    'polish lublin': {
      low: 3,
      high: 4.5
    },
    'french strisselspalt': {
      low: 3,
      high: 5
    },
    'liberty': {
      low: 3,
      high: 5
    },
    'german hallertau hersbruck': {
      low: 3,
      high: 5.5
    },
    'spalt (u.s.)': {
      low: 3,
      high: 6
    },
    'german tettnanger': {
      low: 3.5,
      high: 5.5
    },
    'german hallertau mittelfruh': {
      low: 3.5,
      high: 5.5
    },
    'hallertau (u.s.)': {
      low: 3.5,
      high: 5.5
    },
    'hersbrucker (u.s.)': {
      low: 3.5,
      high: 5.5
    },
    'tettnanger (u.s.)': {
      low: 4,
      high: 5
    },
    'english east kent golding': {
      low: 4,
      high: 5.5
    },
    'english fuggle': {
      low: 4,
      high: 5.5
    },
    'fuggle': {
      low: 4,
      high: 5.5
    },
    'german spalt': {
      low: 4,
      high: 5.5
    },
    'german spalt select': {
      low: 4,
      high: 6
    },
    'willamette': {
      low: 4,
      high: 6
    },
    'saaz (u.s.)': 4.25,
    'slovene styrian golding': {
      low: 4.5,
      high: 6
    },
    'cascade': {
      low: 4.5,
      high: 7
    },
    'huller bitterer': {
      low: 4.5,
      high: 7
    },
    'german hallertau tradition': {
      low: 5,
      high: 7
    },
    'english progress': {
      low: 5,
      high: 7.5
    },
    'mt. hood': {
      low: 5,
      high: 8
    },
    'brewer\'s gold': {
      low: 5.5,
      high: 8.5
    },
    'cluster': {
      low: 5.5,
      high: 8.5
    },
    'bullion': {
      low: 6,
      high: 9
    },
    'english wye challenger': {
      low: 6.5,
      high: 8.5
    },
    'perle': {
      low: 7,
      high: 9.5
    },
    'australian pride of ringwood': {
      low: 7,
      high: 10
    },
    'hallertau northern brewer': {
      low: 7,
      high: 10
    },
    'super styrians': {
      low: 8,
      high: 10
    },
    'centennial': {
      low: 8,
      high: 10
    },
    'english wye target': {
      low: 9.5,
      high: 11.5
    },
    'eroica': {
      low: 9.5,
      high: 13
    },
    'chinook': {
      low: 12,
      high: 14
    },
    'galena': {
      low: 12,
      high: 14
    },
    'nugget': {
      low: 12,
      high: 14
    },
    'columbus': {
      low: 14,
      high: 16
    }
  }

};
