import "./style.css";
import nav from "./nav";
import chat from "./chat";
import { marked } from "marked";
document.querySelector("#app").innerHTML = `
  <main class=" min-h-dvh bg-[#212121] flex flex-col items-center justify-center">
    ${nav()}
  <section class="flex-1 w-full flex flex-col items-center justify-center">
    <div id="chat_content" class="w-full mb-5">
    
    </div>
      ${chat()}
  </section>
  </main>
`;
const form1 = document.getElementById("form1");
const area1 = document.getElementById("area1");
const button1 = document.getElementById("button1");
const chat_content = document.getElementById("chat_content");
form1.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (area1.value.length < 2) return;
  button1.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg>`;
  button1.disabled = true;
  button1.classList.add("pointer-events-none");
  const url = "https://chatgpt-42.p.rapidapi.com/deepseekai";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "599bc33c66mshebfd6b901490c28p18bb2djsnb801a661ef39",
      "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: area1.value,
        },
      ],
      web_access: false,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const chatdiv = document.createElement("div");
    chatdiv.innerHTML = `
<div class="flex flex-col-reverse gap-9 md:grid md:grid-cols-2 max-w-4xl mx-auto w-full">
 <h1 class="text-lg md:text-xl text-white  p-1 border-l-2 border-l-gray-500">${
   area1.value
 }</h1>
   <div></div>
   <div></div>

   <div class="bg-[#2F2F2F] p-3 rounded-2xl prose prose-invert">
       ${marked.parse(result.result)}
    </div>
  
</div>`;

    chat_content.append(chatdiv);
    button1.innerHTML = "Send";
    button1.disabled = false;
    button1.classList.remove("pointer-events-none");
    area1.value = "";
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
