function fio(l,n,f){
    return l +" " + n[0] +'.' + f[0]+'.'
  
  }
  console.log(fio('Ivanov','Ivan','Ivanovich'))
  
  
  
  
  
  let count = 0
  
  function rec(){
  console.log(count)
    count++
    if(count>9){
    return count
  }
  rec()
  }
  rec()
  
  
  
  
  
  
  function formula1 (greenLight){
    return function(go){
      console.log(greenLight+go)
    }
  }
  const rush = formula1('on ')
  console.log(rush('start'))
  
  
  
  
  
  
  
  
  let fio2 = (l,n,f) =>`${l} ${n[0]}.${f[0]}.`
  console.log(fio2('Ivanov','Ivan','Ivanovich'))
  
  
  
  
  function admin(l,n,f, password){
   if( fio2(l,n,f) == 'Ivanov I.I.'
    && password == 12345){
   return console.log( 'Доступ открыт! Добро пожаловть Директор Иванов И.И.')
   } else{
    console.log('Доступ закрыт Вы не Директор!')
   }
  }
  
  console.log(admin('Ivanov', 'Ivan', 'Ivanovich',12345))
  
  
  
  function info (lastName){
    return function(name){
      return function(fatherName){
        return  `${lastName} ${name[0]}.${fatherName[0]}.`
  
      }
    }
  }
  const fullName = info('Ivanov')('Ivan')('Ivanivich')
  console.log(fullName)