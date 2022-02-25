module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '31f9cd630ad19e6f36b53ff4f7139a65'),
  },
});
