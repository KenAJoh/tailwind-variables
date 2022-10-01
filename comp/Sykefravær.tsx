import { Next } from "@navikt/ds-icons";
import Link from "next/link";

export const Sykefravær = () => (
  <div className="m-panel-grid">
    <div className="rounded-lg bg-surface-neutral-subdued ">
      <Link href="#" passHref>
        <a className="ring-subtle p-6 flex items-center justify-between rounded-lg max-w-md hover:bg-surface-neutral-subdued-hover">
          <div>
            <div className="text-xl font-semibold">100% sykmeldt</div>
            <div className="mb-3">Posten Norge, Avdeling Nydalen Oslo</div>
            <div className="text-sm flex items-center rounded-sm px-[6px] h-6 bg-surface-success-subdued w-fit">
              21.8.2022–30.8.2022
            </div>
          </div>
          <Next aria-hidden className="text-2xl self-end" />
        </a>
      </Link>
    </div>
    <div className="rounded-lg bg-surface-neutral-subdued">
      <Link href="#" passHref>
        <a className="ring-subtle p-6 flex items-center justify-between rounded-lg max-w-md hover:bg-surface-neutral-subdued-hover">
          <div>
            <div className="text-xl font-semibold">70% sykmeldt</div>
            <div className="mb-3">Rema 1000 AS, Avdeling Sandvika</div>
            <div className="flex items-center text-sm rounded-sm px-[6px] h-6 bg-surface-neutral-moderate w-fit">
              16.8.2022–30.8.2022
            </div>
          </div>
          <Next aria-hidden className="text-2xl self-end" />
        </a>
      </Link>
    </div>
  </div>
);
