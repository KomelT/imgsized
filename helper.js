require("dotenv").config();

function checkEnv(envName, defaultValue, unit) {
  if (process.env[envName]) console.log(`- ${envName} Exists!`);
  else {
    process.env[envName] = defaultValue;
    console.log(
      `- IMGSIZED_MAX_UPLOAD_SIZE Is missing! Now is: ${process.env[envName]} ${unit}`
    );
  }
}

function randomStr(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  checkEnv: checkEnv,
  randomStr: randomStr,
};
