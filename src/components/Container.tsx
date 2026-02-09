import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="max-w-6xl mx-auto px-6 py-12">{children}</div>;
}
