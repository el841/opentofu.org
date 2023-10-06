import React from "react";
import Button from "../Button";
import PatternBg from "../PatternBg";
import Headline from "../Headline";

export default function Hero() {
  return (
    <header className="flex flex-col items-center py-10 md:py-20 px-6 md:px-16 mx-auto">
      <PatternBg />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1379.34 75.47"
        className="max-w-[380px] mb-6"
      >
        <path
          d="M71.9 1.2h45.3v4.6h-20v52.5h-5.4V5.8H71.9V1.2ZM122.5 1.2h5.4V26h33.9V1.2h5.4v57.1h-5.4V30.6H128v27.7h-5.4V1.2h-.1ZM178.9 1.2h39.4v4.6h-34v20.6h31.8V31h-31.8v22.6h34.4v4.6h-39.8v-57ZM520.4 1.2h36.2v4.6h-30.8v20.6h27.4V31h-27.4v27.2h-5.4v-57ZM587.3 0c17.9 0 26.9 14.1 26.9 29.8s-9 29.8-26.9 29.8-27-14.1-27-29.8c.1-15.7 9-29.8 27-29.8Zm0 54.9c15 0 21.4-12.6 21.4-25.1s-6.4-25.1-21.4-25.1-21.5 12.6-21.5 25.1 6.4 25.1 21.5 25.1ZM622.1 1.2h5.4v35.4c0 13.2 6.2 18.3 16.7 18.3S661 49.8 661 36.6V1.2h5.4v36.6c0 11.8-6.3 21.8-22.2 21.8S622 49.6 622 37.8V1.2h.1ZM677.4 1.2h6.1l33.3 48.3h.2V1.2h5.4v57.1h-6.1L683 10h-.2v48.3h-5.4V1.2ZM733.8 1.2h19.8c17.3.4 26.2 9.7 26.2 28.6s-9 28.2-26.2 28.6h-19.8V1.2Zm5.5 52.5h11.6c16.4 0 23.5-6.8 23.5-23.9s-7.1-23.9-23.5-23.9h-11.6v47.8ZM805.3 1.2h6.1l22.4 57.1H828l-7-17.8h-26l-6.9 17.8h-5.8l23-57.1Zm-8.6 34.7h22.5l-11-29.3-11.5 29.3ZM827.4 1.2h45.3v4.6h-19.9v52.5h-5.4V5.8h-19.9V1.2h-.1ZM878.5 1.2h5.4v57.1h-5.4V1.2ZM919.8 0c17.9 0 26.9 14.1 26.9 29.8s-9 29.8-26.9 29.8-27-14.1-27-29.8 9-29.8 27-29.8Zm0 54.9c15 0 21.4-12.6 21.4-25.1s-6.4-25.1-21.4-25.1-21.5 12.6-21.5 25.1c-.1 12.4 6.3 25.1 21.5 25.1ZM955 1.2h6.1l33.3 48.3h.2V1.2h5.4v57.1h-6.1L960.6 10h-.2v48.3H955V1.2ZM233.8 1.2h17.5v42.3h25.2v14.6h-42.7V1.2ZM287.9 1.2h17.5v56.9h-17.5V1.2ZM318.5 1.2h17.9L353 31.6h.2V1.2h16.6v56.9h-17L335.2 27h-.2v31.1h-16.6V1.2h.1ZM434.5 36.1c0 15.9-8.4 23.3-25.9 23.3s-26-7.5-26-23.3V1.2h17.5v31c0 5.7-.1 13.1 8.5 13.1s8.3-7.3 8.3-13.1v-31h17.5v34.9h.1ZM462.3 27.8 443.6 1.2h20.5l8.6 15.5 8.4-15.5h19.4L482.4 28l20.3 30.1h-21.1l-9.7-17-10 17h-20.1l20.5-30.3Z"
          className="fill-gray-900 dark:fill-gray-50"
        />
        <path
          d="M11.4 46.9V24.1H0v34.2h34.3V46.9H11.4z"
          className="fill-gray-900 dark:fill-gray-50"
        />
        <path
          d="M57.1 1.2H0v17.1h11.4v-5.6h34.3v34.2H40v11.4h17.1V1.2z"
          className="fill-gray-900 dark:fill-gray-50"
        />
        <path
          d="M1067.11 18.97c0 5.66-1.92 10-5.77 13.01-3.84 3.02-9.29 4.52-16.34 4.52h-9.05v24.18h-4.08V2.16h14.33c13.93 0 20.9 5.61 20.9 16.82Zm-31.15 14.01h8.05c6.59 0 11.36-1.09 14.29-3.26 2.94-2.18 4.4-5.71 4.4-10.59 0-4.51-1.39-7.85-4.16-10.03-2.78-2.18-7.07-3.26-12.89-3.26h-9.69v27.14ZM1079 35.19v25.5h-4.08V2.16h13.93c7.26 0 12.62 1.34 16.09 4.02 3.47 2.68 5.2 6.72 5.2 12.11 0 3.92-1.03 7.23-3.1 9.93-2.07 2.7-5.21 4.63-9.43 5.81l15.89 26.66h-4.88l-15.09-25.5H1079Zm0-3.52h11.17c4.94 0 8.77-1.1 11.49-3.3s4.08-5.45 4.08-9.75-1.34-7.7-4-9.73c-2.67-2.03-7.02-3.04-13.05-3.04H1079v25.82ZM1176.96 31.35c0 9.29-2.55 16.64-7.66 22.04-5.11 5.4-12.15 8.11-21.14 8.11s-15.99-2.7-21.1-8.11c-5.11-5.4-7.66-12.78-7.66-22.12s2.58-16.65 7.73-22c5.15-5.35 12.19-8.03 21.12-8.03s16.02 2.69 21.1 8.07c5.08 5.38 7.62 12.73 7.62 22.04Zm-52.67 0c0 8.38 2.05 14.86 6.17 19.44 4.11 4.58 10.01 6.87 17.7 6.87s13.68-2.27 17.77-6.81c4.1-4.54 6.14-11.04 6.14-19.5s-2.05-14.9-6.14-19.4c-4.1-4.5-9.99-6.75-17.68-6.75s-13.57 2.27-17.73 6.81c-4.16 4.54-6.23 10.98-6.23 19.34ZM1181.32 75.47c-2.46 0-4.47-.36-6.05-1.08v-3.52c2.08.53 4.07.8 5.97.8 6.46 0 9.69-3.52 9.69-10.57V2.16h4.08v58.53c0 9.85-4.56 14.77-13.69 14.77ZM1243.17 60.69h-31.99V2.16h31.99v3.76h-27.91v22.14h26.34v3.76h-26.34v25.1h27.91v3.76ZM1276.49 5c-7.34 0-13.12 2.35-17.34 7.05-4.22 4.7-6.33 11.13-6.33 19.3s1.99 14.84 5.97 19.46c3.98 4.62 9.66 6.93 17.06 6.93 4.91 0 9.42-.63 13.53-1.88v3.6c-3.87 1.36-8.7 2.04-14.49 2.04-8.22 0-14.69-2.66-19.42-7.97-4.72-5.31-7.09-12.73-7.09-22.26 0-5.95 1.13-11.2 3.38-15.73 2.26-4.54 5.5-8.04 9.73-10.51 4.23-2.47 9.15-3.7 14.75-3.7s10.82 1.07 15.33 3.2l-1.64 3.68c-4.27-2.14-8.76-3.2-13.45-3.2ZM1319.33 60.69h-4.12V6h-19.02V2.16h42.16V6h-19.02v54.69ZM1379.34 45.6c0 4.88-1.8 8.76-5.38 11.61-3.59 2.86-8.36 4.28-14.31 4.28-7.15 0-12.64-.79-16.46-2.36v-4.08c4.22 1.79 9.59 2.68 16.13 2.68 4.8 0 8.61-1.1 11.43-3.3 2.82-2.2 4.22-5.09 4.22-8.67 0-2.22-.47-4.05-1.4-5.51-.93-1.45-2.46-2.78-4.56-3.98-2.11-1.2-5.2-2.5-9.29-3.88-5.98-2.05-10.11-4.28-12.39-6.67-2.28-2.39-3.42-5.57-3.42-9.55 0-4.38 1.71-7.95 5.14-10.71 3.43-2.76 7.84-4.14 13.23-4.14s10.66 1.04 15.49 3.12l-1.48 3.52c-4.86-2.03-9.5-3.04-13.93-3.04s-7.77 1-10.33 3-3.84 4.72-3.84 8.17c0 2.16.39 3.94 1.18 5.32.79 1.39 2.07 2.64 3.86 3.74 1.79 1.11 4.86 2.44 9.21 3.98 4.56 1.58 7.99 3.1 10.29 4.58 2.3 1.48 3.97 3.16 5.02 5.04 1.05 1.88 1.58 4.16 1.58 6.83Z"
          className="fill-[#0094ff]"
        />
      </svg>
      <Headline className="sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        The open source infrastructure as code tool.
      </Headline>
      <p className="my-6 text-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center text-gray-600 dark:text-gray-500">
        Previously named OpenTF, OpenTofu is a fork of Terraform that is
        open-source, community-driven, and managed by the Linux Foundation.
      </p>

      <div className="flex gap-4 pt-6">
        <Button className="text-center" variant="secondary" href="/manifesto">
          Read Manifesto
        </Button>
        <Button
          variant="primary"
          href="https://github.com/opentofu/opentofu/releases/latest"
        >
          Try it out
        </Button>
      </div>
    </header>
  );
}
