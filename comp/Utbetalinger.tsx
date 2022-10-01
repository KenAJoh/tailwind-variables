import { Next } from "@navikt/ds-icons";

export const Utbetalinger = () => (
  <div className="m-panel-grid mt-10">
    <div className="rounded-lg bg-surface-decorative-1">
      <a
        href="#"
        className="p-6 flex  justify-between rounded-lg max-w-md hover:bg-surface-hover h-full"
      >
        <div className="flex flex-col h-full">
          <div className="text-xl font-semibold">Siste utbetaling</div>
          <div className="mb-4 text-3xl">3 212 kr</div>
          <div className="mt-auto">
            <div className="text-sm text-muted">4. februar</div>
            <div>Barnetrygd</div>
          </div>
        </div>
        <Next aria-hidden className="text-2xl self-end" />
      </a>
    </div>
    <div className="p-6 grid gap-3 rounded-lg max-w-md bg-surface-neutral-subdued">
      <div className="font-semibold">Totalt i år</div>
      <div className="grid gap-2">
        <div className="w-3/4 bg-data-blue-moderate rounded h-6" />
        <div className="w-1/3 bg-data-blue-subtle rounded h-6" />
      </div>
      <div>64 232 kr</div>
    </div>
  </div>
);
