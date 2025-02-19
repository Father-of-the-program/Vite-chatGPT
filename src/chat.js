const chat = () => {
  return `
        <form id="form1" class="mt-auto w-full flex justify-center items-center flex-col gap-y-12">
        <div class="relative max-w-3xl w-full">
        <textarea id="area1" rows="3" class="resize-none bg-[#303030] border-none  outline-none text-white py-3 px-4
        text-lg max-w-3xl w-full rounded-2xl" placeholder="Messsage ChatGPT"></textarea>

        <div class="absolute inset-x-0 bottom-0 p-5 flex justify-end items-center">
            <button id="button1" class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-[#212121]"
            transition-colors duration-150>Send</button>
        </div>
        </div>
        </form>
    `;
};

export default chat;
