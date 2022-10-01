import { Next } from "@navikt/ds-icons";
import { FIcon } from "./ForeldrepengerIkon";

export const Pengestøtte = () => (
  <div className="m-panel-grid">
    <div className="rounded-lg bg-surface ">
      <a
        href="#"
        className="ring-subtle p-6 flex  justify-between rounded-lg max-w-md hover:bg-surface-hover h-full"
      >
        <div className="flex flex-col h-full">
          <div className="text-xl font-semibold">Foreldre- og svangerskapspenger</div>
          <div className="text-muted mb-3">Sist endret 12. februar 2022</div>
          <div className="uppercase text-sm flex items-center rounded-sm px-[6px] h-6 bg-surface-warning-subdued w-fit mt-auto">
            Under behandling
          </div>
        </div>
        <FIcon />
        <Next aria-hidden className="text-2xl self-end" />
      </a>
    </div>
    <div className="gap-3 grid">
      <div className="bg-surface rounded-lg">
        <a
          href="#"
          className="ring-subtle p-6 flex items-center justify-between rounded-lg max-w-md bg-surface hover:bg-surface-hover"
        >
          <div className="flex gap-4">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" className="fill-surface-success-subdued" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28 14L35 21V38H17L17 14L28 14ZM26 16L19 16L19 36H33V22L26 22V16ZM29 31V33H21V31L29 31ZM31 27V29H21L21 27H31ZM27 23V25H21V23H27ZM28 16.83V20L31.17 19.999L28 16.83Z"
                className="fill-icon-success"
              />
            </svg>

            <div>
              <div className="text-xl font-semibold">Barnetrygd</div>
              <div className="text-muted">Sist endret 25. februar 2022</div>
            </div>
          </div>
          <Next aria-hidden className="text-2xl" />
        </a>
      </div>
      <div className="bg-surface rounded-lg">
        <a
          href="#"
          className="ring-subtle p-6 flex items-center justify-between rounded-lg max-w-md bg-surface hover:bg-surface-hover"
        >
          <div className="flex gap-4">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" className="fill-surface-success-subdued" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28 14L35 21V38H17L17 14L28 14ZM26 16L19 16L19 36H33V22L26 22V16ZM29 31V33H21V31L29 31ZM31 27V29H21L21 27H31ZM27 23V25H21V23H27ZM28 16.83V20L31.17 19.999L28 16.83Z"
                className="fill-icon-success"
              />
            </svg>

            <div>
              <div className="text-xl font-semibold">Årsregnskap</div>
              <div className="text-muted">Sist endret 6. januar 2022</div>
            </div>
          </div>
          <Next aria-hidden className="text-2xl" />
        </a>
      </div>
    </div>
  </div>
);
