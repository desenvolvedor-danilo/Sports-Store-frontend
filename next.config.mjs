/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "platform-lookaside.fbsbx.com",
            pathname: "**",
            port:'',
            search: ''
          },
          // {
          //   protocol:'https',
          //   hostname: 'scontent-bsb1-1.xx.fbcdn.net',
          //   pathname:'**',
          //   port:'',
          //   search: ''    
          // },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8080',
            pathname: '/files/**',
            search: '',
          },
          {
            protocol:"https",
            hostname: "lh3.googleusercontent.com",
            search: ''
          },
             
          
        ],
      }
};


export default nextConfig;
