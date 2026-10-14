const allProducts = [
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570586/astrologer-ys/luvgui5crgnkj6yktoay.png',
    heading: 'Santan Gopal Yantra',
    content:
      'For couples who are childless or whose children are frequently ill.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570554/astrologer-ys/zwdjqusdae2yusiorvj5.png',
    heading: 'Mangal Pooja Yantra',
    content:
      'For those who have Mangal Dosha in their horoscope or whose Lagnesh is the planet Mars.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570563/astrologer-ys/wabaxu0fcjtocgoctrhe.png',
    heading: 'Vyapar Vriddhi Yantra',
    content:
      'For those who face constant obstacles in their business, or whose business is going slow.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570598/astrologer-ys/zw43qnulwweti6m5yqmu.png',
    heading: 'Aadya Shakti Visha Yantra',
    content: 'For those who have Kuldevi Dosha in their house, or whose Kuldevi is not awakened.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570591/astrologer-ys/vm8wjxdvjhhvtzphwlpu.png',
    heading: 'Pitru Dosh Nivaran Yantra',
    content: 'For the peace of those who have Pitru Dosh in their house, whose ancestors are unsatisfied.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570586/astrologer-ys/eskknong29hhilwftojl.png',
    heading: 'Mangaldev Poojan Yantra',
    content:
      'For those who have Mangal Dosha in their horoscope or whose Lagnesh is the planet Mars.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570618/astrologer-ys/bzs3crdacry8dkmqieqi.png',
    heading: 'Navagraha Mahayantra',
    content: 'To pacify all the planets.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570623/astrologer-ys/pwkfhiw5ry5en9q1ljok.png',
    heading: 'Rahudev Poojan Yantra',
    content: 'For those who have Rahu Dosha in their horoscope.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570614/astrologer-ys/nyiunb48jldsyczeomom.png',
    heading: 'Grah Dosh Nivaran Vastu Chakra Yantra',
    content: 'For those who have Vastu Dosha in their house.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570603/astrologer-ys/rotcxcbqmcinl7wq1gca.png',
    heading: 'Shri Maruti Yantra',
    content: 'For those who have obstacles from ghosts and spirits in their house.',
    buttonTxt: 'Buy Now ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570597/astrologer-ys/locoes3spg7122mw8zdi.png',
    heading: 'Rahu - Gomedak',
    content: 'For those who have Rahu Dosha in their horoscope or are undergoing Rahu Dasha.',
    buttonTxt: 'Order Now',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570599/astrologer-ys/iscxf1o0hfr8or9esq4a.png',
    heading: 'Ketu - Vaidurya',
    content:
      'For those who are undergoing Ketu Dasha in their horoscope, or whose Lagnesh is Ketu.',
    buttonTxt: 'Order Now',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570606/astrologer-ys/jjzfnplddbab8kaomem2.png',
    heading: 'Chandra Moti',
    content:
      'For those whose Lagnesh is Moon in their horoscope or are undergoing Chandra Mahadasha.',
    buttonTxt: 'Order Now',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570604/astrologer-ys/utsf3mguataajeftzbvk.png',
    heading: 'Surya - Manik',
    content:
      'For those whose Lagnesh is Sun in their horoscope or are undergoing Surya Mahadasha.',
    buttonTxt: 'Order Now',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570606/astrologer-ys/msrhaxb6cz89q9lyrubn.png',
    heading: 'Mangal - Moonga',
    content: 'For those who have Mangal Dosha in their horoscope or whose zodiac gem is Mars.',
    buttonTxt: 'Order Now',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570607/astrologer-ys/pxebknq2kpv4k3rtwors.png',
    heading: 'Budh - Panna',
    content:
      'For those whose zodiac planet is Mercury in their horoscope, or are undergoing Budh Mahadasha.',
    buttonTxt: 'Order Now',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570617/astrologer-ys/ta5lctrzlvjbahnjhoog.png',
    heading: 'Guru - Pukhraj',
    content:
      'For those whose zodiac planet is Jupiter in their horoscope, or are undergoing Guru Mahadasha.',
    buttonTxt: 'Order Now',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570609/astrologer-ys/uphs0bxlr8t8fzmxpuka.png',
    heading: 'Shukra - Heera',
    content:
      'For those whose zodiac planet is Venus in their horoscope, or are undergoing Shukra Mahadasha.',
    buttonTxt: 'Order Now',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570614/astrologer-ys/ydukwwj49wxc72aht5qs.png',
    heading: 'Shani - Neelam',
    content:
      'For those whose zodiac planet is Saturn in their horoscope, or are undergoing Shani Sade Sati.',
    buttonTxt: 'Order Now',
  },
];

export { allProducts };