import { LoginForm } from "@/composite-components/login-form";
import { Header } from "@/core-components";

export default function ConfirmationSuccessPage() {
  return (
    <main className="flex h-full items-center justify-center gap-10">
      <div className="w-[500px] rounded-xl border bg-primary pb-3">
        <div className="flex w-full justify-center border-b-2 border-slate-700 p-2">
          <Header color="dark">Login</Header>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
