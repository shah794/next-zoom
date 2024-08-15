import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/pakistan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hello, My name is Saqlain Raza, I am from Rahim yar khan.
        I have done my graduation from Islamia University of Bahawalpur in 2013. Now am running my own business.
        and also giving my sevices as a freelancers in AI and web developer.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Saqlain Raza
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Business owner, Syed farms Ryk
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
