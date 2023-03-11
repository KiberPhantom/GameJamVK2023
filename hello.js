// Подписывается на события, отправленные нативным клиентом
bridge.subscribe((e) => console.log(e)); 
    
// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});      
    
// Проверяет, поддерживается ли событие на текущей платформе
if (bridge.supports("VKWebAppResizeWindow")) {
  bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}

function GetName(id_fromc2)
bridge.send('VKWebAppGetUserInfo', {
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