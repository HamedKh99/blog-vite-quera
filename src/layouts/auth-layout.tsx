export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-white w-3/4 border border-solid border-black rounded p-2">
      <div className="flex-1 flex bg-blue-700 h-96 rounded justify-center items-center">
        <h1 className="text-6xl text-white">کوئراگرام</h1>
      </div>

      <div className="flex-1 flex flex-col justify-between items-center pt-2">
        {children}
      </div>
    </div>
  );
}
