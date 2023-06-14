"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useEffect } from "react";

interface IModal {
  children: ReactNode;
}

export default function Modal({ children }: IModal) {
  const { back } = useRouter();
  const onPressEsc = useCallback(
    (e: KeyboardEvent) => {
      console.log(e);
      if (e.code === "Escape" || e.key === "Escape") {
        back();
      }
    },
    [back]
  );

  useEffect(() => {
    window.addEventListener("keydown", onPressEsc);

    // cleanup function
    return () => window.removeEventListener("keydown", onPressEsc);
  }, [onPressEsc]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop:blur-3xl z-50">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        {children}
      </div>
    </div>
  );
}
