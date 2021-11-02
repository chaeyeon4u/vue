import axios from "axios";

function join(user){//user = {id:xxx, name:xxx, password:xxx, role:xxx, email:xxx}
  return axios.post(
    "/member/join2",
    {
      mid: user.id,
      mname: user.name,
      mpassword: user.password,
      mrole: user.role,
      memail: user.email
    }
  );
}

function login(user){
  return axios.post(
    "/member/login1",
    `mid=${user.id}&mpassword=${user.password}`,
  )
}

export default {
  join,
  login
}