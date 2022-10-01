import { Next } from "@navikt/ds-icons";

export const Varsler = () => (
  <div className="m-panel-grid">
    <div className="bg-surface rounded-lg">
      <a
        href="#"
        className="p-6 flex items-center justify-between rounded-lg max-w-md bg-surface hover:bg-surface-hover"
      >
        <div className="flex gap-4">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26" r="26" className="fill-surface-warning-subdued" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 16L34 16V36H18L18 16ZM16 16C16 14.8954 16.8954 14 18 14L34 14C35.1046 14 36 14.8954 36 16V36C36 37.1046 35.1046 38 34 38H18C16.8954 38 16 37.1046 16 36L16 16ZM18.9568 20.3747L20.5431 19.1566L21.1909 20.0003L23.5724 17.6071L24.9901 19.0179L20.9965 23.031L18.9568 20.3747ZM31 22L25 22V20L31 20V22ZM25 27L31 27V25H25V27ZM31 32L25 32L25 30L31 30L31 32ZM23 26C23 26.5523 22.5523 27 22 27C21.4477 27 21 26.5523 21 26C21 25.4477 21.4477 25 22 25C22.5523 25 23 25.4477 23 26ZM22 32C22.5523 32 23 31.5523 23 31C23 30.4477 22.5523 30 22 30C21.4477 30 21 30.4477 21 31C21 31.5523 21.4477 32 22 32Z"
              className="fill-icon-warning"
            />
          </svg>

          <div>
            <div className="text-xl font-semibold">Oppgaver</div>
            <div>Du har 2 uløste oppgaver</div>
          </div>
        </div>
        <Next aria-hidden className="text-2xl" />
      </a>
    </div>
    <div className="bg-surface rounded-lg">
      <a
        href="#"
        className="p-6 flex items-center justify-between rounded-lg max-w-md bg-surface hover:bg-surface-hover"
      >
        <div className="flex gap-4">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26" r="26" className="fill-surface-info-subdued" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 19L36 19V20.7639L26 25.7639L16 20.7639V19ZM14 19C14 17.8954 14.8954 17 16 17L36 17C37.1046 17 38 17.8954 38 19V22V32C38 33.6569 36.6569 35 35 35H17C15.3431 35 14 33.6569 14 32L14 22V19ZM16 23L16 32C16 32.5523 16.4477 33 17 33H35C35.5523 33 36 32.5523 36 32V23L26 28L16 23Z"
              className="fill-icon-info"
            />
          </svg>

          <div>
            <div className="text-xl font-semibold">Innboks</div>
            <div>Du har 3 uleste meldinger</div>
          </div>
        </div>
        <Next aria-hidden className="text-2xl" />
      </a>
    </div>
  </div>
);
