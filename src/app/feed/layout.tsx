import { ReactNode } from "react";

interface IFeedLayout {
  children: ReactNode;
  modal: ReactNode;
}

export default function Layout({ children, modal }: IFeedLayout) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
