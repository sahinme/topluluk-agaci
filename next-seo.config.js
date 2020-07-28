const title = 'Hep Beraber Sallıyoruz | Saalla ';
const description =
  'Saalla, insanların ilgi alanlarına göre sallayabildikleri topluluk ağıdır. İlgilendiğiniz toplulukları bulun ve çevrimiçi bir topluluğun parçası olun!';

const SEO = {
  title,
  description,
  canonical: 'https://saalla.com',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://saalla.com',
    title,
    description,
    images: [
      {
        url: 'https://saalla.com/brand.jfif',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@saalla',
    site: '@saalla',
    cardType: 'summary_large_image'
  }
};

export default SEO;
