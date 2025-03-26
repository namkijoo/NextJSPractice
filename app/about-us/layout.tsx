export const metadata = {
  title: "Home | Next Movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS is gread!
    </div>
  );
}
