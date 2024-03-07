/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects:async()=> {
    return [
      {
        source:'/',
        destination:'/login',
        permanent:false
      }
    ]
  },
  images: {
    // domains: ['i.ibb.co','res.cloudinary.com','lh3.googleusercontent.com'],
    domains: ['media.istockphoto.com','freepngimg.com','e7.pngegg.com','encrypted-tbn0.gstatic.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
