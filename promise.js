const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const feeling = (await promiseTheaterIXX()).concat(
      await promiseTheaterVGC()
    );
    return feeling.filter((f) => f.hasil === emosi).length;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  promiseOutput,
};
