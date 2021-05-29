function cep_format(cep: any[]){
    const cep_str = cep.toString()
    const cep_size = cep_str.length;
    
    if(cep_size==8){
        return `${cep_str[0]}${cep_str[1]}${cep_str[2]}${cep_str[3]}${cep_str[4]}-${cep_str[5]}${cep_str[6]}${cep_str[7]}`
    }

}

export default cep_format;