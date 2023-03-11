// Подписывается на события, отправленные нативным клиентом
vkBridge.subscribe((e) => console.log(e)); 
    
// Отправляет событие нативному клиенту
vkBridge.send("VKWebAppInit", {});      


function GetName(id_fromc2) {
vkBridge.send('VKWebAppGetUserInfo', {
  user_id: id_fromc2
  })
  .then((data) => { 
    if (data.id) {
	  return data.last_name;
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
}

