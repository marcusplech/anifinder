export default function AnimeLoading() {
  return (
    <div className="min-h-screen pb-10">
      <div className="relative z-[997]">
        <div className="mt-[-58px] min-h-[220px] [height:min(42vh,420px)] bg-slate-300 max-[760px]:mt-0 max-[760px]:h-[200px]">
          <div className="h-full w-full bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(30,27,75,0.35)_45%,rgba(15,23,42,0.88)_100%)]" />
        </div>
        <div className="relative border-b border-indigo-500/10 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_48%,#eef2f7_100%)]">
          <div className="mx-auto grid min-h-[220px] w-full min-w-[320px] max-w-[1140px] animate-pulse grid-cols-[215px_minmax(0,1fr)] gap-x-8 px-[50px] max-[760px]:grid-cols-1 max-[1540px]:px-[30px] min-[1540px]:max-w-[1520px] min-[1540px]:px-[100px]">
            <div className="-mt-[125px]">
              <div className="mt-4 h-[303px] w-[215px] max-w-full rounded-[10px] bg-slate-200 max-[760px]:h-40 max-[760px]:w-28" />
            </div>
            <div className="flex flex-col gap-3 pt-6">
              <div className="h-6 w-2/5 rounded bg-slate-200" />
              <div className="mt-3 h-16 w-full rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
