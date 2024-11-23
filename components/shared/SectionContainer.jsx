"use client";

export default function SectionContainer({
  children,
  className = "",
  darkBg = false,
}) {
  return (
    <section
      className={`py-20 ${
        darkBg
          ? "bg-gray-50 dark:bg-black border-t border-b border-gray-100 dark:border-gray-800"
          : ""
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
