import Image from "next/image";

export default function Hero() {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 gap-10 sm:items-center">
      <div className="py-8 lg:py-28">
        <div className="mx-auto  text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
            Get your tasks done with Tasky Its free and easy to use
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8 gap-3 flex flex-col lg:flex-row">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Image
        alt="Violin"
        src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        height={500}
        width={500}
      />
    </section>
  );
}
