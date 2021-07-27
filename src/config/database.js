module.exports = {
  dialect: 'postgres',
  host: '0.0.0.0',
  username: 'postgres',
  password: 'docker',
  database: 'sistema',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
