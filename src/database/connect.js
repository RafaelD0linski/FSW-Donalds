const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cursonodejs.5y16kxc.mongodb.net/database?appName=CursoNodejs`
    );

    console.log("🍃 Conexão com o MongoDB realizada com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
    process.exit(1); // encerra a aplicação se a conexão falhar
  }
};

module.exports = connectToDatabase;
