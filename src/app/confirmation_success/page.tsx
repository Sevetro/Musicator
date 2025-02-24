import { LoginForm } from "@/composite-components/login-form";
import { Header, Text } from "@/core-components";

export default function ConfirmationSuccessPage() {
  return (
    <main className="flex h-full items-center justify-center gap-10">
      <div className="absolute top-20 flex w-[500px] flex-col items-center gap-1 rounded-xl border bg-slate-900 py-3">
        <Header color="light">Confirmation success!</Header>
        <Text color="light">
          You email has been confirmed, you may now login into the app.
        </Text>
      </div>

      <div className="w-[500px] rounded-xl border bg-primary pb-3">
        <div className="flex w-full justify-center border-b-2 border-slate-700 p-2">
          <Header color="dark">Login</Header>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
