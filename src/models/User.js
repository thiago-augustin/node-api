import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    birthDate: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    number: {type: String, required: true},
    complement: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    zipCode: {type: String, required: true}
  },
  {
    versionKey: false
  }
)

userSchema.methods.isValid = function(){
  let pass = validatePass(this.password);
  let cpf = validateCPF(this.cpf);
  let email = validateEmail(this.email);
  let age = validateAge(this.birthDate);
  let date = validateDate(this.birthDate);
  let zip = validateZipCode(this.zipCode);
  let state = validateState(this.state);
  console.log(pass);
  console.log(cpf);
  console.log(email);
  console.log(age);
  console.log(date);
  console.log(zip);
  console.log(state);
  if(pass == false || cpf == false || email == false || age == false || date == false || zip == false || state == false){
    return false;
  }else{
    return true;
  }
}

function validateCPF(cpf) {
    return /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(cpf);
}

function validateDate(birthDate) {
  return /([0-9]{2}[\/]?[0-9]{2}[\/]?[0-9]{4})/.test(birthDate);
}

function validatePass(pass) {
  if(pass.length > 6){
    return true;
  }else {
    return false;
  }
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validateAge(birthDate) {
  let dia_nascimento = birthDate.slice(0,2);
  let mes_nascimento = birthDate.slice(3,5);
  let ano_nascimento = birthDate.slice(-4)
  let data_atual = new Date();
  let dia_atual = data_atual.getDate();
  let mes_atual = data_atual.getMonth()+1;
  let ano_atual = data_atual.getFullYear();


  let idade = ano_atual - ano_nascimento;
    if (mes_atual < mes_nascimento || mes_atual == mes_nascimento && dia_atual < dia_nascimento) {
      idade--;
    }

    if(idade >= 18){
      return true;
    }else {
      return false;
    }
}

function validateZipCode(zipCode) {
  return /([0-9]{5}[\-]?[0-9]{3})/.test(zipCode);
}

function validateState(state) {
  if(state.length == 2){
    return true;
  }else {
    return false;
  }
}

const users = mongoose.model("users", userSchema)

export default users;