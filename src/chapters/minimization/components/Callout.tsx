import type { ReactNode } from "react";

export function Callout({
  emoji = "💡",
  children,
}: {
  emoji?: string;
  children: ReactNode;
}) {
  return (
    <div className="callout">
      <span className="emoji" aria-hidden>
        {emoji}
      </span>
      <p>{children}</p>
    </div>
  );
}

export function Theorem({
  label,
  proof = false,
  children,
}: {
  label: string;
  proof?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`theorem${proof ? " proof" : ""}`}>
      <div className="lab">{label}</div>
      {children}
    </div>
  );
}
