import {hash , compare} from 'bcryptjs'


async function hashPassword (password : string){
    const hashedpassword = await hash(password,12)
    return hashedpassword;
}
async function verifyPassword(password:string,hashedpasssword:string){
    const isvalid = await compare(password,hashedpasssword)
    return isvalid;
}