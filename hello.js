// Подписывается на события, отправленные нативным клиентом
vkBridge.subscribe((e) => console.log(e)); 
    
// Отправляет событие нативному клиенту
vkBridge.send("VKWebAppInit", {});      
    
// Проверяет, поддерживается ли событие на текущей платформе
if (vkBridge.supports("VKWebAppResizeWindow")) {
  vkBridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}

function GetName(id_fromc2) {
vkBridge.send('VKWebAppGetUserInfo', {
  user_id: id_fromc2
  })
  .then((data) => { 
    if (data.id) {
      console.log(data);
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
}