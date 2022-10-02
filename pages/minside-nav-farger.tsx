import type { NextPage } from "next";
import { Varsler } from "../comp/Varsler";
import { Themebutton } from "../comp/Themebutton";
import { Sykefravær } from "../comp/Sykefravær";
import { Pengestøtte } from "../comp/Pengestøtte";
import { Utbetalinger } from "../comp/Utbetalinger";

const Minside: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen gap-4 relative py-16 bg-surface">
      <Themebutton v="v2" />
      <div className="m-hero py-9 m-layout-inner">
        <h1 className="text-muted mb-2 text-3xl text-[32px] font-semibold">
          NAV farger
        </h1>
        <h1 className="text-muted mb-2 text-3xl text-[32px] font-semibold">
          God morgen
        </h1>
        <h2 className="text-3xl text-[32px] font-semibold">Isac Norland</h2>
      </div>
      <div className="pt-6 pb-10 bg-surface-decorative-warm">
        <div className="m-layout-inner">
          <h2 className="mb-3 text-2xl font-semibold">Varsler</h2>
          <Varsler />
        </div>
      </div>
      <div className="m-layout-inner py-12">
        <h2 className="mb-3 text-2xl font-semibold">Sykefravær</h2>
        <Sykefravær />
        <h2 className="mb-3 mt-12 text-2xl font-semibold">Utbetalinger</h2>
        <Utbetalinger />
      </div>
      <div className="py-12 bg-surface-decorative-positive">
        <div className="m-layout-inner">
          <div className="mb-3 flex justify-between">
            <h2 className="text-2xl font-semibold">
              Mine pengestøtter og tjenester / saker
            </h2>
            <a className="underline">Se alle</a>
          </div>
          <Pengestøtte />
        </div>
      </div>
      <div className="h-32 bg-surface">
        <div className="m-layout-inner"></div>
      </div>
    </div>
  );
};

export default Minside;
