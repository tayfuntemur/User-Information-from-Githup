function fetchGitHubUser() {
  const username = document.getElementById("usernameInput").value;
  if (!username) return alert("Lütfen kullanıcı adını girin.");
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(user => {
      if (user.message === "Not Found") {
        document.getElementById("userInfo").innerText = "Kullanıcı bulunamadı.";
        return;
      }
      document.getElementById("userInfo").innerHTML = `
    <img src="${user.avatar_url}" alt="${user.login}'nin fotoğrafı"/>
    <div><strong>İsim:</strong> ${user.name || "Yok"}</div>
    <div><strong>Kullanıcı Adı:</strong> ${user.login}</div>
    <div><strong>GitHub Linki:</strong> <a href="${user.html_url}" target="_blank">Profil</a></div>
    <div><strong>Blog:</strong> ${user.blog || "Yok"}</div>
    <div><strong>Şehir:</strong> ${user.location || "Yok"}</div>
    <div><strong>Email:</strong> ${user.email || "Yok"}</div>
    <div><strong>Takipçi Sayısı:</strong> ${user.followers}</div>
    <div><strong>Takip Edilen:</strong> ${user.following}</div>
    `;
    })
    .catch(error => alert("Bir hata oluştu."));
}
