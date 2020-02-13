module.exports = {
  apps : [{
    name: 'backend',
    script: 'npm start',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '3.6.179.25',
      ref  : 'origin/master',
      repo : 'https://github.com/visshnu-78/jabong--backend.git',
      path : '/var/www/backend',
      'post-deploy' : 'npm install && npx sequelize-cli db:migrate --env production && npx sequelize-cli db:seed:all --env production && pm2 reload ecosystem.config.js --env production'
    }
  }
};
