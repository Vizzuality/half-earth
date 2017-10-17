export default {
  layers: [],
  billboards: [
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
      0: {
        id: 0,
        type: 'image',
        background:
          'img/popup/01_NG_Okavango_Wilderness_Project_credit_James_Kydd.jpg',
        description: 'Where water flows, life grows.'
      },
      1: {
        id: 1,
        type: 'image',
        background:
          'img/popup/02_NG_Okavango_Wilderness_Project_credit_Chris_Boyes.jpg',
        description:
          'A whole world exists beneath the surface / With water comes life'
      },
      2: {
        id: 2,
        type: 'image',
        background: 'img/popup/03_NationalGeographic_2435343.jpg',
        description:
          'People living in the Okavango Delta use narrow boats called mokovo to navigate the waterways of this oasis. Great care must be taken when travelling in a mokovo as hippos could be hidden beneath the surface.'
      },
      3: {
        id: 3,
        type: 'image',
        background: 'img/popup/04_Okavango_steve_w_elephant_mombo_2_JKydd.jpg',
        description:
          "The Okavango Delta is a safe stronghold for Botswana's large elephant population."
      },
      4: {
        id: 4,
        type: 'image',
        background: 'img/popup/05_NationalGeographic_2435021.jpg',
        description:
          'Humans traveling by mokovo have to watch out for and avoid hippos wallowing in the mud.'
      },
      5: {
        id: 5,
        type: 'image',
        background: 'img/popup/06_NationalGeographic_2444856.jpg',
        description:
          'Lit by starlight alone, the Okavango Delta is paradise for both stargazers and nocturnal creatures.'
      }
    }
  }
}
