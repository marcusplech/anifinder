import Image from "next/image";

const SignupContent = () => (
  <div className="p-0">
    <div className="w-full overflow-hidden rounded-t-[14px]">
      <Image
        src="https://kitsu.io/images/register-head-b2efe1b5bc270b0166c83217a0aecf22.png"
        alt=""
        width={400}
        height={120}
        className="h-auto w-full rounded-t-[14px]"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <div className="px-4 pb-4">
      <h4 className="mt-3 text-lg font-semibold text-slate-900">Aviso</h4>
      <div className="my-4 font-[family-name:var(--font-overpass),sans-serif] text-[13px] text-slate-900">
        Este é apenas um <span className="font-bold text-red-600">projeto pessoal</span>. Ainda não
        está totalmente funcional — talvez no futuro, se sobrar tempo. Este modal foi inspirado em
        um app que curto. Para mais informações:{" "}
        <span className="font-bold text-red-600">mplechdev@gmail.com</span>
      </div>
    </div>
  </div>
);

export default SignupContent;
