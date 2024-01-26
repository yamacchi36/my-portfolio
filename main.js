function updateTime() {
  let text = document.getElementById("clock");

  const openTime = new Date(2024, 0, 26);
  let nowTime = new Date();
  let passedTime = nowTime.getTime() - openTime.getTime(); //経過時間をミリ秒で取得

  let sec = Math.floor((passedTime / 1000) % 60);
  let min = Math.floor((passedTime / 1000 / 60) % 60);
  let hour = Math.floor((passedTime / 1000 / 60 / 60) % 24);
  let day = Math.floor(passedTime / 1000 / 60 / 60 / 24);

  text.textContent = `このサイトは開設してから${day}日${hour}時間${min}分${sec}秒経過しました！`;
}

setInterval(updateTime, 1000);
