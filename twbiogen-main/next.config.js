/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.im.ge'],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://samasat.com/",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://samasat.com/",
        permanent: false,
      },
    ];
  },
};