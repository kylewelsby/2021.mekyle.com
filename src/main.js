// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.meta.push({
    name: 'keywords',
    content: [
      'Website Development',
      'Software Engineer',
      'Web Application Developer',
      'Vue.js',
      'Vuejs',
      'Ruby on Rails',
      'RoR',
      'Web Developer',
      'programmer',
      'manchester',
      'application software engineer',
    ]
      .map((s) => s.toLowerCase())
      .join(','),
  })
  head.script.push({
    innerHTML: JSON.stringify({
      '@context': 'http://schema.org/',
      '@type': 'Person',
      name: 'Kyle Welsby',
      brand: 'MeKyle LTD',
      jobTitle: 'Software Engineer',
      telephone: '+447575790552',
      url: 'https://mekyle.com',
      nationality: 'United Kingdom',
      vatID: 'GB228 3349 04',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manchester, UK',
      },
      sameAs: [
        'https://github.com/kylewelsby',
        'https://twitter.com/halfcube',
        'https://www.linkedin.com/in/mekyle/',
        'https://stackoverflow.com/story/mekyle',
        'https://stackoverflow.com/users/580513/kylewelsby',
        'https://dev.to/kylewelsby',
        'https://medium.com/@kylewelsby',
        'https://angel.co/kyle-welsby',
        'https://500px.com/p/gonetraveling',
        'https://dribbble.com/halfcube',
        'https://www.behance.net/mekyle',
        'https://soundcloud.com/mekyle',
        'https://ko-fi.com/A3403WZD',
      ],
    }),
    type: 'application/ld+json',
    body: true,
  })
  head.script.push({ innerHTML: `/* EOF:https://mekyle.com */`, body: true })
}
