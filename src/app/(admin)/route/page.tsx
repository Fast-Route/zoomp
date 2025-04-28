import Content from "./_components/Content";
import Header from "./_components/Header";

function Page() {

  return (
    <main className='bg-primary/30 w-full h-svh flex flex-col lg:px-[740px]'>
      <Header />
      <Content />
    </main>
  );
}

export default Page;