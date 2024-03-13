const form = document.querySelector("#login-form");

let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  accessToken = data.access_tokent;

  const infoDiv = document.querySelector("#info");
  infoDiv.innerText = "로그인 성공";

  const btn = document.createElement("button");
  btn.innerText = "상품 가져오기";
  btn.addEventListener("click", async () => {
    const res = await fetch("/items");
    const data = await res.json();
  });
  infoDiv.appendChild(btn);
};

form.addEventListener("submit", handleSubmit);
