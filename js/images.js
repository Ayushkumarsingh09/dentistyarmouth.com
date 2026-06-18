/** Real Integrity Dental media from dentistyarmouth.com (Wix CDN) */
export function wixImage(id, width, height, options = '') {
  const suffix = options ? `,${options}` : '';
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${width},h_${height},al_c,q_85,usm_0.66_1.00_0.01${suffix}/${id}`;
}

export const images = {
  logo: wixImage('66d6ae_369aee8b7cfa46e4aa31a91352d1b9e6~mv2.png', 400, 340),
  logoSmall: wixImage('66d6ae_369aee8b7cfa46e4aa31a91352d1b9e6~mv2.png', 120, 100),
  hero: wixImage('66d6ae_f407b2e25eda4eff91e9015bb888f20c~mv2.png', 2400, 1400),
  drJPortrait: wixImage('66d6ae_ddc033209a784f8a86bf0a180ec4d236~mv2.jpg', 1200, 1400),
  drJCinematic: wixImage('66d6ae_863e50b4432049aa8ef536319f4a69eb~mv2.jpg', 1400, 1600),
  drJAlt: wixImage('66d6ae_7a5a4cf11a39461ea90e9c1acd9a1593f000.jpg', 1000, 1200),
  jonathanPrak: wixImage('66d6ae_b021de5538ab4f7094f08a43f5d3d029~mv2.jpg', 800, 1000),
  officeGallery: [
    wixImage('66d6ae_a9a636a09b564a83be6e47ba4ae0aa95~mv2.jpg', 1200, 800),
    wixImage('66d6ae_1d5231f329b24376a4d545179bfb227af000.jpg', 1200, 800),
    wixImage('66d6ae_7a218fa515294daea2583fb5d945f18ef000.jpg', 1200, 800),
    wixImage('66d6ae_0387bd3f4508443282cf80d2ff5134e9~mv2.jpg', 1200, 800),
    wixImage('66d6ae_1ac5770f56124c1eb9ef7dbed3fa9b97~mv2.jpg', 1200, 800),
    wixImage('66d6ae_27ce69b8ea234a30b975613648952764~mv2.jpg', 1200, 800),
    wixImage('66d6ae_315612f37f3e4ae4b01788c463ccce9c~mv2.jpg', 1200, 800),
    wixImage('66d6ae_3c95bcb1e24740afaca04a38e2f1c3d2~mv2.jpg', 1200, 800),
    wixImage('66d6ae_554236a14b19438ba1440c2086003703~mv2.jpg', 1200, 800),
    wixImage('66d6ae_57e963c7385a46edb1ffe26f32cce488~mv2.jpg', 1200, 800),
    wixImage('66d6ae_76643d2a98f74b5a9139bc67472bf130~mv2.jpg', 1200, 800),
    wixImage('66d6ae_78b1315a45a74d8495904dd62cfcab49~mv2.jpg', 1200, 800),
  ],
  spa: wixImage('66d6ae_85e78c7f2625431f900c5088eac2e33d~mv2.jpg', 1400, 900),
  comfort: wixImage('66d6ae_98b451e3cb6444419665d53633da9a28~mv2.jpg', 1400, 900),
  services: [
    wixImage('66d6ae_c1bfafef35134208bada16a69bb943dc~mv2.jpg', 800, 600),
    wixImage('66d6ae_c646257b29a04066bbbef9ca836a7a87~mv2.jpg', 800, 600),
    wixImage('66d6ae_cb706765210e46b5925aab71dc229337~mv2.jpg', 800, 600),
    wixImage('66d6ae_d2460c8655284b11ae0edbbdc7a379a3~mv2.jpg', 800, 600),
    wixImage('66d6ae_d42bf112549a4ef093a55d99d5dfc5b7~mv2.jpg', 800, 600),
    wixImage('66d6ae_d605c5c1ae954065ab351141b054c004~mv2.jpg', 800, 600),
  ],
  cta: wixImage('66d6ae_e7eb6a4edf014bf2b9c1a279935f949c~mv2.jpg', 2000, 1200),
  award: wixImage('66d6ae_9ddf00c70b4d4351b56c3d57f242d87e~mv2.png', 400, 400),
};

export const site = {
  name: 'Integrity Dental',
  tagline: 'The Calm Dentistry Experience',
  phone: '(207) 847-0353',
  phoneHref: 'tel:+12078470353',
  email: 'info@smileintegrity.com',
  address: {
    line1: '45 Forest Falls Drive',
    line2: '2nd Floor, Suite B3',
    city: 'Yarmouth, Maine 04096',
  },
  hours: [
    { day: 'Monday', time: '8:00 AM – 5:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Wednesday', time: 'Closed' },
    { day: 'Thursday', time: '8:00 AM – 5:00 PM' },
    { day: 'Friday', time: '8:00 AM – 4:00 PM' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.8!2d-70.19!3d43.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb2a8c8c8c8c8c9%3A0x0!2s45%20Forest%20Falls%20Dr%2C%20Yarmouth%2C%20ME%2004096!5e0!3m2!1sen!2sus!4v1',
};
