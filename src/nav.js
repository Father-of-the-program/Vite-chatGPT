import spider from "../public/spider.png";
const nav = () => {
  return `
     <nav class="container flex justify-between items-center mx-auto py-4">
     <button class="font-semibold text-2xl text-white cursor-pointer hover:bg-[#424242] transition-colors duration-100 rounded-md px-4 py-2">ChatGPT</button>
     <button class="border border-dashed rounded-full border-white p-1">
        <img src="${spider}" class="size-8 rounded-full object-cover">
     </button>
     </nav>

  `;
};

export default nav;
