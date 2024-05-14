import Link from 'next/link'
import Footer from '../components/footer/footer'

const page = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col justify-between'>
      <div className="md:mt-8 sticky top-2 z-20">
        <header className='m-auto w-[300px] md:w-[608px] h-[70px] rounded-[30px] bg-[#131313] backdrop-blur bg-opacity-85'>
          <div className='flex md:justify-between justify-center items-center w-full h-full space-x-4'>
            <div className='flex items-center font-semibold text-sm md:ml-4 md:mr-4'>
              <Link href='/' className=''>skrodrigo</Link>
            </div>
            <div className='flex items-center font-semibold md:space-x-8 space-x-4 text-sm justify-center '>
              <ul className="flex justify-end pr-4 space-x-4 md:space-x-8 ">
                <li>
                  <Link href='/projetos'>Projetos</Link>
                </li>
                <li>
                  <Link href='/contatos' className='text-[#2563EB] '>Contato</Link>
                </li>
                <li>
                  <Link href='/xp'>XP/Educação</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>

      <section>

      <div className='flex flex-col items-center justify-center  space-y-8'>
        <span className='text-5xl font-semibold md:text-6xl'>Contatos</span>
        <p className='text-center mx-5'>Se sinta a vontade para entrar em <b>contato</b> comigo, estou disponivel em
          todas as redes <b>socias</b>.  </p>
      </div>

      <div className='md:flex md:flex-col lg:grid lg:grid-cols-2 justify-center items-center w-[300px] md:w-[760px] mt-16 mx-auto'>
        
        <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-3 py-3 space-y-2 font-semibold ">
        <span>Email</span>
        <span className='underline  text-[#2563EB]'>rodrigoa0987@gmail.com</span>
        </div>

        <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-3 py-3 space-y-2 font-semibold ">
        <span>Linkedln</span>
        <span className='underline  text-[#2563EB]'>linkedin.com/in/skrodrigo</span>
        </div>
        
        <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-3 py-3 space-y-2 font-semibold ">
        <span>Telefone</span>
        <span className='underline  text-[#2563EB]'>+55 88 9 9274-4891</span>
        </div>

        <div className="flex flex-col items-center justify-center border-2 mb-14 border-[#232323] rounded-3xl w-[300px] px-3 py-3 space-y-2 font-semibold ">
        <span>GitHub</span>
        <span className='underline  text-[#2563EB]'>github.com/skrodrigo</span>
        </div>

      </div>

      </section>

      <Footer />
    </div>
    </>
  )
}

export default page