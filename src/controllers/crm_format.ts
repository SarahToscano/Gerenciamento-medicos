function crm_format(crm: any[]){
    const crm_str = crm.toString()

    const crm_size = crm_str.length;
    let str1 : string = "";
    let i=0;
    if(crm_size==7){
        return `${crm_str[0]}${crm_str[1]}.${crm_str[2]}${crm_str[3]}${crm_str[4]}.${crm_str[5]}${crm_str[6]}`
    }

    else{
        for (i = 7; i > (crm_size); i--){
            str1 = str1.concat("0")
            if(i==6 || i==3)
                str1 = str1.concat(".")
        }
        for (i = 0; i < crm_size; i++){
            str1 = str1.concat(crm_str[i].toString())
            if(crm_size ==3 &&  i==0)
                str1 = str1.concat('.')

            if(crm_size==4 && i==1 )
                str1 = str1.concat('.')

            if(crm_size ==5 &&  i==2)
                str1 = str1.concat('.')

            if(crm_size==6 && (i==0 || i==3))
                str1 = str1.concat('.')

            if(crm_size !=5 && crm_size!=6 && crm_size!=3 && i==4) 
                str1 = str1.concat('.')
            
            
        }
        return (`${str1}`)

    }   

}

export default crm_format;