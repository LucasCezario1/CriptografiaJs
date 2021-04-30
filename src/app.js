const {promises} = require("fs")



async function run(){
  const fileTarget = 'super-secure-file.text.enc'
  console.log('writing file to: ', fileTarget)
  
  const text = `Comeando o processo de 🔓 :  ${new Date().toISOString()}`
  await promises.writeFile(fileTarget , text)
  console.log('descript context: ' , (await (await promises.readFile(fileTarget)).toString()))
  console.log("Termino do processo de 🔐 ")
}


module.exports = { run}