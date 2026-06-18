import type { Review } from './types'

/**
 * Featured guest reviews for the home page. These are real Google reviews,
 * lightly cleaned (no em dashes, trimmed filler). Do not fabricate counts or
 * stars. Headline stats supported by the source: 5.0 average, 80+ five-star
 * reviews, 10+ years in business.
 */
export const featuredReviews: Review[] = [
  {
    name: 'Shilpi Sharma',
    rating: 5,
    date: '9 months ago',
    service: 'Manicure',
    text: 'From the moment you walk in, the atmosphere is warm, welcoming, and spotless clean. The staff are not only skilled but also incredibly kind and attentive. Their nail work is flawless, the polish lasts, and they are amazing with both classic and trendy designs. If you are looking for a place where professionalism meets artistry, this is it.',
  },
  {
    name: 'Cheldyn Chrisagis',
    rating: 5,
    date: '5 months ago',
    service: 'Acrylic nails',
    text: 'Hannah did a fantastic job on my nails, looks just like my inspo pic. 10/10 recommend her and definitely coming back to her. She is super talented and gentle!',
  },
  {
    name: 'Michele Cooper',
    rating: 5,
    date: '10 months ago',
    service: 'Manicure, Dip',
    text: 'Love getting my pedicures and manicures here. The owners are very friendly and my nail polish lasts a lot longer than other nail salons. The pedicure bowl is cleaned right after use, towels are always clean, and the sinks and bathroom are always very clean.',
  },
  {
    name: 'Angeleah Wood',
    rating: 5,
    date: '3 months ago',
    service: 'Acrylic nails, Pedicure',
    text: 'It was my first time. The pedicure was relaxing and my nail artist Hannah was the best. She made sure I liked my nails each step and she is serious about designing on nails. She can do anything and everything.',
  },
  {
    name: 'Yamileth Domingo',
    rating: 5,
    date: '9 months ago',
    service: 'Manicure, Pedicure',
    text: 'My fiancee and I have been coming here for 4 years! It is always a great experience with Anna and her family. Would definitely recommend.',
  },
  {
    name: 'Peyton P.',
    rating: 5,
    date: '9 months ago',
    service: 'Gel X',
    text: 'I got Gel X and they are the best. Super quick and amazing shape.',
  },
  {
    name: 'Shayla Jones',
    rating: 5,
    date: '9 months ago',
    service: 'Acrylic nails, Pedicure',
    text: 'This is a very great nail spa to come to. It is a husband and wife working hard together to get the job done! The place has been newly remodeled. It is very clean and welcoming.',
  },
  {
    name: 'Abby Schraeder',
    rating: 5,
    date: '8 months ago',
    service: 'Pedicure',
    text: 'Open on Sunday. Amazing service, beautiful inside, and the pedicure was perfect. Thank you.',
  },
]
