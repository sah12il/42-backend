module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63ca5a317e2a63ede3b83a0cc9f25b97'),
  },
});
