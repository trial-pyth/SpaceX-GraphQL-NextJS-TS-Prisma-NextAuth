import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";

const Signin = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState<string>("");

  // console.log(process.env.NEXT_PUBLIC_EMAIL_SERVER_USER);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return false;

    signIn("email", { email, redirect: true });
  };

  if (session) {
    {
      setTimeout(() => {
        router.push("/");
      }, 500);
    }
  }
  return (
    <>
      <Head>
        <title>SpaceX | Signin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          media="screen"
          href="https://fontlibrary.org//face/d-din"
          type="text/css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="w-screen h-16  text-white text-xl fixed top-0 backdrop-blur-sm z-50 
        bg-gradient-to-b from-slate-900 opacity-90"
      >
        <Link href="/">
          <Image
            className="p-0 mr-1 absolute -top-16 left-4"
            src="/static/img/icon.svg"
            alt="library-icon"
            width={180}
            height={100}
          />
        </Link>
      </div>

      <main className="mx-auto h-screen w-[100vw] flex items-center justify-center bg-login_feature bg-no-repeat backdrop-blur-sm opacity-90 object-center object-fill">
        <form
          className="min-w-[400px] w-[400px] max-h-[500px] px-2 rounded-md flex flex-col gap-y-12 items-center justify-center bg-slate-900/95 z-50"
          onSubmit={handleSignIn}
        >
          {session ? (
            <h1 className="text-2xl font-bold tracking-wider mt-11">
              You are already signed in. Redirecting...
            </h1>
          ) : (
            <>
              <h1 className="text-2xl font-bold tracking-wider mt-11">
                Sign in using email
              </h1>
              <label className="inline-block w-2/3">
                <span className="block text-xl tracking-wider font-bold text-white">
                  Email
                </span>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="text-black mt-2 h-10 p-1 w-full text-bold rounded-md"
                  value={email}
                />
              </label>

              <button
                type="submit"
                disabled={email ? false : true}
                className="bg-white font-bold text-black w-2/3 h-7 mb-11 rounded-md disabled:opacity-20
                disabled:cursor-not-allowed
                "
              >
                Sign In
              </button>
            </>
          )}
        </form>
      </main>
    </>
  );
};

export default Signin;