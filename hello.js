// // Подписывается на события, отправленные нативным клиентом
// vkBridge.subscribe((e) => console.log(e)); 
    
// // Отправляет событие нативному клиенту
// vkBridge.send("VKWebAppInit", {});      


// function GetName(id_fromc2) {
// vkBridge.send('VKWebAppGetUserInfo', {
  // user_id: id_fromc2
  // })
  // .then((data) => { 
    // if (data.id) {
	  // document.getElementById("c2canvas").c2runtime.all_global_vars[23].data = data.last_name;
    // }
  // })
  // .catch((error) => {
    // // Ошибка
    // console.log(error);
  // });
// }

function GetName(id_from_c2, tkn) {
	var script = document.createElement('SCRIPT');
	script.src = "https://api.vk.com/method/users.get?user_ids="+str(id_from_c2)+"&fields=nickname&access_token="+str(tkn)+"&v=5.131&callback=callbackFunc";
	document.getElementsByTagName("head")[0].appendChild(script);
	function callbackFunc(result) {
	return result.response[0].first_name;
	}
}