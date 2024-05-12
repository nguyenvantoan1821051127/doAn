const { Sequelize } = require('sequelize');

// Khởi tạo kết nối với CSDL PostgreSQL
const sequelize = new Sequelize('doAn-v3', 'postgres', '123456',{
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  });
  
  const connectDatabase=async()=>{
      try {
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
        } catch (error) {
          console.error('Unable to connect to the database:', error);
        }
  }
  export default connectDatabase