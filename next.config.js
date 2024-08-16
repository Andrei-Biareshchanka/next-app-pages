import withPlugins from 'next-compose-plugins';
import svgr from '@svgr/webpack';

const nextConfig = {
  images: {
		domains: ['courses-top.ru', 'old-images.hb.ru-msk.vkcs.cloud']
	},
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default withPlugins([], nextConfig);