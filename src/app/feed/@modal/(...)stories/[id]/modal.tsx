"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useEffect, useRef } from "react";

interface IModal {
  children: ReactNode;
}

export default function Modal({ children }: IModal) {
  const { back } = useRouter();
  const overlayRef = useRef<null | HTMLDivElement>(null);

  const onPressEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Escape" || e.key === "Escape") {
        back();
      }
    },
    [back]
  );

  const handleClickOnOverlay = useCallback(
    (e: MouseEvent) => {
      const eventTarget = e.target as HTMLDivElement | null;

      if (eventTarget!.id === "modal_overlay") {
        back();
      }
    },
    [back]
  );

  useEffect(() => {
    const overlay = overlayRef.current;
    window.addEventListener("keydown", onPressEsc);
    overlay?.addEventListener("click", handleClickOnOverlay);

    // cleanup function
    return () => {
      window.removeEventListener("keydown", onPressEsc);
      overlay?.removeEventListener("click", handleClickOnOverlay);
    };
  }, [onPressEsc, handleClickOnOverlay]);

  return (
    <>
      <div
        ref={overlayRef}
        id="modal_overlay"
        className="fixed inset-0 bg-black/50 backdrop:blur-3xl z-40"
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center z-50">
        {children}
      </div>
    </>
  );
}
