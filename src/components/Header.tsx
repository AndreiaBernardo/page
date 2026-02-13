export const Header = () => {
  return (
    <main >

        <div className="text-center mt-10 font-bold text-4xl italic text-emerald-950 "> 
            <h1>Floricultura Flores do Bosque</h1>
        </div>

      
            <div className=" principal min-h-screen flex w-full flex-col items-center justify-center bg-[url('/image/Crisântemo.jpg')] bg-cover bg-no-repeat bg-center mt-20 px-4">
      
            <div className=" text-white items-center justify-center text-center w-11/12 md:w-3/4 lg:w-1/2 ">
              <p className="font-semibold  mb-10 underline underline-offset-8 text-2xl md:text-3xl ">Venha surpreender quem você ama!</p>
      
              <h2 className="font-extrabold font-[Inter] text-4xl md:text-5xl">Arranjos e buquês personalizados pela Flores do Bosque
              </h2>
              <p className="font-semibold text-lg md:text-2xl p-5">Buquês personalizados para cada momento especial, arranjos florais feitos à mão com flores selecionadas escolhidas uma a uma para impressionar. O presente ideal para aniversários, datas especiais e declarações.</p>
      
              <button className="bg-pink-700 p-3 rounded-3xl font-bold w-60"><a href="https://whatsapp.com" className="flex items-center gap-2"><img className="w-5 h-5" src="./image/seta.png" alt="" />Confira nosso catálogo</a></button>
      
              </div>
      
      
            </div>
      

      <div className="mt-20  text-emerald-950 text-center w-1/2 mx-auto">
        <h3 className="text-3xl font-bold mb-5">🌿 Conheça nossas diversidades de produtos</h3>
        <p>A Flores do Bosque oferece uma ampla variedade de flores selecionadas com cuidado para garantir a mais alta qualidade e beleza em cada arranjo.</p>
</div>

      <div className="imagem grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center mx-auto max-w-4xl">
        <div className=" flex flex-col items-center">
          <img src="/image/buque colorido.jpg" alt="Buque Colorido" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Buquês coloridos</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/girassol.jpg" alt="Girassol" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Girassol</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/rosa.jpg" alt="Rosa" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Rosa</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/buque rosa.jpg" alt="Buque Rosa" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Buque Rosa</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/rosa amarela.jpg" alt="Rosa Amarela" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Rosa Amarela</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/tulipa.jpg" alt="Tulipa" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Tulipa</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/decora.jpg" alt="Decoração" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Vaso de flores</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/jacinto.jpg" alt="Jacinto" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Jacinto</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/lirio.jpg" alt="Lírio" className="w-full h-auto object-cover rounded-lg shadow-md" />
          <p className="mt-2 font-semibold">Lírio</p>
        </div>
      </div>

    <div className=" text-center w-1/2 mx-auto mt-20 text-emerald-950 mb-20">
     <h3 className="text-3xl font-bold mb-5">🌿 Qualidade e cuidado</h3>


<p>Trabalhamos com flores frescas e de alta qualidade todos os dias.

Flores naturais tratadas com cuidado do cultivo à entrega.

Garantimos beleza, frescor e durabilidade em cada arranjo.</p>

<div className="bloco grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
  <div className="flex flex-col items-center">
    <img src="/image/cuidado.jpg" alt="Cuidado com flores" className="w-full h-auto object-cover rounded-lg shadow-md" />
  </div>
  <div className="flex flex-col items-center">
    <img src="/image/cartaz.jpg" alt="Cartaz de promoção" className="w-full h-auto object-cover rounded-lg shadow-md" />
  </div>
  <div className="flex flex-col items-center">
    <img src="/image/laranja.jpg" alt="Laranja de flores" className="w-full h-auto object-cover rounded-lg shadow-md" />
  </div>
</div>
    </div>

    </main>
  )
}