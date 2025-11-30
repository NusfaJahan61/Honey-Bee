const Footer = () => {
  return (
    <div class=" capitalize bg-[#D69604] flex flex-col  h-120 *:text-black ">
      <div class="w-3/4 m-auto mb-10 mt-20 flex justify-between">
        <div class="">
          <h1 class="font-bold uppercase text-[20px] tracking-widest">Communicate</h1>
          <button class="hover:bg-[#9EAAA1] px-10 py-2 hover:text-zinc-900 rounded-md my-5 border border-[#B5C3BD] active:bg-[#B5C3BD] bg-transparent text-zinc-100 duration-400">send e-mail</button>
          <p><a href="#" class="hover:underline duration-500 font-bold">Sign up</a> to receive special offers!</p>
          <div class="flex pt-5 gap-5 *:rounded-full">
            <div class="size-10 bg-zinc-200"></div>
            <div class="size-10 bg-zinc-200"></div>
            <div class="size-10 bg-zinc-200"></div>
          </div>
        </div>
        <div class="flex gap-10">
          <div class="w-50 flex flex-col gap-5">
            <h1 class="font-bold uppercase text-[18px] tracking-widest">contact us</h1>
            <p class="text-[14px]">DFO Office, Sundarbans East Forest Division, Khulna, Bangladesh
            </p>
            <p>+44 20 7722 0088</p>
            <p>honeybee@gmail.com</p>
          </div>
          <div class="w-50 flex flex-col gap-1">
            <h1 class="font-bold uppercase text-[18px] tracking-widest">category</h1>
            <p>decor</p>
            <p>furniture</p>
            <p>lighting</p>
            <p>interior design</p>
            <p>Arcticture design</p>
            <p>commercial design</p>
          </div>
          <div class="w-50 flex flex-col gap-1">
            <h1 class="font-bold uppercase text-[18px] tracking-widest">company</h1>
            <p>about us</p>
            <p>services</p>
            <p>contact us</p>
            <p>portfolio</p>
            <p>delevery</p>
            <p>blog</p>
          </div>
        </div>
      </div>
      <hr class="w-3/4 m-auto my-0" />
      <div class="w-3/4 m-auto my-5 flex justify-between">
        <div class="block text-4xl font-bold text-[#F9FDFB]">Luxurio</div>
        <div class="">
          <a class="block" href="#">Privacy policy</a>
          <a class="" href="#">Terms and conditions</a>
        </div>
      </div>
    </div>
  )
}

export default Footer