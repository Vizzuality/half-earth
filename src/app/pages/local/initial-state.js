export default {
  layers: [],
  billboards: [
    // These ids are co-dependent with the popUp.content ids change accordingly
    {
      id: 0,
      coordinates: [22.54351616, -19.07886918],
      url: 'img/billboard/01_01.png',
      urlHover: 'img/billboard/01_01-hover.png'
    },
    {
      id: 1,
      coordinates: [22.68887043, -19.33414618],
      url: 'img/billboard/02_01.png',
      urlHover: 'img/billboard/02_01-hover.png'
    },
    {
      id: 2,
      coordinates: [22.91130066, -19.45817589],
      url: 'img/billboard/03_01.png',
      urlHover: 'img/billboard/03_01-hover.png'
    },
    {
      id: 3,
      coordinates: [22.76802778, -19.5840516],
      url: 'img/billboard/04_01.png',
      urlHover: 'img/billboard/04_01-hover.png'
    },
    {
      id: 4,
      coordinates: [22.88422108, -19.13450538],
      url: 'img/billboard/05_01.png',
      urlHover: 'img/billboard/05_01-hover.png'
    },
    {
      id: 5,
      coordinates: [23.07403564, -19.27485063],
      url: 'img/billboard/06_01.png',
      urlHover: 'img/billboard/06_01-hover.png'
    }
  ],
  popUp: {
    open: false,
    selected: null,
    content: {
      // These ids are co-dependent with the billboard ids change accordingly
      0: {
        id: 0,
        type: 'image',
        background: 'img/popup/03_NationalGeographic_2435343.png',
        description:
          'People living in the Okavango Delta use narrow boats called mokovo to navigate the waterways of this oasis.',
        attribution: 'National Geographic',
        watermark: 'img/natgeo.png'
      },
      1: {
        id: 1,
        type: 'image',
        background:
          'img/popup/02_NG_Okavango_Wilderness_Project_credit_Chris_Boyes.png',
        description: 'A whole world exists beneath the surface',
        attribution: 'Chris Boyes',
        watermark: 'img/natgeo.png'
      },
      2: {
        id: 2,
        type: 'image',
        background: 'img/popup/06_NationalGeographic_2444856.png',
        description:
          'Lit by starlight alone, the Okavango Delta is paradise for both stargazers and nocturnal creatures.',
        attribution: 'National Geographic',
        watermark: 'img/natgeo.png'
      },
      3: {
        id: 3,
        type: 'image',
        background: 'img/popup/05_NationalGeographic_2435021.png',
        description:
          'Great care must be taken by people navigating the Okavango Delta as hippos could be hidden beneath the surface.',
        attribution: 'National Geographic',
        watermark: 'img/natgeo.png'
      },
      4: {
        id: 4,
        type: 'image',
        background: 'img/popup/04_Okavango_steve_w_elephant_mombo_2_JKydd.png',
        description:
          "The Okavango Delta is a safe stronghold for Botswana's large elephant population.",
        attribution: 'James Kydd',
        watermark: 'img/natgeo.png'
      },
      5: {
        id: 5,
        type: 'image',
        background:
          'img/popup/01_NG_Okavango_Wilderness_Project_credit_James_Kydd.png',
        description: 'Where water flows, life grows.',
        attribution: 'James Kydd',
        watermark: 'img/natgeo.png'
      }
    }
  },
  birds: [
    {
      pixelSize: 18,
      colorBlendMode: 1,
      colorBlendAmount: 1,
      separationFactor: 3,
      crop: false,
      // position: [18.4196, -17.3312],
      position: [20.065122, -17.794145],
      targets: [
        [23.201735, -18.302562],
        [23.223064, -18.818436],
        [22.867807, -19.054048],
        [22.249646, -19.275385],
        [22.522715, -19.798506]
      ],
      north: -17.3312,
      south: -20.273157,
      east: 24.031766,
      west: 21.395792,
      numBirds: 50
    }
  ]
}
