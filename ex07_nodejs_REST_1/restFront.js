async function getUser() { // 로딩 시 사용자 가져오는 함수
  try {
    const res = await axios.get('/users');
    const users = res.data;
    const list = document.getElementById('list');
    result = "user name = "
    Object.keys(users).map(function(key){
      result = result + users[key] + ",";
    });
    list.innerHTML = result;
  }catch (err){
    console.error(err);
  }

}
 
// 폼 제출(submit) 시 실행
document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();  // 디폴트로 존재하는 'submit'이벤트 핸들러는 작동하지 않게 함. 
  const name = e.target.username.value; // 이벤트가 발생한 form의 username의 value 
  try {
    await axios.post('/user', { name });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.username.value = '';
});
