'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import Provider from "./provider";

export default function ButtonSignInOut() {
  const { data: session } = useSession();
  return (
    <>
      <Provider>
        {session ? (
          <>
            <button onClick={() => signOut()}>Sair</button>
          </>
        ) : (
          <>
            <button onClick={() => signIn("google")}>Entrar com google</button>
            <button onClick={() => signIn("github")}>Entrar com Github</button>
          </>
        )}
      </Provider>
    </>
  );
}
