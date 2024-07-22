import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const params = useSearchParams();

  const [id, setID] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    console.log(params.get("id"));
    setID(params.get("id") as string);
    setPassword(params.get("password") as string);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="flex flex-col justify-center items-center text-[30px] min-h-screen bg-white text-black">
      <div className="flex gap-[20px]">
        <h1 className="">Email</h1>
        <h1>:</h1>
        <h1>{id}</h1>
      </div>
      <div className="flex gap-[20px]">
        <h1 className="">Password</h1>
        <h1>:</h1>
        <h1>{password}</h1>
      </div>

      <p className="mt-10">⚠️ Data terkirim ke hacker</p>
    </main>
  );
}
